import React, { useState, useEffect, useCallback } from "react";
import ContestModal from "../../Components/Modals/ContestModal";
import AddContestantModal from "../../Components/Modals/Contestants";
import { Plus, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "../Contexts/AuthContext";
import ContestItem from "../../Components/ContestItem";
import API_URL from "../../Pages/Constants/Constants";

const Overview = () => {
  const { currentUser, currentUserLoading, isAuthenticated } = useAuth();
  const [contests, setContests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContestantModalOpen, setIsContestantModalOpen] = useState(false);
  const [selectedContestId, setSelectedContestId] = useState(null);
  const [publishedContests, setPublishedContests] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [editingContest, setEditingContest] = useState(null);

  const getAuthHeaders = useCallback(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Authentication token missing");
    }
    return { Authorization: `Bearer ${token}` };
  }, []);

  const calculateWinners = useCallback((contestsData) => {
    return contestsData.map((contest) => {
      const now = new Date();
      const endDate = new Date(contest.endDate);

      if (endDate < now && contest.contestants?.length > 0) {
        const sortedContestants = [...contest.contestants].sort(
          (a, b) => (b.votes || 0) - (a.votes || 0)
        );

        const highestVotes = sortedContestants[0].votes || 0;

        const winners = sortedContestants.filter(
          (contestant) => (contestant.votes || 0) === highestVotes
        );

        const updatedContestants = contest.contestants.map((contestant) => ({
          ...contestant,
          isWinner: winners.some((winner) => winner._id === contestant._id),
        }));

        const sortedUpdatedContestants = [...updatedContestants].sort(
          (a, b) => {
            if (a.isWinner && !b.isWinner) return -1;
            if (!a.isWinner && b.isWinner) return 1;
            return (b.votes || 0) - (a.votes || 0);
          }
        );

        return {
          ...contest,
          contestants: sortedUpdatedContestants,
          hasEnded: true,
        };
      }

      return {
        ...contest,
        contestants: [...(contest.contestants || [])].sort(
          (a, b) => (b.votes || 0) - (a.votes || 0)
        ),
        hasEnded: false,
      };
    });
  }, []);

  const fetchContests = useCallback(async () => {
    try {
      if (!isAuthenticated) {
        console.log("User not authenticated, skipping fetch");
        return;
      }

      setLoading(true);
      const headers = getAuthHeaders();

      const response = await axios.get(`${API_URL}/contests/all`, { headers });
      console.log("Received contests data:", response.data);

      if (response.data?.success) {
        const processedContests = calculateWinners(response.data.data);
        setContests(processedContests);
        const publishedSet = new Set(
          processedContests
            .filter((contest) => contest.isPublished)
            .map((contest) => contest._id)
        );
        setPublishedContests(publishedSet);
      }
    } catch (error) {
      console.error("Fetch contests error:", error);
      toast.error(error.response?.data?.error || "Failed to fetch contests");
    } finally {
      setLoading(false);
    }
  }, [calculateWinners, getAuthHeaders, isAuthenticated]);

  const handlePublishToggle = async (contestId) => {
    const contest = contests.find((c) => c._id === contestId);
    if (!contest?.contestants?.length) {
      toast.error("Contest must have at least one contestant to be published");
      return;
    }

    try {
      const headers = getAuthHeaders();
      const isPublished = !publishedContests.has(contestId);

      const response = await axios.patch(
        `${API_URL}/contests/${contestId}/publish`,
        { isPublished },
        { headers }
      );

      if (response.data.success) {
        setPublishedContests((prev) => {
          const newSet = new Set(prev);
          if (isPublished) {
            newSet.add(contestId);
          } else {
            newSet.delete(contestId);
          }
          return newSet;
        });

        await fetchContests();
        toast.success(
          isPublished ? "Contest published!" : "Contest unpublished"
        );
      }
    } catch (error) {
      console.error("Publish toggle error:", error);
      toast.error(
        error.response?.data?.error || "Failed to update contest status"
      );
    }
  };

  const handleVote = async (contestId, contestantId) => {
    try {
      if (!contestId || !contestantId) {
        toast.error("Invalid contest or contestant ID");
        return;
      }

      const contest = contests.find((c) => c._id === contestId);
      if (contest?.hasEnded) {
        toast.error("This contest has ended");
        return;
      }

      const formattedContestantId = contestantId.toString();

      const objectIdRegex = /^[0-9a-fA-F]{24}$/;
      if (!objectIdRegex.test(formattedContestantId)) {
        toast.error("Invalid contestant ID format");
        return;
      }

      const response = await axios.post(
        `${API_URL}/contests/${contestId}/vote`,
        { contestantId: formattedContestantId },
        {
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },
        }
      );

      if (response.data.success) {
        toast.success("Vote cast successfully!");
        await fetchContests();
      } else {
        throw new Error(response.data.error || "Failed to cast vote");
      }
    } catch (error) {
      console.error("Voting error:", error);
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Failed to cast your vote";
      toast.error(errorMessage);
    }
  };

  const handleDeleteContest = async (contestId) => {
    try {
      const headers = getAuthHeaders();
      await axios.delete(`${API_URL}/contests/${contestId}`, { headers });
      setContests((prev) =>
        prev.filter((contest) => contest._id !== contestId)
      );
      toast.success("Contest deleted successfully");
    } catch (error) {
      console.error("Delete contest error:", error);
      toast.error("Failed to delete contest");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    fetchContests();
  }, [isAuthenticated]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-custom-blue" />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-lvh bg-gray-50 p-6 space-y-6 overflow-auto w-full xl:w-[102rem] 3xl:w-[138rem]">
      <div className="flex items-center justify-between w-full gap-3">
        <h1 className="text-xl font-bold text-gray-800">Overview</h1>
        <button
          onClick={() => {
            setEditingContest(null);
            setIsModalOpen(true);
          }}
          className="bg-custom-blue hover:bg-custom-blue/90 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
        >
          <Plus className="h-4 w-4" />
          Create Contest
        </button>
      </div>

      {contests.length === 0 ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-700">
          No contests found. Create your first contest to get started!
        </div>
      ) : (
        <div className="w-full space-y-8">
          {contests.map((contest) => (
            <ContestItem
              key={contest._id}
              contest={contest}
              formatDate={formatDate}
              handlePublishToggle={handlePublishToggle}
              handleDeleteContest={handleDeleteContest}
              publishedContests={publishedContests}
              setIsContestantModalOpen={setIsContestantModalOpen}
              setSelectedContestId={setSelectedContestId}
              handleVote={handleVote}
            />
          ))}
        </div>
      )}

      <ContestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setContests={setContests}
        editingContest={editingContest}
      />
      <AddContestantModal
        isOpen={isContestantModalOpen}
        onClose={() => setIsContestantModalOpen(false)}
        contestId={selectedContestId}
        setContests={setContests}
        contestStatus={
          contests.find((c) => c._id === selectedContestId)?.isPublished
            ? "Published"
            : "Draft"
        }
      />
    </div>
  );
};

export default Overview;
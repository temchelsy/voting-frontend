import React, { useEffect, useState } from "react";
import ContestantItem from "./ContastantItem";
import axios from "axios";
import API_URL from '../Pages/Constants/Constants';


const ContestItem = ({
  contest,
  formatDate,
  handlePublishToggle,
  handleDeleteContest,
  publishedContests,
  setIsContestantModalOpen,
  setSelectedContestId,
  handleVote,
}) => {
  const [contestants, setContestants] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const fetchContestants = async () => {
    if (!contest || !contest._id) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `${API_URL}/contests/${contest._id}/contestants`
      );
      if (response.data.success) {
        setContestants(response.data.data);
      } else {
        setError("Failed to load contestants.");
      }
    } catch (error) {
      console.error("Error fetching contestants:", error);
      setError("An error occurred while fetching contestants.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const publishedState = localStorage.getItem(
      `contest_${contest._id}_published`
    );
    if (publishedState) {
      setIsPublished(JSON.parse(publishedState));
    }
    fetchContestants();
  }, [contest?._id]);

  const togglePublish = async () => {
    try {
      await handlePublishToggle(contest._id);
      const newPublishedState = !isPublished;
      setIsPublished(newPublishedState);
      localStorage.setItem(
        `contest_${contest._id}_published`,
        JSON.stringify(newPublishedState)
      );
    } catch (error) {
      console.error("Error toggling publish state", error);
    }
  };

  return (
    <div
      key={contest?._id}
      className="bg-white rounded-xl shadow-lg border border-gray-200"
    >
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl">
              {contest?.coverPhotoUrl ? (
                <img
                  src={`${API_URL}/${contest.coverPhotoUrl.replace(
                    /^\//,
                    ""
                  )}`}
                  alt={contest.name}
                  className="w-full h-72 object-cover rounded-xl transform hover:scale-105 transition-all"
                />
              ) : (
                <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center">
                  <span className="text-gray-500 text-xl">No Cover Image</span>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {contest?.name}
              </h2>
              <p className="mt-2 text-gray-600">{contest?.description}</p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-100 p-4 rounded-lg flex-1">
                  <h3 className="text-sm font-medium text-gray-700">
                    Start Date
                  </h3>
                  <p className="text-gray-600">
                    {formatDate(contest?.startDate)}
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg flex-1">
                  <h3 className="text-sm font-medium text-gray-700">
                    End Date
                  </h3>
                  <p className="text-gray-600">
                    {formatDate(contest?.endDate)}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {isPublished && (
                  <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                    <p className="text-gray-700 font-medium mb-2">
                      Voting URL:
                    </p>
                    <a
                      href={`/${contest._id}/vote`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline break-all"
                    >
                      {`${window.location.origin}/${contest._id}/vote`}
                    </a>
                  </div>
                )}

                <button
                  onClick={togglePublish}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isPublished
                      ? "bg-gray-300 text-gray-600"
                      : "bg-custom-blue hover:bg-custom-blue/90 text-white"
                  }`}
                >
                  {isPublished ? "Unpublish Contest" : "Publish Contest"}
                </button>

                <button
                  onClick={() => {
                    setSelectedContestId(contest?._id);
                    setIsContestantModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-lg font-medium bg-gray-300 text-gray-600 hover:bg-gray-400 transition-all duration-200"
                >
                  Add Contestants
                </button>

                <button
                  onClick={() => handleDeleteContest(contest?._id)}
                  className="px-4 py-2 rounded-lg font-medium bg-red-500 hover:bg-red-600 text-white transition-all duration-200"
                >
                  Delete Contest
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Contestants</h3>
            {loading ? (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-blue-700">
                Loading contestants...
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg text-red-700">
                {error}
              </div>
            ) : contestants.length === 0 ? (
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg text-blue-700">
                No contestants added yet.
              </div>
            ) : (
              contestants.map((contestant) => (
                <ContestantItem
                  key={contestant._id}
                  contestant={contestant}
                  handleVote={handleVote}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestItem;

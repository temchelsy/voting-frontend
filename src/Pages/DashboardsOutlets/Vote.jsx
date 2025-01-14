import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import API_URL from '../../Pages/Constants/Constants';
import Footer from '../../Components/Footer'


const Vote = () => {
  const [contest, setContest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);
  const [votingInProgress, setVotingInProgress] = useState(false);

  const contestId = window.location.pathname.split('/')[1]; 

  useEffect(() => {
    fetchContestDetails();
    const votedContests = JSON.parse(localStorage.getItem('votedContests') || '[]');
    setHasVoted(votedContests.includes(contestId));
  }, [contestId]);

  const fetchContestDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/contests/${contestId}`);
      
      console.log('Contest response:', response.data);
      
      if (response.data?.success) {
        setContest(response.data.contest); 
      } else {
        toast.error('Contest not found');
      }
    } catch (error) {
      console.error('Fetch contest error:', error);
      toast.error(error.response?.data?.error || 'Failed to load contest details');
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (contestantId) => {
    if (hasVoted) {
      toast.error('You have already voted in this contest');
      return;
    }

    try {
      setVotingInProgress(true);
      const response = await axios.post(
        `${API_URL}/contests/${contestId}/vote`,
        { contestantId } 
      );

      if (response.data.success) {
        const votedContests = JSON.parse(localStorage.getItem('votedContests') || '[]');
        localStorage.setItem('votedContests', JSON.stringify([...votedContests, contestId]));
        
        setHasVoted(true);
        toast.success('Vote cast successfully!');
        await fetchContestDetails(); 
      }
    } catch (error) {
      console.error('Voting error:', error);
      const errorMessage = error.response?.data?.error || 'Failed to cast your vote.';
      toast.error(errorMessage);
    } finally {
      setVotingInProgress(false);
    }
  };


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-custom-blue" />
      </div>
    );
  }

  if (!contest) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-8 bg-red-50 rounded-lg">
          <h2 className="text-xl font-bold text-red-800">Contest Not Found</h2>
          <p className="text-red-600 mt-2">This contest doesn't exist or has ended.</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto mt-16">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{contest.name}</h1>
            <p className="text-gray-600 mb-6">{contest.description}</p>
            
            {contest.coverPhotoUrl && (
              <div className="mb-8">
                <img
                  src={`${API_URL}/${contest.coverPhotoUrl.replace(/^\//, '')}`}
                  alt={contest.name}
                  className="w-full h-64 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x400?text=Contest+Cover";
                    e.target.onerror = null;
                  }}
                />
              </div>
            )}

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Contestants</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {contest.contestants.map((contestant) => (
                  <div
                    key={contestant._id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                        {contestant.photoUrl ? (
                          <img
                            src={contestant.photoUrl.startsWith('http')
                              ? contestant.photoUrl
                              : `${API_URL}/${contestant.photoUrl}`}
                            alt={contestant.name}
                            className="h-full w-full object-cover"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/100?text=?";
                              e.target.onerror = null;
                            }}
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center">
                            <span className="text-2xl text-gray-500">
                              {contestant.name?.charAt(0) || '?'}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{contestant.name}</h3>
                        <p className="text-gray-500">Votes: {contestant.votes || 0}</p>
                      </div>
                      <button
                        onClick={() => handleVote(contestant._id)}
                        disabled={hasVoted || votingInProgress}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          hasVoted || votingInProgress
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-custom-blue hover:bg-custom-blue/90'
                        } text-white transition-colors duration-200`}
                      >
                        {votingInProgress ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : hasVoted ? (
                          'Voted'
                        ) : (
                          'Vote'
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Vote;
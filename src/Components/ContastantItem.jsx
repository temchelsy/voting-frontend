import React, { useState } from "react";
import API_URL from "../Pages/Constants/Constants";

const ContestantItem = ({ contestant, handleVote }) => {
  const [loading, setLoading] = useState(false);

  const handleVoteClick = async (contestantId) => {
    if (loading) return; 
  
    setLoading(true);
    try {
     
      await handleVote(contestant.contestId, contestantId);
    } catch (error) {
      console.error("Error voting:", error);
      setLoading(false); 
    }
  };
  

  return (
    <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {contestant.photoUrl ? (
          <img
            src={
              contestant.photoUrl.startsWith("http")
                ? contestant.photoUrl
                : `${API_URL}/${contestant.photoUrl}`
            }
            alt={contestant.name || "Contestant"}
            className="h-24 w-24 object-cover rounded-full"
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        ) : (
          <div className="h-24 w-24 bg-gray-200 flex items-center justify-center rounded-full">
            <span className="text-gray-500 text-2xl">
              {contestant.name?.charAt(0) || "?"}
            </span>
          </div>
        )}
        <div>
          <p className="text-gray-800 font-medium">
            {contestant.name || "Unnamed Contestant"}
          </p>
          <p className="text-gray-500 text-sm">
            Votes: {contestant.votes || 0}
          </p>
        </div>
      </div>

      <button
        onClick={() => handleVoteClick(contestant._id)}
        disabled={loading}
        className="bg-custom-blue hover:bg-custom-blue/90 text-white px-4 py-2 rounded-lg disabled:bg-gray-300"
      >
        {loading ? "Voting..." : "Vote"}
      </button>
    </div>
  );
};

export default ContestantItem;

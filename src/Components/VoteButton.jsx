// import React, { useState } from 'react';
// import { Loader2 } from 'lucide-react';

// const VoteButton = ({ contestant, onVote, disabled }) => {
//   const [isVoting, setIsVoting] = useState(false);

//   const handleClick = async () => {
//     if (isVoting) return;
//     setIsVoting(true);
//     try {
//       await onVote();
//     } finally {
//       setIsVoting(false);
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       disabled={disabled || isVoting || contestant.hasVoted}
//       className={`px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2
//         ${contestant.hasVoted || disabled
//           ? 'bg-gray-300 cursor-not-allowed text-gray-600'
//           : 'bg-custom-blue hover:bg-custom-blue/90 text-white'
//         }`}
//     >
//       {isVoting && <Loader2 className="h-4 w-4 animate-spin" />}
//       {contestant.hasVoted ? 'Voted' : 'Vote'}
//     </button>
//   );
// };

// export default VoteButton
// // components/LearnerHome.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Bell, Target, Star } from 'lucide-react';

// const LearnerHome = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 pb-20">
//       {/* Header */}
//       <div className="text-center pt-8 px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-extrabold text-amber-800"
//         >
//           Learning Dashboard
//         </motion.h1>
//         <p className="mt-2 text-lg text-gray-700">Master skills in 15 mins</p>

//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-md"
//         >
//           <Bell className="w-4 h-4 animate-pulse" />
//           Your next session starts in 2 hours!
//         </motion.div>
//       </div>

//       {/* Stats Grid */}
//       <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Impact */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-6"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//             <Star className="text-yellow-500" /> Your Impact
//           </h2>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-amber-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-amber-600">12</p>
//               <p className="text-sm text-gray-600">Sessions</p>
//             </div>
//             <div className="bg-pink-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-pink-600">180</p>
//               <p className="text-sm text-gray-600">Minutes</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-green-600">3</p>
//               <p className="text-sm text-gray-600">Skills</p>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-purple-600">5</p>
//               <p className="text-sm text-gray-600">Day Streak</p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Goal */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-6"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//             <Target className="text-teal-600" /> Monthly Goal
//           </h2>
//           <p className="text-4xl font-bold text-teal-600">12 / 20</p>
//           <p className="text-gray-600 mb-3">Sessions this month</p>
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: '60%' }}
//               className="h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
//             />
//           </div>
//           <p className="text-sm text-gray-500 mt-2">8 more to go!</p>
//         </motion.div>
//       </div>

//       {/* CTA */}
//       <motion.div
//         whileHover={{ scale: 1.02 }}
//         className="max-w-6xl mx-auto px-6 mt-8"
//       >
//         <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-2xl p-6 text-center shadow-xl">
//           <h3 className="text-2xl font-bold">Book Your Next Session</h3>
//           <p className="mt-2">Live 15-min 1-on-1 with India’s best</p>
//           <button className="mt-4 px-8 py-3 bg-white text-purple-600 rounded-full font-bold">
//             Book Now
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default LearnerHome;


import React from 'react'

function LearnerHome() {
  return (
    <div>LearnerHome</div>
  )
}

export default LearnerHome
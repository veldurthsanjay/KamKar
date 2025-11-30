// // components/EarnerHome.jsx
// import React from 'react';
// import { motion } from 'framer-motion';

// const EarnerHome = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pb-20">
//       {/* Header */}
//       <div className="text-center pt-8 px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-extrabold text-emerald-800"
//         >
//           Earning Dashboard
//         </motion.h1>
//         <p className="mt-2 text-lg text-gray-700">Go live • Earn instantly</p>

//         <motion.div
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="mt-4 inline-flex items-center gap-2 bg-black/10 backdrop-blur px-5 py-3 rounded-full"
//         >
//           <span className="text-3xl">Rupee</span>
//           <span className="text-3xl font-black text-emerald-800">12,400</span>
//           <span className="text-sm text-gray-600">earned</span>
//         </motion.div>
//       </div>

//       {/* Stats */}
//       <div className="max-w-6xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-6"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Reach</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-teal-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-teal-600">24</p>
//               <p className="text-sm text-gray-600">Sessions</p>
//             </div>
//             <div className="bg-cyan-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-cyan-600">18</p>
//               <p className="text-sm text-gray-600">Students</p>
//             </div>
//             <div className="bg-emerald-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-emerald-600">4.9</p>
//               <p className="text-sm text-gray-600">Rating</p>
//             </div>
//             <div className="bg-lime-50 p-4 rounded-xl text-center">
//               <p className="text-3xl font-bold text-lime-600">₹520</p>
//               <p className="text-sm text-gray-600">Avg/Session</p>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-white rounded-2xl shadow-lg p-6"
//         >
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">Earnings Goal</h2>
//           <p className="text-4xl font-bold text-emerald-600">₹12,400</p>
//           <p className="text-gray-600 mb-3">of ₹20,000</p>
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: '62%' }}
//               className="h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
//             />
//           </div>
//         </motion.div>
//       </div>

//       {/* CTA */}
//       <motion.div
//         whileHover={{ scale: 1.02 }}
//         className="max-w-6xl mx-auto px-6 mt-8"
//       >
//         <div className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl p-6 text-center shadow-xl">
//           <h3 className="text-2xl font-bold">Go Live Now!</h3>
//           <p className="mt-2">Earn ₹500–₹5000 per session</p>
//           <button className="mt-4 px-8 py-3 bg-white text-red-600 rounded-full font-bold">
//             Start Live
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default EarnerHome;

import React from 'react'

function EarnerHome() {
  return (
    <div>EarnerHome</div>
  )
}

export default EarnerHome
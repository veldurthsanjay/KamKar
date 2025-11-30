import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRole = (mode) => {
    localStorage.setItem('talentMode', mode);
  };

  return (
    <>
      <style jsx global>{`html,body,#root{height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;}`}</style>
      
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_,i) => (
            <motion.div key={i} className="absolute text-3xl opacity-10" initial={{y:'110vh'}} animate={{y:'-20vh'}} 
              transition={{duration:35+i*6,repeat:Infinity,ease:"linear"}} style={{left:`${20+i*20}%`}}>✨</motion.div>
          ))}
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="w-full max-w-4xl px-2 sm:px-0">
          <div className="text-center mb-4 sm:mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">Choose Your Vibe</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 mt-2">Learn <span className="text-cyan-400 font-bold">or</span> Earn</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* LEARN CARD */}
            <motion.div whileHover={{scale:1.05,y:-6,rotate:[0,-3,3,-3,0],borderColor:"#fff"}} whileTap={{scale:0.98}}>
              <div className="group relative cursor-pointer bg-white/10 backdrop-blur-2xl rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-3xl border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>
                <div className="p-4 sm:p-5 md:p-6 text-center">
                  <motion.div animate={{y:[0,-10,0]}} transition={{repeat:Infinity,duration:4}} className="text-6xl sm:text-7xl mb-2 sm:mb-3">🚀</motion.div>
                  <h2 className="text-3xl sm:text-4xl font-black text-cyan-300 mb-1 sm:mb-2">LEARN</h2>
                  <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-2 sm:mb-3">Master any skill in<br/><span className="text-2xl sm:text-3xl font-black text-cyan-400">15 mins</span></p>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {['Guitar','Yoga','Cooking','Reels','Astrology','Dance'].map(s => (
                      <span key={s} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-cyan-500/20 rounded-full text-xs sm:text-sm text-cyan-200 border border-cyan-500/30">{s}</span>
                    ))}
                  </div>
                  <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} 
                    onClick={(e) => { e.stopPropagation(); handleRole('learning'); navigate('/authorization'); }}
                    className="px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-sm sm:text-lg md:text-xl text-white shadow-xl">
                    Start Learning →
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* EARN CARD */}
            <motion.div whileHover={{scale:1.05,y:-6,rotate:[0,3,-3,3,0],borderColor:"#fff"}} whileTap={{scale:0.98}}>
              <div className="group relative cursor-pointer bg-white/10 backdrop-blur-2xl rounded-3xl border-2 border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-3xl border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"/>
                <div className="p-4 sm:p-5 md:p-6 text-center">
                  <motion.div animate={{y:[0,-10,0]}} transition={{repeat:Infinity,duration:4}} className="text-6xl sm:text-7xl mb-2 sm:mb-3">💸</motion.div>
                  <h2 className="text-3xl sm:text-4xl font-black text-pink-300 mb-1 sm:mb-2">EARN</h2>
                  <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-2 sm:mb-3">Teach & earn<br/><span className="text-2xl sm:text-3xl font-black text-pink-400">₹500–₹5000</span></p>
                  <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                    {['50K+ Earners','Instant Pay','Your Schedule','Global Reach'].map(s => (
                      <span key={s} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-pink-500/20 rounded-full text-xs sm:text-sm text-pink-200 border border-pink-500/30">{s}</span>
                    ))}
                  </div>
                  <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.95}} 
                    onClick={(e) => { e.stopPropagation(); handleRole('sharing'); navigate('/authorization'); }}
                    className="px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full font-bold text-sm sm:text-lg md:text-xl text-white shadow-xl">
                    Start Earning →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          <p className="text-center mt-4 sm:mt-6 text-white/50 text-sm sm:text-base">Switch anytime • 50,000+ winning 🌟</p>
        </motion.div>
      </div>
    </>
  );
};

export default RoleSelection;
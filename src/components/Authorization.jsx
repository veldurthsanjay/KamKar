import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaInstagram, FaApple } from 'react-icons/fa';
import { 
  GiPaintBrush, GiMusicSpell, GiHeartInside, GiPartyPopper, GiSmartphone,
  GiMoneyStack, GiTwoCoins
} from 'react-icons/gi';

const Authorization = () => {
  const navigate = useNavigate();
  const mode = localStorage.getItem('talentMode');
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSocialLogin = (provider) => {
    localStorage.setItem('userName', `${provider} User`);
    localStorage.setItem('userPhone', '9999999999');
    navigate('/home');
  };

  const handleSubmit = () => {
    if (!password) return alert('Fill required fields');
    localStorage.setItem('userName', username || email.split('@')[0]);
    localStorage.setItem('userPhone', '0000000000');
    navigate('/home');
  };

  const LeftIcon = () => {
    if (mode === 'learning') {
      return (
        <div className="relative w-full h-48 sm:h-64 flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="text-6xl sm:text-8xl md:text-9xl"
          >
            <GiPaintBrush className="text-pink-300 drop-shadow-2xl" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-5xl sm:text-6xl"
          >
            <GiMusicSpell className="text-cyan-300" />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ delay: 0.8, duration: 2, repeat: Infinity }}
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-4xl sm:text-5xl"
          >
            <GiHeartInside className="text-red-400" />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
            className="absolute -top-2 left-8 sm:-top-4 sm:left-10 text-4xl sm:text-5xl"
          >
            <GiSmartphone className="text-purple-400" />
          </motion.div>
          
          <motion.div className="absolute inset-0 flex items-center justify-center">
            <GiPartyPopper className="text-4xl sm:text-5xl text-yellow-300 opacity-70 animate-pulse" />
          </motion.div>
        </div>
      );
    }

    return (
      <div className="relative w-full h-48 sm:h-64 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl sm:text-8xl md:text-9xl"
        >
          <GiMoneyStack className="text-green-400 drop-shadow-2xl" />
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -bottom-8 -right-8 sm:-bottom-10 sm:-right-10 text-6xl sm:text-7xl"
        >
          <GiTwoCoins className="text-yellow-500" />
        </motion.div>
      </div>
    );
  };

  return (
    <>
      <style jsx global>{`
        html,body,#root{height:100%!important;margin:0;padding:0;overflow:hidden;}
      `}</style>

      <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Sparkles - Mobile Optimized */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl sm:text-5xl opacity-15"
              initial={{ y: '110vh' }}
              animate={{ y: '-20vh' }}
              transition={{ duration: 25 + i * 5, repeat: Infinity, ease: "linear" }}
              style={{ left: `${15 + i * 17}%` }}
            >
              <GiPartyPopper className="text-yellow-300" />
            </motion.div>
          ))}
        </div>

        {/* MAIN CARD - FULLY RESPONSIVE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md sm:max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-3xl"
        >
          {/* LEFT - ICONS (STACKED ON MOBILE) */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-t-2xl md:rounded-l-3xl md:rounded-t-none">
            <LeftIcon />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-6 mb-2">
              {mode === 'learning' ? 'Discover Your Talent!' : 'Earn From Your Passion!'}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 px-2">
              {mode === 'learning' 
                ? 'Live 1-on-1: Singing, Dance, Yoga, Reels, Astrology & more!' 
                : 'Teach live & earn ₹500–₹5000/session'}
            </p>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-cyan-300 font-bold">India's #1 Talent App</p>
          </div>

          {/* RIGHT - FORM (WITH ULTRA-THIN GLOW BORDER) */}
          <div className="p-5 sm:p-6 md:p-8 lg:p-10 bg-white/15 backdrop-blur-2xl">
            {/* TABS */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-5">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all ${
                  isLogin ? 'bg-black text-white shadow-lg' : 'text-white/70'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all ${
                  !isLogin ? 'bg-black text-white shadow-lg' : 'text-white/70'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* FORM WITH ULTRA-THIN GLOW BORDER */}
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-inner">
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-600 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all text-sm sm:text-base"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-600 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all text-sm sm:text-base"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-600 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-cyan-300 focus:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all text-sm sm:text-base"
              />
            </div>

            {isLogin && (
              <p className="text-right text-white/70 mt-2 text-xs sm:text-sm cursor-pointer hover:text-white">
                Forgot Password?
              </p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="mt-5 w-full py-3 sm:py-4 bg-black text-white font-black text-base sm:text-lg rounded-xl shadow-xl hover:bg-gray-900 transition-all"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </motion.button>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-3 sm:gap-4 mt-5">
              <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleSocialLogin('Google')} className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <FcGoogle size={20} className="sm:w-6 sm:h-6" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleSocialLogin('Facebook')} className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <FaFacebookF size={20} className="text-white sm:w-6 sm:h-6" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleSocialLogin('Instagram')} className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <FaInstagram size={20} className="text-white sm:w-6 sm:h-6" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2 }} onClick={() => handleSocialLogin('Apple')} className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center shadow-lg">
                <FaApple size={20} className="text-white sm:w-6 sm:h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Authorization;
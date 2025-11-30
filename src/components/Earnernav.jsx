// components/Earnernav.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Mic, Wallet, User, Radio } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Earnernav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { icon: BarChart3, label: 'Dash', path: '/home' },
    { icon: Mic, label: 'Sessions', path: '/sessions' },
    { icon: Radio, label: 'LIVE', path: '/go-live', isCenter: true },
    { icon: Wallet, label: 'Earn', path: '/earnings' },
    { icon: User, label: 'Me', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="flex justify-around items-center h-16 relative">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 ${
              location.pathname === tab.path
                ? 'text-emerald-600'
                : 'text-gray-600 hover:text-emerald-500'
            }`}
          >
            {tab.isCenter ? (
              <div className="relative">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-full p-3 -mt-6 shadow-xl border-4 border-white flex flex-col items-center justify-center"
                >
                  <Radio size={28} />
                  <span className="text-[9px] font-black mt-0.5">LIVE</span>
                </motion.div>
                <p className="mt-1 text-xs font-bold tracking-wide">{tab.label}</p>
              </div>
            ) : (
              <>
                <tab.icon
                  size={24}
                  className={`transition-transform duration-300 ${
                    location.pathname === tab.path ? 'scale-110' : ''
                  }`}
                />
                <p className="text-xs mt-1 font-medium">{tab.label}</p>
                {location.pathname === tab.path && (
                  <motion.div
                    layoutId="earnerActive"
                    className="absolute bottom-0 w-10 h-1 bg-emerald-600 rounded-full"
                  />
                )}
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Earnernav;
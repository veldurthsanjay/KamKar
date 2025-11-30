import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faRocket, faBrain, faHeart, faTrophy, faStar, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const OnboardingSlides = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let mounted = true;
    const checkPopup = () => {
      try {
        const seen = localStorage.getItem('seenSanjayPopup');
        if (!seen && mounted) {
          setTimeout(() => { if (mounted) setShowPopup(true); }, 300);
        }
      } catch (err) { if (mounted) setShowPopup(true); }
    };
    checkPopup();
    return () => { mounted = false; };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    try { localStorage.setItem('seenSanjayPopup', 'true'); } catch (err) {}
  };

  const slides = [
    { title: "Welcome to TalentShare ✨", desc: "Your 15-min skill revolution starts here — learn or earn instantly", icon: faRocket, glow: "#c084f" },
    { title: "Dance, Sing, Cook, Yoga, Grow Rich🔥", desc: "Bollywood • Zumba • Guitar • Biryani • Yoga • Acting • YouTube Strategy • Astrology • IG Reels — ANY skill in 15-min bursts", icon: faBrain, glow: "#ec4899" },
    { title: "Teach Your Magic & Earn Daily 💝", desc: "Fitness trainer • Actors • Instagram Influencer • YouTube Except • Social Media Tips • Motivation buddy — turn your talent into instant income", icon: faHeart, glow: "#f43f5e" },
    { title: "50,000+ Stars Already Shining 🌟", desc: "Join singers, dancers, cooks, creators, actors, influencers, astrologers & motivators earning ₹500–₹5000/session — your tribe is waiting!", icon: faTrophy, glow: "#22d3ee" }
  ];

  const minSwipe = 50;
  const onTouchStart = e => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); };
  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > minSwipe && step < slides.length - 1) setStep(s => s + 1);
    if (dist < -minSwipe && step > 0) setStep(s => s - 1);
  };

  const skip = () => setStep(slides.length - 1);

  return (
    <>
      <style jsx global>{`html,body,#root{height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;overscroll-behavior:none}`}</style>

      <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white flex flex-col"
        onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div key={i} className="absolute text-yellow-300 opacity-40"
              initial={{ y: -50 }} animate={{ y: '110vh' }}
              transition={{ duration: 20 + i * 1.5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
              style={{ fontSize: '12px', left: `${Math.random() * 100}%` }}>
              <FontAwesomeIcon icon={faStar} />
            </motion.div>
          ))}
        </div>

        {/* RESPONSIVE SKIP BUTTON */}
        {step < slides.length - 1 && (
          <div className="absolute top-4 right-4 z-50">
            <button onClick={skip}
              className="px-5 py-2.5 sm:px-7 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full font-bold text-sm sm:text-base hover:bg-white/20 transition-all shadow-xl flex items-center gap-2">
              Skip <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        )}

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
          <motion.div key={step} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }} className="w-full max-w-xs sm:max-w-sm md:max-w-md">
            
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 md:p-10 text-center relative overflow-hidden"
              style={{ boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 80px ${slides[step].glow}30` }}>
              
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4 }}
                className="text-6xl sm:text-7xl md:text-8xl mb-6">
                <FontAwesomeIcon icon={slides[step].icon} className="drop-shadow-2xl" style={{ filter: 'drop-shadow(0 0 30px currentColor)' }} />
              </motion.div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 leading-tight bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                {slides[step].title}
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed px-2 sm:px-4">
                {slides[step].desc}
              </p>
            </div>

            {/* DOTS */}
            {step < slides.length - 1 && (
              <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10">
                {slides.map((_, i) => (
                  <motion.div key={i} onClick={() => setStep(i)} whileHover={{ scale: 1.3 }}
                    className={`cursor-pointer transition-all duration-300 ${i === step ? 'w-10 sm:w-14 h-3 sm:h-4 bg-white rounded-full shadow-lg' : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/70'}`} />
                ))}
              </div>
            )}

            {/* FINAL CTA */}
            {step === slides.length - 1 && (
              <div className="flex justify-center mt-8 sm:mt-10">
                <motion.button initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={() => navigate('/role')}
                  className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-full font-black text-lg sm:text-xl md:text-2xl shadow-2xl">
                  Let's Begin! <FontAwesomeIcon icon={faArrowRight} className="ml-3" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>

        {/* SANJAY POPUP - MOBILE FRIENDLY */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4">
            <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-rose-600 blur-xl opacity-70" />
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 text-center border border-white/30 shadow-2xl">
                <motion.h2 initial={{ y: -15 }} animate={{ y: 0 }} className="text-2xl sm:text-3xl font-black bg-gradient-to-br from-red-400 via-green-300 to-blue-300 bg-clip-text text-transparent mb-4">
                  Veldurthi Sanjay
                </motion.h2>
                <p className="text-xs sm:text-sm text-white/90 mb-6 leading-relaxed">
                  Hey, I'm Sanjay — proud Developer of TalentShare! 🚀 Turn your hidden talents into real income or master new skills in just 15 mins.<br/>Let's shine together! 🌟
                </p>
                <div className="flex justify-center gap-6 sm:gap-8 mb-6">
                  {[{ icon: faLinkedin, href: "https://www.linkedin.com/in/veldurthi-sanjay" }, { icon: faGithub, href: "https://github.com/veldurthisanjay" }, { icon: faBehance, href: "https://www.behance.net/veldurthisanjay" }].map((s, i) => (
                    <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                      className="text-white text-2xl sm:text-3xl drop-shadow-xl">
                      <FontAwesomeIcon icon={s.icon} />
                    </motion.a>
                  ))}
                </div>
                <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={closePopup}
                  className="px-8 py-3.5 bg-gradient-to-r from-red-500 to-green-500 rounded-full font-bold text-base sm:text-lg text-white shadow-xl">
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
};

export default OnboardingSlides;
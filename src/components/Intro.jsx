import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const emojis = ['⭐', '🎨', '🚀', '🌈', '📚', '🎵', '🏆', '🌸', '🎈', '🦋'];
const colors = ['#FBBF24','#EC4899','#3B82F6','#22C55E','#A855F7','#F97316','#38BDF8','#10B981'];

const FloatingEmoji = ({ emoji, style }) => (
  <div
    style={{
      position: 'absolute',
      fontSize: style.size,
      top: style.top,
      left: style.left,
      animation: `float ${style.duration}s ease-in-out infinite`,
      animationDelay: style.delay,
      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
      zIndex: 2,
      userSelect: 'none',
    }}
  >
    {emoji}
  </div>
);

const Intro = ({ onFinish }) => {
  const containerRef = useRef();
  const logoRef      = useRef();
  const titleRef     = useRef();
  const subRef       = useRef();

  useEffect(() => {
    // Entrance animations
    const tl = gsap.timeline();
    tl.fromTo(logoRef.current,
      { scale: 0, rotation: -30, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
    )
    .fromTo(titleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.2'
    )
    .fromTo(subRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3'
    );

    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.08,
          duration: 0.7,
          ease: 'power2.inOut',
          onComplete: onFinish,
        });
      } else {
        onFinish();
      }
    }, 3000);

    const failsafe = setTimeout(onFinish, 5000);
    return () => { clearTimeout(timer); clearTimeout(failsafe); };
  }, [onFinish]);

  const floatingItems = emojis.map((emoji, i) => ({
    emoji,
    style: {
      size: `${1.5 + Math.random() * 1.8}rem`,
      top:  `${5 + Math.random() * 80}%`,
      left: `${3 + Math.random() * 90}%`,
      duration: 3 + Math.random() * 4,
      delay:    `${Math.random() * 2}s`,
    },
  }));

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 40%, #4C1D95 70%, #7C3AED 100%)',
      }}
    >
      {/* Animated background blobs */}
      <div style={{
        position: 'absolute', top: '-20%', left: '-20%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(251,191,36,0.25) 0%, transparent 70%)',
        animation: 'morphBlob 8s ease-in-out infinite',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '-20%',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(236,72,153,0.25) 0%, transparent 70%)',
        animation: 'morphBlob 10s ease-in-out infinite reverse',
        borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
      }} />

      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: `${2 + Math.random() * 4}px`,
          height: `${2 + Math.random() * 4}px`,
          background: colors[i % colors.length],
          borderRadius: '50%',
          top:  `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `pulse-slow ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 3}s`,
          boxShadow: `0 0 6px ${colors[i % colors.length]}`,
        }} />
      ))}

      {/* Floating emojis */}
      {floatingItems.map((item, i) => (
        <FloatingEmoji key={i} emoji={item.emoji} style={item.style} />
      ))}

      {/* Center content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
        {/* Logo circle */}
        <div
          ref={logoRef}
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FBBF24, #F97316)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            boxShadow: '0 0 60px rgba(251,191,36,0.6), 0 0 120px rgba(251,191,36,0.2)',
            animation: 'glow-pulse 2s ease-in-out infinite',
          }}
        >
          <span style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: '3.5rem',
            color: 'white',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}>IMPS</span>
        </div>

        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            color: 'white',
            margin: '0 0 0.75rem',
            letterSpacing: '2px',
            textShadow: '0 4px 24px rgba(0,0,0,0.3)',
          }}
        >
          I Master Pre School
        </h1>

        <p
          ref={subRef}
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'rgba(255,255,255,0.85)',
            margin: '0 auto 2rem',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}
        >
          🌈 Where Every Child Learns, Plays, and Grows with Joy! 🌈
        </p>

        {/* Animated dots loader */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {colors.slice(0, 5).map((c, i) => (
            <div key={i} style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: c,
              animation: 'bounce-slow 1.2s ease-in-out infinite',
              animationDelay: `${i * 0.15}s`,
              boxShadow: `0 0 8px ${c}`,
            }} />
          ))}
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onFinish(); }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          padding: '0.75rem 1.75rem',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(12px)',
          border: '2px solid rgba(255,255,255,0.3)',
          borderRadius: '999px',
          color: 'white',
          fontFamily: "'Baloo 2', cursive",
          fontWeight: 700,
          fontSize: '0.95rem',
          cursor: 'pointer',
          transition: 'all 0.2s',
          zIndex: 20,
          letterSpacing: '0.05em',
        }}
        onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.3)'; e.target.style.transform = 'scale(1.05)'; }}
        onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.15)'; e.target.style.transform = 'scale(1)'; }}
      >
        ✨ Skip Intro
      </button>
    </div>
  );
};

export default Intro;

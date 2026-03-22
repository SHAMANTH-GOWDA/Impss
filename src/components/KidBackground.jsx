import React, { useMemo } from 'react';

/**
 * KidBackground — animated decorative background layer.
 * Drop it inside any section (position:relative) and it fills the background.
 * 
 * Props:
 *  variant: 'stars' | 'clouds' | 'confetti' | 'bubbles' | 'doodle' | 'rainbow'
 *  opacity: number (0-1), default 1
 */

const rand = (min, max) => min + Math.random() * (max - min);

/* ── individual shape generators ── */

const Stars = ({ count = 30 }) => {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    x: rand(0, 100), y: rand(0, 100),
    r: rand(4, 14),
    color: ['#FBBF24','#EC4899','#3B82F6','#22C55E','#A855F7','#F97316','#38BDF8'][i % 7],
    dur: rand(3, 7),
    delay: rand(0, 4),
    rot: rand(0, 360),
    opacity: rand(0.3, 0.75),
  })), [count]);

  const starPath = 'M10,0 L12.2,7.6 L20,7.6 L13.9,12.3 L16.2,20 L10,15.3 L3.8,20 L6.1,12.3 L0,7.6 L7.8,7.6Z';

  return (
    <>
      {items.map((s, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${s.x}%`, top: `${s.y}%`,
          opacity: s.opacity,
          animation: `float ${s.dur}s ease-in-out ${s.delay}s infinite`,
          pointerEvents: 'none',
          zIndex: 0,
        }}>
          <svg width={s.r * 2} height={s.r * 2} viewBox="0 0 20 20" style={{ transform: `rotate(${s.rot}deg)` }}>
            <path d={starPath} fill={s.color} />
          </svg>
        </div>
      ))}
    </>
  );
};

const Clouds = ({ count = 8 }) => {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    x: rand(0, 95), y: rand(0, 90),
    scale: rand(0.6, 1.6),
    color: ['#DBEAFE','#FCE7F3','#DCFCE7','#FEF3C7','#EDE9FE'][i % 5],
    dur: rand(6, 12),
    delay: rand(0, 5),
    opacity: rand(0.25, 0.6),
  })), [count]);

  return (
    <>
      {items.map((c, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${c.x}%`, top: `${c.y}%`,
          opacity: c.opacity,
          animation: `float ${c.dur}s ease-in-out ${c.delay}s infinite`,
          pointerEvents: 'none',
          zIndex: 0,
          transform: `scale(${c.scale})`,
        }}>
          <svg width="70" height="40" viewBox="0 0 70 40">
            <ellipse cx="35" cy="30" rx="32" ry="12" fill={c.color} />
            <circle cx="22" cy="24" r="14" fill={c.color} />
            <circle cx="42" cy="22" r="17" fill={c.color} />
            <circle cx="55" cy="26" r="12" fill={c.color} />
          </svg>
        </div>
      ))}
    </>
  );
};

const Confetti = ({ count = 40 }) => {
  const shapes = ['circle', 'rect', 'star'];
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    x: rand(0, 100), y: rand(0, 100),
    size: rand(6, 18),
    color: ['#FBBF24','#EC4899','#3B82F6','#22C55E','#A855F7','#F97316','#EF4444','#38BDF8'][i % 8],
    shape: shapes[i % 3],
    dur: rand(4, 9),
    delay: rand(0, 5),
    rot: rand(0, 360),
    opacity: rand(0.2, 0.55),
  })), [count]);

  return (
    <>
      {items.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${p.x}%`, top: `${p.y}%`,
          opacity: p.opacity,
          animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite, spin-slow ${p.dur * 2}s linear infinite`,
          pointerEvents: 'none',
          zIndex: 0,
        }}>
          {p.shape === 'circle' && (
            <div style={{ width: p.size, height: p.size, borderRadius: '50%', background: p.color }} />
          )}
          {p.shape === 'rect' && (
            <div style={{ width: p.size, height: p.size * 0.6, borderRadius: '3px', background: p.color, transform: `rotate(${p.rot}deg)` }} />
          )}
          {p.shape === 'star' && (
            <svg width={p.size} height={p.size} viewBox="0 0 20 20" style={{ transform: `rotate(${p.rot}deg)` }}>
              <path d="M10,0 L12.2,7.6 L20,7.6 L13.9,12.3 L16.2,20 L10,15.3 L3.8,20 L6.1,12.3 L0,7.6 L7.8,7.6Z" fill={p.color} />
            </svg>
          )}
        </div>
      ))}
    </>
  );
};

const Bubbles = ({ count = 20 }) => {
  const items = useMemo(() => Array.from({ length: count }, (_, i) => ({
    x: rand(0, 100), y: rand(0, 100),
    r: rand(20, 70),
    color: ['#FBBF24','#EC4899','#3B82F6','#22C55E','#A855F7','#F97316'][i % 6],
    dur: rand(5, 10),
    delay: rand(0, 5),
    opacity: rand(0.08, 0.2),
  })), [count]);

  return (
    <>
      {items.map((b, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${b.x}%`, top: `${b.y}%`,
          width: b.r, height: b.r,
          borderRadius: '50%',
          background: `radial-gradient(circle at 35% 35%, white, ${b.color})`,
          border: `2px solid ${b.color}40`,
          opacity: b.opacity,
          animation: `float ${b.dur}s ease-in-out ${b.delay}s infinite, pulse-slow ${b.dur * 0.6}s ease-in-out infinite`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
      ))}
    </>
  );
};

const Doodle = () => {
  const doodles = useMemo(() => [
    // Smiley faces
    { x: 5, y: 10, emoji: '😊', size: '2rem', dur: 5, delay: 0 },
    { x: 88, y: 15, emoji: '⭐', size: '2.2rem', dur: 4, delay: 1 },
    { x: 12, y: 80, emoji: '🌈', size: '2.5rem', dur: 6, delay: 0.5 },
    { x: 85, y: 75, emoji: '🎨', size: '2rem', dur: 4.5, delay: 1.5 },
    { x: 48, y: 5, emoji: '🦋', size: '2rem', dur: 5.5, delay: 0.8 },
    { x: 92, y: 45, emoji: '🌸', size: '1.8rem', dur: 3.5, delay: 0.3 },
    { x: 3, y: 47, emoji: '🎵', size: '1.8rem', dur: 7, delay: 2 },
    { x: 55, y: 90, emoji: '🏆', size: '2rem', dur: 4, delay: 0.7 },
    // Wavy lines (SVG)
    { x: 20, y: 30, type: 'wave', color: '#FBBF24', opacity: 0.18 },
    { x: 65, y: 55, type: 'wave', color: '#EC4899', opacity: 0.15 },
    { x: 35, y: 70, type: 'wave', color: '#3B82F6', opacity: 0.15 },
    // Dots grid
    { x: 78, y: 8, type: 'dots', color: '#A855F7', opacity: 0.2 },
    { x: 10, y: 60, type: 'dots', color: '#22C55E', opacity: 0.18 },
  ], []);

  return (
    <>
      {doodles.map((d, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${d.x}%`, top: `${d.y}%`,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: d.opacity || 0.35,
          animation: d.dur ? `float ${d.dur}s ease-in-out ${d.delay}s infinite` : 'none',
        }}>
          {d.emoji && <span style={{ fontSize: d.size, filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.1))' }}>{d.emoji}</span>}
          {d.type === 'wave' && (
            <svg width="100" height="30" viewBox="0 0 100 30">
              <path d="M0,15 Q12,5 25,15 Q38,25 50,15 Q62,5 75,15 Q88,25 100,15" stroke={d.color} strokeWidth="3" fill="none" strokeLinecap="round" />
            </svg>
          )}
          {d.type === 'dots' && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              {[0,1,2,3].map(row => [0,1,2,3].map(col => (
                <circle key={`${row}-${col}`} cx={col * 18 + 6} cy={row * 18 + 6} r="4" fill={d.color} />
              )))}
            </svg>
          )}
        </div>
      ))}
    </>
  );
};

const RainbowRings = () => {
  const rings = useMemo(() => [
    { x: -5, y: -5, r: 200, color: '#FBBF24', opacity: 0.07, dur: 8 },
    { x: 90, y: -8, r: 160, color: '#EC4899', opacity: 0.08, dur: 11 },
    { x: -8, y: 85, r: 180, color: '#3B82F6', opacity: 0.07, dur: 9 },
    { x: 88, y: 80, r: 140, color: '#22C55E', opacity: 0.08, dur: 12 },
    { x: 48, y: 48, r: 250, color: '#A855F7', opacity: 0.05, dur: 14 },
  ], []);

  return (
    <>
      {rings.map((r, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${r.x}%`, top: `${r.y}%`,
          width: r.r * 2,
          height: r.r * 2,
          borderRadius: '50%',
          border: `3px solid ${r.color}`,
          opacity: r.opacity,
          animation: `spin-slow ${r.dur}s linear infinite${i % 2 ? ' reverse' : ''}`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
      ))}
      {/* Extra smaller rings */}
      {rings.map((r, i) => (
        <div key={`sm-${i}`} style={{
          position: 'absolute',
          left: `${r.x + 2}%`, top: `${r.y + 2}%`,
          width: r.r,
          height: r.r,
          borderRadius: '50%',
          border: `2px dashed ${r.color}`,
          opacity: r.opacity * 0.8,
          animation: `spin-slow ${r.dur * 1.5}s linear infinite${i % 2 === 0 ? ' reverse' : ''}`,
          pointerEvents: 'none',
          zIndex: 0,
        }} />
      ))}
    </>
  );
};

/* ── Main component ── */
const KidBackground = ({ variant = 'doodle', opacity = 1 }) => {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0,
      opacity,
    }}>
      {variant === 'stars'    && <Stars />}
      {variant === 'clouds'   && <Clouds />}
      {variant === 'confetti' && <Confetti />}
      {variant === 'bubbles'  && <Bubbles />}
      {variant === 'doodle'   && <Doodle />}
      {variant === 'rainbow'  && <RainbowRings />}
      {/* Always render a few bubbles as base */}
      {variant !== 'bubbles' && <Bubbles count={8} />}
    </div>
  );
};

export default KidBackground;

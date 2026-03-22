import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimationFrame } from 'framer-motion';
import { Star, Send, User, Heart, Sparkles, MessageCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import KidBackground from './KidBackground';

/* ─── Data ─── */
const INITIAL_REVIEWS = [
  { name: 'Deepa R.',    role: 'Parent of 4-yr-old', text: 'Excellent preschool in Kunigal. The infrastructure is modern and child-friendly.', emoji: '😊', rating: 5 },
  { name: 'Rajesh K.',  role: 'Parent of 3-yr-old', text: 'Very satisfied with the friendly staff and creative curriculum. My child loves going to school everyday!', emoji: '🌟', rating: 5 },
  { name: 'Sowmya M.',  role: 'Parent of 5-yr-old', text: 'A safe and nurturing environment. The hands-on learning approach is truly unique and wonderful!', emoji: '❤️', rating: 5 },
  { name: 'Anitha S.',  role: 'Parent of 4-yr-old', text: 'Best decision we ever made. My daughter laughs and sings every morning before school!', emoji: '🎶', rating: 5 },
  { name: 'Priya V.',   role: 'Parent of 3-yr-old', text: 'The teachers are very caring and attentive. We feel our child is in great hands!', emoji: '🙏', rating: 5 },
  { name: 'Kiran D.',   role: 'Parent of 4-yr-old', text: 'Amazing atmosphere. Every corner of the school is designed for children to learn naturally!', emoji: '🎨', rating: 5 },
];

const CARD_COLORS = [
  { bg: '#FFFBEB', ring: '#FBBF24', tag: 'linear-gradient(135deg,#FBBF24,#F97316)' },
  { bg: '#FDF2F8', ring: '#EC4899', tag: 'linear-gradient(135deg,#EC4899,#A855F7)' },
  { bg: '#EFF6FF', ring: '#3B82F6', tag: 'linear-gradient(135deg,#3B82F6,#38BDF8)' },
  { bg: '#F0FDF4', ring: '#22C55E', tag: 'linear-gradient(135deg,#22C55E,#10B981)' },
  { bg: '#FAF5FF', ring: '#A855F7', tag: 'linear-gradient(135deg,#A855F7,#7C3AED)' },
  { bg: '#FFF7ED', ring: '#F97316', tag: 'linear-gradient(135deg,#F97316,#EF4444)' },
];

/* ─── Marquee-style auto-scrolling banner ─── */
const ReviewMarquee = ({ reviews }) => {
  const trackRef = useRef();
  const xRef     = useRef(0);
  const CARD_W   = 360;
  const GAP      = 24;
  const SPEED    = 0.7;
  const total    = reviews.length;
  // duplicate list for seamless loop
  const items    = [...reviews, ...reviews];

  useAnimationFrame(() => {
    xRef.current -= SPEED;
    const limit = (CARD_W + GAP) * total;
    if (Math.abs(xRef.current) >= limit) xRef.current = 0;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${xRef.current}px)`;
  });

  return (
    <div style={{ overflow: 'hidden', width: '100%', paddingBottom: '1rem', maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)' }}>
      <div ref={trackRef} style={{ display: 'flex', gap: `${GAP}px`, width: 'fit-content' }}>
        {items.map((rev, i) => {
          const c = CARD_COLORS[i % CARD_COLORS.length];
          return (
            <div key={i} style={{
              width: CARD_W,
              flexShrink: 0,
              background: c.bg,
              borderRadius: '1.5rem',
              padding: '1.5rem',
              border: `2.5px solid ${c.ring}35`,
              boxShadow: `0 6px 28px ${c.ring}18`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Giant quote */}
              <div style={{ position: 'absolute', top: '-12px', right: '12px', fontSize: '5.5rem', color: c.ring, opacity: 0.1, fontFamily: 'serif', lineHeight: 1, userSelect: 'none' }}>"</div>
              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '0.6rem' }}>
                {Array.from({ length: rev.rating }).map((_, k) => (
                  <Star key={k} size={14} fill="#FBBF24" style={{ color: '#FBBF24' }} />
                ))}
              </div>
              <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: '0.92rem', color: '#374151', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1rem' }}>
                "{rev.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: c.tag, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>{rev.emoji}</div>
                <div>
                  <div style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, fontSize: '0.9rem', color: '#1E1B4B' }}>{rev.name}</div>
                  <div style={{ fontFamily: "'Nunito',sans-serif", fontSize: '0.75rem', color: '#9CA3AF', fontWeight: 600 }}>{rev.role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─── Featured big card with prev/next ─── */
const FeaturedReview = ({ reviews }) => {
  const [idx, setIdx] = useState(0);
  const rev = reviews[idx];
  const c   = CARD_COLORS[idx % CARD_COLORS.length];

  const prev = () => setIdx(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx(i => (i + 1) % reviews.length);

  return (
    <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.175, 0.885, 0.32, 1.275] }}
          style={{
            background: c.bg,
            borderRadius: '2.5rem',
            padding: 'clamp(2rem,4vw,3.5rem)',
            border: `4px solid ${c.ring}30`,
            boxShadow: `0 16px 60px ${c.ring}25, 0 4px 16px rgba(0,0,0,0.06)`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative big quote bg */}
          <div style={{
            position: 'absolute', top: '-24px', left: '20px',
            fontSize: '12rem', lineHeight: 1, fontFamily: 'serif',
            color: c.ring, opacity: 0.07, userSelect: 'none', pointerEvents: 'none',
          }}>"</div>

          {/* Emoji avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
            style={{
              width: '80px', height: '80px',
              borderRadius: '50%',
              background: c.tag,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto 1.25rem',
              boxShadow: `0 8px 32px ${c.ring}40`,
            }}
          >{rev.emoji}</motion.div>

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '1.25rem' }}>
            {Array.from({ length: rev.rating }).map((_, k) => (
              <motion.div key={k} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + k * 0.06 }}>
                <Star size={22} fill="#FBBF24" style={{ color: '#FBBF24', filter: 'drop-shadow(0 0 4px #FBBF24)' }} />
              </motion.div>
            ))}
          </div>

          <p style={{
            fontFamily: "'Baloo 2',cursive",
            fontWeight: 700,
            fontSize: 'clamp(1rem,2.5vw,1.25rem)',
            color: '#374151',
            lineHeight: 1.75,
            fontStyle: 'italic',
            marginBottom: '1.5rem',
            position: 'relative', zIndex: 1,
          }}>
            "{rev.text}"
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontFamily: "'Fredoka One',cursive", fontSize: '1.3rem', color: '#1E1B4B' }}>{rev.name}</span>
            <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: '0.85rem', color: '#9CA3AF' }}>{rev.role}</span>
          </div>

          {/* Index dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1.5rem' }}>
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setIdx(k)} style={{
                width: k === idx ? '24px' : '10px',
                height: '10px',
                borderRadius: '999px',
                background: k === idx ? c.ring : c.ring + '40',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next */}
      {[{ dir: 'prev', fn: prev, Icon: ChevronLeft, pos: { left: '-20px' } }, { dir: 'next', fn: next, Icon: ChevronRight, pos: { right: '-20px' } }].map(({ dir, fn, Icon, pos }) => (
        <motion.button key={dir} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} onClick={fn}
          style={{
            position: 'absolute', top: '50%', transform: 'translateY(-50%)',
            width: '48px', height: '48px',
            borderRadius: '50%',
            background: 'white',
            border: '2.5px solid #E5E7EB',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            ...pos,
          }}>
          <Icon size={22} color="#374151" />
        </motion.button>
      ))}
    </div>
  );
};

/* ─── Write Review Form ─── */
const WriteReview = ({ onSubmit }) => {
  const [name, setName]   = useState('');
  const [role, setRole]   = useState('');
  const [text, setText]   = useState('');
  const [rating, setRating] = useState(5);
  const [hover, setHover]   = useState(0);
  const [sent, setSent]     = useState(false);
  const [open, setOpen]     = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      onSubmit({ name, role: role || 'Parent', text, rating, emoji: ['😊','⭐','❤️','🌟','🎶'][Math.floor(Math.random()*5)] });
      setName(''); setRole(''); setText(''); setRating(5);
      setSent(true);
      setTimeout(() => { setSent(false); setOpen(false); }, 3000);
    }
  };

  return (
    <div>
      {/* Trigger button */}
      <motion.button
        whileHover={{ scale: 1.06, y: -4 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen(true)}
        className="btn-shine"
        style={{
          padding: '1.1rem 2.5rem',
          background: 'linear-gradient(135deg,#EC4899,#A855F7)',
          color: 'white',
          border: 'none',
          borderRadius: '1rem',
          fontFamily: "'Baloo 2',cursive",
          fontWeight: 800,
          fontSize: '1.1rem',
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(236,72,153,0.35)',
          display: 'flex', alignItems: 'center', gap: '10px',
          margin: '0 auto',
        }}
      >
        <MessageCircle size={20} /> Write a Review ✍️
      </motion.button>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(30,27,75,0.6)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 24 }}
              style={{
                background: 'white',
                borderRadius: '2rem',
                padding: 'clamp(1.5rem,4vw,3rem)',
                width: '100%',
                maxWidth: '520px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.25)',
                position: 'relative',
              }}
            >
              {/* Close */}
              <button onClick={() => setOpen(false)} style={{
                position:'absolute', top:'1rem', right:'1rem',
                width:'36px',height:'36px',borderRadius:'50%',
                background:'#F3F4F6',border:'none',fontSize:'1.2rem',cursor:'pointer',
                display:'flex',alignItems:'center',justifyContent:'center',
              }}>✕</button>

              {sent ? (
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🎉</div>
                  <h3 style={{ fontFamily: "'Fredoka One',cursive", fontSize: '2rem', color: '#1E1B4B', marginBottom: '0.5rem' }}>Thank you!</h3>
                  <p style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 700, color: '#6B7280' }}>Your review has been posted!</p>
                </motion.div>
              ) : (
                <>
                  <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⭐</div>
                    <h3 style={{ fontFamily: "'Fredoka One',cursive", fontSize: '2rem', color: '#1E1B4B', margin: '0 0 0.25rem' }}>
                      Share Your Experience
                    </h3>
                    <p style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#9CA3AF', margin: 0 }}>
                      Your feedback helps other parents and means the world to us 💛
                    </p>
                  </div>

                  {/* Star picker */}
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '1.5rem' }}>
                    {[1,2,3,4,5].map(n => (
                      <motion.button key={n} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}
                        onClick={() => setRating(n)} onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                      >
                        <Star size={32} fill={(hover || rating) >= n ? '#FBBF24' : '#E5E7EB'} style={{ color: (hover || rating) >= n ? '#FBBF24' : '#E5E7EB', filter: (hover || rating) >= n ? 'drop-shadow(0 0 6px #FBBF24)' : 'none', transition: 'all 0.15s' }} />
                      </motion.button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { ph: 'Your Name *',     val: name, set: setName, req: true  },
                      { ph: 'Your role (e.g. Parent of 4yr old)', val: role, set: setRole, req: false },
                    ].map(({ ph, val, set, req }, i) => (
                      <input key={i} type="text" placeholder={ph} value={val} onChange={e => set(e.target.value)} required={req} style={{
                        padding: '0.9rem 1.25rem',
                        borderRadius: '0.875rem',
                        border: '2px solid #F3F4F6',
                        background: '#FAFAFA',
                        fontFamily: "'Nunito',sans-serif",
                        fontWeight: 600, fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                        onFocus={e => { e.target.style.borderColor='#EC4899'; e.target.style.boxShadow='0 0 0 4px rgba(236,72,153,0.1)'; e.target.style.background='white'; }}
                        onBlur={e  => { e.target.style.borderColor='#F3F4F6'; e.target.style.boxShadow='none'; e.target.style.background='#FAFAFA'; }}
                      />
                    ))}
                    <textarea rows={4} placeholder="Your experience... 💬" value={text} onChange={e => setText(e.target.value)} required style={{
                      padding: '0.9rem 1.25rem',
                      borderRadius: '0.875rem',
                      border: '2px solid #F3F4F6',
                      background: '#FAFAFA',
                      fontFamily: "'Nunito',sans-serif",
                      fontWeight: 600, fontSize: '0.95rem',
                      outline: 'none', resize: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      width: '100%', boxSizing: 'border-box',
                    }}
                      onFocus={e => { e.target.style.borderColor='#EC4899'; e.target.style.boxShadow='0 0 0 4px rgba(236,72,153,0.1)'; e.target.style.background='white'; }}
                      onBlur={e  => { e.target.style.borderColor='#F3F4F6'; e.target.style.boxShadow='none'; e.target.style.background='#FAFAFA'; }}
                    />
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} type="submit" className="btn-shine" style={{
                      padding: '1rem',
                      background: 'linear-gradient(135deg,#EC4899,#A855F7)',
                      color: 'white', border: 'none',
                      borderRadius: '0.875rem',
                      fontFamily: "'Baloo 2',cursive",
                      fontWeight: 800, fontSize: '1.05rem',
                      cursor: 'pointer',
                      boxShadow: '0 4px 24px rgba(236,72,153,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    }}>
                      <Send size={18} /> Submit Review
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Main Section ─── */
const Testimonials = () => {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);

  return (
    <section
      id="testimonials"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(160deg,#FFFBEB 0%,#FFF0F6 50%,#EFF6FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '5rem',
      }}
    >
      <KidBackground variant="doodle" opacity={0.85} />

      {/* Attention-grabbing header */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', marginBottom: '4rem' }}>
        {/* Pulsing badge */}
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 28px',
            background: 'linear-gradient(135deg,#F97316,#FBBF24)',
            borderRadius: '999px',
            fontFamily: "'Baloo 2',cursive",
            fontWeight: 800,
            fontSize: '0.9rem',
            color: 'white',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            boxShadow: '0 0 0 0 rgba(249,115,22,0.4)',
            animation: 'glow-pulse 2.5s ease-in-out infinite',
          }}
        >
          <Sparkles size={16} /> 💬 Parents Love Us <Sparkles size={16} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Fredoka One',cursive",
            fontSize: 'clamp(2.5rem,6vw,5rem)',
            color: '#1E1B4B',
            margin: '0 0 0.5rem',
            lineHeight: 1.1,
          }}
        >
          What{' '}
          <span style={{
            background: 'linear-gradient(135deg,#F97316,#FBBF24)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px rgba(249,115,22,0.3))',
          }}>Happy Parents</span>
          {' '}Say 🌟
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '6px',
            width: '180px',
            background: 'linear-gradient(135deg,#F97316,#FBBF24,#EC4899,#A855F7)',
            borderRadius: '999px',
            margin: '0.75rem auto 1rem',
            transformOrigin: 'center',
          }}
        />

        {/* Overall rating strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            background: 'white',
            borderRadius: '999px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: '2px solid #FEF3C7',
            marginBottom: '3rem',
          }}
        >
          <div style={{ display: 'flex', gap: '4px' }}>
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="#FBBF24" style={{ color: '#FBBF24' }} />)}
          </div>
          <span style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 800, color: '#1E1B4B', fontSize: '1rem' }}>5.0</span>
          <div style={{ width: '1px', height: '20px', background: '#E5E7EB' }} />
          <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: '#6B7280', fontSize: '0.9rem' }}>{reviews.length}+ Happy Families</span>
          <div style={{ width: '1px', height: '20px', background: '#E5E7EB' }} />
          <Heart size={16} fill="#EC4899" style={{ color: '#EC4899' }} />
          <span style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: '#6B7280', fontSize: '0.9rem' }}>Trusted School</span>
        </motion.div>
      </div>

      {/* Featured Review (big) */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '4rem', padding: '0 1.5rem' }}>
        <FeaturedReview reviews={reviews} />
      </div>

      {/* Auto-scrolling marquee */}
      <div style={{ position: 'relative', zIndex: 1, marginBottom: '4rem' }}>
        <ReviewMarquee reviews={reviews} />
      </div>

      {/* Write Review CTA */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Baloo 2',cursive", fontWeight: 700, color: '#6B7280', marginBottom: '1.5rem', fontSize: '1.05rem' }}
        >
          Had a great experience? We'd love to hear from you! 🎈
        </motion.p>
        <WriteReview onSubmit={rev => setReviews(r => [rev, ...r])} />
      </div>
    </section>
  );
};

export default Testimonials;

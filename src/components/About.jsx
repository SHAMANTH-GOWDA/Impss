import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutBg from '../assets/about_bg.jpg';
import { BookOpen, Palette, PlayCircle, Heart, Star, Trophy, Users, Smile } from 'lucide-react';
import { motion } from 'framer-motion';
import KidBackground from './KidBackground';

gsap.registerPlugin(ScrollTrigger);

const featureCards = [
  { icon: BookOpen,   label: 'Academics',      color: '#3B82F6', bg: '#EFF6FF',  emoji: '📚' },
  { icon: PlayCircle, label: 'Structured Play', color: '#22C55E', bg: '#F0FDF4',  emoji: '🎮' },
  { icon: Palette,    label: 'Creative Arts',   color: '#EC4899', bg: '#FDF2F8',  emoji: '🎨' },
  { icon: Heart,      label: 'Social Skills',   color: '#F97316', bg: '#FFF7ED',  emoji: '❤️' },
  { icon: Trophy,     label: 'Achievement',     color: '#A855F7', bg: '#FAF5FF',  emoji: '🏆' },
  { icon: Smile,      label: 'Happy Minds',     color: '#FBBF24', bg: '#FFFBEB',  emoji: '😊' },
];

const StatBubble = ({ value, label, color }) => (
  <div style={{
    textAlign: 'center',
    padding: '1.5rem 1rem',
    borderRadius: '1.5rem',
    background: color + '15',
    border: `2px solid ${color}30`,
  }}>
    <div style={{
      fontFamily: "'Fredoka One', cursive",
      fontSize: '2.5rem',
      color: color,
      lineHeight: 1,
      marginBottom: '0.25rem',
    }}>{value}</div>
    <div style={{
      fontFamily: "'Baloo 2', cursive",
      fontWeight: 700,
      fontSize: '0.85rem',
      color: '#6B7280',
    }}>{label}</div>
  </div>
);

const About = () => {
  const sectionRef = useRef();
  const contentRef = useRef();
  const imageRef   = useRef();

  useEffect(() => {
    ScrollTrigger.batch('.about-card', {
      onEnter: (els) => {
        gsap.fromTo(els,
          { opacity: 0, y: 40, scale: 0.85 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'back.out(1.5)' }
        );
      },
      once: true,
    });

    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -60, scale: 0.92 },
      {
        opacity: 1, x: 0, scale: 1, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: 'relative',
        padding: '6rem 1.5rem',
        background: 'linear-gradient(160deg, #FFFBEB 0%, #FFF0F6 50%, #EFF6FF 100%)',
        overflow: 'hidden',
        scrollMarginTop: '5rem',
      }}
    >
      <KidBackground variant="stars" opacity={0.9} />
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(251,191,36,0.2) 0%, transparent 70%)',
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        animation: 'morphBlob 10s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', right: '-5%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, transparent 70%)',
        borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
        animation: 'morphBlob 12s ease-in-out infinite reverse',
      }} />

      {/* Section label */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <span style={{
          display: 'inline-block',
          padding: '6px 20px',
          background: 'linear-gradient(135deg, #FBBF24, #F97316)',
          borderRadius: '999px',
          fontFamily: "'Baloo 2', cursive",
          fontWeight: 800,
          fontSize: '0.85rem',
          color: 'white',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: '0 4px 16px rgba(251,191,36,0.3)',
        }}>🌟 About Our School</span>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Two column layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
            width: '100%',
          }}>
            {/* Image side */}
            <div ref={imageRef} style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '140px', height: '140px',
                background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Fredoka One', cursive",
                fontSize: '0.95rem',
                color: 'white',
                textAlign: 'center',
                zIndex: 10,
                boxShadow: '0 8px 32px rgba(251,191,36,0.4)',
                lineHeight: 1.3,
                padding: '1rem',
                animation: 'float 5s ease-in-out infinite',
              }}>
                🏆<br/>Award<br/>Winning<br/>School
              </div>

              <div style={{
                borderRadius: '2.5rem',
                overflow: 'hidden',
                boxShadow: '0 24px 80px rgba(0,0,0,0.15)',
                border: '6px solid white',
                position: 'relative',
              }}>
                <img
                  src={aboutBg}
                  alt="I Master School Life"
                  style={{ width: '100%', height: '520px', objectFit: 'cover', display: 'block' }}
                />
                {/* Overlay card */}
                <div style={{
                  position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '1.5rem',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '6px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="#FBBF24" style={{ color: '#FBBF24' }} />
                    ))}
                  </div>
                  <p style={{
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: 700,
                    color: '#374151',
                    fontSize: '0.95rem',
                    margin: 0,
                    fontStyle: 'italic',
                  }}>
                    "Our school nurtures young minds with carefully designed learning, play, and creativity."
                  </p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div ref={contentRef} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: '#1E1B4B',
                  lineHeight: 1.1,
                  marginBottom: '1rem',
                }}>
                  A Fun Place for<br />
                  <span style={{
                    background: 'linear-gradient(135deg, #3B82F6, #A855F7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>Learning</span>
                  {' & '}
                  <span style={{
                    background: 'linear-gradient(135deg, #EC4899, #F97316)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>Growth</span>
                </h2>
                <div style={{
                  height: '5px',
                  width: '100px',
                  background: 'linear-gradient(135deg, #FBBF24, #EC4899, #3B82F6)',
                  borderRadius: '999px',
                }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "I Master Pre School provides a warm and inspiring environment where every child feels safe to explore, create, and discover their potential.",
                  "Our curriculum balances child-led play with guided instructional learning, preparing children for primary school while letting them enjoy every moment of their childhood."
                ].map((text, i) => (
                  <p key={i} style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: '1.05rem',
                    color: '#4B5563',
                    lineHeight: 1.75,
                    margin: 0,
                    paddingLeft: '1rem',
                    borderLeft: `4px solid ${['#3B82F6', '#EC4899'][i]}30`,
                  }}>{text}</p>
                ))}
              </div>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
              }}>
                <StatBubble value="500+" label="Happy Kids"    color="#3B82F6" />
                <StatBubble value="10+"  label="Years of Joy"  color="#EC4899" />
                <StatBubble value="15+"  label="Activities"    color="#22C55E" />
              </div>
            </div>
          </div>

          {/* Feature cards grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.25rem',
            width: '100%',
          }}>
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                className="about-card"
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: card.bg,
                  borderRadius: '1.5rem',
                  padding: '1.75rem 1rem',
                  textAlign: 'center',
                  border: `2px solid ${card.color}25`,
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 12px 40px ${card.color}25`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{card.emoji}</div>
                <div style={{
                  width: '48px', height: '48px',
                  background: card.color,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                  boxShadow: `0 4px 16px ${card.color}40`,
                }}>
                  <card.icon size={22} color="white" />
                </div>
                <span style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#1E1B4B',
                }}>{card.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

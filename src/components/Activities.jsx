import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, PlayCircle, Palette, Users, Heart, Music, Globe, Dumbbell } from 'lucide-react';
import KidBackground from './KidBackground';

import imgLearning from '../assets/learning_activity.png';
import imgPlay     from '../assets/play_activity.png';
import imgCreative from '../assets/about_bg.jpg';
import imgSocial   from '../assets/parents_kids_1.png';
import imgPhysical from '../assets/parents_kids_2.png';

const activities = [
  {
    title: 'Learning & Education',
    desc: 'A curriculum based on curiosity and discovery, preparing little minds for a big future.',
    icon: BookOpen, emoji: '📚',
    img: imgLearning,
    gradient: 'linear-gradient(135deg, #3B82F6, #38BDF8)',
    shadow: 'rgba(59,130,246,0.3)',
    badge: '#EFF6FF',
  },
  {
    title: 'Play Area',
    desc: 'Safe and vibrant spaces where children learn the most important lessons through play.',
    icon: PlayCircle, emoji: '🎮',
    img: imgPlay,
    gradient: 'linear-gradient(135deg, #FBBF24, #F97316)',
    shadow: 'rgba(251,191,36,0.3)',
    badge: '#FFFBEB',
  },
  {
    title: 'Creative Activities',
    desc: 'Nurturing expression through drawing, music, and dance in our dedicated art studios.',
    icon: Palette, emoji: '🎨',
    img: imgCreative,
    gradient: 'linear-gradient(135deg, #EC4899, #A855F7)',
    shadow: 'rgba(236,72,153,0.3)',
    badge: '#FDF2F8',
  },
  {
    title: 'Social & Group Activities',
    desc: 'Building confidence and friendship through collaborative projects and team activities.',
    icon: Users, emoji: '🤝',
    img: imgSocial,
    gradient: 'linear-gradient(135deg, #A855F7, #7C3AED)',
    shadow: 'rgba(168,85,247,0.3)',
    badge: '#FAF5FF',
  },
  {
    title: 'Physical Activities',
    desc: 'Developing gross motor skills and healthy habits through joyful physical exercises.',
    icon: Heart, emoji: '🏃',
    img: imgPhysical,
    gradient: 'linear-gradient(135deg, #22C55E, #10B981)',
    shadow: 'rgba(34,197,94,0.3)',
    badge: '#F0FDF4',
  },
];

const ActivityCard = ({ activity, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] }}
    whileHover={{ y: -16, scale: 1.03 }}
    style={{
      borderRadius: '2rem',
      overflow: 'hidden',
      background: 'white',
      boxShadow: `0 8px 40px ${activity.shadow}`,
      border: '3px solid white',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      transition: 'box-shadow 0.3s',
      position: 'relative',
    }}
    onMouseEnter={e => e.currentTarget.style.boxShadow = `0 24px 80px ${activity.shadow}`}
    onMouseLeave={e => e.currentTarget.style.boxShadow = `0 8px 40px ${activity.shadow}`}
  >
    {/* Image */}
    <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
      <img
        src={activity.img}
        alt={activity.title}
        style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.6s ease',
        }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'}
      />
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)',
      }} />
      {/* Icon badge */}
      <div style={{
        position: 'absolute', top: '1rem', right: '1rem',
        width: '52px', height: '52px',
        background: activity.gradient,
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: `0 4px 16px ${activity.shadow}`,
        border: '3px solid white',
      }}>
        <activity.icon size={22} color="white" />
      </div>
      {/* Emoji badge */}
      <div style={{
        position: 'absolute', bottom: '1rem', left: '1rem',
        fontSize: '1.5rem',
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))',
      }}>{activity.emoji}</div>
    </div>

    {/* Content */}
    <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <h3 style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: '1.5rem',
        color: '#1E1B4B',
        margin: 0,
        letterSpacing: '0.01em',
      }}>{activity.title}</h3>
      <p style={{
        fontFamily: "'Nunito', sans-serif",
        fontSize: '0.95rem',
        color: '#6B7280',
        lineHeight: 1.7,
        margin: 0,
        flex: 1,
      }}>{activity.desc}</p>
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 16px',
        background: activity.badge,
        borderRadius: '999px',
        fontFamily: "'Baloo 2', cursive",
        fontWeight: 800,
        fontSize: '0.8rem',
        background: activity.gradient,
        color: 'white',
        width: 'fit-content',
        marginTop: '0.5rem',
        letterSpacing: '0.04em',
      }}>
        Explore ›
      </div>
    </div>
  </motion.div>
);

const Activities = () => (
  <section
    id="activities"
    style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(160deg, #FAF5FF 0%, #EFF6FF 50%, #F0FDF4 100%)',
      position: 'relative',
      overflow: 'hidden',
      scrollMarginTop: '5rem',
    }}
  >
    <KidBackground variant="confetti" opacity={0.85} />
    {/* Decorative dots */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(circle, rgba(168,85,247,0.1) 1.5px, transparent 1.5px)',
      backgroundSize: '24px 24px',
      pointerEvents: 'none',
    }} />

    {/* Floating decorations */}
    {['🎨', '⭐', '🎵', '📚', '🌟'].map((e, i) => (
      <div key={i} style={{
        position: 'absolute',
        fontSize: '2.5rem',
        top:  `${10 + i * 18}%`,
        left: i % 2 === 0 ? '2%' : undefined,
        right: i % 2 !== 0 ? '2%' : undefined,
        animation: `float ${4 + i}s ease-in-out infinite`,
        animationDelay: `${i * 0.5}s`,
        opacity: 0.4,
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
        pointerEvents: 'none',
      }}>{e}</div>
    ))}

    <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span style={{
            display: 'inline-block',
            padding: '6px 20px',
            background: 'linear-gradient(135deg, #A855F7, #7C3AED)',
            borderRadius: '999px',
            fontFamily: "'Baloo 2', cursive",
            fontWeight: 800,
            fontSize: '0.85rem',
            color: 'white',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            boxShadow: '0 4px 16px rgba(168,85,247,0.3)',
          }}>🎯 What We Offer</span>

          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: '#1E1B4B',
            margin: '0 0 1rem',
            lineHeight: 1.1,
          }}>
            Activities{' '}
            <span style={{
              background: 'linear-gradient(135deg, #FBBF24, #F97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Provided</span>
            {' '}in School
          </h2>
          <div style={{
            height: '5px',
            width: '120px',
            background: 'linear-gradient(135deg, #A855F7, #EC4899, #FBBF24)',
            borderRadius: '999px',
            margin: '0 auto 1.25rem',
          }} />
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontWeight: 700,
            color: '#6B7280',
            fontSize: '1.05rem',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Nurturing every dimension of your child's amazing growth 🌱
          </p>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
      }}>
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Activities;

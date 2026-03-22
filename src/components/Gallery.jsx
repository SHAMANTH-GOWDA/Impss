import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import KidBackground from './KidBackground';

import img1 from '../assets/hero_bg.jpg';
import img3 from '../assets/intro_img.png';
import img4 from '../assets/learning_activity.png';
import img5 from '../assets/play_activity.png';

import pa1 from '../assets/play_area_1.png';
import pa2 from '../assets/play_area_2.png';
import pa3 from '../assets/play_area_3.png';
import pa4 from '../assets/play_area_4.jpg';
import pa5 from '../assets/play_area_5.jpg';

import pk1 from '../assets/parents_kids_1.png';
import pk2 from '../assets/parents_kids_2.png';
import pk3 from '../assets/parents_kids_3.jpg';

const categoryConfig = [
  { title: 'Our School',     emoji: '🏫', gradient: 'linear-gradient(135deg, #3B82F6, #38BDF8)', images: [img1, img3, img1, img3] },
  { title: 'Play Area',      emoji: '🎮', gradient: 'linear-gradient(135deg, #22C55E, #10B981)', images: [pa1, pa2, pa3, pa4, pa5] },
  { title: 'Parents & Kids', emoji: '👨‍👩‍👧', gradient: 'linear-gradient(135deg, #EC4899, #A855F7)', images: [pk1, pk2, pk3] },
];

const CategoryRow = ({ title, emoji, gradient, images }) => (
  <div style={{ marginBottom: '0' }}>
    {/* Category header */}
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '0 1.5rem',
      marginBottom: '1.25rem',
    }}>
      <div style={{
        width: '44px', height: '44px',
        background: gradient,
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.3rem',
        boxShadow: `0 4px 16px rgba(0,0,0,0.15)`,
        flexShrink: 0,
      }}>{emoji}</div>
      <h3 style={{
        fontFamily: "'Fredoka One', cursive",
        fontSize: '1.6rem',
        color: '#1E1B4B',
        margin: 0,
        letterSpacing: '0.01em',
      }}>{title}</h3>
      <div style={{
        flex: 1,
        height: '3px',
        background: gradient,
        borderRadius: '999px',
        opacity: 0.3,
      }} />
    </div>

    {/* Scrollable row */}
    <div style={{
      display: 'flex',
      gap: '1.25rem',
      overflowX: 'auto',
      padding: '0.5rem 1.5rem 1.5rem',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      cursor: 'grab',
    }}>
      {images.map((img, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -12, scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            minWidth: '320px',
            height: '240px',
            borderRadius: '1.75rem',
            overflow: 'hidden',
            flexShrink: 0,
            border: '4px solid white',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            position: 'relative',
            background: '#f3f4f6',
            cursor: 'pointer',
          }}
        >
          <img
            src={img}
            alt={`${title} ${i + 1}`}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
          {/* Hover gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)`,
            opacity: 0,
            transition: 'opacity 0.3s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0}
          />
          {/* Number badge */}
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            width: '32px', height: '32px',
            background: gradient,
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Baloo 2', cursive",
            fontWeight: 800,
            fontSize: '0.8rem',
            color: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}>{i + 1}</div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Gallery = () => (
  <section
    id="gallery"
    style={{
      padding: '6rem 0',
      background: 'linear-gradient(160deg, #FFFBEB 0%, #EFF6FF 50%, #F0FDF4 100%)',
      overflow: 'hidden',
      scrollMarginTop: '5rem',
    }}
  >
    <KidBackground variant="rainbow" opacity={0.8} />
    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 1.5rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span style={{
          display: 'inline-block',
          padding: '6px 20px',
          background: 'linear-gradient(135deg, #38BDF8, #3B82F6)',
          borderRadius: '999px',
          fontFamily: "'Baloo 2', cursive",
          fontWeight: 800,
          fontSize: '0.85rem',
          color: 'white',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
          boxShadow: '0 4px 16px rgba(59,130,246,0.3)',
        }}>📸 Photo Gallery</span>

        <h2 style={{
          fontFamily: "'Fredoka One', cursive",
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          color: '#1E1B4B',
          margin: '0 0 1rem',
          lineHeight: 1.1,
        }}>
          Our{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3B82F6, #A855F7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Colorful</span>
          {' '}Gallery
        </h2>
        <div style={{
          height: '5px', width: '100px',
          background: 'linear-gradient(135deg, #3B82F6, #EC4899, #FBBF24)',
          borderRadius: '999px',
          margin: '0 auto 1rem',
        }} />
        <p style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 700,
          color: '#6B7280',
          fontSize: '1.05rem',
        }}>
          Capturing small moments and big smiles 😄
        </p>
      </motion.div>
    </div>

    {/* Category rows */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {categoryConfig.map((cat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
        >
          <CategoryRow {...cat} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Gallery;

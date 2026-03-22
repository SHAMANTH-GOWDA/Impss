import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Heart, Star, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = ['Home', 'About School', 'Activities', 'Gallery', 'Admissions'];
  const sectionIds = ['', 'about', 'activities', 'gallery', 'admissions'];

  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Main footer body */}
      <div style={{
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 60%, #4C1D95 100%)',
        padding: '5rem 1.5rem 2rem',
        position: 'relative',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: '-20%', right: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
          animation: 'pulse-slow 5s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-5%',
          width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
          animation: 'pulse-slow 7s ease-in-out infinite',
        }} />

        {/* Floating emojis */}
        {['⭐','🎨','📚','🌟','🎈'].map((e, i) => (
          <div key={i} style={{
            position: 'absolute',
            fontSize: '1.8rem',
            top:  `${10 + i * 18}%`,
            right: `${2 + i * 4}%`,
            opacity: 0.15,
            animation: `float ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
            pointerEvents: 'none',
          }}>{e}</div>
        ))}

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}>

            {/* Brand */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Logo */}
              <div style={{
                width: '70px', height: '70px',
                background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Fredoka One', cursive",
                fontSize: '1.3rem', color: 'white',
                boxShadow: '0 8px 32px rgba(251,191,36,0.4)',
                animation: 'glow-pulse 3s ease-in-out infinite',
              }}>IMPS</div>
              <div>
                <h2 style={{
                  fontFamily: "'Fredoka One', cursive",
                  fontSize: '1.75rem',
                  color: 'white',
                  margin: '0 0 0.25rem',
                  letterSpacing: '0.02em',
                }}>
                  IMPS{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>Kunigal</span>
                </h2>
                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                  fontStyle: 'italic',
                }}>I Master Pre School</p>
              </div>
              <p style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                margin: 0,
              }}>
                Providing a joyful and safe environment for children to learn and grow since 2015. 🌱
              </p>
              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#FBBF24" style={{ color: '#FBBF24' }} />
                ))}
                <span style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  color: '#FDE68A',
                  marginLeft: '4px',
                }}>5.0 Rated</span>
              </div>
              {/* Social links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {[
                  { Icon: Instagram, color: '#EC4899', href: '#' },
                  { Icon: Facebook,  color: '#3B82F6', href: '#' },
                  { Icon: Youtube,   color: '#EF4444', href: '#' },
                ].map(({ Icon, color, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    style={{
                      width: '40px', height: '40px',
                      borderRadius: '50%',
                      background: color + '25',
                      border: `2px solid ${color}50`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: color,
                      textDecoration: 'none',
                      transition: 'transform 0.2s, background 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform='scale(1.15)'; e.currentTarget.style.background=color+'50'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.background=color+'25'; }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '1.2rem',
                color: 'white',
                margin: 0,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>Quick Links</h4>
              <div style={{
                height: '3px', width: '50px',
                background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                borderRadius: '999px',
              }} />
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {links.map((label, i) => (
                  <li key={i}>
                    <a
                      href={sectionIds[i] ? `#${sectionIds[i]}` : '#'}
                      onClick={e => {
                        if (sectionIds[i]) {
                          e.preventDefault();
                          document.getElementById(sectionIds[i])?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      style={{
                        fontFamily: "'Baloo 2', cursive",
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'rgba(255,255,255,0.65)',
                        textDecoration: 'none',
                        transition: 'color 0.2s, padding-left 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color='#FBBF24'; e.currentTarget.style.paddingLeft='8px'; }}
                      onMouseLeave={e => { e.currentTarget.style.color='rgba(255,255,255,0.65)'; e.currentTarget.style.paddingLeft='0'; }}
                    >
                      <span style={{ color: '#FBBF24', fontSize: '0.6rem' }}>●</span> {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '1.2rem',
                color: 'white',
                margin: 0,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>Connect</h4>
              <div style={{
                height: '3px', width: '50px',
                background: 'linear-gradient(135deg, #22C55E, #10B981)',
                borderRadius: '999px',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: Phone,  color: '#22C55E', text: '+91-9449368682', href: 'tel:+919449368682' },
                  { icon: Mail,   color: '#38BDF8', text: 'info@imaster.com', href: 'mailto:info@imaster.com' },
                ].map(({ icon: Icon, color, text, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      textDecoration: 'none',
                      padding: '0.6rem 0.875rem',
                      borderRadius: '0.75rem',
                      background: color + '12',
                      border: `1.5px solid ${color}25`,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background=color+'25'}
                    onMouseLeave={e => e.currentTarget.style.background=color+'12'}
                  >
                    <Icon size={17} style={{ color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                      {text}
                    </span>
                  </a>
                ))}
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                  padding: '0.6rem 0.875rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(251,191,36,0.08)',
                  border: '1.5px solid rgba(251,191,36,0.15)',
                }}>
                  <MapPin size={17} style={{ color: '#FBBF24', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    Vidyanagar, Kunigal, Tumkur<br />Karnataka 572130
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{
                fontFamily: "'Fredoka One', cursive",
                fontSize: '1.2rem',
                color: 'white',
                margin: 0,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>Join Us 🎓</h4>
              <div style={{
                height: '3px', width: '50px',
                background: 'linear-gradient(135deg, #EC4899, #A855F7)',
                borderRadius: '999px',
              }} />
              <div style={{
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '1.25rem',
                border: '2px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <p style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.7)',
                  margin: 0,
                  lineHeight: 1.65,
                  fontStyle: 'italic',
                }}>
                  "Watching your child grow with a big smile is our greatest reward." 🌟
                </p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-shine"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.875rem',
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(251,191,36,0.3)',
                    letterSpacing: '0.02em',
                  }}
                >
                  🎒 Apply for Admission
                </motion.button>
                <a
                  href="https://wa.me/919449368682"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.9rem',
                    background: '#25D366',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.875rem',
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    textAlign: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
                    boxSizing: 'border-box',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.45)',
              margin: 0,
            }}>© 2026 I Master Pre School · All rights reserved.</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>Made with</span>
              <Heart size={15} fill="#EC4899" style={{ color: '#EC4899' }} />
              <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>for happy children</span>
            </div>

            {/* Back to top */}
            <motion.button
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              style={{
                width: '40px', height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FBBF24, #F97316)',
                border: 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(251,191,36,0.35)',
              }}
            >
              <ArrowUp size={18} color="white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

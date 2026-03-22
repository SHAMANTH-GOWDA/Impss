import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Baby, Phone, MessageCircle, Sparkles, CheckCircle } from 'lucide-react';
import KidBackground from './KidBackground';

const Admissions = () => {
  const [formData, setFormData]   = useState({ parentName: '', childName: '', mobile: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { parentName, childName, mobile } = formData;
    const message = `Hello I Master Pre School! 🌟%0A%0AI am interested in admission for my child.%0A%0A👤 *Parent Name:* ${parentName}%0A👶 *Child Name:* ${childName}%0A📱 *Mobile:* ${mobile}%0A%0ALooking forward to hearing from you!`;
    const whatsappUrl = `https://wa.me/919449368682?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="admissions"
      style={{
        padding: '6rem 1.5rem',
        background: 'linear-gradient(160deg, #FFF7ED 0%, #FDF2F8 50%, #FAF5FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        scrollMarginTop: '5rem',
      }}
    >
    <KidBackground variant="clouds" opacity={0.9} />
      {/* Background blobs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse-slow 4s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'pulse-slow 6s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{
            display: 'inline-block',
            padding: '6px 20px',
            background: 'linear-gradient(135deg, #EC4899, #F97316)',
            borderRadius: '999px',
            fontFamily: "'Baloo 2', cursive",
            fontWeight: 800,
            fontSize: '0.85rem',
            color: 'white',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
            boxShadow: '0 4px 16px rgba(236,72,153,0.3)',
          }}>🎓 Join Our Family</span>
          <h2 style={{
            fontFamily: "'Fredoka One', cursive",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: '#1E1B4B',
            margin: '0 0 0.5rem',
          }}>
            Ready to Join the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #EC4899, #A855F7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Fun? 🎉</span>
          </h2>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            background: 'white',
            borderRadius: '2.5rem',
            padding: 'clamp(2rem, 5vw, 4rem)',
            boxShadow: '0 24px 80px rgba(236,72,153,0.12), 0 4px 20px rgba(0,0,0,0.06)',
            border: '3px solid rgba(236,72,153,0.1)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '0.5rem',
              animation: 'wiggle 2s ease-in-out infinite',
              display: 'inline-block',
              width: 'fit-content',
            }}>🎒</div>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '1.05rem',
              color: '#4B5563',
              lineHeight: 1.75,
              margin: 0,
            }}>
              Admissions for the <strong>2026-27 session</strong> are now open!
              Fill in the details and we'll connect with you via WhatsApp instantly. 📲
            </p>

            {/* Features list */}
            {[
              { icon: '⚡', text: 'Instant WhatsApp Response' },
              { icon: '🎪', text: 'School Tour Available' },
              { icon: '🎁', text: 'Admission Kit for New Joiners' },
              { icon: '💰', text: 'Flexible Fee Structure' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: `hsl(${i * 60 + 30}, 85%, 97%)`,
                borderRadius: '1rem',
                border: `1.5px solid hsl(${i * 60 + 30}, 70%, 90%)`,
              }}>
                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                <span style={{
                  fontFamily: "'Baloo 2', cursive",
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: '#374151',
                }}>{item.text}</span>
              </div>
            ))}

            {/* WhatsApp direct link */}
            <a
              href="https://wa.me/919449368682"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.25rem',
                background: '#25D366',
                color: 'white',
                borderRadius: '1rem',
                fontFamily: "'Baloo 2', cursive",
                fontWeight: 800,
                fontSize: '1rem',
                textDecoration: 'none',
                width: 'fit-content',
                boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='scale(1.05)'; e.currentTarget.style.boxShadow='0 8px 32px rgba(37,211,102,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='scale(1)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(37,211,102,0.35)'; }}
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div>
            <h3 style={{
              fontFamily: "'Fredoka One', cursive",
              fontSize: '1.75rem',
              color: '#1E1B4B',
              marginBottom: '1.5rem',
            }}>Apply for Admission 📝</h3>

            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '2.5rem',
                  background: 'linear-gradient(135deg, #F0FDF4, #DCFCE7)',
                  borderRadius: '1.5rem',
                  border: '2px solid #86EFAC',
                }}
              >
                <CheckCircle size={56} style={{ color: '#22C55E', margin: '0 auto 1rem', display: 'block' }} />
                <h4 style={{ fontFamily: "'Fredoka One', cursive", fontSize: '1.5rem', color: '#166534', margin: '0 0 0.5rem' }}>
                  Sent to WhatsApp! 🎉
                </h4>
                <p style={{ color: '#166534', fontFamily: "'Baloo 2', cursive", fontWeight: 700, margin: 0 }}>
                  We'll get back to you very soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Parent Name', icon: User,  field: 'parentName', type: 'text',  ph: 'Enter your name' },
                  { label: 'Child Name',  icon: Baby,  field: 'childName',  type: 'text',  ph: "Enter child's name" },
                  { label: 'Mobile No.', icon: Phone, field: 'mobile',     type: 'tel',   ph: 'Your mobile number' },
                ].map(({ label, icon: Icon, field, type, ph }) => (
                  <div key={field}>
                    <label style={{
                      display: 'block',
                      fontFamily: "'Baloo 2', cursive",
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      color: '#374151',
                      marginBottom: '6px',
                      marginLeft: '4px',
                    }}>{label}</label>
                    <div style={{ position: 'relative' }}>
                      <Icon size={18} style={{
                        position: 'absolute', left: '14px',
                        top: '50%', transform: 'translateY(-50%)',
                        color: '#9CA3AF',
                      }} />
                      <input
                        required
                        type={type}
                        placeholder={ph}
                        value={formData[field]}
                        onChange={e => setFormData({ ...formData, [field]: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.9rem 1rem 0.9rem 2.75rem',
                          borderRadius: '0.875rem',
                          border: '2px solid #F3F4F6',
                          background: '#FAFAFA',
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: 600,
                          fontSize: '0.95rem',
                          outline: 'none',
                          transition: 'border-color 0.2s, box-shadow 0.2s',
                          boxSizing: 'border-box',
                        }}
                        onFocus={e => { e.target.style.borderColor = '#EC4899'; e.target.style.boxShadow = '0 0 0 4px rgba(236,72,153,0.1)'; e.target.style.background = 'white'; }}
                        onBlur={e  => { e.target.style.borderColor = '#F3F4F6'; e.target.style.boxShadow = 'none'; e.target.style.background = '#FAFAFA'; }}
                      />
                    </div>
                  </div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="btn-shine"
                  style={{
                    width: '100%',
                    padding: '1.1rem',
                    background: 'linear-gradient(135deg, #EC4899, #A855F7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '1rem',
                    fontFamily: "'Baloo 2', cursive",
                    fontWeight: 800,
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    boxShadow: '0 8px 32px rgba(236,72,153,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    letterSpacing: '0.02em',
                    marginTop: '0.5rem',
                  }}
                >
                  <Sparkles size={18} /> Apply Now via WhatsApp <Send size={18} />
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Intro from './components/Intro';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

function App() {
  const [introFinished, setIntroFinished] = useState(() => {
    // Check if we already saw the intro in this session to prevent repeated waiting
    return sessionStorage.getItem('imps_intro_seen') === 'true';
  });

  const handleIntroFinish = () => {
    sessionStorage.setItem('imps_intro_seen', 'true');
    setIntroFinished(true);
  };

  useEffect(() => {
    // Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  if (!introFinished) {
    return <Intro onFinish={handleIntroFinish} />;
  }

  return (
    <main className="relative bg-[#FFFDF5] overflow-x-hidden">
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <Admissions />
      <Testimonials />
      <MapSection />
      <Footer />
    </main>
  );
}

export default App;

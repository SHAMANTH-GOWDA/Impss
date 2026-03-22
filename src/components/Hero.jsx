import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial, Sphere, Box, Torus } from '@react-three/drei';
import gsap from 'gsap';
import { ChevronRight, ArrowDownCircle } from 'lucide-react';
import schoolHeroImg from '../assets/hero_school_front.jpg';

const Shape = ({ position, type: Type, color, speed = 1 }) => {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.rotation.x = Math.cos(t / 4) / 2;
    mesh.current.rotation.y = Math.sin(t / 4) / 2;
    mesh.current.rotation.z = Math.sin(t / 4) / 2;
    mesh.current.position.y = position[1] + Math.sin(t) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={position}>
        <Type args={[1, 1, 1]}>
          <MeshDistortMaterial
            color={color}
            speed={2}
            distort={0.4}
            roughness={0}
            metalness={0.8}
          />
        </Type>
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const bgRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    // Background Entrance Animation
    if (bgRef.current) {
      gsap.fromTo(bgRef.current, 
        { scale: 1.15, filter: 'blur(10px)', opacity: 0 },
        { scale: 1, filter: 'blur(0px)', opacity: 1, duration: 2.5, ease: "power2.out" }
      );
    }
    
    // Content Entrance
    if (contentRef.current && contentRef.current.children.length > 0) {
      gsap.fromTo(contentRef.current.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.8 }
      );
    }
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black flex-col">
      {/* Background Image with Overlay */}
      <div 
        ref={bgRef}
        className="absolute inset-0 bg-contain bg-no-repeat bg-top sm:bg-cover sm:bg-center z-0 opacity-80"
        style={{ backgroundImage: `url(${schoolHeroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black/95" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-40" style={{ pointerEvents: 'none', touchAction: 'none' }}>
        <Canvas style={{ pointerEvents: 'none' }}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          
          <Shape position={[-4, 2, -2]} type={Sphere} color="#FF6B6B" speed={0.7} />
          <Shape position={[4, -2, 0]} type={Torus} color="#4DABF7" speed={1.1} />
          <Shape position={[-5, -2, 1]} type={Box} color="#FCC419" speed={0.4} />
          <Shape position={[5, 2, -3]} type={Sphere} color="#51CF66" speed={1.3} />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center text-white pb-20 md:pb-0" style={{ pointerEvents: 'none' }}>
        <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 md:mb-8 pointer-events-auto">
          <span className="text-[10px] sm:text-xs md:text-base font-rounded font-black tracking-widest uppercase">
            ✨ Admission Open 2026-27
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-playful font-black mb-4 md:mb-6 leading-tight drop-shadow-2xl px-1">
          I MASTER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-blue drop-shadow-sm">
            PRE SCHOOL
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-3xl font-rounded font-bold max-w-2xl mx-auto mb-8 md:mb-12 text-white/90 leading-relaxed drop-shadow-lg italic px-2">
          "Where Every Child Learns, Plays, and Grows with Joy!"
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pointer-events-auto px-2 w-full max-w-md sm:max-w-none mx-auto">
          <button className="group w-full sm:w-auto px-4 py-3 sm:px-8 md:px-10 md:py-5 bg-brand-yellow text-gray-900 rounded-2xl font-rounded font-black text-base md:text-xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(252,196,25,0.4)] flex items-center justify-center gap-2 md:gap-3">
            Enroll Today <ChevronRight className="group-hover:translate-x-1 transition-transform w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="w-full sm:w-auto px-4 py-3 sm:px-8 md:px-10 md:py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 rounded-2xl font-rounded font-black text-base md:text-xl transition-all hover:bg-white/20 hover:border-white flex items-center justify-center">
            Take a Tour
          </button>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-white/40 hover:text-white transition-colors pointer-events-auto"
        onClick={() => {
          const aboutSection = document.getElementById('about');
          if (aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDownCircle className="w-12 h-12" />
      </motion.div>
    </section>
  );
};

export default Hero;

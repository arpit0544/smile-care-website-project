
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, PerspectiveCamera, Environment, useGLTF, Float } from '@react-three/drei';
import { Mesh, MathUtils, Vector3 } from 'three';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Smile, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import ScrollAnimationObserver from './ScrollAnimationObserver';

// Individual 3D card
interface CardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  active: boolean;
  index: number;
  totalCards: number;
  hovered: boolean;
  onHover: (index: number) => void;
  onUnhover: () => void;
}

const Card: React.FC<CardProps> = ({ 
  position, 
  rotation, 
  url, 
  active, 
  index, 
  totalCards, 
  hovered,
  onHover,
  onUnhover
}) => {
  const mesh = useRef<Mesh>(null);
  const texture = useTexture(url);
  
  // Calculate target position for circular arrangement
  const targetX = Math.sin((index / totalCards) * Math.PI * 2) * 4;
  const targetZ = Math.cos((index / totalCards) * Math.PI * 2) * 4;
  
  useFrame((state) => {
    if (!mesh.current) return;
    
    // Rotate the active card slightly for emphasis
    if (active) {
      mesh.current.rotation.y = MathUtils.lerp(
        mesh.current.rotation.y, 
        state.clock.getElapsedTime() * 0.1 % (Math.PI * 2), 
        0.01
      );
    } else {
      // Make non-active cards face the center
      const angle = Math.atan2(targetX, targetZ);
      mesh.current.rotation.y = MathUtils.lerp(mesh.current.rotation.y, angle, 0.05);
    }
    
    // Move cards to their positions with smooth transitions
    mesh.current.position.x = MathUtils.lerp(mesh.current.position.x, targetX, 0.05);
    mesh.current.position.z = MathUtils.lerp(mesh.current.position.z, targetZ, 0.05);
    mesh.current.position.y = MathUtils.lerp(
      mesh.current.position.y, 
      active ? 0.5 : 0, 
      0.05
    );
    
    // Scale the active card
    mesh.current.scale.setScalar(
      MathUtils.lerp(
        mesh.current.scale.x, 
        active ? 1.3 : hovered && index === hovered ? 1.1 : 1, 
        0.1
      )
    );
  });
  
  return (
    <mesh 
      ref={mesh} 
      position={position} 
      rotation={rotation} 
      castShadow 
      receiveShadow
      onPointerOver={() => onHover(index)}
      onPointerOut={onUnhover}
    >
      <planeGeometry args={[2, 1.5, 1]} />
      <meshStandardMaterial 
        map={texture}
        transparent={true}
        opacity={active ? 1 : 0.7}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
};

// Floating dental elements
const FloatingTooth = () => {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.3 + clock.getElapsedTime() * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={mesh} position={[3, 1, -2]} castShadow>
        <torusGeometry args={[0.5, 0.2, 16, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.1} />
      </mesh>
    </Float>
  );
};

const FloatingOrbits = () => {
  const group = useRef<THREE.Group>();
  
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.getElapsedTime() * 0.1;
  });
  
  return (
    // @ts-ignore
    <group ref={group}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[0, 0, 0]}>
          <torusGeometry args={[3 + i * 0.8, 0.04, 16, 100]} />
          <meshStandardMaterial color={i % 2 === 0 ? '#1FB6FF' : '#7E5BEF'} transparent opacity={0.6 - i * 0.1} />
        </mesh>
      ))}
    </group>
  );
};

// Camera that follows the active card
const CameraRig: React.FC<{ activeIndex: number, totalCards: number }> = ({ activeIndex, totalCards }) => {
  const cameraRef = useRef<any>(null);
  
  useFrame(() => {
    if (!cameraRef.current) return;
    
    // Camera position moves in a circle to focus on active card
    const angle = -(activeIndex / totalCards) * Math.PI * 2;
    const targetX = Math.sin(angle) * 8;
    const targetZ = Math.cos(angle) * 8;
    
    // Smooth camera movement
    cameraRef.current.position.x = MathUtils.lerp(cameraRef.current.position.x, targetX, 0.05);
    cameraRef.current.position.z = MathUtils.lerp(cameraRef.current.position.z, targetZ, 0.05);
    
    // Make camera look at the center
    cameraRef.current.lookAt(0, 0, 0);
  });
  
  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1.5, 8]} fov={45} />;
};

// Main slider component
const ThreeDImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Images for the slider
  const images = [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=800&q=80',
  ];
  
  const titles = [
    'Your Smile, Our Priority',
    'Advanced Dental Technology',
    'Comfortable Treatment Experience',
    'Comprehensive Dental Solutions',
    'Family & Cosmetic Dentistry',
  ];
  
  const subtitles = [
    'Experience personalized dental care at Smile Care Clinic',
    'Using the latest techniques for optimal results',
    'Gentle care in a relaxing environment',
    'All your dental needs under one roof',
    'Beautiful smiles for the whole family',
  ];
  
  // Parallax effect for hero content
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current!.getBoundingClientRect();
      
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      
      const contentElements = containerRef.current!.querySelectorAll('.parallax-content');
      contentElements.forEach((el, i) => {
        const depth = 0.5 + i * 0.2;
        gsap.to(el, {
          x: x * depth,
          y: y * depth,
          duration: 1,
          ease: "power2.out"
        });
      });
    };
    
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Auto-rotate timer
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [isPaused, images.length]);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-[90vh] relative overflow-hidden bg-gradient-to-b from-[#0A0E17] to-[#1F2937]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cyber Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="cyber-grid"></div>
      </div>
      
      {/* 3D Canvas */}
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        className="absolute inset-0 z-10"
      >
        <color attach="background" args={['#0A0E17']} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-5, 5, -5]} intensity={1} color="#1FB6FF" />
        <pointLight position={[5, 5, 5]} intensity={1} color="#7E5BEF" />
        <Environment preset="city" />
        
        {/* Camera that moves around to focus on active card */}
        <CameraRig activeIndex={activeIndex} totalCards={images.length} />
        
        {/* Floating elements */}
        <FloatingTooth />
        <FloatingOrbits />
        
        {/* Render the 3D cards */}
        {images.map((url, index) => (
          <Card 
            key={index}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            url={url}
            active={activeIndex === index}
            index={index}
            totalCards={images.length}
            hovered={hoveredCardIndex === index}
            onHover={setHoveredCardIndex}
            onUnhover={() => setHoveredCardIndex(null)}
          />
        ))}
      </Canvas>
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-20 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-3xl mx-auto text-white">
          <ScrollAnimationObserver animation="fade-up" delay={0.2} className="mb-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter parallax-content">
              <span className="text-gradient">{titles[activeIndex]}</span>
            </h1>
          </ScrollAnimationObserver>
          
          <ScrollAnimationObserver animation="fade-up" delay={0.4} className="mb-8">
            <p className="text-xl md:text-2xl parallax-content">
              {subtitles[activeIndex]}
            </p>
          </ScrollAnimationObserver>
          
          <ScrollAnimationObserver animation="fade-up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center parallax-content">
              <Link to="https://wa.me/9455535193" target="_blank" className="neo-button interactive group">
                <div className="neo-button-glow"></div>
                <Calendar size={20} className="mr-2 group-hover:animate-pulse" />
                Book Appointment
              </Link>
              <Link to="/treatments" className="glass-button interactive group">
                <Sparkles size={20} className="mr-2 group-hover:animate-spin-slow" />
                Explore Treatments
              </Link>
            </div>
          </ScrollAnimationObserver>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-30">
        <button 
          onClick={handlePrev} 
          className="neo-nav-button interactive left-4 group"
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} className="group-hover:scale-110 transition-transform" />
        </button>
        <button 
          onClick={handleNext}
          className="neo-nav-button interactive right-4 group"
          aria-label="Next slide"
        >
          <ArrowRight size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 interactive ${
              index === activeIndex 
                ? 'w-10 h-2 bg-gradient-to-r from-[#1FB6FF] to-[#7E5BEF] rounded-full' 
                : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDImageSlider;


import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, PerspectiveCamera, Environment } from '@react-three/drei';
import { Mesh, MathUtils } from 'three';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Smile } from 'lucide-react';

// Individual 3D card
interface CardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  active: boolean;
  index: number;
  totalCards: number;
}

const Card: React.FC<CardProps> = ({ position, rotation, url, active, index, totalCards }) => {
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
      active ? 0.2 : 0, 
      0.05
    );
    
    // Scale the active card
    mesh.current.scale.setScalar(
      MathUtils.lerp(
        mesh.current.scale.x, 
        active ? 1.2 : 1, 
        0.1
      )
    );
  });
  
  return (
    <mesh ref={mesh} position={position} rotation={rotation} castShadow receiveShadow>
      <planeGeometry args={[2, 1.5, 1]} />
      <meshStandardMaterial 
        // Fix TypeScript error - properly type the material properties
        map={texture}
        transparent={true}
        opacity={active ? 1 : 0.7}
      />
    </mesh>
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
  
  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 1, 8]} fov={50} />;
};

// Main slider component
const ThreeDImageSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
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
      className="w-full h-[80vh] relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 3D Canvas */}
      <Canvas shadows dpr={[1, 2]}>
        <color attach="background" args={['#F9FAFB']} />
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize={[1024, 1024]}
        />
        <Environment preset="city" />
        
        {/* Camera that moves around to focus on active card */}
        <CameraRig activeIndex={activeIndex} totalCards={images.length} />
        
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
          />
        ))}
      </Canvas>
      
      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10 flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {titles[activeIndex]}
          </h1>
          <p className="text-xl mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {subtitles[activeIndex]}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <Link to="https://wa.me/9455535193" target="_blank" className="appointment-btn">
              <Calendar size={20} />
              Book Appointment
            </Link>
            <Link to="/treatments" className="secondary-btn">
              <Smile size={20} />
              View Treatments
            </Link>
          </div>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-20">
        <button 
          onClick={handlePrev} 
          className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-all duration-300"
        >
          <ArrowLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/50 transition-all duration-300"
        >
          <ArrowRight size={24} />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThreeDImageSlider;

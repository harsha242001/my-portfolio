
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10" />
      
      {/* Floating Orbs */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-md animate-float opacity-10"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 150 + 50}px`,
            height: `${Math.random() * 150 + 50}px`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
            }20, transparent 70%)`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}
        />
      ))}

      {/* Interactive Mouse Glow */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-5 transition-transform duration-500 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 400}px, ${mousePosition.y - 400}px)`,
          background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 70%)',
        }}
      />
      
      {/* Morphing Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-morph-reverse" />
    </div>
  );
};

export default AnimatedBackground;

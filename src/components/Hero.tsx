
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Elements */}
      <div 
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-hero-entrance">
          {/* Animated Title with Typewriter Effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            <span className="inline-block animate-bounce-in-down">Automation</span>{" "}
            <span className="inline-block animate-bounce-in-down animation-delay-200">Test</span>{" "}
            <span className="inline-block animate-bounce-in-down animation-delay-400">Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-600">
            I design robust test automation frameworks that ensure software quality and accelerate development cycles. 
            Specializing in Java, Selenium, and end-to-end testing solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-800">
            <Button 
              size="lg"
              onClick={() => scrollToSection('portfolio')}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              View Portfolio
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-12 text-slate-400 animate-slide-up animation-delay-1000">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "10+", label: "Companies Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300 animate-counter">
                  {stat.number}
                </div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-floating">
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>

      {/* Morphing Background Shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-morph-reverse" />
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/30 rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/4 right-10 w-6 h-6 bg-purple-400/30 rounded-full animate-pulse" />
    </section>
  );
};

export default Hero;

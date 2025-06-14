import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Eye } from "lucide-react";
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
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
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-8 animate-hero-entrance">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm animate-bounce-in">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm text-blue-300">Available for new opportunities</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="block text-white animate-bounce-in-down">Alex</span>
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-bounce-in-down animation-delay-200">
                    Chen
                  </span>
                </h1>

                <div className="space-y-4 animate-slide-up animation-delay-400">
                  <p className="text-2xl font-medium text-blue-300">
                    Senior Test Automation Engineer
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    Crafting robust automation frameworks that ensure flawless software delivery.
                    <br />
                    Transforming quality assurance through innovative testing solutions and CI/CD excellence.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-600">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25 group"
                >
                  <Eye className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View Portfolio
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-600 text-slate-300 hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 group backdrop-blur-sm bg-slate-800/50"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                  Resume
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 animate-slide-up animation-delay-800">
                {[
                  { number: "5+", label: "Years Experience", color: "text-blue-400" },
                  { number: "50+", label: "Projects Completed", color: "text-purple-400" },
                  { number: "10+", label: "Companies Served", color: "text-cyan-400" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-all duration-300 animate-counter`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-400 mt-1 group-hover:text-slate-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="flex justify-center lg:justify-end animate-slide-left animation-delay-600">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Photo Container */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-3xl border border-slate-700 group-hover:border-slate-600 transition-all duration-500">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                      alt="Alex Chen - Test Automation Engineer"
                      className="w-80 h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Floating Tech Icons */}
                    <div className="absolute top-4 right-4 flex flex-col space-y-2">
                      {['Java', 'Selenium', 'CI/CD'].map((tech, i) => (
                        <div 
                          key={tech}
                          className="px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-white font-medium animate-bounce-in"
                          style={{ animationDelay: `${1000 + i * 200}ms` }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-floating">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-5 h-5 text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

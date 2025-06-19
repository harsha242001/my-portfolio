import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";
import { Code, Server, Database, GitBranch, TestTube, Zap } from "lucide-react";

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "Java", level: 90, icon: Code },
    { name: "Selenium WebDriver", level: 95, icon: TestTube },
    { name: "TestNG/JUnit", level: 85, icon: Server },
    { name: "Python", level: 80, icon: Code },
    { name: "JavaScript", level: 75, icon: Code },
    { name: "API Testing", level: 88, icon: Database },
    { name: "CI/CD (Jenkins)", level: 82, icon: GitBranch },
    { name: "Docker", level: 70, icon: Server }
  ];

  const tools = [
    "Eclipse", "Git", "VSCode", "Playwright", "PyCharm", "Provar"
  ];

  const services = [
    {
      title: "Automation Framework Design",
      description: "Custom frameworks built for scalability and maintainability",
      icon: "🏗️",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderGradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "End-to-End Test Automation",
      description: "Complete automation solutions from UI to API testing",
      icon: "⚡",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderGradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Code Review & Mentorship",
      description: "Guidance on best practices and code quality improvement",
      icon: "🎯",
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderGradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration of tests into deployment pipelines",
      icon: "🔄",
      gradient: "from-orange-500/20 to-red-500/20",
      borderGradient: "from-orange-500 to-red-500"
    }
  ];

  // Animate skill bars when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillIndex = parseInt(entry.target.getAttribute('data-skill-index') || '0');
            setAnimatedSkills(prev => [...prev, skillIndex]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const skillElements = document.querySelectorAll('[data-skill-index]');
    skillElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    technicalSkills.forEach((skill, index) => {
      if (animatedSkills.includes(index)) {
        let currentValue = 0;
        const increment = skill.level / 30; // 30 frames to reach target
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= skill.level) {
            currentValue = skill.level;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [skill.name]: Math.round(currentValue) }));
        }, 50);
      }
    });
  }, [animatedSkills]);

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
        
        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: `${Math.random() * 80 + 40}px`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? '#3b82f6' : 
                i % 4 === 1 ? '#8b5cf6' : 
                i % 4 === 2 ? '#06b6d4' : '#10b981'
              }30, transparent 70%)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-blue-300 font-medium">Skills & Expertise</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Technical Excellence
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              My technical expertise and the services I provide to help teams achieve testing excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 mb-20">
            
            {/* Technical Skills */}
            <div ref={skillsRef} className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-12 animate-slide-right flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                Technical Skills
              </h3>
              
              <div className="space-y-8">
                {technicalSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={index} 
                      data-skill-index={index}
                      className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-[1.02] backdrop-blur-sm animate-slide-right"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-300 font-medium text-lg">{skill.name}</span>
                        </div>
                        <span className="text-blue-400 font-bold text-xl animate-counter">
                          {counters[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={animatedSkills.includes(index) ? skill.level : 0} 
                          className="h-2 bg-slate-800" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools & Soft Skills */}
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 animate-slide-left flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4 flex items-center justify-center">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  Tools & Platforms
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-xl text-center text-slate-300 border border-slate-700/50 transform hover:scale-105 hover:border-blue-400/30 transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm animate-slide-left animation-delay-800">
                <h4 className="text-2xl font-semibold text-purple-400 mb-6 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3"></div>
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {["Leadership", "Adaptability & Learning", "Time Management", "Creative coding culture", "Problem solving"].map((skill, index) => (
                    <span 
                      key={index} 
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/20 transform hover:scale-110 transition-transform duration-200 animate-bounce-in backdrop-blur-sm"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services I Offer section commented out */}
          {/*
          <div>
            <h3 className="text-4xl font-bold text-white text-center mb-16 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Services I Offer
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`relative group bg-gradient-to-br ${service.gradient} p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm animate-card-reveal overflow-hidden`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default Skills;

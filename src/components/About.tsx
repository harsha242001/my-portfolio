
import { useEffect, useState, useRef } from "react";
import { Calendar, Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    {
      year: "2019",
      title: "Started as Junior QA Engineer",
      description: "Began journey in software testing at TechCorp, learning manual testing fundamentals and establishing quality standards",
      icon: Calendar
    },
    {
      year: "2020", 
      title: "Automation Framework Developer",
      description: "Led development of company's first Selenium-based automation framework, reducing testing time by 60%",
      icon: Award
    },
    {
      year: "2022",
      title: "Senior Test Automation Engineer", 
      description: "Promoted to senior role, mentoring junior developers and architecting CI/CD integration solutions",
      icon: Users
    },
    {
      year: "2024",
      title: "Automation Architect",
      description: "Currently designing scalable test automation solutions for enterprise applications across multiple teams",
      icon: Lightbulb
    }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "Committed to delivering zero-defect software through comprehensive testing strategies and meticulous attention to detail",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Continuous Innovation",
      description: "Always exploring cutting-edge tools and methodologies to revolutionize testing efficiency and effectiveness",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaborative Leadership", 
      description: "Passionate about knowledge sharing, mentoring teams, and building cultures of quality and excellence",
      icon: "🤝",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Technical Mastery",
      description: "Dedicated to mastering emerging technologies and creating innovative solutions for complex testing challenges",
      icon: "💡",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const milestoneIndex = parseInt(entry.target.getAttribute('data-milestone-index') || '0');
            setVisibleMilestones(prev => [...new Set([...prev, milestoneIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const milestoneElements = document.querySelectorAll('[data-milestone-index]');
    milestoneElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? '#3b82f6' : 
                i % 4 === 1 ? '#8b5cf6' : 
                i % 4 === 2 ? '#06b6d4' : '#10b981'
              }20, transparent 70%)`,
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
              <span className="text-sm text-blue-300 font-medium">About Me</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                My Story
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              I'm a passionate test automation engineer with over 5 years of experience crafting 
              robust testing frameworks that empower teams to deliver exceptional software quality. 
              My expertise lies in building scalable automation solutions that seamlessly integrate 
              with modern development workflows and accelerate time-to-market.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            
            {/* Journey Timeline */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-12 animate-slide-right flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-4 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                Professional Journey
              </h3>
              
              <div className="space-y-8 relative">
                {/* Enhanced Timeline Line */}
                <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 opacity-50"></div>
                
                {milestones.map((milestone, index) => {
                  const IconComponent = milestone.icon;
                  return (
                    <div 
                      key={index} 
                      data-milestone-index={index}
                      className={`flex items-start space-x-6 transform transition-all duration-700 ${
                        visibleMilestones.includes(index) 
                          ? 'translate-x-0 opacity-100' 
                          : 'translate-x-12 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center border border-slate-700 shadow-2xl transform hover:scale-110 transition-all duration-300 group">
                          <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          {milestone.year.slice(-2)}
                        </div>
                      </div>
                      
                      <div className="flex-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm">
                        <h4 className="text-xl font-semibold text-white mb-2">{milestone.title}</h4>
                        <p className="text-slate-300 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Core Values */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-12 animate-slide-left flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                Core Values
              </h3>
              
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm animate-card-reveal"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                        <span className="animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                          {value.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

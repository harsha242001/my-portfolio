import { useEffect, useState, useRef } from "react";
import { Calendar, Award, Users, Lightbulb } from "lucide-react";

const About = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // --- CUSTOMIZE YOUR CAREER MILESTONES ---
  // Update this array to reflect your professional journey.
  // The 'icon' can be changed using any icon from the 'lucide-react' library.
  const milestones = [
    {
      year: "2021",
      title: "Software Engineer",
      icon: Calendar
    },
    {
      year: "2023",
      title: "Senior Software Engineer",
      icon: Award
    }
  ];

  // --- CUSTOMIZE YOUR CORE VALUES ---
  // Update this array to reflect your personal or professional values.
  // You can use emojis for the 'icon'.
  const values = [
    {
      title: "Healthcare Domain Expertise & Impact",
      description: "Specialized in healthcare automation solutions, developing deep domain knowledge that enabled delivery of targeted, high-impact automation frameworks. This expertise resulted in significant operational efficiency gains and earned client recognition including the 'Star of the Month' award.",
      icon: "🏥",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Technical Leadership in Automation",
      description: "Led automation initiatives using Java, Selenium, and Python to create robust testing frameworks and process automation tools. Successfully reduced manual effort by [X]% across multiple healthcare applications, demonstrating both technical proficiency and business impact.",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Innovation Through Proof-of-Concept Development",
      description: "Spearheaded proof-of-concept projects to evaluate emerging technologies and their applicability to healthcare automation challenges. These initiatives expanded the team's technical capabilities and provided strategic insights for future project directions.",
      icon: "💡",
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Data-Driven Solutions",
      description: "Developed and implemented a comprehensive data mining tool that streamlined healthcare operations, showcasing ability to bridge technical solutions with operational needs. This project enhanced data accessibility and decision-making processes for healthcare stakeholders.",
      icon: "📊",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Continuous Learning & Adaptation",
      description: "Demonstrated commitment to technological growth by expanding expertise across multiple programming languages and frameworks. Successfully adapted to evolving project requirements while maintaining high-quality deliverables and meeting critical deadlines.",
      icon: "📚",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      title: "Passion-Driven Development",
      description: "Beyond my core automation work, I love exploring the creative side of coding - building side projects that challenge conventional approaches and experimenting with new frameworks just for the joy of discovery. This passion for 'vibe coding' keeps my problem-solving skills sharp and often leads to innovative solutions I bring back to professional projects.",
      icon: "🔥",
      gradient: "from-pink-500 to-yellow-500"
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
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
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
              background: `radial-gradient(circle, ${i % 4 === 0 ? '#3b82f6' :
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
            {/* --- CUSTOMIZE YOUR ABOUT ME SECTION --- */}
            {/* Update this paragraph with your own professional summary. */}
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              I am a Senior Software Engineer with 3+ years of experience designing and delivering automation solutions for enterprise applications.
              <br /><br />
              My work focuses on building scalable automation frameworks, data-driven testing solutions, and parallel execution pipelines using Java, Selenium, and Playwright. I have hands-on experience creating custom automation tools that significantly reduce manual effort and improve delivery efficiency.
              <br /><br />
              Alongside traditional automation, I actively explore AI-assisted development and no-code automation platforms to build faster, smarter, and more adaptable solutions. My goal is to evolve toward building intelligent systems that combine engineering fundamentals with modern AI capabilities.
            </p>
          </div>

          {/* Professional Journey Section */}
          <div className="space-y-8 mb-20">
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
                    className={`flex items-start space-x-6 transform transition-all duration-700 ${visibleMilestones.includes(index)
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
                      <h4 className="text-xl font-semibold text-white mb-0">{milestone.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Values Section */}
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
    </section>
  );
};

export default About;

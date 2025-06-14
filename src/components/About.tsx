
import { useEffect, useState } from "react";

const About = () => {
  const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);

  const milestones = [
    {
      year: "2019",
      title: "Started as Junior QA Engineer",
      description: "Began journey in software testing at TechCorp, learning manual testing fundamentals"
    },
    {
      year: "2020",
      title: "Automation Framework Developer",
      description: "Led development of company's first Selenium-based automation framework"
    },
    {
      year: "2022",
      title: "Senior Test Automation Engineer",
      description: "Promoted to senior role, mentoring junior developers and architecting CI/CD integration"
    },
    {
      year: "2024",
      title: "Automation Architect",
      description: "Currently designing scalable test automation solutions for enterprise applications"
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "Committed to delivering bug-free software through comprehensive testing",
      icon: "🎯"
    },
    {
      title: "Continuous Learning",
      description: "Always exploring new tools and methodologies to improve testing efficiency",
      icon: "📚"
    },
    {
      title: "Team Collaboration", 
      description: "Believe in sharing knowledge and working together to achieve common goals",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Passionate about finding creative solutions to complex testing challenges",
      icon: "💡"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const milestoneIndex = parseInt(entry.target.getAttribute('data-milestone-index') || '0');
            setVisibleMilestones(prev => [...prev, milestoneIndex]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const milestoneElements = document.querySelectorAll('[data-milestone-index]');
    milestoneElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-slate-800/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-purple-500/5 rounded-full animate-pulse animation-delay-1000" />
        {/* Floating particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 text-white animate-gradient-text">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I'm a passionate test automation engineer with over 5 years of experience in creating 
            robust testing frameworks that help teams ship quality software faster. My expertise lies 
            in building scalable automation solutions that integrate seamlessly with development workflows.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white animate-slide-right">My Journey</h3>
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  data-milestone-index={index}
                  className={`flex items-start space-x-4 transform transition-all duration-700 ${
                    visibleMilestones.includes(index) 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform hover:scale-110 transition-transform duration-300">
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-lg font-semibold text-white mb-1">{milestone.title}</h4>
                    <p className="text-slate-300 text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-white animate-slide-left">Core Values</h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 animate-card-reveal"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3 animate-bounce" style={{ animationDelay: `${index * 100}ms` }}>
                      {value.icon}
                    </span>
                    <h4 className="text-lg font-semibold text-blue-400">{value.title}</h4>
                  </div>
                  <p className="text-slate-300 text-sm">{value.description}</p>
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

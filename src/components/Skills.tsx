
import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const skillsRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "Selenium WebDriver", level: 95 },
    { name: "TestNG/JUnit", level: 85 },
    { name: "Python", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "API Testing", level: 88 },
    { name: "CI/CD (Jenkins)", level: 82 },
    { name: "Docker", level: 70 }
  ];

  const tools = [
    "IntelliJ IDEA", "Eclipse", "Git", "Maven", "Gradle", 
    "Postman", "JIRA", "Confluence", "TestRail", "Allure"
  ];

  const services = [
    {
      title: "Automation Framework Design",
      description: "Custom frameworks built for scalability and maintainability",
      icon: "🔧"
    },
    {
      title: "End-to-End Test Automation",
      description: "Complete automation solutions from UI to API testing",
      icon: "🚀"
    },
    {
      title: "Code Review & Mentorship",
      description: "Guidance on best practices and code quality improvement",
      icon: "👨‍🏫"
    },
    {
      title: "CI/CD Integration",
      description: "Seamless integration of tests into deployment pipelines",
      icon: "⚡"
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
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 text-white">Skills & Services</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            My technical expertise and the services I provide to help teams achieve testing excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div ref={skillsRef}>
            <h3 className="text-2xl font-bold mb-8 text-white animate-slide-right">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div 
                  key={index} 
                  data-skill-index={index}
                  className="animate-slide-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-bold animate-counter">
                      {counters[skill.name] || 0}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={animatedSkills.includes(index) ? skill.level : 0} 
                      className="h-3 bg-slate-800" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-white animate-slide-left">Tools & Platforms</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800 p-3 rounded-lg text-center text-slate-300 border border-slate-700 transform hover:scale-105 hover:border-blue-400 transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-blue-500/20"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tool}
                </div>
              ))}
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-600 animate-slide-left animation-delay-800">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Leadership", "Problem Solving", "Team Collaboration", "Communication", "Mentoring"].map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm transform hover:scale-110 transition-transform duration-200 animate-bounce-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-white text-center animate-slide-up">Services I Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 animate-card-reveal"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl mb-3 animate-bounce">{service.icon}</div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">{service.title}</h4>
                <p className="text-slate-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

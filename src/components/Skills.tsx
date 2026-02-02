import { Progress } from "@/components/ui/progress";
import { useEffect, useState, useRef } from "react";
import { Code, Server, Database, GitBranch, TestTube, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Programming",
      skills: ["Java", "Python"],
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Automation & Systems",
      skills: ["Selenium WebDriver", "Playwright", "Provar", "Page Object Model (POM)", "Data-Driven Automation", "Parallel Execution"],
      icon: TestTube,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Assisted Development",
      skills: ["AI-assisted application development", "Prompt-driven workflows and automation", "AI-based content and data processing", "Rapid prototyping using AI tools"],
      icon: Zap,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "AI & No-Code Tools",
      skills: ["ChatGPT", "Cursor", "n8n", "Make.com", "Lovable", "Google Antigravity"],
      icon: Server,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

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
              background: `radial-gradient(circle, ${i % 4 === 0 ? '#3b82f6' :
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

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-slate-800/50 text-slate-300 px-4 py-2 rounded-lg border border-slate-700/50 hover:border-blue-500/30 hover:text-white transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

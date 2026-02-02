import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Eye, Filter, Sparkles } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const projects = [
    {
      id: 6,
      title: "LinkedIn Profile Data Automation",
      category: "Data Extraction",
      description: (
        <div className="space-y-4">
          <div>
            <span className="block text-blue-400 font-semibold mb-1">Problem</span>
            <p>Manual identification of role-specific LinkedIn profiles is time-consuming and error-prone</p>
          </div>
          <div>
            <span className="block text-blue-400 font-semibold mb-1">Solution</span>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Built an automation system that filters profiles based on role criteria</li>
              <li>Extracts structured profile data for downstream processing</li>
            </ul>
          </div>
          <div>
            <span className="block text-blue-400 font-semibold mb-1">Automation Flow</span>
            <p className="text-sm font-mono bg-slate-900/50 p-2 rounded border border-slate-700/50">
              Role Input → Selenium Automation → Data Processing → CSV/Excel Output
            </p>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Python", "Selenium"],
      metrics: "Automated Profile Extraction",
      githubUrl: "#",
      gradient: "from-blue-600 via-indigo-500 to-cyan-500",
      accentColor: "blue"
    },
    {
      id: 7,
      title: "AI-Assisted Website & Workflow Automation",
      category: "Web Automation",
      description: (
        <div className="space-y-4">
          <div>
            <span className="block text-blue-400 font-semibold mb-1">Problem</span>
            <p>Building and deploying production websites traditionally requires significant manual effort and coordination.</p>
          </div>
          <div>
            <span className="block text-blue-400 font-semibold mb-1">Solution</span>
            <p>Designed and deployed a production-ready website using AI-assisted development and no-code automation tools to accelerate delivery and reduce development time.</p>
          </div>
          <div>
            <span className="block text-blue-400 font-semibold mb-1">System Flow</span>
            <p className="text-sm font-mono bg-slate-900/50 p-2 rounded border border-slate-700/50">
              Idea & Content → AI-Assisted Development → No-Code Automation → Deployment
            </p>
          </div>
          <div>
            <span className="block text-blue-400 font-semibold mb-1">What I Built</span>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              <li>Responsive production website with modern UI</li>
              <li>Automated content and workflow setup using AI tools</li>
              <li>Hosted and deployed on a cloud platform</li>
              <li>Designed for scalability and future automation integration</li>
            </ul>
          </div>
        </div>
      ),
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
      technologies: ["ChatGPT", "Cursor", "Lovable", "Google Antigravity", "Vercel"],
      metrics: "Accelerated Delivery",
      githubUrl: "#",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      accentColor: "purple"
    }
  ];

  const getAccentColors = (accentColor: string) => {
    const colors = {
      emerald: "border-emerald-500/30 hover:border-emerald-400/50 shadow-emerald-500/20",
      purple: "border-purple-500/30 hover:border-purple-400/50 shadow-purple-500/20",
      blue: "border-blue-500/30 hover:border-blue-400/50 shadow-blue-500/20",
      orange: "border-orange-500/30 hover:border-orange-400/50 shadow-orange-500/20",
      violet: "border-violet-500/30 hover:border-violet-400/50 shadow-violet-500/20",
      teal: "border-teal-500/30 hover:border-teal-400/50 shadow-teal-500/20"
    };
    return colors[accentColor as keyof typeof colors] || colors.blue;
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0');
            setVisibleCards(prev => [...prev, cardId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    setVisibleCards([]);
    setTimeout(() => {
      const cards = document.querySelectorAll('[data-card-id]');
      cards.forEach(card => {
        if (observerRef.current) {
          observerRef.current.observe(card);
        }
      });
    }, 100);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-teal-500/10 border border-purple-500/20 backdrop-blur-sm mb-8 shadow-lg shadow-purple-500/10">
              <Sparkles className="w-5 h-5 text-purple-400 mr-3 animate-pulse" />
              <span className="text-sm text-purple-300 font-medium tracking-wide">Featured Projects</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing intelligent engineering solutions powered by automation and AI
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                data-card-id={project.id}
                className={`
                  group relative bg-slate-800/40 backdrop-blur-sm border ${getAccentColors(project.accentColor)} 
                  transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 
                  overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl
                  ${visibleCards.includes(project.id) ? 'animate-card-reveal' : 'opacity-0 translate-y-8'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 z-10`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-20" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-30 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-500">
                    <span className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 z-30 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md flex-1 rounded-xl font-medium"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white border-0 backdrop-blur-md flex-1 rounded-xl font-medium shadow-lg`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4 pt-6">
                  <CardTitle className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 text-xl font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-base leading-relaxed component-description">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-blue-400 font-bold mb-4 uppercase tracking-widest">Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 px-3 py-2 rounded-lg text-sm font-medium transform hover:scale-110 transition-all duration-200 animate-fade-in backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50"
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`flex items-center text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent px-4 py-3 rounded-xl bg-slate-700/20 border border-slate-600/30`}>
                      <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 animate-pulse`}></div>
                      {project.metrics}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

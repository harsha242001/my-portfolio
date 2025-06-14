
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Eye, Filter, Sparkles } from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const categories = ["All", "Web Automation", "API Testing", "Framework Design", "Data Extraction"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Test Automation Suite",
      category: "Web Automation",
      description: "Comprehensive automation framework for testing e-commerce platform with 500+ test cases",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Java", "Selenium", "TestNG", "Maven"],
      metrics: "Reduced test execution time by 70%",
      githubUrl: "#",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      accentColor: "emerald"
    },
    {
      id: 2,
      title: "REST API Testing Framework",
      category: "API Testing",
      description: "Data-driven API testing framework with comprehensive validation and reporting",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Python", "REST Assured", "Pytest", "Allure"],
      metrics: "Achieved 95% API coverage",
      githubUrl: "#",
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      accentColor: "purple"
    },
    {
      id: 3,
      title: "Mobile App Automation",
      category: "Web Automation",
      description: "Cross-platform mobile testing solution for iOS and Android applications",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      technologies: ["Appium", "Java", "TestNG", "Jenkins"],
      metrics: "Supports 15+ device configurations",
      githubUrl: "#",
      gradient: "from-blue-400 via-sky-500 to-cyan-600",
      accentColor: "blue"
    },
    {
      id: 4,
      title: "Custom Test Framework",
      category: "Framework Design",
      description: "Reusable test automation framework with built-in reporting and CI/CD integration",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      technologies: ["Java", "Selenium", "Spring Boot", "Docker"],
      metrics: "Adopted by 5+ development teams",
      githubUrl: "#",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      accentColor: "orange"
    },
    {
      id: 5,
      title: "Performance Test Suite",
      category: "Web Automation",
      description: "Load testing framework for web applications with real-time monitoring",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["JMeter", "Grafana", "InfluxDB", "Jenkins"],
      metrics: "Identified 50+ performance bottlenecks",
      githubUrl: "#",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      accentColor: "violet"
    },
    {
      id: 6,
      title: "Data Validation Automation",
      category: "Data Extraction",
      description: "Automated data quality checks and validation for ETL processes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Python", "Pandas", "SQLAlchemy", "Apache Airflow"],
      metrics: "Validates 1M+ records daily",
      githubUrl: "#",
      gradient: "from-teal-400 via-green-500 to-emerald-600",
      accentColor: "teal"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="portfolio" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-10" />
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              background: `radial-gradient(circle, ${
                i % 4 === 0 ? '#3b82f6' : 
                i % 4 === 1 ? '#8b5cf6' : 
                i % 4 === 2 ? '#06b6d4' : '#10b981'
              }40, transparent 70%)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

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
              Showcasing innovative automation testing solutions that deliver exceptional results
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <div className="inline-flex items-center px-4 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm mr-6 shadow-lg">
              <Filter className="w-4 h-4 text-slate-400 mr-3" />
              <span className="text-sm text-slate-300 font-medium">Filter Projects:</span>
            </div>
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  transform transition-all duration-300 hover:scale-105 animate-slide-up backdrop-blur-sm px-6 py-3 rounded-full font-medium
                  ${selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 border-0 text-white" 
                    : "border-slate-600/50 text-slate-300 hover:bg-slate-700/50 hover:border-blue-400/50 bg-slate-800/30 hover:text-white"
                  }
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {filteredProjects.map((project, index) => (
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
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
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

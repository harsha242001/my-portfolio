import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Eye, Filter } from "lucide-react";

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
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      technologies: ["Java", "Selenium", "TestNG", "Maven"],
      metrics: "Reduced test execution time by 70%",
      githubUrl: "#",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 2,
      title: "REST API Testing Framework",
      category: "API Testing",
      description: "Data-driven API testing framework with comprehensive validation and reporting",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      technologies: ["Python", "REST Assured", "Pytest", "Allure"],
      metrics: "Achieved 95% API coverage",
      githubUrl: "#",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "Mobile App Automation",
      category: "Web Automation",
      description: "Cross-platform mobile testing solution for iOS and Android applications",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      technologies: ["Appium", "Java", "TestNG", "Jenkins"],
      metrics: "Supports 15+ device configurations",
      githubUrl: "#",
      gradient: "from-emerald-500/20 to-teal-500/20"
    },
    {
      id: 4,
      title: "Custom Test Framework",
      category: "Framework Design",
      description: "Reusable test automation framework with built-in reporting and CI/CD integration",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      technologies: ["Java", "Selenium", "Spring Boot", "Docker"],
      metrics: "Adopted by 5+ development teams",
      githubUrl: "#",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 5,
      title: "Performance Test Suite",
      category: "Web Automation",
      description: "Load testing framework for web applications with real-time monitoring",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["JMeter", "Grafana", "InfluxDB", "Jenkins"],
      metrics: "Identified 50+ performance bottlenecks",
      githubUrl: "#",
      gradient: "from-indigo-500/20 to-purple-500/20"
    },
    {
      id: 6,
      title: "Data Validation Automation",
      category: "Data Extraction",
      description: "Automated data quality checks and validation for ETL processes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["Python", "Pandas", "SQLAlchemy", "Apache Airflow"],
      metrics: "Validates 1M+ records daily",
      githubUrl: "#",
      gradient: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
              }40, transparent 70%)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-8">
              <Eye className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-sm text-purple-300 font-medium">Featured Work</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of automation testing projects that demonstrate my expertise in building 
              scalable and efficient testing solutions
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="inline-flex items-center px-3 py-2 rounded-full bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm mr-4">
              <Filter className="w-4 h-4 text-slate-400 mr-2" />
              <span className="text-sm text-slate-400">Filter by:</span>
            </div>
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`
                  transform transition-all duration-300 hover:scale-105 animate-slide-up backdrop-blur-sm
                  ${selectedCategory === category 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25 border-0" 
                    : "border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-blue-400/50 bg-slate-800/30"
                  }
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                data-card-id={project.id}
                className={`
                  group bg-gradient-to-br ${project.gradient} border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 
                  transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm overflow-hidden
                  ${visibleCards.includes(project.id) ? 'animate-card-reveal' : 'opacity-0 translate-y-8'}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 transform translate-x-8 group-hover:translate-x-0 transition-transform duration-300">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                      <Button 
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm flex-1"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                      <Button 
                        size="sm"
                        className="bg-blue-600/80 hover:bg-blue-700/80 text-white border-0 backdrop-blur-sm flex-1"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300 text-lg">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-blue-400 font-semibold mb-3 uppercase tracking-wider">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md text-xs transform hover:scale-110 transition-transform duration-200 animate-fade-in backdrop-blur-sm border border-slate-600/30"
                            style={{ animationDelay: `${techIndex * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-xs text-green-400 font-semibold bg-green-500/10 px-3 py-2 rounded-lg border border-green-500/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
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

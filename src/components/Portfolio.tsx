
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      githubUrl: "#"
    },
    {
      id: 2,
      title: "REST API Testing Framework",
      category: "API Testing",
      description: "Data-driven API testing framework with comprehensive validation and reporting",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      technologies: ["Python", "REST Assured", "Pytest", "Allure"],
      metrics: "Achieved 95% API coverage",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Mobile App Automation",
      category: "Web Automation",
      description: "Cross-platform mobile testing solution for iOS and Android applications",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
      technologies: ["Appium", "Java", "TestNG", "Jenkins"],
      metrics: "Supports 15+ device configurations",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Custom Test Framework",
      category: "Framework Design",
      description: "Reusable test automation framework with built-in reporting and CI/CD integration",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop",
      technologies: ["Java", "Selenium", "Spring Boot", "Docker"],
      metrics: "Adopted by 5+ development teams",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Performance Test Suite",
      category: "Web Automation",
      description: "Load testing framework for web applications with real-time monitoring",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["JMeter", "Grafana", "InfluxDB", "Jenkins"],
      metrics: "Identified 50+ performance bottlenecks",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Data Validation Automation",
      category: "Data Extraction",
      description: "Automated data quality checks and validation for ETL processes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      technologies: ["Python", "Pandas", "SQLAlchemy", "Apache Airflow"],
      metrics: "Validates 1M+ records daily",
      githubUrl: "#"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Portfolio</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A showcase of automation testing projects that demonstrate my expertise in building 
            scalable and efficient testing solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "border-slate-600 text-slate-300 hover:bg-slate-700"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-slate-800/50 border-slate-600 hover:border-blue-500 transition-all duration-300 hover-scale">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-slate-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-blue-400 font-semibold mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-green-400 font-semibold">
                    ✓ {project.metrics}
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

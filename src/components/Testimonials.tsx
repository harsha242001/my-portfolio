import { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332837?w=80&h=80&fit=crop&crop=face",
      quote: "Alex's automation framework reduced our testing time by 60% and significantly improved our release confidence. His attention to detail and technical expertise are exceptional.",
      rating: 5,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Michael Chen",
      role: "QA Manager",
      company: "DataFlow Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote: "Working with Alex was a game-changer for our testing processes. He not only delivered robust automation solutions but also mentored our team on best practices.",
      rating: 5,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      quote: "Alex's ability to understand business requirements and translate them into comprehensive test strategies is remarkable. His work directly contributed to our product's success.",
      rating: 5,
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  const companies = [
    { name: "TechCorp", logo: "🏢" },
    { name: "DataFlow Inc", logo: "📊" },
    { name: "InnovateLabs", logo: "🔬" },
    { name: "CloudSync", logo: "☁️" },
    { name: "DevOps Pro", logo: "⚙️" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'}`} />
    ));
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
        
        {/* Floating Quote Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-slate-700/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 60 + 40}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          >
            <Quote className="w-16 h-16" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 backdrop-blur-sm mb-8">
              <Users className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-yellow-300 font-medium">Client Testimonials</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Testimonials from colleagues and clients I've had the pleasure to work with
            </p>
          </div>

          {/* Featured Testimonial Carousel */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentTestimonial 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 absolute inset-0 transform translate-x-8'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${testimonial.gradient} p-12 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm`}>
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                      
                      {/* Quote Section */}
                      <div className="flex-1 text-center lg:text-left">
                        <Quote className="w-12 h-12 text-blue-400/50 mb-6 mx-auto lg:mx-0" />
                        
                        <div className="flex justify-center lg:justify-start mb-6">
                          {renderStars(testimonial.rating)}
                        </div>
                        
                        <p className="text-slate-300 text-xl lg:text-2xl italic leading-relaxed mb-8 font-light">
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full border-4 border-blue-500/30 transform hover:scale-110 transition-transform duration-300"
                          />
                          <div>
                            <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-slate-400 text-sm">{testimonial.role}</p>
                            <p className="text-blue-400 font-semibold text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Buttons */}
              <div className="flex justify-center items-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-blue-400/50 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                {/* Indicators */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-blue-500 scale-125' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-blue-400/50 backdrop-blur-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${testimonial.gradient} p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm ${
                  isVisible ? 'animate-card-reveal' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 transform group-hover:scale-110 transition-transform duration-300 border-2 border-slate-600/50"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                    <p className="text-blue-400 text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* Companies Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-8 animate-slide-up">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Trusted by Companies
              </span>
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {companies.map((company, index) => (
                <div 
                  key={index} 
                  className={`group flex items-center space-x-3 bg-gradient-to-r from-slate-800/50 to-slate-900/50 px-6 py-4 rounded-xl border border-slate-700/50 hover:border-blue-400/30 transform hover:scale-110 transition-all duration-300 backdrop-blur-sm ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-2xl">{company.logo}</span>
                  <span className="text-slate-300 font-medium group-hover:text-blue-300 transition-colors">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

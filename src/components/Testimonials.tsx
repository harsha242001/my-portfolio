
import { useState, useEffect } from "react";

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
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "QA Manager",
      company: "DataFlow Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote: "Working with Alex was a game-changer for our testing processes. He not only delivered robust automation solutions but also mentored our team on best practices.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      quote: "Alex's ability to understand business requirements and translate them into comprehensive test strategies is remarkable. His work directly contributed to our product's success.",
      rating: 5
    }
  ];

  const companies = [
    "TechCorp", "DataFlow Inc", "InnovateLabs", "CloudSync", "DevOps Pro"
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-500'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500/5 rounded-full animate-pulse" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-green-500/5 rounded-full animate-pulse animation-delay-1000" />
        {/* Floating quotes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-slate-700/20 text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            "
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 text-white animate-gradient-text">What People Say</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-600 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 absolute inset-0 transform translate-x-8'
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full border-4 border-blue-500 transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-slate-300 text-lg italic mb-4">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-slate-400">{testimonial.role}</p>
                      <p className="text-blue-400 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
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
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-slate-800/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${
                isVisible ? 'animate-card-reveal' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 transform hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-slate-300 text-sm italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        {/* Companies Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6 animate-slide-up">Trusted by Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className={`text-slate-400 font-semibold text-lg transform hover:text-blue-400 hover:scale-110 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

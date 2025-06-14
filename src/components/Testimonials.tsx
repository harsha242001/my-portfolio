
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332837?w=80&h=80&fit=crop&crop=face",
      quote: "Alex's automation framework reduced our testing time by 60% and significantly improved our release confidence. His attention to detail and technical expertise are exceptional."
    },
    {
      name: "Michael Chen",
      role: "QA Manager",
      company: "DataFlow Inc",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      quote: "Working with Alex was a game-changer for our testing processes. He not only delivered robust automation solutions but also mentored our team on best practices."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      quote: "Alex's ability to understand business requirements and translate them into comprehensive test strategies is remarkable. His work directly contributed to our product's success."
    }
  ];

  const companies = [
    "TechCorp", "DataFlow Inc", "InnovateLabs", "CloudSync", "DevOps Pro"
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">What People Say</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Testimonials from colleagues and clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-blue-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Trusted by Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-slate-400 font-semibold text-lg">
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

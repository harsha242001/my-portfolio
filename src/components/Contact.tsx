
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Download, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // --- NOTE ON FORM SUBMISSION ---
    // This is currently a mock submission. It just shows a "Message Sent!" notification.
    // To make this functional, you would need to integrate a backend service
    // like EmailJS, Formspree, or your own server endpoint here.
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- CUSTOMIZE YOUR CONTACT INFORMATION ---
  // Update your email, phone, and location here.
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.chen@email.com",
      href: "mailto:alex.chen@email.com",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#", // You can link this to a Google Maps URL if you want
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  // --- CUSTOMIZE YOUR SOCIAL MEDIA LINKS ---
  // Update the 'href' with your personal social media profile URLs.
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#", // Replace with your GitHub URL
      color: "hover:text-slate-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#", // Replace with your LinkedIn URL
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#", // Replace with your Twitter/X URL
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'
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
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-8">
              <Send className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-sm text-green-300 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to discuss your testing automation needs? Let's connect and explore how I can help your team achieve testing excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 backdrop-blur-sm animate-slide-right">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3 flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Name</label>
                      <Input 
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-400/50 backdrop-blur-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Email</label>
                      <Input 
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-400/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Message</label>
                    <Textarea 
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder-slate-400 focus:border-blue-400/50 backdrop-blur-sm resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info & Actions */}
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div className="space-y-6 animate-slide-left">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  Contact Information
                </h3>
                
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={index}
                      className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm animate-card-reveal"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <a href={info.href} className="flex items-center space-x-4 group-hover:text-blue-300 transition-colors">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 font-medium">{info.label}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 animate-slide-left animation-delay-400">
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/25"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:border-blue-400/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open('mailto:alex.chen@email.com')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me Directly
                </Button>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm animate-slide-left animation-delay-600">
                <h4 className="text-lg font-semibold text-white mb-6 text-center">Connect with me</h4>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        className={`group w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transform hover:scale-110 transition-all duration-300 hover:shadow-lg backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50`}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

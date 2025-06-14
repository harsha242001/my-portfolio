
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your testing automation needs? Let's connect and explore how I can help your team achieve testing excellence.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <Input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
            </div>
            
            <div>
              <Textarea 
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Download Resume
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
                onClick={() => window.open('mailto:alex.chen@email.com')}
              >
                Email Me
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-current rounded"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

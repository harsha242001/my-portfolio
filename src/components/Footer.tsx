const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Harsha Vardhan</h3>
            <p className="text-slate-300 text-sm">
              I'm passionate about leveraging AI tools like this to drive innovative solutions and continuous learning.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-slate-300 hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/harsha242001/" className="text-slate-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/harsha-vardhan-4bb8101b0/" className="text-slate-300 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/harsha242001/" className="text-slate-300 hover:text-pink-400 transition-colors" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Harsha Vardhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

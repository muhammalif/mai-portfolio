import { Github, Linkedin, Mail, Heart, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-12 border-t-4 border-neon-pink">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black mb-4">ALIF</h3>
            <p className="font-bold text-gray-300 mb-4">
              Full-Stack Developer passionate about creating amazing digital experiences and exploring Web3 technologies.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/muhammalif" className="p-2 bg-neon-cyan border-2 border-white text-black hover:bg-neon-pink transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-alif-islam/" className="p-2 bg-neon-pink border-2 border-white text-black hover:bg-neon-cyan transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/_emptyman" className="p-2 bg-neon-cyan border-2 border-white text-black hover:bg-neon-pink transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/muhammalif?igsh=MWhwemRna3U5bnQ5dg==" className="p-2 bg-neon-pink border-2 border-white text-black hover:bg-neon-cyan transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="mailto:malif.1006@gmail.com" className="p-2 bg-neon-yellow border-2 border-white text-black hover:bg-neon-green transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-4">QUICK LINKS</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button key={item} className="block font-bold text-gray-300 hover:text-neon-cyan transition-colors">
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-black mb-4">SERVICES</h4>
            <div className="space-y-2 text-gray-300 font-bold">
              <p>Web Development</p>
              <p>Mobile Apps</p>
              <p>UI/UX Design</p>
              <p>Smart Contracts</p>
              <p>Consulting</p>
            </div>
          </div>
        </div>
        
        <div className="border-t-2 border-gray-800 pt-8 text-center">
          <p className="font-bold text-gray-300 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-neon-pink" /> by Alif • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

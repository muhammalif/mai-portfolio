import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            LET'S <span className="text-neon-pink">CONNECT</span>
          </h2>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Ready to bring your ideas to life? Feel free to reach out through the contact information below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 justify-items-center">
          {/* Contact Info */}
          <div className="space-y-8 w-full items-center md:w-1/2">
            <h3 className="text-3xl font-black mb-8 text-center">GET IN TOUCH</h3>
            
            <div className="space-y-6">
              <div className="brutal-card p-6 bg-neon-cyan">
                <div className="flex items-center gap-4">
                  <Mail size={32} className="text-black" />
                  <div>
                    <h4 className="font-black text-lg">EMAIL</h4>
                    <a href="mailto:malif.1006@gmail.com" className="font-bold hover:underline">malif.1006@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="brutal-card p-6 bg-neon-pink">
                <div className="flex items-center gap-4">
                  <Phone size={32} className="text-black" />
                  <div>
                    <h4 className="font-black text-lg">PHONE</h4>
                    <a href="https://wa.me/6282123322644" className="font-bold hover:underline" target="_blank" rel="noopener noreferrer">+62 8212-3322-644</a>
                  </div>
                </div>
              </div>
              
              <div className="brutal-card p-6 bg-neon-yellow">
                <div className="flex items-center gap-4">
                  <MapPin size={32} className="text-black" />
                  <div>
                    <h4 className="font-black text-lg">LOCATION</h4>
                    <p className="font-bold">Kuningan, West Java, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="brutal-card p-6 bg-neon-green">
              <h4 className="font-black text-lg mb-4">AVAILABILITY</h4>
              <p className="font-bold mb-2">Open for onsite, remote & freelance work</p>
              <p className="font-bold">Response time: 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
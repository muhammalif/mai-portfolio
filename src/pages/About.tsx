import TechStack from '../components/TechStack';
import resume from '../assets/resume/muhammad_alif_islam_cv.pdf';

const About = () => {

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-black dark:text-white">
            ABOUT <span className="text-neon-pink">ME</span>
          </h2>
          <div className="w-32 h-2 bg-black dark:bg-white mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <div className="space-y-6 mb-6">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-black dark:text-white">
                PASSIONATE <span className="bg-neon-yellow px-2 py-1 border-2 border-black dark:border-white text-black">DEVELOPER</span>
              </h3>
              <p className="text-lg font-bold leading-relaxed text-black dark:text-white">
                I'm a full-stack developer with 3+ years of experience creating 
                <span className="bg-neon-cyan px-1 mx-1 border-2 border-black dark:border-white text-black">MODERN</span> 
                and <span className="bg-neon-pink px-1 mx-1 border-2 border-black dark:border-white text-black">SCALABLE</span> 
                web applications. I love turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-lg font-bold leading-relaxed text-black dark:text-white">
                Currently studying <span className="bg-neon-green px-1 mx-1 border-2 border-black dark:border-white text-black">WEB3</span> 
                technology, namely blockchain & smart contracts, expanding my skills into the decentralized future.
              </p>
              <p className="text-lg font-bold leading-relaxed text-black dark:text-white">
                When I'm not coding, you can find me exploring new technologies.
              </p>
            </div>
            <a 
              href={resume} 
              download
              className="brutal-button bg-neon-green hover:bg-neon-orange"
            >
              DOWNLOAD CV
            </a>
          </div>
          
          <div className="brutal-card p-8 bg-neon-purple">
            <div className="text-white">
              <h4 className="text-2xl font-black mb-6">QUICK FACTS</h4>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-bold">Location:</span>
                  <span className="font-black">Kuningan, Indonesia</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Experience:</span>
                  <span className="font-black">3+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Projects:</span>
                  <span className="font-black">5+ Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Currently:</span>
                  <span className="font-black">Studying Web3 Technology</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Status:</span>
                  <span className="font-black">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </section>
  );
};

export default About; 
import { useEffect, useState, useMemo } from 'react';
import { ArrowDown, Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';
import avatar from '../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';
import resume from '../assets/resume/muhammad_alif_islam_cv.pdf';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = useMemo(() => ['FULL-STACK DEVELOPER', 'MOBILE DEVELOPER', 'WEB3 DEVELOPER'], []);
  const navigate = useNavigate();
  
  useEffect(() => {
    let currentIndex = 0;
    const currentText = texts[currentTextIndex];
    
    const timer = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setTimeout(() => {
          currentIndex = 0;
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }, 1000);
      }
    }, 150);

    return () => clearInterval(timer);
  }, [currentTextIndex, texts]);

  const scrollToIntroduction = () => {
    document.getElementById('introduction-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-neon-yellow dark:bg-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-neon-pink border-4 border-black dark:border-white animate-bounce-brutal"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-neon-cyan border-4 border-black dark:border-white rotate-45"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-neon-green border-4 border-black dark:border-white rounded-full"></div>
        
        <div className="text-center z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-black dark:text-white">
            HI, I'M <span className="text-neon-pink">ALIF</span>
          </h1>
          
          <div className="h-20 mb-8">
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-black dark:text-white">
              {displayText}
              <span className="animate-blink border-r-4 border-black dark:border-white ml-1"></span>
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto leading-relaxed text-black dark:text-white">
            I BUILD <span className="bg-neon-cyan px-2 py-1 border-2 border-black dark:border-white text-black">AMAZING</span> WEB APPLICATIONS 
            WITH <span className="bg-neon-pink px-2 py-1 border-2 border-black dark:border-white text-black">MODERN</span> TECHNOLOGIES
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => navigate('/projects')}
              className="brutal-button bg-neon-pink hover:bg-neon-cyan"
            >
              VIEW MY WORK
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="brutal-button bg-neon-cyan hover:bg-neon-pink"
            >
              GET IN TOUCH
            </button>
            <a 
              href={resume} 
              download
              className="brutal-button bg-neon-green hover:bg-neon-orange"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToIntroduction}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-white dark:bg-black border-4 border-black dark:border-white shadow-brutal hover:shadow-brutal-lg transition-all duration-200 animate-bounce"
        >
          <ArrowDown size={24} className="text-black dark:text-white" />
        </button>
      </section>

      {/* New Introduction Section */}
      <section id="introduction-section" className="py-20 bg-neon-purple dark:bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-neon-yellow dark:text-neon-pink">
                LET ME <span className="text-white dark:text-white">INTRODUCE</span> MYSELF
              </h2>
              <p className="text-lg font-bold mb-6 leading-relaxed">
                I fell in love with programming and I have at least learnt something, I think... 🧑‍💻
              </p>
              <p className="text-lg font-bold mb-6 leading-relaxed">
                I am fluent in classics like <span className="bg-neon-cyan px-1 py-0.5 text-black">Javascript</span>, <span className="bg-neon-pink px-1 py-0.5 text-black">Typescript</span> and <span className="bg-neon-yellow px-1 py-0.5 text-black">Python</span>.
              </p>
              <p className="text-lg font-bold mb-6 leading-relaxed">
                My field of interest is building new <span className="bg-neon-green px-1 py-0.5 text-black">Web Technologies and Products</span> and also in areas related to <span className="bg-neon-orange px-1 py-0.5 text-black">Blockchain</span>.
              </p>
              <p className="text-lg font-bold mb-6 leading-relaxed">
                Whenever possible, I also apply my passion for developing products with <span className="bg-neon-pink px-1 py-0.5 text-black">Node.js</span> and <span className="bg-neon-cyan px-1 py-0.5 text-black">Modern Javascript Library and Frameworks</span> like <span className="bg-neon-yellow px-1 py-0.5 text-black">React.js</span> and <span className="bg-neon-green px-1 py-0.5 text-black">Next.js</span>
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="brutal-button bg-neon-green hover:bg-neon-orange mt-6"
              >
                ABOUT ME
              </button>
            </div>

            {/* Avatar */}
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-brutal-lg">
                <img 
                  src={avatar} /* Using the imported avatar */
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Find Me On Section */}
          <div className="text-center mt-20">
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-neon-yellow dark:text-neon-pink">
              FIND ME <span className="text-white dark:text-white">ON</span>
            </h3>
            <p className="text-lg font-bold mb-10">Feel free to connect with me</p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/muhammalif" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-full border-4 border-black hover:bg-neon-cyan transition-colors shadow-brutal"
              >
                <Github size={32} />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-alif-islam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-full border-4 border-black hover:bg-neon-yellow transition-colors shadow-brutal"
              >
                <Linkedin size={32} />
              </a>
              <a 
                href="https://x.com/_emptyman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-full border-4 border-black hover:bg-neon-pink transition-colors shadow-brutal"
              >
                <Twitter size={32} />
              </a>
              <a 
                href="https://www.instagram.com/muhammalif?igsh=MWhwemRna3U5bnQ5dg==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 bg-white text-black rounded-full border-4 border-black hover:bg-neon-green transition-colors shadow-brutal"
              >
                <Instagram size={32} />
              </a>
              <a 
                href="mailto:malif.1006@gmail.com"
                className="p-4 bg-white text-black rounded-full border-4 border-black hover:bg-neon-orange transition-colors shadow-brutal"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home; 
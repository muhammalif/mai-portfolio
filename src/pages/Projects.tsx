import { Github, ExternalLink, Globe, Code, Smartphone } from 'lucide-react';
import droppioImage from '../assets/projects/droppio.jpg';
import dwalletImage from '../assets/projects/dwallet.jpg';
import gtnImage from '../assets/projects/gtn.jpg';
import fxdImage from '../assets/projects/fxd.jpg';
import echogearImage from '../assets/projects/echogear.jpg';
import filagrowthImage from '../assets/projects/filagrowth.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'DROPPIO NETWORK',
      description: 'Web3 platform that lets you support content creators with tips and earn exclusive badges through blockchain technology.',
      image: droppioImage,
      tech: ['Next.js', 'TypeScript', 'Solidity', 'Tailwind CSS', 'ShadcnUI', 'PostgreSQL', 'Supabase', 'Prisma', 'Xellar Kit'],
      color: 'bg-neon-purple',
      icon: Globe,
      demo: 'https://droppio-network.vercel.app/',
      github: 'https://github.com/muhammalif/droppio-network'
    },
    {
      title: 'DWALLET TRACKER',
      description: 'A cryptocurrency wallet tracker and portfolio management application. Monitor your crypto assets, track transactions, and analyze market trends in real-time.',
      image: dwalletImage,
      tech: ['React.js', 'TypeScript', 'Solidity', 'Tailwind CSS', 'Etherscan API', 'Wallet Integration'],
      color: 'bg-neon-cyan',
      icon: Code,
      demo: 'https://dwallet-tracker.netlify.app/',
      github: 'https://github.com/muhammalif/dwallet-tracker'
    },
    {
      title: 'GUESS THE NUMBER',
      description: 'An interactive number guessing game with a modern UI. Features include difficulty levels, score tracking, and responsive design for all devices.',
      image: gtnImage,
      tech: ['React.js', 'TypeScript', 'Python', 'Flask', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      color: 'bg-neon-yellow',
      icon: Smartphone,
      demo: 'https://guess-the-number-indol-ten.vercel.app/game',
      github: 'https://github.com/muhammalif/guess-the-number'
    },
    {
      title: 'FXDRAGUNOV INDONESIA',
      description: 'FXDragunov is an educational platform and forex trading tool designed to help traders analyze the market and make better decisions.',
      image: fxdImage,
      tech: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'ShadcnUI'],
      color: 'bg-neon-pink',
      icon: Globe,
      demo: 'https://fxdragunov.vercel.app/',
      github: 'https://github.com/muhammalif/fxdragunov'
    },
    {
      title: 'ECHOGEAR STORE',
      description: 'An e-commerce platform specializing in audio equipment and accessories. Features include product filtering, user reviews, and secure payment integration.',
      image: echogearImage,
      tech: ['React.js', 'Tailwind CSS'],
      color: 'bg-neon-green',
      icon: Globe,
      demo: 'https://echo-gear-store.vercel.app/',
      github: 'https://github.com/muhammalif/react-projects-echo-gear-store'
    },
    {
      title: 'FILAGROWTH',
      description: 'Filagrowth is a website development, mobile application, and Web3 solution service that focuses on modern, functional, and innovative digital products.',
      image: filagrowthImage,
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'ShadcnUI'],
      color: 'bg-neon-green',
      icon: Globe,
      demo: 'https://filagrowth.vercel.app/',
      github: 'https://github.com/muhammalif/filagrowth'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-neon-yellow">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            MY <span className="text-black">PROJECTS</span>
          </h2>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and blockchain technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="brutal-card bg-white group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover border-b-4 border-black"
                />
                <div className={`absolute inset-0 ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <project.icon size={48} className="text-black" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-black mb-3">{project.title}</h3>
                <p className="text-sm font-bold mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-black text-white px-2 py-1 text-xs font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-black text-white px-3 py-2 font-bold text-sm hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} />
                    CODE
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-neon-pink border-2 border-black px-3 py-2 font-bold text-sm hover:bg-neon-cyan transition-colors"
                  >
                    <ExternalLink size={16} />
                    DEMO
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
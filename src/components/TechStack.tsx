import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiSolidity, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiMysql, 
  SiMongodb, 
  SiDocker, 
  SiGit, 
  SiFigma,
  SiAdobephotoshop,
  SiCoreldraw
} from 'react-icons/si';

const TechStack = () => {
  const techStack = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'Solidity', icon: SiSolidity },
    { name: 'React.js', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'React Native', icon: SiReact },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit },
    { name: 'Figma', icon: SiFigma },
    { name: 'Photoshop', icon: SiAdobephotoshop },
    { name: 'Corel Draw', icon: SiCoreldraw },
  ];

  return (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-4xl md:text-5xl font-black mb-4 text-black dark:text-white">
          My <span className="text-neon-purple">Tech Stack</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack.map((tech, index) => (
          <div key={index} className="brutal-card p-6 bg-white dark:bg-gray-800 hover:bg-neon-cyan transition-colors">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <tech.icon className="w-12 h-12 text-black dark:text-white" />
              </div>
              <p className="text-sm font-bold text-black dark:text-white">{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack; 
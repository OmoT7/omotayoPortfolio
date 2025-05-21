import React, { useEffect, useState } from 'react';
import { MapPinIcon } from '@heroicons/react/16/solid';
import { AcademicCapIcon, CodeBracketIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline';

// Particle animation component
const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 20 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        />
      ))}
    </div>
  );
};

// Custom nav button component
const NavButton = ({ href, icon, label, shortcut }) => {
  const iconComponents = {
    home: <span className="text-lg">🏠</span>,
    about: <UserIcon className="w-5 h-5" />,
    projects: <CodeBracketIcon className="w-5 h-5" />,
    work: <BriefcaseIcon className="w-5 h-5" />
  };
  
  // Color mapping for each navigation item
  const colorMap = {
    home: "cyan",
    about: "blue",
    projects: "indigo",
    work: "purple"
  };
  
  const color = colorMap[icon];

  return (
    <a 
      href={href}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg 
                  bg-white/5 backdrop-blur-sm
                  hover:bg-white/10 hover:scale-105 
                  transition-all duration-300 
                  border border-transparent 
                  group`}
    >
      <span className="text-gray-400 group-hover:text-white transition-colors">
        {iconComponents[icon]}
      </span>
      <span className="text-gray-300 group-hover:text-white transition-colors">
        {label}
      </span>
      <span className="ml-1 text-xs px-2 py-1 rounded bg-opacity-20 text-opacity-90">
        {shortcut}
      </span>
    </a>
  );
};

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add keydown event listener for keyboard navigation
    const handleKeyDown = (event) => {
      switch(event.key.toLowerCase()) {
        case 'h':
          window.location.href = '/';
          break;
        case 'a':
          window.location.href = '/about';
          break;
        case 'p':
          window.location.href = '/projects';
          break;
        case 'w':
          window.location.href = '/work';
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="absolute inset-0 min-h-screen overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 bg-[length:400%_400%] animate-gradient-x"></div>
      
      {/* Particle effect */}
      <ParticleBackground />
      
      {/* Improved Wave Layers */}
      <div className="fixed bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-wave opacity-80 transform -translate-x-1/2"></div>
        <div className="absolute bottom-[-1.25rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-60 transform -translate-x-1/2"></div>
        <div className="absolute bottom-[-2.5rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-[wave_20s_linear_reverse_infinite] opacity-50 transform -translate-x-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative flex justify-center items-center min-h-screen text-gray-300 z-10 px-4">
        <section 
          className={`max-w-4xl w-full bg-black/20 rounded-2xl 
                     backdrop-blur-md p-8 m-4
                     ring-1 ring-blue-500/20 
                     transition-all duration-700 ease-out
                     shadow-xl shadow-blue-900/10
                     ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
        >
          {/* Profile header */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
            {/* Avatar/profile image placeholder */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              OO
            </div>
            
            {/* Name and basic info */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Omotayo Oludemi
              </h1>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPinIcon className="w-5 h-5 text-cyan-400" />
                  <span>Hoffman Estates, Illinois</span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-300">
                  <AcademicCapIcon className="w-5 h-5 text-blue-400" />
                  <span>Computer Science Major @ Northwestern University 2023-2027</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-6"></div>
          
          {/* Bio content with card-like sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
              <h2 className="text-xl font-semibold text-cyan-300 mb-3">Professional</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm a sophomore Computer Science student at Northwestern University, seeking internship opportunities to contribute my skills and grow as a developer.
                With experience in front-end and back-end development, I've created projects like a Chrome extension for productivity, a YelpCamp
                clone, and a custom Python parser with optimized memory handling.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <h2 className="text-xl font-semibold text-purple-300 mb-3">Personal</h2>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring my creative side through drawing, diving into captivating TV shows, or playing video games while learning about their development
                and design. I'm also a big fan of binge-watching Fireship to stay inspired and deepen my knowledge of tech and programming trends.
              </p>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-6"></div>
          
          {/* Navigation with better styling */}
          <nav className="flex flex-wrap justify-center gap-4 mt-6">
            <NavButton href="#/" icon="home" label="Home" shortcut="h" />
            <NavButton href="#/about" icon="about" label="About" shortcut="a" />
            <NavButton href="#/projects" icon="projects" label="Projects" shortcut="p" />
            <NavButton href="/work" icon="work" label="Work Experience" shortcut="w" />
          </nav>
        </section>
      </div>
    </div>
  );
}
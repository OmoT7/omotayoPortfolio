import React, { useState, useEffect } from 'react';
import { LinkIcon, EnvelopeIcon, HashtagIcon, BookOpenIcon, CodeBracketIcon, ServerIcon } from '@heroicons/react/24/outline';
import ProfileImagePhoto from '../assets/Profile_Photo.jpg'; // Mock import for profile image
import LanguageStats from '../components/LanguageStats';
// Mock profile image placeholder since we can't import assets
const ProfileImage = () => (
  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl shadow-blue-900/30">
    <div className="absolute inset-0 flex items-center justify-center text-white text-opacity-20 text-6xl font-bold">
      <img src={ProfileImagePhoto} alt="Omotayo Harry Oludemi" className="w-full h-full object-cover rounded-xl" />
    </div>
  </div>
);

// Data for better maintainability
const skills = {
  frontend: ['React', 'HTML', 'CSS', 'JavaScript'],
  backend: ['Python', 'Node.js', 'Express.js', 'Mongoose'],
  infrastructure: ['AWS', 'MongoDB', 'SQL', 'Docker']
};

const contactInfo = [
  { icon: LinkIcon, content: 'github.com/OmoT7', isLink: true, href: 'https://github.com/OmoT7' },
  { icon: EnvelopeIcon, content: 'omotayooludemi@gmail.com', isLink: false },
  { icon: EnvelopeIcon, content: 'omotayooludemi2027@unorthwestern.edu', isLink: false },
  { icon: HashtagIcon, content: '@omotayooludemi', isLink: false }
];

// Particle animation component for added visual interest
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

// Background effects component
const BackgroundEffects = () => (
  <>
    <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 bg-[length:400%_400%] animate-gradient-x"></div>
    <ParticleBackground />
    <div className="fixed bottom-0 left-0 w-full">
      <div className="absolute bottom-0 left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-wave opacity-80 transform -translate-x-1/2"></div>
      <div className="absolute bottom-[-1.25rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-60 transform -translate-x-1/2"></div>
      <div className="absolute bottom-[-2.5rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-[wave_20s_linear_reverse_infinite] opacity-50 transform -translate-x-1/2"></div>
    </div>
  </>
);

// Enhanced profile section
const ProfileSection = () => (
  <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
    <div className="md:col-span-3 space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">About Me</h1>
      <div className="space-y-4 text-gray-300">
        <p className="leading-relaxed">
          I am Omotayo Harry Oludemi, a passionate Computer Science student at Northwestern University with a strong foundation in
          software development and user-centered design. Proficient in Python, JavaScript, and C++, I specialize in building scalable
          systems and creating seamless user experiences.
        </p>
        <p className="leading-relaxed">
          Beyond my academic and professional pursuits, I am an avid gamer who loves
          exploring the creative aspects of games like Minecraft and Roblox. These games have inspired me to think critically, collaborate effectively,
          and design immersive digital experiences.
        </p>
        <p className="leading-relaxed">
          Through projects like a YelpCamp Clone and nuPython, I've applied these skills to develop
          reliable systems and optimize workflows. With a proactive approach and a love for problem-solving, I aim to merge my passion for gaming
          with my technical expertise to create innovative solutions that impact lives positively.
        </p>
      </div>
    </div>
    <div className="md:col-span-2">
      <ProfileImage />
    </div>
  </div>
);

// Enhanced skill card component
const SkillCard = ({ title, skills, icon, color }) => (
  <div className="relative group">
    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${color}-500/50 to-${color}-700/50 blur-md group-hover:blur-xl transition-all duration-300`}></div>
    <div className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className={`text-xl font-semibold text-${color}-300`}>{title}</h2>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-${color}-400 inline-block`}></span>
            <span className="text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Enhanced skills section
const SkillsSection = () => (
  <div className="mb-12">
    <h2 className="text-2xl font-semibold text-white mb-6">Technical Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <SkillCard 
        title="Frontend Development" 
        skills={skills.frontend}
        icon={<CodeBracketIcon className="w-6 h-6 text-cyan-400" />}
        color="cyan"
      />
      <SkillCard 
        title="Backend Development" 
        skills={skills.backend}
        icon={<ServerIcon className="w-6 h-6 text-blue-400" />}
        color="blue"
      />
      <SkillCard 
        title="Infrastructure" 
        skills={skills.infrastructure}
        icon={<BookOpenIcon className="w-6 h-6 text-purple-400" />}
        color="purple"
      />
    </div>
  </div>
);

// Mock language stats component
// const LanguageStats = () => (
//   <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
//     <h2 className="text-2xl font-semibold text-white mb-6">Coding Languages</h2>
//     <div className="space-y-4">
//       {[
//         { name: "JavaScript", percentage: 45, color: "bg-yellow-400" },
//         { name: "Python", percentage: 30, color: "bg-blue-400" },
//         { name: "HTML/CSS", percentage: 15, color: "bg-red-400" },
//         { name: "C++", percentage: 10, color: "bg-green-400" }
//       ].map((lang, index) => (
//         <div key={index} className="space-y-1">
//           <div className="flex justify-between">
//             <span className="text-gray-300">{lang.name}</span>
//             <span className="text-gray-400">{lang.percentage}%</span>
//           </div>
//           <div className="w-full bg-gray-700/30 rounded-full h-2">
//             <div 
//               className={`${lang.color} h-2 rounded-full`} 
//               style={{ width: `${lang.percentage}%` }}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// Enhanced contact section
const ContactSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <LanguageStats />
    
    <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
      <div className="space-y-6">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center gap-4 group">
            <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
              <item.icon className="w-5 h-5 text-blue-400" />
            </div>
            {item.isLink ? (
              <a 
                href={item.href} 
                className="text-gray-300 hover:text-cyan-400 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                {item.content}
              </a>
            ) : (
              <span className="text-gray-300">{item.content}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Main component with initial fade-in animation
export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute inset-0 min-h-screen overflow-auto">
      <BackgroundEffects />
      
      <div className="relative pt-24 pb-24 px-4">
        <div 
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
        >
          <div className="bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl shadow-blue-900/10 p-8">
            <ProfileSection />
            
            {/* Divider with animation */}
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent my-8 animate-pulse"></div>
            
            <SkillsSection />
            
            {/* Divider with animation */}
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-8 animate-pulse"></div>
            
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { CodeBracketIcon, GlobeAltIcon, WrenchScrewdriverIcon, ServerStackIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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

export default function Projects() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [carouselView, setCarouselView] = useState(true);

    // Project data
    const projects = [
        {
            title: "Tabify",
            description: "A Chrome Extension that helps streamline productivity for research and other aspects. Tabify helps users organize their browser tabs into collections, making it easier to switch between different research projects or workflows.",
            technologies: ["React", "JavaScript", "Chrome Storage", "HTML/CSS"],
            link: "https://github.com/OmoT7/Tabify",
            icon: <GlobeAltIcon className="w-6 h-6" />,
            category: "Frontend/Full Stack",
            color: "cyan"
        },
        {
            title: "YelpCamp Clone",
            description: "A full-stack web application clone of Yelp's camping feature with CRUD operations, and responsive design. Users can create, read, update and delete camping locations, as well as leave reviews and ratings.",
            technologies: ["React", "Node.js", "MongoDB", "Express", "RESTful API"],
            link: "https://github.com/OmoT7",
            icon: <GlobeAltIcon className="w-6 h-6" />,
            category: "Full Stack",
            color: "blue"
        },
        {
            title: "nuPython Parser",
            description: "Custom Python parser with optimized memory handling and improved performance metrics. This project focuses on creating a more efficient way to parse and execute Python code, with significant performance gains for specific use cases.",
            technologies: ["Python", "C", "Memory Optimization", "Parsing Algorithms"],
            link: "https://github.com/OmoT7",
            icon: <CodeBracketIcon className="w-6 h-6" />,
            category: "Systems",
            color: "emerald"
        },
        {
            title: "nuMaps",
            description: "A terminal-based Google Maps-like application that tells the user nearby bus times as well as locations around Northwestern University. It provides real-time updates for campus transportation and points of interest.",
            technologies: ["C", "Terminal UI", "Data Structures", "API Integration"],
            link: "https://github.com/OmoT7",
            icon: <CodeBracketIcon className="w-6 h-6" />,
            category: "Application",
            color: "green"
        },
        {
            title: "QuackMinder",
            description: "A Duck Shaped automatic pill dispenser with an alarm system that reminds people to take their medication. This assistive technology solution helps people maintain their medication schedules through friendly reminders.",
            technologies: ["CircuitPy", "OnShape", "Hardware Design", "Embedded Systems"],
            link: "https://github.com/OmoT7/THE-QUACKMINDER",
            icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
            category: "Hardware/Product",
            color: "yellow"
        },
        {
            title: "Eaze-Lay",
            description: "A Robotic Arm that lays blanket covers over people who have a limited range of motion in their upper extremities. This accessibility project aims to increase independence for individuals with mobility challenges.",
            technologies: ["CircuitPy", "OnShape", "Robotics", "Accessibility Design"],
            link: "https://github.com/OmoT7/Ease-Lay",
            icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
            category: "Hardware/Product",
            color: "orange"
        },
        {
            title: "Photoapp CLI Application",
            description: "Utilized AWS RDS and S3 to create a command line application that simulates a photo application. This cloud-based solution allows for efficient storage and retrieval of photos with metadata and user management.",
            technologies: ["AWS", "MySQL", "Docker", "PowerShell", "Cloud Architecture"],
            link: "https://github.com/OmoT7/Photoapp-CLI",
            icon: <ServerStackIcon className="w-6 h-6" />,
            category: "Cloud Computing/Software",
            color: "purple"
        }
    ];

    // Navigation controls for carousel
    const next = () => {
        if (animating) return;
        setAnimating(true);
        setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
        setTimeout(() => setAnimating(false), 500);
    };

    const prev = () => {
        if (animating) return;
        setAnimating(true);
        setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
        setTimeout(() => setAnimating(false), 500);
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
            
            // Page navigation shortcuts
            switch(e.key.toLowerCase()) {
                case 'h': window.location.href = '/'; break;
                case 'a': window.location.href = '/about'; break;
                case 'p': window.location.href = '/projects'; break;
                case 'w': window.location.href = '/work'; break;
                case 'v': setCarouselView(prev => !prev); break;
                default: break;
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        setIsVisible(true);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // Calculate prev and next indices for carousel
    const prevIndex = activeIndex === 0 ? projects.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === projects.length - 1 ? 0 : activeIndex + 1;

    // Carousel styles
    const carouselStyles = {
        container: "relative w-full h-full overflow-hidden",
        slide: {
            active: "absolute inset-0 w-full h-full opacity-100 transform translate-x-0 z-10 transition-all duration-500 ease-in-out",
            prev: "absolute inset-0 w-full h-full opacity-0 transform -translate-x-full z-0 transition-all duration-500 ease-in-out",
            next: "absolute inset-0 w-full h-full opacity-0 transform translate-x-full z-0 transition-all duration-500 ease-in-out",
            other: "absolute inset-0 w-full h-full opacity-0 transform scale-95 z-0 transition-all duration-500 ease-in-out"
        }
    };

    return (
        <div className="absolute inset-0 min-h-screen overflow-auto">
            {/* Enhanced Gradient Background with Animation */}
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
            <div className="relative min-h-screen z-10 pt-16 pb-16 px-4">
                <div 
                    className={`max-w-6xl mx-auto bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl shadow-blue-900/10 p-8 
                               transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}
                >
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-4">
                            Projects
                        </h1>
                        <div className="flex justify-between items-center">
                            <p className="text-lg text-gray-300">
                                A collection of my work spanning web development, systems programming, and more.
                            </p>
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setCarouselView(true)} 
                                    className={`px-4 py-2 rounded-lg transition-all ${carouselView ? 
                                        'bg-blue-500/30 text-blue-300 ring-1 ring-blue-500/50' : 
                                        'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300'}`}
                                >
                                    Carousel
                                </button>
                                <button 
                                    onClick={() => setCarouselView(false)}
                                    className={`px-4 py-2 rounded-lg transition-all ${!carouselView ? 
                                        'bg-blue-500/30 text-blue-300 ring-1 ring-blue-500/50' : 
                                        'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-300'}`}
                                >
                                    Grid
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Divider with animation */}
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-12"></div>

                    {carouselView ? (
                        /* Carousel View */
                        <div className="relative h-96 mb-16">
                            {/* Previous/Next button controls */}
                            {/* <button 
                                onClick={prev}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-gray-300 hover:text-white p-3 rounded-full transition-all"
                                aria-label="Previous project"
                            >
                                <ChevronLeftIcon className="w-6 h-6" />
                            </button>
                            
                            <button 
                                onClick={next}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-gray-300 hover:text-white p-3 rounded-full transition-all"
                                aria-label="Next project"
                            >
                                <ChevronRightIcon className="w-6 h-6" />
                            </button> */}
                            
                            {/* Project Cards in Carousel */}
                            <div className={carouselStyles.container}>
                                {projects.map((project, index) => {
                                    let slideStyle = carouselStyles.slide.other;
                                    
                                    if (index === activeIndex) {
                                        slideStyle = carouselStyles.slide.active;
                                    } else if (index === prevIndex) {
                                        slideStyle = carouselStyles.slide.prev;
                                    } else if (index === nextIndex) {
                                        slideStyle = carouselStyles.slide.next;
                                    }
                                    
                                    return (
                                        <div
                                            key={index}
                                            className={slideStyle}
                                        >
                                            <div className="h-full bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-md p-8 rounded-2xl border border-white/10 overflow-hidden flex flex-col">
                                                {/* Project Header */}
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm mb-3">
                                                            {project.icon}
                                                            <span>{project.category}</span>
                                                        </div>
                                                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                                                    </div>
                                                    
                                                    <div className="text-2xl font-bold text-gray-500">
                                                        {index + 1}/{projects.length}
                                                    </div>
                                                </div>
                                                
                                                {/* Project Description */}
                                                <div className="text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                                                    {project.description}
                                                </div>
                                                
                                                {/* Technologies & Link */}
                                                <div className="mt-auto">
                                                    {/* Technologies Used */}
                                                    <div className="flex flex-wrap gap-2 mb-6">
                                                        {project.technologies.map((tech, i) => (
                                                            <span key={i} className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    
                                                    {/* View Project Button */}
                                                    <a 
                                                        href={project.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500/30 hover:bg-blue-500/50 text-white transition-all"
                                                    >
                                                        View Project
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            {/* Pagination Indicators */}
                            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {projects.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setAnimating(true);
                                            setActiveIndex(index);
                                            setTimeout(() => setAnimating(false), 500);
                                        }}
                                        className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-blue-400' : 'bg-gray-500/50 hover:bg-gray-400/70'}`}
                                        aria-label={`Go to project ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Grid View Alternative */
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {projects.map((project, index) => (
                                <div 
                                    key={index} 
                                    className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-900/20 hover:scale-105 duration-300"
                                >
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 mb-3">
                                            {project.icon}
                                            <span className="text-sm text-blue-400">{project.category}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.technologies.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full">
                                                    +{project.technologies.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                        
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                                        >
                                            View Project
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Keyboard Navigation Info */}
                    <div className="bg-white/5 rounded-lg p-4 mb-8">
                        <h3 className="text-lg font-medium text-gray-200 mb-2">Keyboard Navigation</h3>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-black/30 rounded border border-white/10 text-sm">←</span>
                                <span className="text-gray-300">Previous</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-black/30 rounded border border-white/10 text-sm">→</span>
                                <span className="text-gray-300">Next</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-black/30 rounded border border-white/10 text-sm">V</span>
                                <span className="text-gray-300">Toggle View</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-black/30 rounded border border-white/10 text-sm">H</span>
                                <span className="text-gray-300">Home</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-black/30 rounded border border-white/10 text-sm">A</span>
                                <span className="text-gray-300">About</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap justify-center gap-4">
                        <a href="/" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group">
                            <span className="text-gray-400 group-hover:text-white transition-colors">🏠</span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">Home</span>
                            <span className="ml-1 text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-400">h</span>
                        </a>
                        <a href="/about" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group">
                            <span className="text-gray-400 group-hover:text-white transition-colors">👤</span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">About</span>
                            <span className="ml-1 text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">a</span>
                        </a>
                        <a href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/20 text-white transition-all group">
                            <span className="text-white transition-colors"><CodeBracketIcon className="w-5 h-5" /></span>
                            <span className="text-white transition-colors">Projects</span>
                            <span className="ml-1 text-xs px-2 py-1 rounded bg-indigo-500/40 text-indigo-300">p</span>
                        </a>
                        <a href="/work" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all group">
                            <span className="text-gray-400 group-hover:text-white transition-colors">💼</span>
                            <span className="text-gray-300 group-hover:text-white transition-colors">Work Experience</span>
                            <span className="ml-1 text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-400">w</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}
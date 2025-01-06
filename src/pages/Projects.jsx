import React from 'react';
import { CodeBracketIcon, GlobeAltIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function Projects() {
    const projects = [
        {
            title: "Tabify",
            description: "A Chrome Extension that helps streamline productivity for research and other aspects",
            technologies: ["React", "JS", "Chrome Storage"],
            link: "https://github.com/OmoT7/Tabify",
            icon: <GlobeAltIcon className="w-6 h-6" />,
            category: "Frontend/Full Stack"
        },
        {
            title: "YelpCamp Clone",
            description: "A full-stack web application clone of Yelp's camping feature with CRUD operations, and responsive design.",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            link: "https://github.com/OmoT7",
            icon: <GlobeAltIcon className="w-6 h-6" />,
            category: "Full Stack"
        },
        {
            title: "nuPython Parser",
            description: "Custom Python parser with optimized memory handling and improved performance metrics.",
            technologies: ["Python", "C"],
            link: "https://github.com/OmoT7",
            icon: <CodeBracketIcon className="w-6 h-6" />,
            category: "Systems"
        },
        {
            title: "nuMaps",
            description: "A termial based Google Maps-like application that tells the user nearby bus times as well as locations around northwestern",
            technologies: ["C"],
            link: "https://github.com/OmoT7",
            icon: <CodeBracketIcon className="w-6 h-6" />,
            category: "Application"
        },
        {
            title: "QuackMinder",
            description: "A Duck Shaped automatic pill dispenser with an alarm system that reminds people to take their medication",
            technologies: ["CircuitPy", "OnShape"],
            link: "https://github.com/OmoT7/THE-QUACKMINDER",
            icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
            category: "Hardware/Product"
        },
        {
            title: "Eaze-Lay",
            description: "A Robotic Arm that lays blanket covers over people who have a limited range of motion in their upper extermities",
            technologies: ["CircuitPy", "OnShape"],
            link: "https://github.com/OmoT7/Ease-Lay",
            icon: <WrenchScrewdriverIcon className="w-6 h-6" />,
            category: "Hardware/Product"
        },


        // Add more projects
    ];

    return (
        <div className="absolute inset-0 min-h-screen scrollbar-hide overflow-auto">
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 bg-[length:400%_400%] animate-gradient-x"></div>

            {/* Wave Layers */}
            <div className="fixed bottom-0 left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-wave opacity-80 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-1.25rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-60 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-2.5rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_20s_linear_reverse_infinite] opacity-50 translate-x-[-50%]"></div>

            {/* Main Content */}
            <div className="relative flex justify-center items-center min-h-screen text-[#D1D5DB] z-10 pt-16">
                <section className="flex flex-col w-[1000px] bg-[#020314]/30 p-10 rounded-xl 
                    m-4 animate-fade-in-up backdrop-blur-sm
                    ring-1 ring-blue-500/20 hover:ring-cyan-500/30
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] 
                    transition-all duration-500 ease-in-out
                    relative overflow-hidden group"
                >
                    {/* Header */}
                    <div className="animate-fade-in-down mb-8">
                        <h1 className="text-4xl font-bold mb-4">Projects</h1>
                        <p className="text-lg">A collection of my work spanning web development, systems programming, and more.</p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-2 gap-6 animate-fade-in-up delay-200">
                        {projects.map((project, index) => (
                            <div key={index} className="relative group bg-[#0d0f13]/80 rounded-lg p-6 shadow-lg
                                hover:scale-[1.02] transition-all duration-300 ease-in-out">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg"></div>
                                <div className="relative">
                                    <div className="flex items-center gap-3 mb-3">
                                        {project.icon}
                                        <span className="text-sm text-cyan-400">{project.category}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <a href={project.link} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <nav className="mt-12 flex justify-center animate-fade-in-up delay-300">
                        <Link to={'/'} className="mr-6 hover:text-cyan-400 transition-colors duration-300">
                            <span>[ h ] Home</span>
                        </Link>
                        <Link to={'/about'} className="mr-6 hover:text-blue-400 transition-colors duration-300">
                            <span>[ a ] About</span>
                        </Link>
                        <Link to={'/projects'} className="mr-6 hover:text-indigo-400 transition-colors duration-300">
                            <span>[ p ] Projects</span>
                        </Link>
                        <Link to={'/work'} className="hover:text-purple-400 transition-colors duration-300">
                            <span>[ w ] Work experience</span>
                        </Link>
                    </nav>
                </section>
            </div>
        </div>
    );
}
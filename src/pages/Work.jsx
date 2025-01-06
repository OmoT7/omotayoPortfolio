import { Link } from 'react-router-dom';
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function Work() {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "IEEE @Northwestern",
            date: "Jan 2024 - May 2024",
            description: " development of a Chrome extension for productivity, streamlining task management by 40% for  students and professionals managing extensive online materials.",
            skills: ["React", "MUI", "JavaScript", "Git"],
            highlights: [
                "Collaborated with a team of six to deliver scalable, well-documented, and tested code using React, Material UI (MUI) and Git",
                "Designed and developed the front-end interface using React and MUI, ensuring smooth navigation and an intuitive user experience",
                "Increased student productivity by 20% through features that organized resources and optimized workflows"
            ]
        },
    ];

    return (
        <div className="absolute inset-0 min-h-screen scrollbar-hide overflow-auto">
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 bg-[length:400%_400%] animate-gradient-x"></div>

            {/* Wave Layers */}
            <div className="fixed bottom-0 left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-wave opacity-80 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-1.25rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-60 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-2.5rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_20s_linear_reverse_infinite] opacity-50 translate-x-[-50%]"></div>

            <div className="relative flex justify-center items-center min-h-screen text-[#D1D5DB] z-10 pt-16">
                <section className="flex flex-col w-[1000px] bg-[#020314]/30 p-10 rounded-xl 
                    m-4 animate-fade-in-up backdrop-blur-sm
                    ring-1 ring-blue-500/20 hover:ring-cyan-500/30
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] 
                    transition-all duration-500 ease-in-out
                    relative overflow-hidden group"
                >
                    {/* Header */}
                    <div className="animate-fade-in-down mb-12">
                        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
                        <p className="text-lg">My professional journey and contributions in the tech industry.</p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500"></div>

                        {/* Experience items */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-20 animate-fade-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                                    {/* Timeline dot */}
                                    <div className="absolute left-7 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500"></div>
                                    
                                    <div className="relative group bg-[#0d0f13]/80 rounded-lg p-6 shadow-lg
                                        hover:scale-[1.02] transition-all duration-300 ease-in-out">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-lg"></div>
                                        
                                        <div className="relative">
                                            {/* Header */}
                                            <div className="flex items-center gap-3 mb-2">
                                                <BriefcaseIcon className="w-6 h-6 text-cyan-400" />
                                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                            </div>
                                            
                                            {/* Company and Date */}
                                            <div className="flex items-center gap-2 text-gray-300 mb-4">
                                                <CalendarIcon className="w-4 h-4" />
                                                <span>{exp.company} | {exp.date}</span>
                                            </div>
                                            
                                            {/* Description */}
                                            <p className="text-gray-300 mb-4">{exp.description}</p>
                                            
                                            {/* Skills */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {exp.skills.map((skill, i) => (
                                                    <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            {/* Highlights */}
                                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li key={i}>{highlight}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="mt-12 flex justify-center animate-fade-in-up">
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
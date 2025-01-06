import React, { useEffect } from 'react';
import Aos from 'aos';
import { MapPinIcon } from '@heroicons/react/16/solid';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import 'aos/dist/aos.css';

export default function Homepage() {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({
            duration: 2300,
            once: false,
            offset: 50,
        });
    }, []);

    return (
        <div className="absolute inset-0 min-h-screen ">
            {/* Original Gradient Background */}
            <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 bg-[length:400%_400%] animate-gradient-x"></div>

            {/* Wave Layers */}
            <div className="fixed bottom-0 left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-wave opacity-80 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-1.25rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-60 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-2.5rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_20s_linear_reverse_infinite] opacity-50 translate-x-[-50%]"></div>

            {/* Main Content */}
            <div className="relative flex justify-center items-center min-h-screen text-[#D1D5DB] z-10 pt-16">
                <section 
                    className="flex flex-col w-[800px] h-[700px] bg-[#020314]/30 p-6 rounded-xl 
                    m-4 animate-fade-in-up backdrop-blur-sm
                    ring-1 ring-blue-500/20
                    hover:ring-cyan-500/30
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] 
                    transition-all duration-500 ease-in-out
                    relative overflow-hidden group"
                >
                    {/* Content container */}
                    <div className="relative flex flex-col h-full">
                        {/* Header section with fade-in animation */}
                        <div className="animate-fade-in-down">
                            <h1 className="text-4xl font-bold">Omotayo Oludemi</h1>
                            <span className="flex flex-row items-center gap-2 mt-4 text-xl animate-fade-in-left delay-200">
                                <MapPinIcon className="w-5 h-5" />
                                Hoffman Estates, Illinois
                            </span>
                            <span className="flex flex-row items-center gap-2 mt-4 text-xl animate-fade-in-left delay-300">
                                <AcademicCapIcon className="w-5 h-5" />
                                Computer Science Major @ Northwestern University 2023-2027
                            </span>
                        </div>

                        {/* Summary section with fade-in animation */}
                        <div className="summary mt-10 animate-fade-in-up delay-500">
                            <p className="mt-4 text-lg leading-relaxed">
                                I'm Omotayo Oludemi, a sophomore Computer Science student at Northwestern University, currently seeking internship opportunities to contribute my skills and grow as a developer.
                                With experience spanning front-end and back-end development, I've created projects like a Chrome extension that improved productivity for students and professionals, a YelpCamp
                                clone to enhance my understanding of RESTful APIs and backend design, and a custom Python parser with optimized memory handling.
                            </p>
                            <p className="mt-6 text-lg leading-relaxed">
                                When I'm not coding, you can find me exploring my creative side through drawing, diving into captivating TV shows, or playing video games while learning about their development
                                and design. I'm also a big fan of binge-watching Fireship to stay inspired and deepen my knowledge of tech and programming trends.
                            </p>
                        </div>

                        {/* Navigation with hover effects */}
                        <nav className="mt-auto flex justify-center mb-4 animate-fade-in-up delay-700">
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
                                <span>[ w ] Work experience </span>
                            </Link>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
    );
}
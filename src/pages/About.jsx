import React from 'react';
import profile from '../assets/Profile_Photo.jpg';
import { LinkIcon, EnvelopeIcon, HashtagIcon } from '@heroicons/react/24/outline';
import LanguageStats from '../components/LanguageStats';

export default function About() {
    return (
        <div className="absolute inset-0 min-h-screen scrollbar-hide overflow-auto">
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 bg-[length:400%_400%] animate-gradient-x"></div>

            {/* Wave Layers */}
            <div className="fixed bottom-0 left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-wave opacity-80 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-1.25rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-60 translate-x-[-50%]"></div>
            <div className="fixed bottom-[-2.5rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[1000%_1000%_0_0] animate-[wave_20s_linear_reverse_infinite] opacity-50 translate-x-[-50%]"></div>

            <section className="relative flex flex-col items-center animate-fade-in-up">
                <div className="text-6xl p-20 mt-20 flex flex-col bg-[#020314]/30 w-9/12 h-auto text-white rounded-xl 
                    backdrop-blur-sm ring-1 ring-blue-500/20 hover:ring-cyan-500/30 
                    hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 ease-in-out">

                    {/* Container for the text and image */}
                    <div className="flex flex-row justify-between gap-6 items-center mb-10 animate-fade-in-down">
                        {/* Text Section */}
                        <div className="flex-1">
                            <h1 className="mb-4">About Me</h1>
                            <p className="text-lg">
                                I am Omotayo Harry Oludemi, a passionate Computer Science student at Northwestern University with a strong foundation in
                                software development and user-centered design. Proficient in Python, JavaScript, and C++, I specialize in building scalable
                                systems and creating seamless user experiences. Beyond my academic and professional pursuits, I am an avid gamer who loves
                                exploring the creative aspects of games like Minecraft and Roblox. These games have inspired me to think critically, collaborate effectively,
                                and design immersive digital experiences. Through projects like a YelpCamp Clone and nuPython, I've applied these skills to develop
                                reliable systems and optimize workflows. With a proactive approach and a love for problem-solving, I aim to merge my passion for gaming
                                with my technical expertise to create innovative solutions that impact lives positively. Whether coding accessibility-focused tools or
                                diving into a gaming session, I thrive on creativity, collaboration, and making meaningful connections.
                            </p>
                        </div>
                        {/* Image Section */}
                        <div className="flex-1 flex justify-center animate-fade-in-left">
                            <img
                                src={profile}
                                alt="Profile"
                                className="rounded-lg w-9/12 h-auto object-cover shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Centered Grid */}
                    <div className="grid grid-cols-3 gap-4 place-items-center animate-fade-in-up">
                        {/* First Box */}
                        <div className="relative group bg-[#0d0f13]/80 rounded-md w-60 h-48 p-4 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-md p-[2px] group-hover:animate-borderGlow">
                                <div className="relative bg-[#0d0f13]/90 w-full h-full rounded-md p-4 group-hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <h2 className="text-lg font-bold text-white mb-2">Frontend</h2>
                                    <ul className="list-disc list-inside text-gray-300 text-lg space-y-1">
                                        <li>React</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Second Box */}
                        <div className="relative group bg-[#0d0f13]/80 rounded-md w-60 h-48 p-4 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-md p-[2px] group-hover:animate-borderGlow">
                                <div className="relative bg-[#0d0f13]/90 w-full h-full rounded-md p-4 group-hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <h2 className="text-lg font-bold text-white mb-2">Backend</h2>
                                    <ul className="list-disc list-inside text-gray-300 text-lg space-y-1">
                                        <li>Python</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>Mongoose</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Third Box */}
                        <div className="relative group bg-[#0d0f13]/80 rounded-md w-60 h-48 p-4 shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-md p-[2px] group-hover:animate-borderGlow">
                                <div className="relative bg-[#0d0f13]/90 w-full h-full rounded-md p-4 group-hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <h2 className="text-lg font-bold text-white mb-2">Infrastructure</h2>
                                    <ul className="list-disc list-inside text-gray-300 text-lg space-y-1">
                                        <li>AWS (Learning)</li>
                                        <li>MongoDB</li>
                                        <li>SQL (Learning)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center animate-fade-in-up">
                        <div className="relative w-11/12 animate-fade-in-left delay-200">
                            <LanguageStats />
                        </div>

                        <div className="flex justify-center relative group bg-[#0d0f13]/80 rounded-md w-1/2 shadow-lg mt-8 animate-fade-in-right delay-300 h-80">
                            <div className="relative inset-0 bg-gradient-to-br h-full from-cyan-500/30 via-blue-500/30 to-purple-500 rounded-md p-[2px] group-hover:animate-borderGlow">
                                <div className="relative bg-[#0d0f13]/30 w-full h-full rounded-md p-3 group-hover:scale-[1.01] transition-transform duration-300 ease-in-out flex flex-col justify-center">
                                    <div className="space-y-6">
                                        <span className="text-base">
                                            <div className="flex row items-center gap-4">
                                                <LinkIcon className="w-4 h-4" />
                                                <a href="https://github.com/OmoT7">https://github.com/OmoT7</a>
                                            </div>
                                        </span>

                                        <span className="text-base">
                                            <div className="flex row items-center gap-4">
                                                <EnvelopeIcon className="w-6 h-6" />
                                                <h6>omotayooludemi@gmail.com | omotayooludemi2027@unorthwestern.edu</h6>
                                            </div>
                                        </span>
                                        <span className="text-base">
                                            <div className="flex row items-center gap-4">
                                                <HashtagIcon className="w-4 h-4" />
                                                <h6>+1 (331)-245-4232</h6>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
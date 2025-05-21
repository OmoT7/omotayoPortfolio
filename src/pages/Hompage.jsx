import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import your images
import profileImage from '../assets/Profile_Photo.jpg';
import schoolLogo from '../assets/NU_Logo.png';
import ColorStack from '../assets/ColorStack.png';
import ECMO from '../assets/ECMO.jpeg';
import IEEE from '../assets/IEEE.jpeg';
import NSBELOGO from '../assets/NSBELogoGiant.png'
import ISAC from '../assets/Illinois-State-Scholar.jpg';
import QB from '../assets/QB-Icon.jpg';

export default function Homepage() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
            offset: 50,
        });
    }, []);

    return (
        <div className="min-h-screen bg-[#020314] text-[#D1D5DB] relative overflow-hidden">
            {/* Gradient Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B3C] via-[#0F1729] to-[#0A1020] opacity-90 z-0"></div>
            <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[200px] z-0"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[200px] z-0"></div>

            <div className="flex relative z-10">
                {/* Left Fixed Section */}
                <div
                    className="w-1/4 h-screen bg-[rgba(20,20,30,0.8)] text-[#D1D5DB] flex flex-col items-center justify-center py-10 px-4 fixed left-0 top-0 bottom-0 overflow-hidden border-r border-[#1E293B]"
                    data-aos="fade-right"
                >
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="rounded-full w-64 h-64 object-cover mb-4 border-4 border-cyan-400/30"
                        data-aos="zoom-in"
                    />
                    <h1
                        className="text-2xl font-bold text-center mb-4 text-white"
                        data-aos="fade-down"
                    >
                        Omotayo Harry <span className="text-cyan-400">Oludemi</span>
                    </h1>
                    <ul
                        className="text-gray-400 text-xs space-y-2 text-center"
                        data-aos="fade-up"
                    >
                        <li>School: Northwestern University 2023-2027</li>
                        <li>Email: omotayooludemi@gmail.com</li>
                        <li>Phone: 331-245-4232</li>
                        <li>Location: Hoffman Estate, IL</li>
                    </ul>
                </div>

                {/* Right Scrollable Section */}
                <div
                    className="w-11/12 ml-auto pl-[20%] min-h-screen overflow-y-auto px-8 py-10 space-y-10"
                    style={{
                        scrollBehavior: 'smooth',
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none'
                    }}
                >
                    {/* Introduction Section */}
                    <section
                        className="bg-[rgba(20,20,30,0.8)] rounded-2xl p-6 border border-[#1E293B]"
                        data-aos="fade-left"
                    >
                        <h2
                            className="text-xl font-bold mb-4 text-white"
                            data-aos="fade-down"
                        >
                            Welcome to My Website!
                        </h2>
                        <p
                            className="text-gray-300"
                            data-aos="fade-up"
                        >
                            Welcome to my personal website! I'm Omotayo Harry Oludemi, a student
                            at Northwestern University with a passion for technology and
                            innovation. I'm currently focused on front-end development, with
                            experience in JavaScript, HTML, CSS, React, and Python. My journey
                            has allowed me to work on exciting projects, including developing
                            a custom device to assist a child with Arthrogryposis, as well as
                            leading the development of a Chrome extension to enhance task
                            management for students and professionals.
                        </p>
                    </section>

                    {/* Education & Clubs Section */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-4 text-white"
                            data-aos="fade-down"
                        >
                            Education & Clubs
                        </h2>
                        <div
                            className="grid grid-cols-2 gap-4"
                            data-aos="fade-up"
                        >
                            <div
                                className="bg-[rgba(20,20,30,0.8)] rounded-lg border border-[#1E293B] p-4"
                                data-aos="zoom-in"
                            >
                                <img
                                    className="w-full h-auto object-cover mb-4 rounded"
                                    src={schoolLogo}
                                    alt="School"
                                />
                                <p className="text-sm text-gray-300">
                                    I go to Northwestern University and a couple clubs that I am
                                    involved in are NSBE, Colorstack, Emerging Coders, and IEEE.
                                </p>
                            </div>
                            {/* Club Logos */}
                            <div
                                className="grid grid-cols-2 gap-4"
                                data-aos="fade-left"
                            >
                                {[ECMO, IEEE, ColorStack, NSBELOGO].map((logo, index) => (
                                    <img
                                        key={index}
                                        src={logo}
                                        alt={`Club Logo ${index + 1}`}
                                        className="rounded shadow-md hover:scale-105 transition-transform"
                                        data-aos="flip-left"
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Awards & Achievements Section */}
                    <section>
                        <h2
                            className="text-2xl font-bold mb-4 text-white"
                            data-aos="fade-down"
                        >
                            Awards & Achievements
                        </h2>
                        <div
                            className="flex flex-wrap gap-4"
                            data-aos="fade-up"
                        >
                            {[
                                { image: QB, title: 'QuestBridge Match', description: 'Recognized for academic excellence and potential.' },
                                { image: ISAC, title: 'Illinois State Scholar', description: 'Acknowledged for outstanding academic achievements.' }
                            ].map((achievement, index) => (
                                <div
                                    key={index}
                                    className="w-72 bg-[rgba(20,20,30,0.8)] rounded-lg border border-[#1E293B] p-4 flex flex-col items-center hover:bg-[#1E293B]/50 transition-colors"
                                    data-aos="zoom-in"
                                >
                                    <img
                                        className="w-40 h-40 mb-4 rounded-lg object-cover"
                                        src={achievement.image}
                                        alt={achievement.title}
                                    />
                                    <h3 className="font-bold text-lg text-cyan-400 mb-2">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-sm text-gray-300 text-center">
                                        {achievement.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
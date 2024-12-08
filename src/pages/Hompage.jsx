import React, { useEffect, useState} from 'react';
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
import CB from '../assets/collegeboard.jpeg';
import HEHS from '../assets/HoffmanLogo.jpeg';
import XAO from '../assets/XAO.png'
import Pres from '../assets/presidentAward.png';
import GridCard from '../components/GridCard';
export default function Homepage() {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        Aos.init({
            duration:23000,
            once: false,
            offset: 50,
        });

        const handleScroll = () => {
            if (contentRef.current && sidebarRef.current) {
                const contentBottom = contentRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                // Check if the content is near the bottom of the viewport
                // Adjust the 200 to control how early the sidebar moves
                setIsNearFooter(contentBottom - windowHeight < 200);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1A2B3C] via-[#0F1729] to-[#0A1020] 
            bg-[length:200%_200%] 
            animate-gradient-x 
            text-[#D1D5DB] 
            relative 
            overflow-hidden 
            before:absolute 
            before:inset-0 
            before:bg-gradient-to-br 
            before:from-cyan-500/10 
            before:via-blue-700/5 
            before:to-purple-600/10 
            before:opacity-30 
            before:animate-gradient-x 
            before:transition-all 
            before:duration-[5000ms] 
            before:ease-in-out"
        >

            <div className="flex relative z-10">
                {/* Left Fixed Section */}
                <div
                    className="w-1/4 h-screen bg-[rgba(20,20,30,0.8)] text-[#D1D5DB] flex flex-col items-center justify-center py-10 px-4 fixed left-0 top-0 bottom-0 overflow-hidden border-r border-[#1E293B]"
                    data-aos="fade-right"
                    style={{transform: `translateY(${Math.min(0, -window.scrollY * 0.5)}px)`}}
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
                                className="bg-[rgba(20,20,30,0.8)] rounded-xl border border-[rgba(20,30,50,0.8)] p-6 shadow-lg hover:shadow-[0_4px_20px_rgba(6,182,212,0.5)] transition-all transform hover:scale-105"
                                data-aos="zoom-in"
                            >
                                {/* Card Image */}
                                <img
                                    className="w-full h-auto object-cover mb-6 rounded-lg border border-[rgba(30,40,60,0.8)] shadow-md"
                                    src={schoolLogo}
                                    alt="School"
                                />

                                {/* Card Content */}
                                <p className="text-sm text-[#D1D5DB] leading-relaxed">
                                    I go to <span className="text-[#06B6D4] font-bold">Northwestern University</span> and am involved in several organizations like
                                    <span className="text-[#38BDF8] font-semibold"> NSBE</span>, <span className="text-purple-400 font-semibold">Colorstack</span>,
                                    <span className="text-green-400 font-semibold"> Emerging Coders</span>, and <span className="text-sky-400 font-semibold">IEEE</span>.
                                </p>
                            </div>

                            {/* Club Logos */}
                            <div
                                className="grid grid-cols-2 gap-6"
                                data-aos="fade-left"
                            >
                                {[ECMO, IEEE, ColorStack, NSBELOGO].map((logo, index) => (
                                    <div
                                        key={index}
                                        className="bg-[rgba(20,20,30,0.8)] rounded-lg border border-[rgba(30,40,60,0.8)] p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(6,182,212,0.5)]"
                                        data-aos="flip-left"
                                    >
                                        <img
                                            src={logo}
                                            alt={`Club Logo ${index + 1}`}
                                            className="w-full h-auto object-contain rounded-lg"
                                        />
                                    </div>
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
                                { image: QB, title: 'QuestBridge Match', description: 'College admissions program that connects high-achieving, low-income students with full four-year scholarships to top U.S. colleges. Through a competitive process, students apply and "match" with a partner college, receiving a financial aid package that covers tuition, room, board, and other expenses.' },
                                { image: ISAC, title: 'Illinois State Scholar', description: 'Acknowledged for outstanding academic achievements.' },
                                { image: CB, title: 'National African American Recognition Award', description: ' honors high-achieving African American students for exceptional academic performance, demonstrated through high PSAT/NMSQT or AP scores and strong school records' },
                                { image: HEHS, title: 'Academic Scholar', description: 'Academic Scholars are graduating seniors who have earned a minimum 3.90 regular grade point average or a minimum 4.70 weighted grade point average at the culmination of the seventh semester. These students received the Richard C. Kolze Achievement Award for their outstanding academic achievements during their high school careers.' },
                                { image: XAO, title: 'XAO Scholarship Recpiant', description: ' scholarship to African-American\'s that meet the specified qualifications, are residents of the Northwest suburbs of Chicago' },
                                { image: Pres, title: 'President\'s Education Award', description: 'the most distinguished graduating seniors for their accomplishments in many areas, including academic success, leadership, and service to school and community.' }
                            ].map((achievement, index) => (
                                <GridCard key={index} achievement={achievement} />
                            ))}
                        </div>
                    </section>
                    
                
                </div>
            </div>
        </div>
    );
}
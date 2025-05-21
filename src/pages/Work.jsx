import { Link } from 'react-router-dom';
import { BriefcaseIcon, CalendarIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// Particle animation component - Adding this from your Homepage
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

export default function Work() {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "IEEE @Northwestern",
            date: "Jan 2024 - May 2024",
            description: "Led the development of a Chrome extension that boosted productivity, streamlining task management by 40% for students and professionals handling extensive online materials.",
            skills: ["React", "MUI", "JavaScript", "Git", "REST API", "Responsive Design"],
            highlights: [
                "Collaborated with a cross-functional team of six to deliver scalable, well-documented, and tested code using React, Material UI (MUI) and Git version control",
                "Architected and implemented the front-end interface using React and MUI, ensuring seamless navigation and an intuitive user experience across devices",
                "Increased student productivity by 40% through innovative features that organized resources and optimized workflows",
                "Contributed to weekly code reviews and implemented feedback to maintain high code quality standards"
            ],
            icon: BriefcaseIcon,
            color: "cyan"
        },
        {
            title: "Teaching Assistant",
            company: "Computer Science Department @Northwestern",
            date: "Jan 2025 - Mar 2025",
            description: "Mentored undergraduate students in Data Structures and Algorithms, improving class average performance by 15% through personalized instruction and comprehensive feedback.",
            skills: ["Debugging", "Whiteboarding", "Algorithms", "Mentoring", "Technical Communication"],
            highlights: [
                "Conducted weekly office hours to assist 30+ students with complex Data Structures and Algorithms concepts, providing clear explanations and practical examples",               
                "Evaluated assignments and exams with detailed feedback, resulting in a 15% improvement in student comprehension and performance",
                "Created supplementary learning materials that simplified complex algorithmic concepts for diverse learning styles"
            ],
            icon: AcademicCapIcon,
            color: "blue"
        },
        {
            title: "Software Engineering Intern",
            company: "Tech Innovations Inc.",
            date: "Jun 2023 - Aug 2023",
            description: "Contributed to the development of a customer-facing web application that increased user engagement by 25% through intuitive design and responsive functionality.",
            skills: ["JavaScript", "React", "Node.js", "MongoDB", "Agile/Scrum"],
            highlights: [
                "Implemented responsive UI components using React that improved mobile user experience, resulting in a 25% increase in mobile engagement",
                "Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data flow between client and server",
                "Participated in daily stand-ups and sprint planning in an Agile environment, consistently meeting or exceeding sprint goals",
                "Optimized application performance by reducing load time by 30% through code refactoring and implementing lazy loading techniques"
            ],
            icon: ChartBarIcon,
            color: "purple"
        }
    ];

    return (
        <div className="absolute inset-0 min-h-screen scrollbar-hide overflow-auto">
            {/* Enhanced Gradient Background with Animation */}
            <div className="fixed inset-0 bg-gradient-to-r from-cyan-900/90 via-blue-900/90 to-purple-900/90 bg-[length:400%_400%] animate-gradient-x"></div>
            
            {/* Add Particle Background */}
            <ParticleBackground />

            {/* Improved Wave Animations - matched with Homepage */}
            <div className="fixed bottom-0 left-0 w-full">
                <div className="absolute bottom-0 left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-wave opacity-80 transform -translate-x-1/2"></div>
                <div className="absolute bottom-[-1.25rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-[wave_18s_linear_reverse_infinite] opacity-60 transform -translate-x-1/2"></div>
                <div className="absolute bottom-[-2.5rem] left-1/2 w-[200%] h-48 bg-white/10 rounded-[100%_100%_0_0] animate-[wave_20s_linear_reverse_infinite] opacity-50 transform -translate-x-1/2"></div>
            </div>

            <div className="relative flex justify-center items-center min-h-screen text-gray-200 z-10 pt-16 pb-20">
                <section className="flex flex-col w-full max-w-4xl bg-gray-900/30 p-8 sm:p-10 rounded-xl 
                    m-4 animate-fade-in-up backdrop-blur-sm
                    ring-1 ring-blue-500/20 hover:ring-cyan-500/30
                    hover:shadow-lg transition-all duration-500 ease-in-out
                    relative overflow-hidden group"
                >
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="relative">
                        {/* Header */}
                        <div className="animate-fade-in-down mb-12">
                            <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Work Experience</h1>
                            <p className="text-lg text-gray-300">My professional journey and contributions in the tech industry.</p>
                        </div>

                        {/* Timeline with enhanced styling */}
                        <div className="relative">
                            {/* Improved timeline line - replace the current one with this */}
                            <div className="absolute left-8 top-4 bottom-4 w-[3px] bg-gray-800/80">
                                {/* Animated glow effect inside the line */}
                                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 animate-pulse-slow opacity-70 blur-[1px]"></div>
                                
                                {/* Animated particles traveling down the timeline */}
                                <div className="absolute w-[5px] h-[5px] rounded-full bg-cyan-300 blur-[1px] left-1/2 transform -translate-x-1/2 animate-timeline-particle-1"></div>
                                <div className="absolute w-[5px] h-[5px] rounded-full bg-blue-300 blur-[1px] left-1/2 transform -translate-x-1/2 animate-timeline-particle-2"></div>
                                <div className="absolute w-[5px] h-[5px] rounded-full bg-purple-300 blur-[1px] left-1/2 transform -translate-x-1/2 animate-timeline-particle-3"></div>
                            </div>

                            {/* Experience items */}
                            <div className="space-y-12">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-16 sm:pl-20 animate-fade-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                                        {/* Enhanced timeline node - without white dot */}
                                        <div className="absolute left-8 -translate-x-1/2 top-6">
                                            {/* Outer glow */}
                                            <div className={`absolute inset-0 bg-${exp.color}-400/30 rounded-full blur-[6px] w-6 h-6 animate-pulse`}></div>
                                            
                                            {/* Inner circle with ring - removed white dot */}
                                            <div className={`relative w-5 h-5 rounded-full bg-${exp.color}-500 z-10 
                                                            border-2 border-gray-900 
                                                            shadow-[0_0_10px_rgba(6,182,212,0.5)]`}>
                                            </div>
                                            
                                            {/* Connector line to card */}
                                            <div className="absolute w-[30px] h-[2px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent 
                                                            top-1/2 left-full -translate-y-1/2"></div>
                                        </div>
                                        
                                        {/* Rest of your experience card content */}
                                        <div className="relative group bg-gray-800/80 rounded-lg p-6 shadow-lg
                                            hover:scale-[1.01] transition-all duration-300 ease-in-out
                                            border border-gray-700/50 hover:border-blue-500/30">
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-lg"></div>
                                            
                                            <div className="relative">
                                                {/* Header */}
                                                <div className="flex items-center gap-3 mb-2">
                                                    <exp.icon className={`w-6 h-6 text-${exp.color}-400`} />
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
                                                        <span key={i} className={`text-xs bg-${exp.color}-500/20 text-${exp.color}-300 px-2 py-1 rounded`}>
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                {/* Highlights */}
                                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                    {exp.highlights.map((highlight, i) => (
                                                        <li key={i} className="pl-1">{highlight}</li>
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
                            <Link to={'/work'} className="text-purple-400 transition-colors duration-300">
                                <span>[ w ] Work experience</span>
                            </Link>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
    );
}
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
            <div className="relative z-[1] container m-auto px-6 md:px-12">
                <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
                    <div className="flex flex-wrap items-start justify-between md:flex-nowrap">
                        {/* Navigation Links */}
                        <div className="w-full md:w-1/2 text-gray-300 space-y-6">
                            <h3 className="text-lg font-bold text-white mb-4">Navigation</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link className="hover:text-sky-400 transition" 
                                          to={"/"}>
                                            Home
                                    </Link>
                                </li>
                                <li>
                                <Link className="hover:text-sky-400 transition" 
                                          to={"/projects"}>
                                            Projects
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Social Media Links */}
                        <div className="w-full md:w-1/2 text-gray-300 space-y-6">
                            <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
                            <ul className="space-y-4">
                                <li>
                                    <a href="https://github.com/OmoT7" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            className="w-5"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="..."></path>
                                        </svg>
                                        <span>Github</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Background Glow */}
            <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
                <div
                    aria-hidden="true"
                    className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
                ></div>
            </div>
            <div
                aria-hidden="true"
                className="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
            ></div>
        </footer>
    );
}

import Video from "../components/Video"
import Tabify from "../assets/Tabify.mp4"



export default function Projects() {


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
            {/* Project 1 */}
            <section className="bg-slate-900/80 min-h-screen w-full p-6 border border-slate-800 flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex-1 max-w-4xl">
                    <p className="text-slate-300 leading-relaxed text-center md:text-left">
                        <span className="text-2xl font-semibold text-white block mb-4">Tabify</span>
                        Enhance your productivity and simplify your online experience with our Chrome extension!
                        Seamlessly streamline access to your most important links,
                        keeping everything you need just a click away.
                        <span className="block mt-4 text-slate-400 italic">
                            Tabify: Your Gateway to Effortless Productivity!
                        </span>
                    </p>
                </div>

                <div className="flex-1 max-w-4xl">
                    <Video source={Tabify} className="w-full rounded-xl shadow-lg" />
                </div>
            </section>

            {/* Project 2 */}
            <section className="bg-slate-900/80 min-h-screen w-full p-6 border border-slate-800 flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex-1 max-w-4xl">
                    <p className="text-slate-300 leading-relaxed text-center md:text-left">
                        <span className="text-2xl font-semibold text-white block mb-4">Tabify</span>
                        Enhance your productivity and simplify your online experience with our Chrome extension!
                        Seamlessly streamline access to your most important links,
                        keeping everything you need just a click away.
                        <span className="block mt-4 text-slate-400 italic">
                            Tabify: Your Gateway to Effortless Productivity!
                        </span>
                    </p>
                </div>

                <div className="flex-1 max-w-4xl">
                    <Video source={Tabify} className="w-full rounded-xl shadow-lg" />
                </div>
            </section>

            {/* Project 3 */}
            <section className="bg-slate-900/80 min-h-screen w-full p-6 border border-slate-800 flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex-1 max-w-4xl">
                    <p className="text-slate-300 leading-relaxed text-center md:text-left">
                        <span className="text-2xl font-semibold text-white block mb-4">Tabify</span>
                        Enhance your productivity and simplify your online experience with our Chrome extension!
                        Seamlessly streamline access to your most important links,
                        keeping everything you need just a click away.
                        <span className="block mt-4 text-slate-400 italic">
                            Tabify: Your Gateway to Effortless Productivity!
                        </span>
                    </p>
                </div>

                <div className="flex-1 max-w-4xl">
                    <Video source={Tabify} className="w-full rounded-xl shadow-lg" />
                </div>
            </section>

            {/* Project 4 */}
            <section className="bg-slate-900/80 min-h-screen w-full p-6 border border-slate-800 flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex-1 max-w-4xl">
                    <p className="text-slate-300 leading-relaxed text-center md:text-left">
                        <span className="text-2xl font-semibold text-white block mb-4">Tabify</span>
                        Enhance your productivity and simplify your online experience with our Chrome extension!
                        Seamlessly streamline access to your most important links,
                        keeping everything you need just a click away.
                        <span className="block mt-4 text-slate-400 italic">
                            Tabify: Your Gateway to Effortless Productivity!
                        </span>
                    </p>
                </div>

                <div className="flex-1 max-w-4xl">
                    <Video source={Tabify} className="w-full rounded-xl shadow-lg" />
                </div>
            </section>








        </div>
    )
}


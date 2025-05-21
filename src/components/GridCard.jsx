export default function GridCard ({ achievement }){
    return(
        <div
        className="w-72 bg-[rgba(20,20,30,0.8)] rounded-lg border border-[#1E293B] p-4 flex flex-col items-center hover:bg-[#1E293B]/50 transition-colors"
        data-aos="zoom-in">
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
    )

}
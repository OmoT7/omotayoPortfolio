import React, { useState } from 'react';

const LanguageStats = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const stats = [
    { language: 'React', percentage: 60 },
    { language: 'JavaScript', percentage: 70 },
    { language: 'HTML/CSS', percentage: 50 },
    { language: 'Python', percentage: 80 },
    { language: 'C', percentage: 40 },
    { language: 'C++', percentage: 50 },
    { language: 'Java', percentage: 60 },
    { language: 'Express.js', percentage: 80 },
    { language: 'Node.js', percentage: 45 },
    { language: 'MongoDB', percentage: 70 },
    
  ];

  return (
    <div className="relative group bg-[#0d0f13]/80 rounded-md w-11/12 shadow-lg mt-8">
      <div className="relative inset-0 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500 rounded-md p-[2px] group-hover:animate-borderGlow">
        <div className="relative bg-[#0d0f13]/30 w-full rounded-md p-3 group-hover:scale-[1.01] transition-transform duration-300 ease-in-out">
          <h2 className="text-base font-bold text-white mb-2">Language Usage Statistics</h2>
          
          <div className="space-y-1.5">
            {stats.map((stat, index) => (
              <div
                key={stat.language}
                className="relative"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="flex items-center gap-2">
                  <div className="w-20 text-sm font-mono text-gray-300">{stat.language}</div>
                  <div className="flex-1 h-3 bg-[#0d0f13]/80 rounded-sm overflow-hidden border border-gray-800">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-300 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                  <div className="w-12 text-sm font-mono text-right text-gray-300">
                    {stat.percentage}%
                  </div>
                </div>
                {hoveredBar === index && (
                  <div className="absolute right-0 -top-8 bg-[#0d0f13]/95 border border-cyan-500/20 p-1 rounded-md shadow-lg text-xs font-mono text-white whitespace-nowrap">
                    {stat.language}: {stat.percentage}% usage
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageStats;
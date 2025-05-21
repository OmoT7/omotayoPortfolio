import React, { useState } from 'react';

const LanguageStats = () => (
  <div className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6">
    <h2 className="text-2xl font-semibold text-white mb-6">Coding Languages</h2>
    <div className="space-y-4">
      {[
        { name: "JavaScript", percentage: 45, color: "bg-yellow-400" },
        { name: "Python", percentage: 30, color: "bg-blue-400" },
        { name: "HTML/CSS", percentage: 15, color: "bg-red-400" },
        { name: "C++", percentage: 10, color: "bg-green-400" }
      ].map((lang, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-300">{lang.name}</span>
            <span className="text-gray-400">{lang.percentage}%</span>
          </div>
          <div className="w-full bg-gray-700/30 rounded-full h-2">
            <div 
              className={`${lang.color} h-2 rounded-full`} 
              style={{ width: `${lang.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LanguageStats;
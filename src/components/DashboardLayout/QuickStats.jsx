// src/components/QuickStats.js
import React from "react";
import { FaFolder, FaPenAlt, FaBrain, FaRegLightbulb } from "react-icons/fa";

const QuickStats = () => {
  // Sample data
  const stats = [
    {
      title: "Total Subjects",
      value: 5,
      max: 10,
      color: "bg-indigo-500",
      icon: <FaFolder />,
    },
    {
      title: "Quizzes Created",
      value: 8,
      max: 15,
      color: "bg-green-500",
      icon: <FaPenAlt />, // Pencil icon for creating quizzes
    },
    {
      title: "Quizzes Taken",
      value: 12,
      max: 20,
      color: "bg-blue-500",
      icon: <FaBrain />, // Brain icon for quizzes taken (thinking)
    },
    {
      title: "Daily Goal",
      value: 2,
      max: 5,
      color: "bg-green-500",
      icon: <FaRegLightbulb />, // Lightbulb = learning goals
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col p-3 bg-gray-100 rounded-md"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${stat.color}`}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-xl font-bold">{stat.value} of {stat.max}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full hidden xl:block bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-current h-2 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${(stat.value / stat.max) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
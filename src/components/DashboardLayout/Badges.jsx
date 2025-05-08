// src/components/Badges.js
import React from "react";
import {
  FaBrain,
  FaFolderOpen,
  FaFireAlt,
  FaTrophy,
  FaShareAlt,
} from "react-icons/fa";

const Badges = () => {
  const badges = [
    {
      id: 1,
      name: "Quiz Starter",
      description: "Took your first quiz!",
      icon: <FaBrain />,
      earned: true,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      name: "Folder Creator",
      description: "Created 5 folders",
      icon: <FaFolderOpen />,
      earned: true,
      color: "bg-green-100 text-green-800",
    },
    {
      id: 3,
      name: "Streak King",
      description: "Reviewed 7 days straight",
      icon: <FaFireAlt />,
      earned: false,
      color: "bg-gray-100 text-gray-600",
    },
    {
      id: 4,
      name: "High Scorer",
      description: "Scored 90%+ in a quiz",
      icon: <FaTrophy />,
      earned: false,
      color: "bg-gray-100 text-gray-600",
    },
    {
      id: 5,
      name: "Share Master",
      description: "Shared 3 quizzes",
      icon: <FaShareAlt />,
      earned: true,
      color: "bg-purple-100 text-purple-800",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Achievements & Badges</h2>
      {/* Container Per Section Contert */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {badges.map((badge) => (
          <div key={badge.id} className={`p-3 rounded-md flex items-center gap-3 ${
            badge.earned ? badge.color : "bg-gray-100 text-gray-400"
          }`}>
             <span className="text-2xl text-current">{badge.icon}</span>
             <div>
              <p className="font-medium">{badge.name}</p>
              <p className="text-xs">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Badges;

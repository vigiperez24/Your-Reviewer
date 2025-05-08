import React from "react";
import { FiFolder, FiCheckSquare, FiShare2, FiEdit2 } from "react-icons/fi"; // Feather Icons

const RecentActivity = () => {
  // My example Data.
  const activities = [
    {
      id: 1,
      action: "Created Folder",
      details: "Math",
      time: "2 hours ago",
      type: "folder",
    },
    {
      id: 2,
      action: "Took Quiz",
      details: "Photosynthesis Quiz",
      score: "90%",
      time: "3 hours ago",
      type: "quiz",
    },
    {
      id: 3,
      action: "Shared quiz",
      details: "Filipino",
      with: "Juan Dela Cruz",
      time: "Yesterday",
      type: "shared",
    },
    {
      id: 4,
      action: "English Grammar Notes",
      details: "Yesterday",
      time: "25 minutes ago",
      type: "edit",
    },
  ];

  // Icon Based on Activit
  const getActivityIcon = (type) => {
    switch (type) {
      case "folder":
        console.log("true");
        return <FiFolder className="text-blue-500" size={20} />;
      case "quiz":
        return <FiCheckSquare className="text-green-500" size={20} />;
      case "shared":
        return <FiShare2 className="text-purple-500" size={20} />;
      case "edit":
        return <FiEdit2 className="text-yellow-500" size={20} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4"> Recent Activity</h2>
      <ul className=" space-y-3">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-start gap-3 p-2 border-l-4 border-gray-200 hover:border-indigo-300 transition"
          >
            <div className="mt-1">{getActivityIcon(activity.type)}</div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">
                <strong>{activity.action}</strong>: {activity.details}
                {activity.score && (
                  <span className="ml-2 text-green-600">
                    ({activity.score})
                  </span>
                )}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;

import React from "react";
// Feather Icons
import {
  FaPlus,
  FaFilter,
  FaSort,
  FaRegFolderOpen,
  FaEllipsisV,
} from "react-icons/fa";

function SubjectCard() {
  const folders = [
    { id: 1, name: "Filipino", quizCount: 5, createdAt: "Yesterday" },
    { id: 2, name: "English", quizCount: 3, createdAt: "Tuesday" },
    { id: 3, name: "Math", quizCount: 5, createdAt: "Wednesday" },
    { id: 4, name: "Filipino", quizCount: 5, createdAt: "Yesterday" },
    { id: 5, name: "English", quizCount: 3, createdAt: "Tuesday" },
    { id: 6, name: "Math", quizCount: 5, createdAt: "Wednesday" },
  ];

  folders.map((folder) => {
    console.log(folder.name);
  });
  return (
    <div className="py-6 md:px-6 flex flex-col gap-3">
      {/* Title */}
      <div>
        <h1>Folder</h1>
      </div>
      {/* Folder Container */}
      <div className="grid  gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="border-l-4  border-indigo-200 hover:border-indigo-400 rounded-md flex justify-between px-4 py-2 items-center bg-white shadow-md gap-4"
          >
            <div className="flex items-center gap-4">
              {/* Icon Container */}
              <div className="w-10 h-10 bg-indigo-100 flex items-center justify-center rounded-full">
                <span className="text-indigo-600 font-semibold text-xl">
                  <FaRegFolderOpen />
                </span>
              </div>
              {/* Subject, Quizzes, CreatedAt */}
              <div className="flex flex-col">
                <h1 className="text-lg font-semibold text-gray-">
                  {folder.name}
                </h1>
                <p className="text-gray-500 text-sm">
                  {folder.quizCount} quiz{folder.quizCount !== 1 ? "es" : ""}
                </p>
                <p className="text-gray-500 text-sm">
                  Created: {folder.createdAt}
                </p>
              </div>
            </div>
            {/* Three Dot Settings */}
            <span>
              <FaEllipsisV />
            </span>
          </div>
        ))}
        {folders.length === 0 && <p>No folders yet. Create one!</p>}
      </div>
    </div>
  );
}

export default SubjectCard;

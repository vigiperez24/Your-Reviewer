import React from "react";
import { FaPlus, FaFilter, FaSort, FaEllipsisV } from "react-icons/fa";

function ListQuiz() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4">
      <div>
        <h1 className="text-2xl font-medium">Filipino</h1>

        {/* Divider Line */}
        <hr className="border-t border-gray-300 my-2" />

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-3 justify-between items-center">
          {/* New Folder Button */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md flex items-center justify-center gap-2">
            <FaPlus /> New Quiz
          </button>

          {/* Filters & Sort */}
          <div className="flex gap-3">
            <button className="bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-300 hover:bg-gray-100 transition">
              <FaFilter /> Filters
            </button>
            <button className="bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-300 hover:bg-gray-100 transition">
              <FaSort /> Sort By Latest
            </button>
          </div>
        </div>

        {/* Folders Title */}
        <h1 className="text-xl font-semibold mt-4 text-center">
          List of Quizzes
        </h1>
      </div>
      {/* List of Card */}
      <div className="bg-white shadow-md rounded-lg p-4 space-y-2">
        {/* Title */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Filipino</h3>
          <div className="text-gray-500 cursor-pointer">
            <FaEllipsisV />
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>Total Items: 20</span>
          <span>Total Points: 30</span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Take a Quiz
        </button>
      </div>
    </div>
  );
}

export default ListQuiz;

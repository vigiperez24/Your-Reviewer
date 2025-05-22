import React from "react";
import { Link } from "react-router-dom";
import noContent from "../../assets/SubjectCardImg/noContent.svg";

import {
  FaPlus,
  FaFilter,
  FaSort,
  FaEllipsisV,
  FaEdit,
  FaTrash,
  FaArrowLeft,
} from "react-icons/fa";

function ListQuiz() {
  const [showModal, setShowModal] = React.useState(null);
  const dropdownRef = React.useRef(null);
  const quizzes = [
    { id: 1, title: "Filipino", totalItems: 20, TotalPoints: 25 },
    { id: 2, title: "English", totalItems: 30, TotalPoints: 35 },
    { id: 3, title: "Math", totalItems: 12, TotalPoints: 12 },
  ];
  console.log(quizzes);
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <Link to="/Review">
          <button className="flex items-center justify-center gap-2">
            <FaArrowLeft />
            <span>Back</span>
          </button>
        </Link>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-medium">Filipino</h1>

          {/* Divider Line */}
          <hr className="border-t border-gray-300 " />

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-3 justify-between items-center">
            {/* New Folder Button */}
            <Link to={"/AddQuiz"}>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md flex items-center justify-center gap-2">
                <FaPlus /> New Quiz
              </button>
            </Link>

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
        </div>
        {/* Subject Title */}
        <div>
          <h1 className="text-xl font-semibold mt-4 text-center">
            List of Quizzes
          </h1>
        </div>

        {/* List of Card */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white shadow-md rounded-lg p-4 space-y-2 w-full md:w-72 relative"
            >
              {/* Title */}

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{quiz.title}</h3>
                <div
                  className="text-gray-500 cursor-pointer"
                  onClick={() =>
                    showModal === quiz.id
                      ? setShowModal(null)
                      : setShowModal(quiz.id)
                  }
                >
                  <FaEllipsisV />
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm text-gray-600">
                <span>Total Items: {quiz.totalItems}</span>
                <span>Total Points: {quiz.TotalPoints}</span>
              </div>

              {/* Action Button */}
              <Link to={"/TakeQuiz"}>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Take a Quiz
                </button>
              </Link>

              {showModal === quiz.id && (
                <div
                  ref={dropdownRef}
                  className="absolute flex  right-4 bottom-4 z-10 bg-white border rounded-md shadow-lg  "
                >
                  <ul>
                    <li>
                      <button className="flex items-center  justify-start w-full gap-2 text-sm hover:bg-gray-100 transition px-2 py-2">
                        <FaEdit className="text-indigo-600" />
                        Edit
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center  justify-start w-full gap-2 text-sm hover:bg-gray-100 transition px-2 py-2">
                        <FaTrash className="text-red-600" />
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {quizzes.length === 0 && (
        <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
          {/* Image */}
          <img src={noContent} alt="No folders" className="w-72 h-72 mb-4" />

          {/* Message */}
          <p className="italic text-gray-500 text-sm md:text-base">
            No quiz yet. Create one!
          </p>
        </div>
      )}
    </div>
  );
}

export default ListQuiz;

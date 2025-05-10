import React from "react";
import { FaFileAlt } from "react-icons/fa";
const quizzes = [
  { title: "Activity 1: Pronoun", date: "August 5, 2025" },
  { title: "Quiz 2: Tenses", date: "August 3, 2025" },
  { title: "Test 3: Grammar", date: "July 30, 2025" },
];

function RecentQuizes() {
  return (
    <div className="py-6 md:px-6 flex flex-col gap-3">
      <h1 className="">Recent Quizzes</h1>

      <div className="grid  gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border border-gray-300 rounded-md shadow-sm bg-white hover:shadow-md transition-shadow"
          >
            <div className="bg-gray-100 p-3 rounded-md">
              <FaFileAlt className="text-indigo-600 text-xl" />
            </div>
            <div>
              <h2 className="text-md font-medium text-gray-800">{quiz.title}</h2>
              <p className="text-sm text-gray-500">{quiz.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentQuizes;
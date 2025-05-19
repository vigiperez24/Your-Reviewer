import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function QuizAnswersPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizzes, answers } = location.state || {};

  const correctAnswers = {
    1: "True",
    2: "100",
    3: "Mitochondria",
  };

  if (!quizzes || !answers) {
    return (
      <div className="h-screen flex items-center justify-center text-gray-700">
        No answers to show.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaCheckCircle className="text-green-500" /> Quiz Answer Review
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            <FaArrowLeft /> Back
          </button>
        </div>

        <div className="space-y-6">
          {quizzes.map((quiz, index) => {
            const userAnswer = answers[quiz.id];
            const correctAnswer = correctAnswers[quiz.id];
            const isCorrect =
              userAnswer?.toString().toLowerCase() ===
              correctAnswer.toString().toLowerCase();

            return (
              <div
                key={quiz.id}
                className="p-4 border border-gray-300 rounded-md bg-gray-50"
              >
                <p className="font-semibold text-gray-800 mb-2">
                  {index + 1}. {quiz.question}
                </p>
                <p className="text-gray-700">
                  Your Answer:{" "}
                  <span
                    className={`font-medium ${
                      isCorrect ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {userAnswer || "No answer"}
                  </span>
                </p>
                {!isCorrect && (
                  <p className="text-gray-700">
                    Correct Answer:{" "}
                    <span className="font-medium text-green-600">
                      {correctAnswer}
                    </span>
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default QuizAnswersPage;

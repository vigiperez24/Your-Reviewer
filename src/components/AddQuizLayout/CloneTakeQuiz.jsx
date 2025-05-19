import React, { useState } from "react";

function TakeQuizPage() {
  // Sample quiz data
  const quizzes = [
    {
      id: 1,
      type: "True or False",
      question:
        "The Earth revolves around the Sun. Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      type: "Identification",
      question:
        "Water boils at 50 degrees Celsius at sea level.",
    },
    {
      id: 3,
      type: "Multiple Choices",
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Ribosome", "Mitochondria", "Cell wall"],
    },
  ];

  // State for tracking current question
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Get current question
  const currentQuiz = quizzes[currentQuestionIndex];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-screen-md">
        {/* Quiz Card */}
        <div className="bg-white p-6 rounded shadow-md mb-4">
          {/* Question Info */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500 text-sm">Question: {currentQuestionIndex + 1} / {quizzes.length}</p>
            <div className="flex gap-4 text-sm text-gray-500">
              <p>1 Point</p>
              <p>Time: 30s</p>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <p className="italic font-medium text-lg">
              {currentQuestionIndex + 1}. {currentQuiz.question}
            </p>
          </div>

          {/* Render based on question type */}
          <div className="space-y-4">
            {/* TRUE OR FALSE */}
            {currentQuiz.type === "True or False" && (
              <>
                <label className="flex items-center gap-2">
                  <input type="radio" name="answer" className="mr-2" />
                  True
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="answer" className="mr-2" />
                  False
                </label>
              </>
            )}

            {/* IDENTIFICATION */}
            {currentQuiz.type === "Identification" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter your answer"
                  className="w-full border border-gray-300 rounded p-2 bg-gray-100"
                />
              </div>
            )}

            {/* MULTIPLE CHOICES */}
            {currentQuiz.type === "Multiple Choices" &&
              currentQuiz.choices?.map((choice, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input type="radio" name="mcq" className="mr-2" />
                  {String.fromCharCode(65 + index)}. {choice}
                </label>
              ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0))
            }
            disabled={currentQuestionIndex === 0}
            className={`px-4 py-2 rounded ${
              currentQuestionIndex === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            } text-white`}
          >
            Previous
          </button>

          {/* Next / Submit Button */}
          <button
            onClick={() =>
              setCurrentQuestionIndex((prev) =>
                prev < quizzes.length - 1 ? prev + 1 : prev
              )
            }
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          >
            {currentQuestionIndex === quizzes.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TakeQuizPage;
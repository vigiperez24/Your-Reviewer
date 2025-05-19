import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTrophy,
  FaPercentage,
  FaStopwatch,
  FaCheck,
  FaTimes,
  FaRedo,
  FaTachometerAlt,
} from "react-icons/fa";

function TakeQuizPage() {
  const quizzes = [
    {
      id: 1,
      type: "True or False",
      question: "The Earth revolves around the Sun.",
    },
    {
      id: 2,
      type: "Identification",
      question: "Water boils at 50 degrees Celsius at sea level.",
    },
    {
      id: 3,
      type: "Multiple Choices",
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Ribosome", "Mitochondria", "Cell wall"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [startTime, setStartTime] = useState(Date.now());
  const [showResults, setShowResults] = useState(false);

  const durationInSeconds = Math.floor((Date.now() - startTime) / 1000);
  const currentQuiz = quizzes[currentQuestionIndex];

  const handleAnswerChange = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuiz.id]: value,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    const correctAnswers = {
      1: "True",
      2: "100",
      3: "Mitochondria",
    };
    quizzes.forEach((quiz) => {
      if (
        answers[quiz.id] &&
        answers[quiz.id].toString().toLowerCase() ===
          correctAnswers[quiz.id].toString().toLowerCase()
      ) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();
  const incorrect = quizzes.length - score;
  const percentage = Math.round((score / quizzes.length) * 100);

  const handleNext = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  };

  const retakeQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setStartTime(Date.now());
  };

  const goToDashboard = () => {
    alert("Going to Dashboard...");
  };

  if (showResults) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center border border-gray-200">
          <h2 className="text-3xl font-extrabold mb-6 text-blue-700 flex items-center justify-center gap-3">
            <FaCheckCircle className="text-green-500" /> Quiz Results
          </h2>

          <div className="space-y-4 text-gray-700 text-lg">
            <p className="flex items-center justify-center gap-3">
              <FaTrophy className="text-yellow-500" />
              Score: <strong>{score}</strong> / {quizzes.length}
            </p>



            <p className="flex items-center justify-center gap-3">
              <FaPercentage className="text-indigo-500" />
              Percentage: <strong>{percentage}%</strong>
            </p>

            <p className="flex items-center justify-center gap-3">
              <FaStopwatch className="text-purple-500" />
              Duration: <strong>{durationInSeconds} seconds</strong>
            </p>

            <p className="flex items-center justify-center gap-3">
              <FaCheck className="text-green-600" />
              Correct Answers: <strong>{score}</strong>
            </p>
                        <p className="flex items-center justify-center gap-3">
              <FaTimes className="text-red-500" />
              Incorrect Answers: <strong>{incorrect}</strong>
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={retakeQuiz}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold shadow"
            >
              <FaRedo /> Retake
            </button>

            <button
              onClick={goToDashboard}
              className="flex items-center gap-2 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition font-semibold shadow"
            >
              <FaTachometerAlt /> Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Question {currentQuestionIndex + 1} of {quizzes.length}
        </h2>
        <p className="mb-6 italic text-gray-700">{currentQuiz.question}</p>

        <div className="space-y-4">
          {currentQuiz.type === "True or False" && (
            <>
              {["True", "False"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer text-gray-700"
                >
                  <input
                    type="radio"
                    name={`question-${currentQuiz.id}`}
                    value={option}
                    checked={answers[currentQuiz.id] === option}
                    onChange={() => handleAnswerChange(option)}
                    className="cursor-pointer"
                  />
                  {option}
                </label>
              ))}
            </>
          )}

          {currentQuiz.type === "Identification" && (
            <input
              type="text"
              placeholder="Type your answer"
              value={answers[currentQuiz.id] || ""}
              onChange={(e) => handleAnswerChange(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          {currentQuiz.type === "Multiple Choices" &&
            currentQuiz.choices.map((choice, idx) => (
              <label
                key={idx}
                className="flex items-center gap-3 cursor-pointer text-gray-700"
              >
                <input
                  type="radio"
                  name={`question-${currentQuiz.id}`}
                  value={choice}
                  checked={answers[currentQuiz.id] === choice}
                  onChange={() => handleAnswerChange(choice)}
                  className="cursor-pointer"
                />
                {String.fromCharCode(65 + idx)}. {choice}
              </label>
            ))}
        </div>

        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`px-4 py-2 rounded font-semibold transition ${
              currentQuestionIndex === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {currentQuestionIndex === quizzes.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TakeQuizPage;

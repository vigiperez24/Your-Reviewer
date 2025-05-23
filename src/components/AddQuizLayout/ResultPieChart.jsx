import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ResultPieChart({ onRetake }) {
  const quizzes = [
    {
      id: 1,
      type: "True or False",
      question: "The Earth revolves around the Sun.",
      correctAnswer: "True",
    },
    {
      id: 2,
      type: "Identification",
      question: "Water boils at what temperature at sea level?",
      correctAnswer: "100°C",
    },
    {
      id: 3,
      type: "Multiple Choices",
      question: "What is the powerhouse of the cell?",
      choices: ["Nucleus", "Ribosome", "Mitochondria", "Cell wall"],
      correctAnswer: "Mitochondria",
    },
    {
      id: 4,
      type: "True or False",
      question: "DNA stands for Deoxyribonucleic Acid.",
      correctAnswer: "True",
    },
    {
      id: 5,
      type: "Identification",
      question: "What is the largest planet in our solar system?",
      correctAnswer: "Jupiter",
    },
    {
      id: 6,
      type: "Multiple Choices",
      question: "Which gas makes up the majority of Earth's atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Nitrogen",
    },
    {
      id: 7,
      type: "True or False",
      question: "The heart has four chambers.",
      correctAnswer: "True",
    },
    {
      id: 8,
      type: "Identification",
      question: "What is the chemical symbol for water? ",
      correctAnswer: "H2O",
    },
    {
      id: 9,
      type: "Multiple Choices",
      question: "Which element has the atomic number 1?",
      choices: ["Helium", "Hydrogen", "Lithium", "Boron"],
      correctAnswer: "Hydrogen",
    },
    {
      id: 10,
      type: "True or False",
      question:
        "The speed of light is approximately 300,000 kilometers per second.",
      correctAnswer: "True",
    },
  ];

  // Dummy User Answers
  const userAnswers = {
    1: "True",
    2: "90°C",
    3: "Mitochondria",
    4: "True",
    5: "Saturn",
    6: "Nitrogen",
    7: "True",
    8: "H2O",
    9: "Hydrogen",
    10: "False",
  };

  const [showResults, setShowResults] = useState(false);

  const correctCount = quizzes.filter(
    (quiz) => userAnswers[quiz.id] === quiz.correctAnswer
  ).length;

  const data = [
    { name: "Correct", value: correctCount },
    { name: "Incorrect", value: quizzes.length - correctCount },
  ];

  const COLORS = ["#7366ff", "#c62828"];

  return (
    <div className="flex flex-col items-center gap-10 px-4 py-6">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-md p-4">
        {/* Header */}
        <div className="text-center p-2">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            Quiz Result
          </h1>
        </div>
        <hr />

        {/* Chart Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
          <div className="text-gray-500 text-sm text-start w-[200px]">
            <ul className="list-disc pl-5 space-y-2">
              <li>Score: {correctCount}/10</li>
              <li>Percentage: {Math.round((correctCount / 10) * 100)}%</li>
              <li>Duration: 5 mins</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <PieChart width={250} height={250}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={70}
                dataKey="value"
                label={({ name, value }) => {
                  const percent = (
                    (value / data.reduce((a, b) => a + b.value, 0)) *
                    100
                  ).toFixed(1);
                  return `${value} (${percent}%)`;
                }}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>

            {/* Legend */}
            <div className="flex justify-center gap-4 mt-2 text-xs sm:text-sm">
              <span className="flex items-center gap-1 text-gray-700 font-medium">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[0] }}
                ></div>
                Correct: {data[0].value}
              </span>
              <span className="flex items-center gap-1 text-gray-700 font-medium">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[1] }}
                ></div>
                Incorrect: {data[1].value}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 px-4">
          <button
            onClick={() => setShowResults(!showResults)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            {showResults ? "Hide Answers" : "Show Answers"}
          </button>
          <button
            onClick={onRetake}
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            Retake Quiz
          </button>
          <Link to="/Dashboard">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-md transition">
              Dashboard
            </button>
          </Link>
        </div>
      </div>
            
      {/* Show Results Section */}
      {showResults && (
        <div className="w-full max-w-3xl space-y-6 mt-6">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded border-t-4 border-purple-700 shadow-md overflow-hidden"
            >
              <div className="flex justify-between items-center bg-gray-200 text-gray-500 text-sm py-3 px-4">
                <p>1 point</p>
                <p className="text-gray-700">Time Remaining</p>
              </div>
              <hr />
              <div className="p-4">
                <h2 className="text-lg font-medium mb-2">
                  Q{quiz.id}. {quiz.question}
                </h2>

                {/* Your Answer */}
                <div className="mb-2">
                  <strong>Your Answer:</strong>{" "}
                  <span
                    className={
                      userAnswers[quiz.id] === quiz.correctAnswer
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    <span className="inline-flex items-center gap-1">
                      {userAnswers[quiz.id]}
                      {userAnswers[quiz.id] === quiz.correctAnswer ? (
                        <FaCheckCircle className="text-green-500" />
                      ) : (
                        <FaTimesCircle className="text-red-500" />
                      )}
                    </span>
                  </span>
                </div>

                {/* Correct Answer */}
                <div>
                  <strong>Correct Answer:</strong> {quiz.correctAnswer}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ResultPieChart;

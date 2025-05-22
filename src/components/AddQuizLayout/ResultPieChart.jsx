import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

function ResultPieChart() {
  // Data for Quiz
  const quizzes = [
    {
      id: 1,
      type: "True or False",
      question: "The Earth revolves around the Sun.    ?              ",
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

  //   Dummy Answer

  const userAnswers = {
    1: "True",
    2: "90°C", // Wrong
    3: "Mitochondria",
    4: "True",
    5: "Saturn", // Wrong
    6: "Nitrogen",
    7: "True",
    8: "H2O",
    9: "Hydrogen",
    10: "False", // Wrong
  };

  const [showResults, setShowResults] = useState(false);
  // Data Pie
  const data = [
    { name: "Correct", value: 7 },
    { name: "Incorrect", value: 3 },
  ];

  const COLORS = ["#7366ff", "#c62828"]; // Purple and Red
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="flex flex-col items-center gap-20 px-4  ">
      <div className="w-full max-w-3xl bg-white rounded-md shadow-md p-4">
        {/* Header */}
        <div className="text-center p-2">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
            Quiz Result
          </h1>
        </div>
        <hr />

        {/* Content Container - Responsive Flexbox */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4">
          {/* Score List */}
          <div className="text-gray-500 text-sm text-start  w-[200px]">
            <ul className="list-disc pl-5 space-y-2">
              <li>Score: 7/10 </li>
              <li>Percentage: 70%</li>
              <li>Duration: 5 mins</li>
            </ul>
          </div>

          {/* Pie Chart Container */}
          <div className="flex flex-col items-center">
            <PieChart
              width={250}
              height={250}
              className="sm:w-[260px] sm:h-[260px]"
            >
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={70}
                dataKey="value"
                label={({ name, value }) => {
                  const percent = ((value / total) * 100).toFixed(1);
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
        <div className="flex flex-wrap justify-center gap-3 mt-4 px-4">
          <button
            onClick={() => setShowResults(!showResults)}
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto"
          >
            {showResults ? "Hide Result" : "Show Result"}
          </button>
          <button className="bg-gray-500 text-white font-semibold px-4 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto">
            Retake
          </button>
          <Link to={"/Dashboard"}>
            <button className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md text-sm sm:text-base w-full sm:w-auto">
              Dashboard
            </button>
          </Link>
        </div>
      </div>

      {/* Show Result  */}

      {showResults && (
        <div className="flex flex-col gap-10">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded flex flex-col border-t-4 border-purple-700  shadow-md"
            >
              <div className="flex justify-between items-center bg-gray-200 text-gray-500 text-sm py-3 px-4">
                <div className="flex gap-4 items-center justify-between w-full">
                  <p>1 point</p>
                </div>
              </div>
              <hr />
              {/* Question */}
              <div className="px-4 py-2 ">
                <h1 className="text-lg">
                  {quiz.id}. {quiz.question}
                </h1>
                <div className="flex">
                  <div className="flex gap-2">
                    <span>Your Answer: </span>
                    <span
                      className={
                        userAnswers[quiz.id] === quiz.correctAnswer
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      <div className="flex items-center gap-2">
                        <span>{userAnswers[quiz.id]}</span>
                        <span>
                          {" "}
                          {userAnswers[quiz.id] === quiz.correctAnswer ? (
                            <FaCheckCircle className="text-green-500" />
                          ) : (
                            <FaTimesCircle className="text-red-500" />
                          )}
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                {/* Correct Answer */}
                <div>
                  <span>Correct Answer: {quiz.correctAnswer}</span>
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

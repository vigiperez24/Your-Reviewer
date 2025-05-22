import React, { useState } from "react";
import ResultPieChart from "./ResultPieChart";

function TakeQuizPage() {
  const quizzes = [
    {
      id: 1,
      type: "True or False",
      question: "The Earth revolves around the Sun.                     Science Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, sunt officia. Perspiciatis consequatur doloribus consequuntur magni, blanditiis vero architecto temporibus, rem eum quas asperiores sit. Adipisci odio aspernatur autem sint?",
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [getStarted, setGetStarted] = useState(false);
  const [SubmitedResult, setShowResults] = useState(false);

  const current = quizzes[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < quizzes.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
      setGetStarted(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center py-10 ">
      <div className="max-w-md md:max-w-2xl space-y-4">
        {/* Quiz Content */}
        {!SubmitedResult && (
          <>
            {getStarted && (
              <div className="text-center text-xl font-semibold">
                Question {currentQuestionIndex + 1} / {quizzes.length}
              </div>
            )}
            <div className="bg-white rounded flex flex-col border-t-4 border-purple-700">
              {/* Start Page */}
              {!getStarted && (
                <div className="flex flex-col gap-4 p-4 shadow-md">
                  <h1 className="text-center text-2xl font-semibold">

                  </h1>
                  <hr />
                  <p className="text-xl text-center text-gray-500">
                    You will have {quizzes.length} questions. Answer them one by
                    one. Best of Luck!
                  </p>
                  <div className="text-center">
                    <button
                      onClick={() => setGetStarted(true)}
                      className="bg-buttonBg hover:bg-bgButtonHover p-2 text-lg text-white font-semibold rounded"
                    >
                      Start Answering
                    </button>
                  </div>
                </div>
              )}

              {/* Quiz Question */}
              {getStarted && (
                <div className="flex flex-col shadow-md">
                  <div className="flex justify-between items-center bg-gray-200 text-gray-500 text-sm py-3 px-4">
                    <div className="flex gap-4 items-center justify-between w-full">
                      <p>1 point</p>
                      <p className="text-xl text-gray-700 font-semibold">60s</p>
                    </div>
                  </div>
                  <hr />
                  <div className="px-4 py-2">
                    <p className="text-base md:text-xl">{current.question}</p>
                  </div>

                  {/* True/False */}
                  {current.type === "True or False" && (
                    <div className="px-4 py-2 flex gap-4 text-base md:text-xl">
                      <label className="flex gap-1">
                        <input type="radio" name="answer" />
                        True
                      </label>
                      <label className="flex gap-1">
                        <input type="radio" name="answer" />
                        False
                      </label>
                    </div>
                  )}

                  {/* Identification */}
                  {current.type === "Identification" && (
                    <div className="px-4 mb-4">
                      <input
                        className="bg-gray-200 w-full p-2 rounded"
                        placeholder="Enter your answer"
                        type="text"
                      />
                    </div>
                  )}

                  {/* Multiple Choices */}
                  {current.type === "Multiple Choices" && (
                    <div className="px-4 mb-4 space-y-2">
                      {current.choices.map((choice, index) => (
                        <label key={index} className="flex gap-2 md:text-xl">
                          <input type="radio" name="answer" />
                          {String.fromCharCode(65 + index)}. {choice}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Buttons */}
            {getStarted && (
              <div className="flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  className="bg-gray-300 md:text-xl text-base p-2 rounded"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="bg-buttonBg text-white md:text-xl text-base p-2 rounded"
                >
                  {currentQuestionIndex === quizzes.length - 1
                    ? "Submit"
                    : "Next"}
                </button>
              </div>
            )}
          </>
        )}

        {/* Result Chart */}
        {SubmitedResult && (
          <div>
            <ResultPieChart />
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeQuizPage;

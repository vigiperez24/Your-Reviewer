import React, { useState } from "react";

function TakeQuizPage() {
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
      question: "What is the chemical symbol for water?",
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

  const currentQuiz = quizzes[currentQuestionIndex];

  return (
    <div className="h-screen flex flex-col items-center justify-center ">
      <div className="max-w-md md:max-w-2xl space-y-4">
        <div className="text-center">
          <h1 className="text-xl">
            Question: {currentQuestionIndex + 1} of {quizzes.length}
          </h1>
        </div>
        <div className=" bg-white rounded flex flex-col border-t-4 border-purple-700  ">
          {/* Start of Answerng */}
          <div className="hidden">
            <div className=" text-center text-2xl font-semibold">
              <h1>Science</h1>
            </div>
            <hr />
            <div className=" text-xl text-center text-gray-500">
              <p>
                You will have 10 questions. Answer them one by one. Best of
                Luck!
              </p>
            </div>
            <div className=" text-center">
              <button className="bg-buttonBg hover:bg-bgButtonHover  text-lg text-white font-semibold rounded">
                Start Answering
              </button>
            </div>
          </div>

          {/* Questions and Answer */}

          <div className="flex flex-col  ">
            <div className=" flex justify-between items-center bg-gray-200 text-gray-500 text-sm  py-3 px-4">
              {/* Points and Secs */}
              <div className="flex gap-4 items-center justify-between w-full ">
                <p>1points</p>
                <p className="text-xl text-gray-700 font-semibold">60s</p>
              </div>
            </div>
            <hr />
            {/* Questions */}
            <div className="px-4 py-2">
              <p className="text-base md:text-xl ">{currentQuiz.question}</p>
            </div>
            {/* Answer true or false*/}
            <div className="px-4  py-2 flex gap-4 text-base md:text-xl  hidden">
              <label className="flex  gap-1">
                <input type="radio" name="" id="" />
                True
              </label>
              <label className="flex  gap-1">
                <input type="radio" name="" id="" />
                False
              </label>
            </div>

            {/* Identification */}
            <div className="px-4 mb-4 hidden">
              <input
                className="bg-gray-200 w-full p-2 rounded"
                placeholder="Enter correct answer"
                type="text"
              />
            </div>

            {/* Multiple Choices */}
            <div className="px-4 mb-4 space-y-2">
              <label className="flex gap-2 md:text-xl">
                <input type="radio" name="" id="" />
                A. Lorem ipsum dolor sit.
              </label>
              <label className="flex gap-2 md:text-xl">
                <input type="radio" name="" id="" />
                B. Lorem ipsum dolor sit.
              </label>
              <label className="flex gap-2 md:text-xl">
                <input type="radio" name="" id="" />
                C. Lorem ipsum dolor sit.
              </label>
              <label className="flex gap-2 md:text-xl">
                <input type="radio" name="" id="" />
                D. Lorem ipsum dolor sit.
              </label>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-between ">
          <button className="bg-gray-300 md:text-xl text-base p-2 rounded ">
            Previous
          </button>
          <button className="bg-buttonBg text-white gray-300 md:text-xl text-base p-2 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TakeQuizPage;

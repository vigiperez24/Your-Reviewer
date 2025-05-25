// src/components/CardHistoryQuiz.jsx
import React from "react";

function CardHistoryQuiz() {
  const lastQuiz = [
    { id: 1, subject: "Filipino", score: 3, items: 10, date: "5/23/2025" },
    { id: 2, subject: "Math", score: 5, items: 10, date: "5/24/2025" },
    { id: 3, subject: "Science", score: 4, items: 10, date: "5/25/2025" },
    { id: 4, subject: "English", score: 2, items: 10, date: "5/26/2025" },
    { id: 5, subject: "History", score: 5, items: 10, date: "5/27/2025" },
    { id: 6, subject: "PE", score: 5, items: 10, date: "5/28/2025" },
    { id: 7, subject: "Art", score: 3, items: 10, date: "5/29/2025" },
    { id: 8, subject: "Geography", score: 4, items: 10, date: "5/30/2025" },
    { id: 9, subject: "Music", score: 5, items: 10, date: "5/31/2025" },
    { id: 10, subject: "Literature", score: 2, items: 10, date: "6/1/2025" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {lastQuiz.map((quiz) => (
        <div
          key={quiz.id}
          className="bg-white p-6 flex flex-col gap-2 justify-center items-center text-center shadow-md rounded-lg hover:shadow-lg transition-shadow"
        >
          <h1 className="font-semibold text-xl">{quiz.subject}</h1>
          <p>
            You Scored <strong>{quiz.score} </strong> out of{" "}
            <strong>{quiz.items}</strong>
          </p>
          <p>
            Taken on <strong>{quiz.date}</strong>
          </p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md md:text-sm font-semibold tracking-wide hover:bg-indigo-700 transition-colors">
            Take quiz again
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardHistoryQuiz;
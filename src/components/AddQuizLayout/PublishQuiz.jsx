import React, { useState } from "react";
import { useEffect } from "react";

function PublishQuiz() {
  const [isPublish, setModalPublish] = useState(false);

  useEffect(() => {
    if (isPublish) {
      const timer = setTimeout(() => {
        window.location.href = "/ListQuizzes";
      },2000);
      return ()=> setTimeout(timer);
    }
  });

  return (
    <div className="fixed bg-black inset-0 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white max-w-md flex flex-col items-center gap-3 p-4 rounded">
        <h1 className="font-semibold">
          Your quiz has been successfully created!
        </h1>
        <span className="text-sm text-gray-500">
          You will be redirected in 0 seconds...
        </span>
        <button
          onClick={() => setModalPublish(true)}
          className=" bg-buttonBg text-white p-2 rounded hover:bg-bgButtonHover"
        >
          Go to quiz
        </button>
      </div>
    </div>
  );
}

export default PublishQuiz;

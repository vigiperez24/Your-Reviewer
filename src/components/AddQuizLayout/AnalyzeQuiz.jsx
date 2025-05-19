import React from "react";

import { FaCheckCircle, FaEdit, FaListUl, FaChartPie } from "react-icons/fa";

function AnalyzeQuiz({onClose}) {
  return (
    <div className="bg- max-w-md w-full bg-white rounded-md shadow-md flex flex-col  gap-2 ">
      {/* Title Modal */}
      <div className=" px-4 py-2 flex items-center gap-2 justify-center">
        <FaChartPie className="text-gray-500 text-xl" />

        <h1 className="text-xl font-semibold">Quiz Analysis Summary</h1>
      </div>
      <hr className="border-1 border-gray-300" />
      {/* Quiz and total items */}
      <div className="flex items-center justify-between  px-4">
        <div className="">
          <p className="font-semibold tracking-wide text-lg">Quiz Title </p>
          <p className="text-gray-500">Filipino</p>
        </div>
        {/* Total Items */}
        <div className="flex flex-col mr-1 ">
          <p className="font-semibold tracking-wide text-lg ">Total Items</p>
          <p className="text-gray-500">Items: 30</p>
        </div>
      </div>
      <div className="px-4 flex justify-between items-start ">
        <div>
          <div className="">
            <p className="font-semibold tracking-wide text-lg">
              Type of Question
            </p>
          </div>
          {/* Type of Questions */}
          <div className="flex">
            <ul>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-gray-500" />
                <span className="text-gray-500 tracking-wide">
                  True or False
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaEdit className="text-gray-500" />
                <span className="text-gray-500 tracking-wide">
                  Identification
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaListUl className="text-gray-500" />
                <span className="text-gray-500 tracking-wide">
                  Multiple Choices
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="font-semibold tracking-wide text-lg">Total Points</p>
          <p className="text-gray-500 tracking-wide">30 Points</p>
        </div>
      </div>
      <hr className="border-1 border-gray-300" />
      {/* Two Buttons */}
      <div className="flex items-center justify-end  px-4 py-4 gap-4">
        <button onClick={onClose}  className="text-gray-500 font-semibold ">
          Cancel
        </button>
        <button className="bg-buttonBg hover:bg-bgButtonHover py-1 px-2 text-white rounded tracking-wide">
          Publish
        </button>
      </div>
    </div>
  );
}

export default AnalyzeQuiz;

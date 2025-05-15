import { Link } from "react-router-dom";
import React from "react";
import {
  FaPaperPlane,
  FaArrowLeft,
  FaTrashAlt,
  FaEdit,
  FaPlus,
} from "react-icons/fa";
function CreateQuiz() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 ">
      {/* Button,  */}

      <div className="flex items-center justify-between mb-4">
        <Link to="/Review">
          <button className="flex items-center justify-center gap-2">
            <FaArrowLeft />
            <span>Back</span>
          </button>
        </Link>
        <button className="bg-gray-700  text-white  py-2 px-4 rounded flex items-center justify-center gap-2 ">
          <span>Publish</span>
          <FaPaperPlane />
        </button>
      </div>
      {/* Enter Quiz Name */}
      <div className="bg-white border-t-4 border-gray-500 rounded px-3 shadow outline-none mb-4">
        <input
          className=" bg-transparent text-xl py-2 w-full outline-none"
          type="text"
          placeholder="Enter Quiz Name"
        />
      </div>
      {/* Quiz Item Container */}
      <div className="flex flex-col gap-10">
        <div className="bg-white flex flex-col  gap-2 rounded shadow">
          <div className="flex justify-between items-center bg-gray-200 py-2 px-4">
            <p className="text-sm text-gray-500 tracking-wide">1 Points</p>

            {/* Two Buttons */}
            <div className="flex items-center gap-2 ">
              <p className="text-sm text-gray-500 tracking-wide">
                Multiple Choices
              </p>
              <button>
                <FaEdit className="text-green-600 text-xl" />
              </button>
              <button>
                <FaTrashAlt className="text-red-600" />
              </button>
            </div>
          </div>
          {/* Question */}
          <div className="px-4 py-2 flex flex-col gap-2 ">
            <p className=" italic text-lg">
              <span className="not-italic">Question 1 :</span> What is the
              chemical symbol for water? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tempora hic, consequuntur inventore dolore qui
              voluptates, fugiat assumenda blanditiis esse sequi repellendus
              aliquam. Vel temporibus, dicta aliquid beatae quae atque esse.
            </p>
            <p className="italic">A. H₂O</p>
            <p className="italic">B. CO₂</p>
            <p className="italic">C. O₂</p>
            <p className="italic">D. NaCl</p>
            {/* Correct Answer */}
            <div className="flex gap-2">
              <p className="italic font-semibold text-green-700">
                Correct Answer:
              </p>
              <span className="italic font-semibold"> H₂O</span>
            </div>
          </div>
        </div>
        {/* True or False */}
        <div className="bg-white flex flex-col  gap-2 rounded shadow">
          <div className="flex justify-between items-center bg-gray-200 py-2 px-4">
            <p className="text-sm text-gray-500 tracking-wide">1 Points</p>

            {/* Two Buttons */}
            <div className="flex items-center gap-2 ">
              <p className="text-sm text-gray-500 tracking-wide">
                Multiple Choices
              </p>
              <button>
                <FaEdit className="text-green-600 text-xl" />
              </button>
              <button>
                <FaTrashAlt className="text-red-600" />
              </button>
            </div>
          </div>
          {/* Question */}
          <div className="px-4 py-2 flex flex-col gap-2 ">
            <p className=" italic text-lg">
              <span className="not-italic">Question 1 :</span> What is the
              chemical symbol for water? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tempora hic, consequuntur inventore dolore qui
              voluptates, fugiat assumenda blanditiis esse sequi repellendus
              aliquam. Vel temporibus, dicta aliquid beatae quae atque esse.
            </p>
            <p className="italic">True or False</p>
            {/* Correct Answer */}
            <div className="flex gap-2">
              <p className="italic font-semibold text-green-700">
                Correct Answer:
              </p>
              <span className="italic font-semibold"> True</span>
            </div>
          </div>
        </div>
        {/* Identification */}
        <div className="bg-white flex flex-col  gap-2 rounded shadow">
          <div className="flex justify-between items-center bg-gray-200 py-2 px-4">
            <p className="text-sm text-gray-500 tracking-wide">1 Points</p>

            {/* Two Buttons */}
            <div className="flex items-center gap-2 ">
              <p className="text-sm text-gray-500 tracking-wide">
                Multiple Choices
              </p>
              <button>
                <FaEdit className="text-green-600 text-xl" />
              </button>
              <button>
                <FaTrashAlt className="text-red-600" />
              </button>
            </div>
          </div>
          {/* Question */}
          <div className="px-4 py-2 flex flex-col gap-2 ">
            <p className=" italic text-lg">
              <span className="not-italic">Question 1 :</span> What is the
              chemical symbol for water? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Tempora hic, consequuntur inventore dolore qui
              voluptates, fugiat assumenda blanditiis esse sequi repellendus
              aliquam. Vel temporibus, dicta aliquid beatae quae atque esse.
            </p>
            <p className="italic">Lorem, ipsum.</p>
            {/* Correct Answer */}
            <div className="flex gap-2">
              <p className="italic font-semibold text-green-700">
                Correct Answer:
              </p>
              <span className="italic font-semibold"> Lorem, ipsum.</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            <FaPlus /> {/* or FaPlus */}
            <span>Add New Item</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md md:max-w-xl mx-auto p-6 flex flex-col gap-4">
          {/* Title */}
          <div>
            <h1 className="text-xl font-semibold">Create New Quiz</h1>
          </div>
            <hr className="border-1 border-gray-300" />
          {/* Time and Points */}
          <div className="flex justify-between items-center">
            {" "}
            <div className="flex justify-center items-center gap-2">
              <p className="font-medium tracking-wide">Set Timer</p>
              <select
                className="bg-gray-100 text-sm rounded-lg px-2 p-1 outline-buttonBg"
                name=""
                id=""
              >
                <option value="">--Select Timer--</option>
                <option value="30">30 Sec</option>
                <option value="60">60 Sec</option>
                <option value="i20">120 Sec</option>
                <option value="no-limit">No time Limit</option>
              </select>
            </div>
            {/* Points */}
            <div className="flex items-center justify-center gap-2">
              <p className="font-medium tracking-wide ">Points</p>
              <input
                className="w-12 text-sm bg-gray-100 rounded-lg p-1 outline-buttonBg text-center"
                type="number"
                name=""
                id=""
                max={20}
              />
            </div>
          </div>
          <hr className="border-1 border-gray-300" />
          {/* Label and Questions */}
          <div className="flex flex-col gap-1">
            <p className="font-medium tracking-wide">Question:</p>
            <textarea
              className="bg-gray-100 rounded px-2 py-2 font-medium outline-buttonBg"
              type="text"
              placeholder="Type your question here"
              required
            />
          </div>
          <hr className="border-1 border-gray-300" />
          {/* Type of question Drop down */}
          <div className="flex  justify-between items-start gap-1">
            <p className="font-medium tracking-wide">Type of Answer:</p>
            <select className="bg-gray-100 rounded-lg px-2 py-1 outline-buttonBg" name="" id="">
              <option value="true-false">True or False</option>
              <option value="multiple">Multiple Choices</option>
              <option value="Identification">Identification</option>
            </select>
          </div>
          <hr className="border-1 border-gray-300" />
          {/* Correct Answer of true or false*/}
          <div className="flex justify-between hidden">
            <p className="font-medium tracking-wide">Correct Answer</p>
            <div className="flex justify-between items-cent gap-2">
              <label>
                <input type="radio" name="answer" value="True" /> True
              </label>
              <label>
                <input type="radio" name="answer" value="False" /> False
              </label>
            </div>
          </div>
          {/* Correct Answer of Identification */}
          <div>
            <input className="w-full bg-gray-200 p-4 rounded-lg outline-buttonBg" type="text" placeholder="Enter the correct answer" />
          </div>
          <hr className="border-1 border-gray-300" />
          {/* Three Buttons */}
          <div className="flex gap-2 justify-end">
            <button className="text-gray-500 font-medium">Cancel</button>
            <button className="bg-gray-200 p-2 rounded-lg font-medium">Save and Add Another</button>
            <button className="bg-buttonBg hover:bg-bgButtonHover px-2 text-white rounded-lg">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;

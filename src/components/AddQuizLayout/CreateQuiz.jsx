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
        <button className="bg-purple-700  text-white  py-2 px-4 rounded flex items-center justify-center gap-2 ">
          <span>Publish</span>
          <FaPaperPlane />
        </button>
      </div>
      {/* Enter Quiz Name */}
      <div className="bg-white border-t-4 border-purple-500 rounded px-3 shadow outline-none mb-4">
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
    </div>
  );
}

export default CreateQuiz;

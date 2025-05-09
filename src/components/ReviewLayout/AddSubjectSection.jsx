import React from "react";
import {
    FaPlus,
    FaFilter,
    FaSort,

  } from "react-icons/fa";

function AddSubjectSection() {
  return (
    <div className="flex flex-col gap-4" >
      {/* Subject Title */}
      <div>
        <h1 className="text-2xl font-medium">Subject</h1>
      </div>
      {/* Line */}
      <div>
        <hr className=" border-t border-gray-300 my-2" />
      </div>
      {/* Three Buttons container */}
      <div className="flex gap-3 justify-between items-center ">
        <button className="bg-buttonBg px-3 rounded-md text-white flex items-center justify-center gap-2 p-1">
          <FaPlus className="text-white" />
          New
        </button>
        <div className="flex gap-3">
          <button className=" bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-500">
            <FaFilter className="text-gray-500" />
            Filters
          </button>
          <button className=" bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-500">
            <FaSort className="text-gray-500" />
            Sort By Latest
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSubjectSection;

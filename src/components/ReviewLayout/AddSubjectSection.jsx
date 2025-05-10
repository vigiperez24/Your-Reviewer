import React, { useState } from "react";
import {
  FaPlus,
  FaFilter,
  FaSort,
} from "react-icons/fa";

function AddSubjectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [folderName, setFolderName] = useState("");

  const handleCreateFolder = () => {
    if (folderName.trim() === "") return;
    alert(`Created folder: ${folderName}`);
    setFolderName("");
    setIsModalOpen(false);
  };

  return (
    <div className="py-6 md:px-6 flex flex-col gap-4">
      {/* Subject Title */}
      <div>
        <h1 className="text-2xl font-medium">Subject</h1>
      </div>

      {/* Divider Line */}
      <hr className="border-t border-gray-300 my-2" />

      {/* Buttons Section */}
      <div className="flex gap-3 justify-between items-center">
        {/* New Folder Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md flex items-center justify-center gap-2"
        >
          <FaPlus />
          New
        </button>

        {/* Filters & Sort */}
        <div className="flex gap-3">
          <button className="bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-300 hover:bg-gray-100 transition">
            <FaFilter /> Filters
          </button>
          <button className="bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-300 hover:bg-gray-100 transition">
            <FaSort /> Sort By Latest
          </button>
        </div>
      </div>

      {/* MODAL - Only shows when isModalOpen is true */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4">Create New Folder</h2>

            {/* Input Field */}
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Enter subject/folder name"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-6"
              autoFocus
            />

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddSubjectSection;
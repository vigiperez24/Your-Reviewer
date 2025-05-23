// src/components/SubjectCard.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import noContent from "../../assets/SubjectCardImg/noContent.svg";

import {
  FaPlus,
  FaFilter,
  FaSort,
  FaRegFolderOpen,
  FaEllipsisV,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function SubjectCard() {
  const navigate = useNavigate();
  const [folders, setFolders] = useState([
    { id: 1, name: "Filipino", quizCount: 5, createdAt: "Yesterday" },
    { id: 2, name: "English", quizCount: 3, createdAt: "Tuesday" },
    { id: 3, name: "Math", quizCount: 5, createdAt: "Wednesday" },
    { id: 4, name: "Science", quizCount: 2, createdAt: "Monday" },
    { id: 5, name: "History", quizCount: 1, createdAt: "Today" },
    { id: 6, name: "Physics", quizCount: 4, createdAt: "Last week" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [currentFolder, setCurrentFolder] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const toggleDropDown = (folderId) => {
    setOpenMenuId(openMenuId === folderId ? null : folderId);
  };

  const handleCreateClick = () => {
    setIsEditing(false);
    setEditedName("");
    setIsModalOpen(true);
  };

  const handleEditClick = (folder) => {
    setIsEditing(true);
    setCurrentFolder(folder);
    setEditedName(folder.name);
    setOpenMenuId(null);
    setIsModalOpen(true);
  };

  const handleSaveFolder = () => {
    if (!editedName.trim()) return;

    if (isEditing) {
      const updatedFolders = folders.map((f) =>
        f.id === currentFolder.id ? { ...f, name: editedName } : f
      );
      setFolders(updatedFolders);
    } else {
      const newFolder = {
        id: Date.now(),
        name: editedName,
        quizCount: 0,
        createdAt: "Today",
      };
      setFolders([...folders, newFolder]);
    }

    setIsModalOpen(false);
    setIsEditing(false);
    setCurrentFolder(null);
    setEditedName("");
  };

  const handleDeleteClick = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this folder?"
    );
    if (confirmDelete) {
      setFolders(folders.filter((f) => f.id !== id));
    }
  };

  return (
    <div className="py-6 md:px-6 flex flex-col gap-3">
      {/* Page Title */}
      <h1 className="text-2xl font-medium">Subject</h1>
      <hr className="border-t border-gray-300 my-2" />

      {/* Buttons Section */}
      <div className="flex flex-wrap gap-3 justify-between items-center">
        <button
          onClick={handleCreateClick}
          className="bg-buttonBg hover:bg-bgButtonHover text-white px-3 py-1 rounded-md flex items-center justify-center gap-2"
        >
          <FaPlus /> New
        </button>

        <div className="flex gap-3">
          <button className="bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-300 hover:bg-gray-100 transition">
            <FaFilter /> Filters
          </button>
          <button className="bg-transparent px-3 rounded-md text-gray-500 flex items-center justify-center gap-2 p-1 border border-gray-300 hover:bg-gray-100 transition">
            <FaSort /> Sort By Latest
          </button>
        </div>
      </div>

      {/* Folders Title */}
      <h1 className="text-lg mt-3">Folder</h1>

      {/* Folder Container */}
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="border-l-4 border-indigo-200 hover:border-indigo-400 rounded-md flex justify-between px-4 py-2 items-center bg-white shadow-md gap-4 relative"
          >
            <div
              onClick={() => navigate("/ListQuizzes")}
              className="flex items-center gap-4"
            >
              <div className="w-10 h-10 bg-indigo-100 flex items-center justify-center rounded-full">
                <span className="text-indigo-600 text-xl">
                  <FaRegFolderOpen />
                </span>
              </div>

              <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{folder.name}</h1>
                <p className="text-gray-500 text-sm">
                  {folder.quizCount} quiz{folder.quizCount !== 1 ? "es" : ""}
                </p>
                <p className="text-gray-500 text-sm">
                  Created: {folder.createdAt}
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                toggleDropDown(folder.id);
              }}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FaEllipsisV />
            </button>

            {openMenuId === folder.id && (
              <div className="absolute right-0 top-8 mt-1 w-32 bg-white border rounded-md shadow-lg z-10">
                <ul className="py-1">
                  <li>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditClick(folder);
                      }}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition"
                    >
                      <FaEdit className="text-indigo-600" /> Edit
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleDeleteClick(folder.id)}
                      className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 transition"
                    >
                      <FaTrash className="text-red-500" /> Delete
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}

        {folders.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
            {/* Image */}
            <img src={noContent} alt="No folders" className="w-72 h-72 mb-4" />

            {/* Message */}
            <p className="italic text-gray-500 text-sm md:text-base">
              No Subject yet. Create one!
            </p>
          </div>
        )}
      </div>

      {/* Modal - Create/Edit Folder */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Folder" : "Create New Folder"}
            </h2>

            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              placeholder="Enter subject/folder name"
              className="w-full border border-gray-300 rounded px-3 py-2 mb-6"
              autoFocus
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setIsEditing(false);
                  setEditedName("");
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveFolder}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                {isEditing ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SubjectCard;

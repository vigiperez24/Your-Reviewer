import React, { useState } from "react";
import Mylogo from "../../assets/heroImg/MyLogo.png";
  // Font Awesome 
import {
  FaClipboard,
  FaTachometerAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaChartBar,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function MobileSidebar() {
  const location = useLocation(); 
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/dashboard",
    },
    { id: "review", label: "Review", icon: <FaClipboard />, path: "/review" },
    {
      id: "progress",
      label: "Progress",
      icon: <FaChartBar />,
      path: "/progress",
    },
    { id: "profile", label: "Profile", icon: <FaUser />, path: "/profile" },
    { id: "settings", label: "Settings", icon: <FaCog />, path: "/settings" },
    { id: "logout", label: "Logout", icon: <FaSignOutAlt />, path: "/Home" },
  ];

  return (
    <div className="max-w-screen-xl bg-white relative">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-3 bg-white shadow-md">
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
          <FaBars />
        </button>
        <img src={Mylogo} alt="Logo" className="h-12" />
        <div className="bg-purple-500 h-8 w-8 flex items-center justify-center rounded-full">
          V
        </div>
      </div>

      {/* Sidebar Content */}
      {isOpen && (
        <div
          className={`absolute w-72 h-screen top-0 left-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo + Close Button */}
          <div className="px-6 py-2 flex justify-between">
            <img src={Mylogo} alt="Logo" className="h-12" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-400"
            >
              <FaTimes />
            </button>
          </div>
          <hr className="border-t border-gray-300 my-2" />

          {/* Navigation Links */}
          <nav className="flex flex-col px-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all ${
                  location.pathname === item.path
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-100 text-gray-700"
                }`}
                onClick={() => setIsOpen(false)} // Optional: close sidebar when a link is clicked
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileSidebar;
  import React, { useState } from "react";
  import { Link, useLocation } from "react-router-dom";
  import Mylogo from "../../assets/heroImg/MyLogo.png";
  
  import {
    FaChevronLeft,
    FaClipboard,
    FaTachometerAlt,
    FaUser,
    FaCog,
    FaSignOutAlt,
    FaChartBar,
  } from "react-icons/fa";

  function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(true); // Default: open

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
      { id: "logout", label: "Logout", icon: <FaSignOutAlt />, path: "/logout" },
    ];

    return (
      <div
        className={`h-screen flex-shrink-0 transition-all duration-300 ${
          isOpen ? "w-72" : "w-20"
        } bg-white shadow`}
      >
        <div className=" flex items-center justify-between px-5 p-4">
          {isOpen && <img className="h-14" src={Mylogo} alt="My Logo" />}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-purple-200 w-10 h-10 rounded flex items-center justify-center"
          >
            <FaChevronLeft
              className={`text-gray-500 transition-transform duration-300 ${
                !isOpen && "rotate-180"
              } `}
            />
          </button>
        </div>
        <hr className=" border-t border-gray-300 my-2" />
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
            >
              <span className="text-lg">{item.icon}</span>
              { isOpen && <span className="text-base font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
    );
  }

  export default Sidebar;

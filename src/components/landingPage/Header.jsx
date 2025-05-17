import { Link } from "react-router-dom";
import MyLogo from "../../assets/heroImg/Mylogo.png";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 50) {
        console.log(scrollY)
        setScrolled(true);
      } else {
        setScrolled(false);

      }
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  });

  // <header className="bg-bgColor-white shadow-md py-3 px-4">
  return (
    <header className={`fixed top-0 right-0  px-4 py-3 w-full shadow-md ${scrolled ? 'bg-opacity-90 bg-white' : 'bg-white'}`} >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="hidden md:flex items-center h-14">
          <img src={MyLogo} alt="My Logo" className="h-14 mr-2" />
          <h1 className="text-xl">Your Reviewer</h1>
        </div>

        {/* Buttons login/signup */}
        <div className="ml-auto flex gap-4 items-center">
          <Link to="/SignUp">
            <button className="lg:text-lg font-medium"></button>
            Sign up
          </Link>
          <Link to="/Login">
            <button className="lg:text-lg bg-buttonBg px-3 py-2 rounded-md text-buttonText hover:bg-bgButtonHover text-sm font-medium">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

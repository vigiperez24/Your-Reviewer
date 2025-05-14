import React from "react";
import { Link } from "react-router-dom";
import SignupImg from "../../assets/signUpImg/signupImg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import MyLogo from "../../assets/heroImg/Mylogo.png";

function Signup() {
  return (
    <div className="bg-bgColorTwo flex justify-center  md:items-center text-textColor h-screen ">
      {/* the container of form and Img */}
      <div className=" bg-gray-200 w-full  flex flex-col justify-center items-center md:max-w-screen-md mt-[-200px]  md:flex-row md:rounded-lg md:p-6 md:py-10 md:gap-10 shadow-md">
        {/* Img contaier left Side */}
        <div className="hidden md:block">
          <img
            className="md:h-[400px] w-auto"
            src={SignupImg}
            alt="Img SignUp"
          />
          <p className="text-lg text-center">
            Build your own quizzes with personalized question
          </p>
        </div>

        {/* Form container  Right Side*/}
        <div className="flex flex-col gap-4 w-full px-4">
          {/* Title Container */}
          <div>
            {/* Logo */}
            <div className="md:hidden flex items-center justify-center ">
              <img src={MyLogo} alt="My Logo" className="h-24 md:h-14 mr-2" />
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-start">
              Create an account
            </h1>
          </div>

          {/* Already have an account? Login Container */}
          <div>
            <p className="text-sm font-thin md:text-base">
              Already have an account?{" "}
              <Link className="text-purple-500 hover:underline" to="/Login">
                Log In
              </Link>
            </p>
          </div>

          {/* Form container */}
          <form className="flex flex-col gap-4 ">
            {/* first Name and Last Name Row Container*/}
            <div className="flex gap-2">
              {/* First Name */}
              <input
                className=" w-full p-2 bg-transparent rounded-md border border-gray-700 outline-purple-700"
                type="text"
                placeholder="First Name"
                required
              />
              {/* Last Name */}
              <input
                className=" w-full p-2 bg-transparent rounded-md border border-gray-700 outline-purple-700"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>

            {/* Email Password etc Column container */}
            <div className="flex flex-col gap-4">
              {/* Email */}
              <input
                className=" w-full p-2 bg-transparent rounded-md border border-gray-700 outline-purple-700"
                type="text"
                placeholder="Email"
                required
              />

              {/* Password */}
              <input
                className=" w-full p-2 bg-transparent rounded-md border border-gray-700 outline-purple-700"
                type="text"
                placeholder="Password"
                required
              />
              {/* Agree to Terms Container */}
              {/* Terms and Conditions */}
              <div className=" flex items-centet justify-start gap-2">
                <input type="checkbox" id="termsCheckbox" />
                <label
                  htmlFor="termsCheckbox"
                  className="text-gray-400 text-sm font-thin"
                >
                  I agree to the{" "}
                  <a href="#" className="text-purple-500 hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              {/* Button container */}
              <div className="flex items-center justify-center">
                <button className="w-full bg-buttonBg font-medium text-white py-3 rounded">
                  Create account
                </button>
              </div>

              {/* Register With Container */}
              <div class="flex justify-center items-center ">
                <div class="border-b border-gray-300 w-1/4"></div>
                <p class="mx-4 text-center text-sm">Or register with</p>
                <div class="border-b border-gray-300 w-1/4"></div>
              </div>

              {/* Google and Facebook */}
              <div className="flex items-center justify-center gap-2">
                <button className="w-full bg-transparent font-medium text-textColor py-3 rounded flex justify-center items-center gap-2 border border-gray-700">
                  {" "}
                  <FontAwesomeIcon
                    icon={faGoogle}
                    style={{ color: "#673ab7", fontSize: "24px" }}
                  />
                  Google
                </button>
                <button className="w-full bg-transparent font-medium text-textColor py-3 rounded flex justify-center items-center gap-2 border border-gray-700">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ color: "#673ab7", fontSize: "24px" }}
                  />
                  Google
                </button>
              </div>
            </div>

            {/* End Form */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

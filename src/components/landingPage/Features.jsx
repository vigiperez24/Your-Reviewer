import React from "react";
import featureImg from "../../assets/heroImg/featureImg.svg";
import editIcon from "../../assets/heroImg/editIcon.svg";
import reviewIcon from "../../assets/heroImg/reviewIcon.svg";
import progressIcon from "../../assets/heroImg/progressIcon.svg";
import checkIcon from "../../assets/heroImg/checkIcon.svg";
import featureIcon from "../../assets/heroImg/featureIcon.svg";
function Features() {
  return (
    <section>
      <div className=" bg-gray-100 text-textColor ">
        {/* Section one */}
        <div className="max-w-screen-xl mx-auto px-8 py-14 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2">
          {/* Left section features */}
          <div className="order-1 md:order-2 flex flex-col gap-6 ">
            <h1 className=" font-bold text-3xl md:text-4xl lg:5xl">
              Review and create your own quizzes
            </h1>

            {/* Cards One*/}
            <div className="flex justify-start items-center flex-row gap-4 py-4 px-4 bg-gray-200 rounded-lg shadow-md">
              <div className=" flex items-center justify-center w-16 h-16 bg-iconBg rounded-lg">
                <img src={editIcon} alt="editIcon" className="w-10 h-10" />
              </div>
              <div className=" ">
                <h1 className=" font-bold text-lg md:text-xl lg:text-">
                  Create Custom Quizzes
                </h1>
                <p className=" text-sm sm:text-base md:text-lg ">
                  Build your own quizzes with personalized question
                </p>
              </div>
            </div>

            {/* Cards Two*/}
            <div className="flex justify-start items-center flex-row gap-4 py-4 px-4 bg-gray-200 rounded-lg shadow-md">
              <div className=" flex items-center justify-center w-16 h-16 bg-iconBg rounded-lg">
                <img src={reviewIcon} alt="reviewIcon" className="w-10 h-10" />
              </div>
              <div className=" ">
                <h1 className=" font-bold text-lg md:text-xl lg:text-">
                  Track Progress
                </h1>
                <p className=" text-sm sm:text-base md:text-lg ">
                  Monitor your performance over time
                </p>
              </div>
            </div>

            {/* Cards three */}
            <div className="flex justify-start items-center flex-row gap-4 py-4 px-4 bg-gray-200 rounded-lg shadow-md">
              <div className=" flex items-center justify-center w-16 h-16 bg-iconBg rounded-lg">
                <img
                  src={progressIcon}
                  alt="progressIcon"
                  className="w-10 h-10"
                />
              </div>
              <div className=" ">
                <h1 className=" font-bold text-lg md:text-xl lg:text-">
                  Create Custom Quizzes
                </h1>
                <p className=" text-sm sm:text-base md:text-lg ">
                  Build your own quizzes with personalized question
                </p>
              </div>
            </div>
          </div>
          {/* Left Logo Section */}
          <div className="flex justify-center items-center order-2 md:order-1 mt-6">
            <img
              src={featureImg}
              alt="featureImg"
              className="h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Other features */}

      <div className="bg-bgColorTwo">
        <div className=" max-w-screen-xl mx-auto px-8 py-14 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* left side features Title*/}
          <div className="flex flex-col justify-start gap-4">
            <h1 className=" font-bold text-3xl md:text-4xl lg:5xl ">
              Your Reviewer Features
            </h1>
            <div className=" flex flex-col justify-center items-start gap-4 md:ml-10">
              {/* List of features */}
              <div className="flex flex-row justify-center items-center gap-2  ">
                <img src={checkIcon} alt="checkIcon" />
                <p className="text-lg">Create Custom Quizzes</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 ">
                <img src={checkIcon} alt="checkIcon" />
                <p className="text-lg">Review and Retake Quizzes</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 ">
                <img src={checkIcon} alt="checkIcon" />
                <p className="text-lg">Progress Tracker</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 ">
                <img src={checkIcon} alt="checkIcon" />
                <p className="text-lg">Organized Dashboard</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 ">
                <img src={checkIcon} alt="checkIcon" />
                <p className="text-lg">User-Friendly Interface</p>
              </div>
              <div className="flex flex-row justify-center items-center gap-2 ">
                <img src={checkIcon} alt="checkIcon" />
                <p className="text-lg">Instant Access. Seamless Quiz Sharing</p>
              </div>
            </div>
          </div>
          {/* img features */}
          <div className="flex justify-center items-center">
            <img src={featureIcon} alt="" className="h-[300px] md:h-[400px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

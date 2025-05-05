import React from "react";
import heroImg from "../../assets/heroImg/heroImg.svg";

function Hero() {
  return (
    <section className=" bg-bgColorTwo text-textColor ">
      <div className=" max-w-screen-xl mx-auto px-8 py-12 sm:px-6  grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Left text hero section */}
        <div data-aos="fade-right" className="flex flex-col gap-3  ">
          <h1 className=" text-4xl font-bold text-textColor">Your Reviewer</h1>
          <p className=" lg:text-xl md:text-xl text-base text-justify ">
            The ultimate platform for mastering your knowledge. Create
            personalized quizzes, review anytime, and track your progress — all
            in one easy-to-use app. Make every study session smarter and more
            efficient with Your Reviewer!
          </p>
          {/* buttons */}
          <div className=" flex flex-row gap-2">
            <button className=" bg-buttonBg hover:bg-bgButtonHover text-buttonText px-3 py-2 rounded-md text-sm lg:text-lg">
              <a href="#" className="text-white hover:underline">
                Start reviewing
              </a>
            </button>
            <div>
              <p className=" font-semibold xl:text-lg">
                Create Your First Quiz
              </p>
              <p className=" text-[12px] xl:text-base ">
                Get started by building your fuirst quiz!
              </p>
            </div>
          </div>
        </div>

        {/* Right Img */}

        <div data-aos="fade-left" className="flex justify-center items-center">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

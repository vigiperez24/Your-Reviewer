import React from "react";
import ProfileTestimonials from "../../assets/heroImg/ProfileTestimonials.jpg";

function Testimonials() {
  return (
    <section class="bg-bgColorOne text-textColor ">
      {/* Title Testimonials */}

      <div className="max-w-screen-xl mx-auto px-8 py-8">
        <h1 className=" text-center text-xl md:text-2xl font-semibold mb-5 ">
          WHAT OUR USERS ARE SAYING
        </h1>
        {/* Main Container */}
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6  mt-2 text-justify rounded-md ">
          {/* Container Card */}
          <div className="flex flex-col gap-2 py-3 px-6 bg-white rounded-md shadow-md">
            {/* Profile Picture */}
            <div className="flex flex-row gap-4">
              <div>
                <img
                  src={ProfileTestimonials}
                  alt=""
                  className="h-16 w-16 object-contain rounded-full"
                />
              </div>

              {/* Name and Occupation/School */}
              <div className="flex flex-col justify-end">
                <h1 className=" font-semibold">Aubrey S.</h1>
                <p className="text-[14px]">College Student</p>
              </div>
            </div>

            {/* Comments of Testimonials */}
            <div>
              <p className="italic  indent-4">
                "Your Reviewer made studying so much easier for me! I was able
                to create custom quizzes for every subject and track my
                progress. Thanks to this app, I passed my exams with flying
                colors!"
              </p>
            </div>
          </div>

          {/* 2nd Card*/}
          <div className="flex flex-col gap-2 py-3 px-6 bg-white rounded-md shadow-md">
            {/* Profile Picture */}
            <div className="flex flex-row gap-4">
              <div>
                <img
                  src={ProfileTestimonials}
                  alt=""
                  className="h-16 w-16 object-contain rounded-full"
                />
              </div>

              {/* Name and Occupation/School */}
              <div className="flex flex-col justify-end">
                <h1 className=" font-semibold">Aubrey S.</h1>
                <p className="text-[14px]">College Student</p>
              </div>
            </div>

            {/* Comments of Testimonials */}
            <div>
              <p className="italic indent-4">
                "Your Reviewer made studying so much easier for me! I was able
                to create custom quizzes for every subject and track my
                progress. Thanks to this app, I passed my exams with flying
                colors!"
              </p>
            </div>
          </div>
          {/* 3rd card*/}
          <div className="flex flex-col gap-2 py-3 px-6 bg-white rounded-md shadow-md">
            {/* Profile Picture */}
            <div className="flex flex-row gap-4">
              <div>
                <img
                  src={ProfileTestimonials}
                  alt=""
                  className="h-16 w-16 object-contain rounded-full"
                />
              </div>

              {/* Name and Occupation/School */}
              <div className="flex flex-col justify-end ">
                <h1 className=" font-semibold">Aubrey S.</h1>
                <p className="text-[14px]">College Student</p>
              </div>
            </div>

            {/* Comments of Testimonials */}
            <div>
              <p className="italic indent-4">
                "Your Reviewer made studying so much easier for me! I was able
                to create custom quizzes for every subject and track my
                progress. Thanks to this app, I passed my exams with flying
                colors!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

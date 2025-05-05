// Testimonials.jsx
import React from "react";
import TestimonialCard from "./testimonialsCard/TestimonialCard";
import testimonialsData from "../../data/testimonialsData";

function Testimonials() {
  return (
    <section className="bg-bgColorOne text-textColor">
      <div className="max-w-screen-xl mx-auto px-8 py-8">
        <h1 data-aos = "fade-up" data-aos-delay = "200" className="text-center text-xl md:text-2xl font-semibold mb-5">
          WHAT OUR USERS ARE SAYING
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-2">
          {!testimonialsData || !Array.isArray(testimonialsData) ? (
            <p>No testimonials found.</p>
          ) : (
            testimonialsData.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

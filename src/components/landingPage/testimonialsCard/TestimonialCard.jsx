// TestimonialCard.jsx
import React from 'react';

function TestimonialCard({ name, occupation, quote, image }) {
  return (
    <div data-aos = "fade-up" data-aos-delay = "200" className="flex flex-col gap-2 py-3 px-6 bg-white rounded-md shadow-md">
      {/* Profile */}
      <div  className="flex flex-row gap-4 items-center">
        <img src={image} alt={name} className="h-16 w-16 object-contain rounded-full" />
        <div className="flex flex-col">
          <h1 className="font-semibold">{name}</h1>
          <p className="text-[14px]">{occupation}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="italic indent-4">"{quote}"</p>
    </div>
  );
}

export default TestimonialCard;
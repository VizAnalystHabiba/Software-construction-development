"use client";
import React from "react";

function Card({ image, title, date, location }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex mb-6 w-[900px] mx-auto border border-gray-200">
      
      <div className="w-1/3">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="w-2/3 p-6 flex flex-col justify-between relative">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="font-bold text-gray-800 text-base">{date}</p>
          <p className="text-gray-600 text-base mt-1">{location}</p>
        </div>

        <div className="mt-4 flex justify-end">
          <button className="bg-[#22c55e] text-white px-6 py-2 rounded-md font-medium">
            Explore Event →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
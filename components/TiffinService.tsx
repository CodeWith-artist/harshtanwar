"use client";
import { useState } from "react";
import { tiffinMenu } from "@/lib/tiffinMenu";
import TiffinOrderPopup from "./TiffinOrderPopup";

export default function TiffinService() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          🍱 Tiffin Service
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Fresh home-cooked meals delivered daily
        </p>
        <p className="text-gray-500 mt-1 text-lg md:text-base">
            Free delivery within a <span className="font-semibold text-red-600">1km</span> radius. ₹150 per tiffin.
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Menu Card */}
        <div className="flex-1 bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl overflow-hidden border border-gray-200">
          {tiffinMenu.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 border-b last:border-none hover:bg-orange-50 transition"
            >
              <span className="font-semibold text-gray-800 text-sm md:text-base">
                {item.day}
              </span>

              <span className="text-gray-600 text-xs md:text-sm text-right max-w-[60%]">
                {item.menu}
              </span>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-80 flex flex-col items-center">

          {/* Price Card */}
          <div className="w-full bg-white shadow-xl rounded-2xl p-6 text-center border">
            <p className="text-3xl font-bold text-green-600 mb-1">
              ₹150
            </p>

            <p className="text-gray-500 text-sm mb-4">
              per tiffin
            </p>

            <div className="text-sm text-gray-600 space-y-1">
              <p>✔ 4 Fresh Roti</p>
              <p>✔ Dal & Sabzi</p>
              <p>✔ Rice</p>
              <p>✔ Salad / Achar</p>
            </div>
          </div>

          {/* Order Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold"
          >
            🚀 Order Now
          </button>

        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <TiffinOrderPopup onClose={() => setShowPopup(false)} />
      )}

    </div>
  );
}
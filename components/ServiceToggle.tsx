"use client";

type Props = {
  selected: "tiffin" | "menu";
  onChange: (value: "tiffin" | "menu") => void;
};

export default function ServiceToggle({ selected, onChange }: Props) {
  return (
    <div className="w-full max-w-xl mx-auto bg-gray-200/80 backdrop-blur-md p-2 px-4 rounded-2xl flex shadow-inner">

      {/* Tiffin */}
      <button
        onClick={() => onChange("tiffin")}
        className={`flex-1 py-2 md:py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
          selected === "tiffin"
            ? "bg-white shadow-md text-black scale-105"
            : "text-gray-600 hover:text-black"
        }`}
      >
        🍱 Tiffin Service
      </button>

      {/* Menu */}
      <button
        onClick={() => onChange("menu")}
        className={`flex-1 py-2 md:py-3 text-sm md:text-base font-semibold rounded-xl transition-all duration-300 ${
          selected === "menu"
            ? "bg-white shadow-md text-black scale-105"
            : "text-gray-600 hover:text-black"
        }`}
      >
        🍽️ Menu Order
      </button>
    </div>
  );
}
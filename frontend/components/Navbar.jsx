import React from "react";
import { FaArrowLeft, FaMap } from "react-icons/fa"; // Import icons for back and map

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 p-4 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Back Button */}
        <button className="text-white text-2xl hover:bg-yellow-500 p-2 rounded-full">
          <FaArrowLeft />
        </button>
        
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          Smart Shelf
        </div>
        
        {/* Store Map Button */}
        <button className="text-white text-2xl hover:bg-yellow-500 p-2 rounded-full">
          <FaMap />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

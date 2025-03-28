import React from "react";

const SupermarketMap = () => {
  const handleAisleClick = () => {
    // Directly navigate to the shelf layout page (e.g., shelf.jsx) using window.location
    window.location.href = `/shelf`;
  };

  return (
    <div className="relative bg-gray-100 w-full max-w-5xl h-[650px] border-4 border-yellow-500 rounded-lg p-6 shadow-lg flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6">🛒 Supermarket Layout</h2>

      {/* Entrance & Checkout */}
      <div className="flex justify-between w-full px-10 mb-6">
        <div className="text-lg font-bold">🚪 Entrance</div>
        <div className="bg-yellow-400 text-black font-bold text-center px-6 py-2 rounded shadow-lg">
          🛒 Checkout
        </div>
        <div className="text-lg font-bold">🚪 Exit</div>
      </div>

      {/* Supermarket Layout */}
      <div className="grid grid-cols-3 gap-6 w-full">
        {/* Left Side Sections */}
        <div className="flex flex-col gap-4">
          <div className="bg-yellow-300 text-black font-bold text-center py-4 rounded shadow-md">🥖 Bakery</div>
          <div className="bg-green-400 text-white font-bold text-center py-4 rounded shadow-md">🍏 Produce</div>
          <div className="bg-blue-300 text-black font-bold text-center py-4 rounded shadow-md">🍼 Dairy</div>
        </div>

        {/* Aisles Section (6 Aisles, clickable buttons) */}
        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((aisle) => (
            <div key={aisle} className="flex flex-col items-center gap-2">
              <button
                onClick={() => handleAisleClick(aisle)}
                className="bg-gray-600 text-white font-bold text-center px-6 py-2 rounded shadow-md"
              >
                Aisle {aisle}
              </button>
            </div>
          ))}
        </div>

        {/* Right Side Sections */}
        <div className="flex flex-col gap-4">
          <div className="bg-red-400 text-white font-bold text-center py-4 rounded shadow-md">🥩 Meat</div>
          <div className="bg-blue-400 text-white font-bold text-center py-4 rounded shadow-md">🐟 Seafood</div>
          <div className="bg-black text-white font-bold text-center py-4 rounded shadow-md">☕ Coffee</div>
        </div>
      </div>

      {/* Impulse Buy Section */}
      <div className="mt-6 bg-red-500 text-white font-bold w-64 text-center py-3 rounded shadow-lg">
        🛍️ Impulse Buy Section
      </div>
    </div>
  );
};

export default SupermarketMap;

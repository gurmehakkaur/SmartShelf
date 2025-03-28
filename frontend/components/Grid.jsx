import { useState } from "react";

const shelves = ["Shelf-1", "Shelf-2", "Shelf-3", "Shelf-4", "Shelf-5", "Shelf-6"];
const gridData = [
  [8, 8, 8, 8, 8, 8],
  [7, 7, 7, 7, 7, 8],
  [6, 6, 6, 6, 6, 6],
  [5, 5, 5, 5, 5, 5],
  [4, 4, 4, 4, 4, 4],
  [3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2],
  [1, 1, 1, 1, 1, 1],
];
const colorScale = {
  1: "bg-red-600",
  2: "bg-red-500",
  3: "bg-orange-400",
  4: "bg-yellow-400",
  5: "bg-yellow-300",
  6: "bg-green-500",
  7: "bg-green-600",
  8: "bg-green-700",
  "": "bg-gray-500",
};

export default function FixtureUI() {
  const [selectedShelf, setSelectedShelf] = useState("Shelf-1");

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-8 border-4 border-yellow-500 relative">
      <div className="absolute inset-0 border-4 border-yellow-500 m-2"></div>
      <div className="flex gap-10 bg-white p-6 rounded-lg shadow-lg">
        {/* Sidebar */}
        <div className="bg-yellow-400 p-6 rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4 text-center text-white">Select Shelf</h2>
          <div className="flex flex-col gap-2 w-full">
            {shelves.map((shelf) => (
              <button
                key={shelf}
                className={`px-6 py-3 w-full rounded-lg text-center font-semibold transition-all ${
                  selectedShelf === shelf ? "bg-yellow-300 text-black" : "bg-white text-black hover:bg-yellow-200"
                }`}
                onClick={() => setSelectedShelf(shelf)}
              >
                {shelf}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="flex flex-col items-center">
          <h2 className="bg-yellow-400 px-6 py-2 font-bold text-lg rounded-lg mb-4 text-white">
            Fixture 06
          </h2>
          <div className="grid grid-cols-6 gap-1 border border-gray-300 p-1 bg-white">
            {gridData.flat().map((cell, index) => (
              <div
                key={index}
                className={`w-12 h-12 flex justify-center items-center font-bold text-white border border-gray-200 ${colorScale[cell]}`}
              >
                {cell}
              </div>
            ))}
          </div>
          <p className="mt-2 font-semibold">-----Front Side-----</p>
        </div>
      </div>
    </div>
  );
}

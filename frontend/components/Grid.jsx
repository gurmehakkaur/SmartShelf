import { useState, useEffect } from "react";

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

const colorMap = {
  "#FF0000": "bg-red-600",
  "#008000": "bg-green-500",
  "#FFFF00": "bg-yellow-400",
  "": "bg-gray-500",
};

const slotData = [
  {"slotid": "06020101", "colour": "#008000"},
  {"slotid": "06020102", "colour": "#008000"},
  {"slotid": "06020103", "colour": "#008000"},
  {"slotid": "06020104", "colour": "#FFFF00"},
  {"slotid": "06020105", "colour": "#FFFF00"},
  {"slotid": "06020106", "colour": "#FFFF00"},
  {"slotid": "06020107", "colour": "#FF0000"},
  {"slotid": "06020108", "colour": "#FF0000"},
  
  {"slotid": "06020201", "colour": "#008000"},
  {"slotid": "06020202", "colour": "#008000"},
  {"slotid": "06020203", "colour": "#008000"},
  {"slotid": "06020204", "colour": "#FFFF00"},
  {"slotid": "06020205", "colour": "#FFFF00"},
  {"slotid": "06020206", "colour": "#FF0000"},
  {"slotid": "06020207", "colour": "#FF0000"},
  {"slotid": "06020208", "colour": "#FF0000"},
  
  {"slotid": "06020301", "colour": "#008000"},
  {"slotid": "06020302", "colour": "#008000"},
  {"slotid": "06020303", "colour": "#008000"},
  {"slotid": "06020304", "colour": "#FFFF00"},
  {"slotid": "06020305", "colour": "#FFFF00"},
  {"slotid": "06020306", "colour": "#FF0000"},
  {"slotid": "06020307", "colour": "#FF0000"},
  {"slotid": "06020308", "colour": "#FF0000"},
  
  {"slotid": "06020401", "colour": "#008000"},
  {"slotid": "06020402", "colour": "#008000"},
  {"slotid": "06020403", "colour": "#008000"},
  {"slotid": "06020404", "colour": "#FFFF00"},
  {"slotid": "06020405", "colour": "#FFFF00"},
  {"slotid": "06020406", "colour": "#FFFF00"},
  {"slotid": "06020407", "colour": "#FF0000"},
  {"slotid": "06020408", "colour": "#FF0000"},
  
  {"slotid": "06020501", "colour": "#008000"},
  {"slotid": "06020502", "colour": "#008000"},
  {"slotid": "06020503", "colour": "#FFFF00"},
  {"slotid": "06020504", "colour": "#FFFF00"},
  {"slotid": "06020505", "colour": "#FFFF00"},
  {"slotid": "06020506", "colour": "#FFFF00"},
  {"slotid": "06020507", "colour": "#FF0000"},
  {"slotid": "06020508", "colour": "#FF0000"},
  
  {"slotid": "06020601", "colour": "#FFFF00"},
  {"slotid": "06020602", "colour": "#FFFF00"},
  {"slotid": "06020603", "colour": "#FFFF00"},
  {"slotid": "06020604", "colour": "#FFFF00"},
  {"slotid": "06020605", "colour": "#FFFF00"},
  {"slotid": "06020606", "colour": "#FF0000"},
  {"slotid": "06020607", "colour": "#FF0000"},
  {"slotid": "06020608", "colour": "#FF0000"},
  
  {"slotid": "06020701", "colour": "#008000"},
  {"slotid": "06020702", "colour": "#008000"},
  {"slotid": "06020703", "colour": "#008000"},
  {"slotid": "06020704", "colour": "#008000"},
  {"slotid": "06020705", "colour": "#008000"},
  {"slotid": "06020706", "colour": "#FF0000"},
  {"slotid": "06020707", "colour": "#FF0000"},
  {"slotid": "06020708", "colour": "#FF0000"},
  
  {"slotid": "06020801", "colour": "#008000"},
  {"slotid": "06020802", "colour": "#008000"},
  {"slotid": "06020803", "colour": "#008000"},
  {"slotid": "06020804", "colour": "#008000"},
  {"slotid": "06020805", "colour": "#008000"},
  {"slotid": "06020806", "colour": "#008000"},
  {"slotid": "06020807", "colour": "#008000"},
  {"slotid": "06020808", "colour": "#008000"}
];

// Create a lookup dictionary for slot colors
const slotLookup = {};
slotData.forEach(({ slotid, colour }) => {
  const row = parseInt(slotid.slice(-2)) - 1;
  const col = parseInt(slotid.slice(-4, -2)) - 1;
  slotLookup[`${row}-${col}`] = colorMap[colour] || "bg-gray-500";
});

export default function Grid() {
  const [selectedShelf, setSelectedShelf] = useState("Shelf-1");
  const [slotColor, setSlotColor] = useState(slotLookup["0-0"]); // Default color for slot 06020101

  useEffect(() => {
    // Simulate fetching color for slotid "06020101" from an API (or URL)
    const fetchColorFromUrl = async () => {
      //const response = await fetch("YOUR_API_URL_HERE"); // Replace with actual URL
      const data = {"colour": "#FFC0CB"}//await response.json();
      
      // Assuming the response contains the color for slot "06020101"
      const newColor = data?.colour || "#008000"; // Use default if color is not provided
      setSlotColor(colorMap[newColor] || "bg-gray-500"); // Map to Tailwind class
    };

    fetchColorFromUrl();
  }, []);

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
                className={`px-6 py-3 w-full rounded-lg text-center font-semibold transition-all transform hover:scale-105 ${selectedShelf === shelf ? "bg-yellow-300 text-black" : "bg-white text-black hover:bg-yellow-200 hover:text-black"}`}
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
            Aisle 06
          </h2>
          <div className="grid grid-cols-8 gap-1 border border-gray-300 p-1 bg-white">
            {gridData.map((row, rowIndex) =>
              row.map((cell, colIndex) => {
                const cellKey = `${rowIndex}-${colIndex}`;
                const cellColor = (cellKey === "0-0" ? slotColor : slotLookup[cellKey]) || "bg-gray-500"; 
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-12 h-12 flex justify-center items-center font-bold text-white border border-gray-200 transition-all hover:scale-105 ${cellColor}`}
                  >
                    {cell}
                  </div>
                );
              })
            )}
          </div>
          <p className="mt-2 font-semibold">-----Front Side-----</p>
        </div>
      </div>
    </div>
  );
}

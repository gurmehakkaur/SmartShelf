import { useState, useEffect } from "react";

// Define the color scale based on backend's response (1: Red, 2: Yellow, 3: Green)
const colorScale = {
  1: "bg-red-600",    // Red color
  2: "bg-yellow-400", // Yellow color
  3: "bg-green-500",  // Green color
};

const DyGrid = () => {
  const [cellData, setCellData] = useState([]);

  // Fetching data from backend
  useEffect(() => {
    fetch("http://localhost:5000/getCellColors")
      .then((response) => response.json())
      .then((data) => setCellData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-8 border-4 border-yellow-500 relative">
      <div className="absolute inset-0 border-4 border-yellow-500 m-2"></div>
      <div className="flex gap-10 bg-white p-6 rounded-lg shadow-lg">
        {/* Sidebar */}
        <div className="bg-yellow-400 p-6 rounded-lg flex flex-col items-center">
          <h2 className="text-lg font-bold mb-4 text-center text-white">Select Shelf</h2>
          {/* Shelf selection buttons */}
          {/* (Add your shelf selection functionality here if needed) */}
        </div>

        {/* Grid Section */}
        <div className="flex flex-col items-center">
          <h2 className="bg-yellow-400 px-6 py-2 font-bold text-lg rounded-lg mb-4 text-white">
            Fixture 06
          </h2>
          <div className="grid grid-cols-6 gap-1 border border-gray-300 p-1 bg-white">
            {/* Loop through the data and display the cells with appropriate color */}
            {cellData.map((cell) => (
              <div
                key={cell.cell_id} // Using unique cell_id as key
                className={`w-12 h-12 flex justify-center items-center font-bold text-white border border-gray-200 ${colorScale[cell.color]}`}
              >
                {/* You can display the cell_id or any other info you want here */}
                {cell.cell_id}
              </div>
            ))}
          </div>
          <p className="mt-2 font-semibold">-----Front Side-----</p>
        </div>
      </div>
    </div>
  );
};

export default DyGrid;

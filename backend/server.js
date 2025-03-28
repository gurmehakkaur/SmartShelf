const express = require('express');
const moment = require('moment');
const app = express();
const port = 5000;

// Helper function to return color based on the hardcoded date
const getColorBasedOnDate = (date) => {
  const currentDate = moment();
  const diffDays = moment(date).diff(currentDate, 'days');

  if (diffDays <= 2) {
    return 1; // Red
  } else if (diffDays <= 5) {
    return 2; // Yellow
  } else if (diffDays > 7) {
    return 3; // Green
  }
  return 0; // Default or No color
};

// Hardcoded data (simulating database results)
const hardcodedData = [
  { cell_id: "06010101", color_date: "2025-03-30", color: getColorBasedOnDate("2025-03-30") },
  { cell_id: "06010102", color_date: "2025-04-02", color: getColorBasedOnDate("2025-04-02") },
  { cell_id: "06010103", color_date: "2025-04-05", color: getColorBasedOnDate("2025-04-05") },
  // Add more cell data as needed
];

// Fetching hardcoded color data for testing frontend
app.get('/getCellColors', (req, res) => {
  res.json(hardcodedData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

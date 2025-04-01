# SMART SHELF - Tracking expiry can reduce 40% of food wastage in retail.
## Seneca Hackathon 2025
### 🛒 Problem & Solution
Problem: Grocery stores rely on manual product expiry checks, leading to errors, inefficiencies, and food waste. Employees must physically inspect items, increasing labor costs and operational delays.

Solution: Our Smart Shelf System automates expiry tracking by scanning barcodes and updating a digital grid. Each product’s expiry status is color-coded in real-time, ensuring soon-to-expire items are placed at the front and no expired products remain on shelves.

The data collected would allow main store Operator to monitor expiry trends for each product individually. This helps optimize reordering decisions, ensuring better inventory management and reducing waste. 

### 📌 About This Code
We've developed the core logic for a single grid cell, ensuring accurate real-time updates of product status based on expiry dates. This logic seamlessly scales across the entire shelving system, making it adaptable for mass deployment in retail environments.

## How to run
### 1. Clone the project
### 2. Start server
```sh
# Install all required python libraries
cd frontend
pip install flask flask-cors cors date-time
```
```sh
# Run main backend file
python app.py
```
```sh
#In new terminal, activate scanner
cd frontend
python scanner_listener.py
```
### 3. Start Frontend
```sh
cd frontend
npm install
npm run dev
```
## How to use
* On Frontend Interface, Go to Aisle 6.
* Connect scanner to the device, have the cursor in the terminal where we ran scanner_listener.py
* Scan the Barcode. Alternatively, type in the date in the format YYYY-MM-DD and press Enter.
* Refresh Frontend to see updated colour of (1,1) Cell 

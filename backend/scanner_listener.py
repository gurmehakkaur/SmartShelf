import requests
import re

BACKEND_URL="http://127.0.0.1:5000/scan" # Flask backend url 

# HARDCODED VALUES
PRODUCTid="06020101"
SCANNERid="S06020101"

def extractDate(scanned_code):
    """Extract expiry date from the scanned code."""
    print("Scanned code is {scanned_code}")
    match=re.search(r'\d{4}-\d{2}-\d{2}',scanned_code) #look for YYYY-MM-DD format
    return match.group(0) if match else None # Return expiry date if found



print("Scanner Listener started. Please scan a product...")

while True:
    barcode = input("Scan product:") # Scanner acts like a keyboard input

    expiry_date=extractDate(barcode)
    if not expiry_date:
        print("Invalid scan : Expiry date not found. Try again")
        continue # skip if expiry date not found

    data={
        "productID":PRODUCTid,
        "scannerID":SCANNERid,
        "expiryDate":expiry_date
    }

    try:
        response=requests.post(BACKEND_URL,json=data)
        print("Response from server:",response.json())
    except Exception as e:
        print("Error sending data:",e)

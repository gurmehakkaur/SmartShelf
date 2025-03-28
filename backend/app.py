from flask import Flask, request, jsonify
from flask_cors import  CORS
from datetime import datetime

app=Flask(__name__)
CORS(app)

shelf_data={"productID":None,"scannerID":None,"expiryDate":None,"color":"white"}

def get_expiry_color(expiryDate):
    today=datetime.today().date()
    daysLeft=(expiryDate-today).days
    return "red" if daysLeft<=2 else "yellow" if 5<=daysLeft <=7 else "green"

@app.route("/scan",methods=["POST"])
def scan_product():
    data=request.json
    expiryDate=datetime.strptime(data["expiryDate"],"%Y-%m-%d").date()

    #update shelf data
    shelf_data.update({
        "productID":data["productID"],
        "scannerID":data["scannerID"],
        "expiryDate":expiryDate,
        "color":get_expiry_color(expiryDate)
    }) 

    return jsonify({"productID":shelf_data["productID"],"color":shelf_data["color"]})

@app.route("/shelf",methods=["GET"])
def get_shelf():
    return jsonify(shelf_data)

if __name__ == "__main__":
    app.run(debug=True)
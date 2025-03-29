from flask import Flask, request, jsonify
from flask_cors import  CORS
from datetime import datetime

app=Flask(__name__)
CORS(app)

shelf_data={"productID":None,"scannerID":None,"expiryDate":None,"color":"#FFFFFF"}

def get_expiry_color(expiryDate):
    today=datetime.today().date()
    daysLeft=(expiryDate-today).days
    return "#FF0000" if daysLeft<=2 else "#FFFF00" if 5<=daysLeft <=7 else "#008000"

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
    return jsonify({"productID":shelf_data["productID"],"color":shelf_data["color"]})

if __name__ == "__main__":
    app.run(debug=True)
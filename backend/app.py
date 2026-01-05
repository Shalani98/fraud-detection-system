from flask import Flask,send_from_directory,request,jsonify
from flask import request,jsonify
from flask_cors import CORS

import os
import joblib
import pandas as pd


BASE_DIR=os.path.dirname(os.path.abspath(__file__))

# Make API server
app= Flask(__name__,
           static_folder=os.path.join(BASE_DIR,"../frontend/dist"),
           static_url_path="/")

#Enable CORS
CORS(app)

# Load the trained model
model=joblib.load("fraud_model.pkl")








@app.route('/predict',methods=['POST']) 
def  predict():
    data=request.get_json()    # Receive JSON input

    if data is None:
        return jsonify({"error": "No JSON received"}),400
    
    df_input=pd.DataFrame([data])   # Convert input to DataFrame


    # One-hot encode categorical columns
    df_input=pd.get_dummies(df_input)

    #Align column with training features
    df_input=df_input.reindex(columns=model.feature_names_in_, fill_value=0)



    prediction=model.predict(df_input)    # Make prediction
    return jsonify({"fraud_prediction": int(prediction[0])})    # Return result as JSON

# Serve React frontend
# -------------------------
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

#Run the server
if __name__=="__main__":
    app.run(host="0.0.0.0",port=5000)
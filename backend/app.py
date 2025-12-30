from flask import Flask
from flask import request,jsonify
from flask_cors import CORS


import joblib
import pandas as pd



# Make API server
app= Flask(__name__)

#Enable CORS
CORS(app)

# Load the trained model
model=joblib.load("fraud_model.pkl")






@app.route('/')
def home():
    return "Api is running"

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

#Run the server
if __name__=="__main__":
    app.run(debug=True)

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load the model
with open('model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/')
def home():
    return render_template('Kriyeta3.0/index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Retrieve JSON data from request
    data = request.json
    step = float(data['step'])
    type_ = float(data['type'])
    amount = float(data['amount'])
    oldbalanceOrg = float(data['oldbalanceOrg'])
    newbalanceOrig = float(data['newbalanceOrig'])

    # Make prediction
    prediction = model.predict([[step, type_, amount, oldbalanceOrg, newbalanceOrig]])

    # Interpret the result
    result = "Fraud has happened" if prediction[0] == 0 else "Fraud has not happened"

    # Return result as JSON
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(port=5173, debug=True)



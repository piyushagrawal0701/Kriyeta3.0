#flask app

import pickle
import numpy as np
import sklearn 

from flask import Flask, request, jsonify, render_template


app= Flask(__name__)

#loading the pickle file(model.pkl)
#opening in reading mode


model= (pickle.load("name", "rb"))


#loading the html file 

@app.route("/")
def Home():
    return render_template("indexx.html")

@app.route("/predict", method= ["POST"])
def predict():   
                    #loading the values








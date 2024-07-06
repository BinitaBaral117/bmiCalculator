import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      // BMI calculation with metric units (height in meters)
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      // Determine BMI message based on calculated BMI
      if (bmiValue < 18.5) {
        setMessage("You are underweight.");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("You are healthy.");
      } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
        setMessage("You are overweight.");
      } else if (bmiValue >= 29.9) {
        setMessage("You are obese.");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (kg)</label>
            <input
              type="number"
              step="1"
              placeholder="Enter your weight in kilograms"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              required/>
          </div>

          <div>
            <label>Height (cm)</label>
            <input
              type="number"
              step="1"
              placeholder="Enter your height in centimeters"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
              required/>
          </div>

          <div>
            <button className="btn" type="submit">Calculate BMI</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
          </div>

          {bmi !== null && (
            <div className="result">
              <h3>Your BMI is: {bmi}</h3>
              <p>{message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;

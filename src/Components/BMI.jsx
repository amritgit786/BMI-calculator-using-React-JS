import { useState } from "react";
// import bmiimg from "../assets/bmi.png";
import "bootstrap/dist/css/bootstrap.min.css";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");

  const handleCalculateBmi = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(2));

      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
    }
  };

  const clearForm = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setBmiStatus("");
  };

  return (
    <>
      <div className="container-fluid bg-light min-vh-90 py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-center mb-4">BMI Calculator</h2>
              {/* <img
                src={bmiimg}
                alt="BMI"
                className="img-fluid d-block mx-auto mb-4"
              /> */}
              <form id="bmiForm">
                <div className="form-group mb-3">
                  <label htmlFor="height">Height (in cm)</label>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="height"
                    name="height"
                    placeholder="Enter height (cm)"
                    onChange={(e) => setHeight(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="weight">Weight (in kg)</label>
                  <input
                    type="text"
                    className="form-control mt-3"
                    id="weight"
                    name="weight"
                    placeholder="Enter weight (kg)"
                    onChange={(e) => setWeight(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg me-3"
                    onClick={handleCalculateBmi}
                  >
                    Calculate BMI
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    onClick={(e) => clearForm(e)}
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white p-4 rounded shadow">
              <h4 className="text-center mb-4">BMI Result</h4>
              {bmi !== null && (
                <div className="text-center">
                  <p>
                    <strong>Your BMI:</strong> <span id="bmiValue">{bmi}</span>
                  </p>
                  <p>
                    <strong>Status:</strong>
                    <span id="bmiStatus">{bmiStatus}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BMI;

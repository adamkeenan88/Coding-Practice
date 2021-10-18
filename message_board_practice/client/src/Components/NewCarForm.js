import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "./styles.css";

const CarForm = (props) => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");
  const [color, setColor] = useState("");
  const [errors, setErrors] = useState({});
  const { formSubmittedBoolen, setFormSubmittedBoolean } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("success");
    const newCarData = { year, make, model, engine, color };
    console.log(newCarData);
    axios
      .post("http://localhost:8000/api/car", newCarData)
      .then((newCar) => {
        setYear("");
        setMake("");
        setModel("");
        setEngine("");
        setColor("");
        setFormSubmittedBoolean(!formSubmittedBoolen);
        navigate("/");
      })
      .catch((err) => {
        console.log("error block", err.response);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors.errors);
      });
  };

  return (
    <>
      <p style={{ fontSize: 30 }}>Add a new car to the journal!</p>
      <form onSubmit={onSubmitHandler}>
        <div classname="formcolumnone">
          <p>
            <label>Car Year</label>
          </p>
          <p>
            <input type="text" onChange={(e) => setYear(e.target.value)} />
          </p>
          <p>
            <label htmlFor="animalType">Car Make</label>
          </p>
          <p>
            <input type="text" onChange={(e) => setMake(e.target.value)} />
          </p>
          <p>
            <label>Car Model</label>
          </p>
          <p>
            <input type="text" onChange={(e) => setModel(e.target.value)} />
          </p>
          <input
            style={{ backgroundColor: "blue", color: "white" }}
            className="newpet"
            type="submit"
            value="Add Car"
          />
        </div>
        <div className="formcolumntwo">
          <p>
            <label>Car Engine</label>
          </p>
          <p>
            <input type="text" onChange={(e) => setEngine(e.target.value)} />
          </p>
          <p>
            <label>Car Color</label>
          </p>
          <p>
            <input type="text" onChange={(e) => setColor(e.target.value)} />
          </p>
        </div>
      </form>
      {errors
        ? Object.keys(errors).map((objKey, index) => (
            <p key={index}>{errors[objKey].message}</p>
          ))
        : null}
    </>
  );
};
export default CarForm;

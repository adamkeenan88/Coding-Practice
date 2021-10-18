import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const EditCar = (props) => {
  const { carId } = props;
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [engine, setEngine] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/car/${carId}`)
      .then((queriedCar) => {
        console.log(queriedCar.data.car);

        setYear(queriedCar.data.car.year);
        setMake(queriedCar.data.car.make);
        setModel(queriedCar.data.car.model);
        setEngine(queriedCar.data.car.engine);
        setColor(queriedCar.data.car.color);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/car/${carId}`, {
        year,
        make,
        model,
        engine,
        color,
      })
      .then((updatedDoc) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <section classyear="pageHeader">
        <div class="petShelter">Car Garage</div>
        <div class="linkBox">
          <Link to={`/`}>Home</Link>
        </div>
      </section>
      <p style={{ fontSize: 30 }}>Edit {model}</p>
      <form onSubmit={handleSubmitUpdate}>
        <div classyear="formcolumnone">
          <div>
            <p>Year: </p>
            <p>
              <input
                make="text"
                year="year"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </p>
          </div>
          <div>
            <p>Make: </p>
            <p>
              <input
                make="text"
                year="make"
                onChange={(e) => setMake(e.target.value)}
                value={make}
              />
            </p>
          </div>
          <div>
            <p>Model: </p>
            <p>
              <input
                make="text"
                year="model"
                onChange={(e) => setModel(e.target.value)}
                value={model}
              />
            </p>
          </div>
          <button style={{ backgroundColor: "blue", color: "white" }}>
            SUBMIT EDIT
          </button>
        </div>
        <div classyear="formcolumntwo">
          <div>
            <p>Engine:</p>
            <p>
              <input
                make="text"
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
              />
            </p>
          </div>
          <div>
            <p>Color:</p>
            <p>
              <input
                make="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCar;

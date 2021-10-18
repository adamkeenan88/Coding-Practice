import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import "./styles.css";

const DisplayAllCars = (props) => {
  const { formSubmittedBoolean, setFormSubmittedBoolean } = props;
  const [cars, setCars] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    axios
      .get("http://localhost:8000/api")
      .then((allCars) => {
        console.log(allCars.data.car);
        setCars(allCars.data.car);
      })
      .catch((err) => console.log(err));
  }, [formSubmittedBoolean]);

  const deleteCar = (id) => {
    axios
      .delete(`http://localhost:8000/api/car/${id}`)
      .then((response) => {
        console.log("delete successful");
        setFormSubmittedBoolean(!formSubmittedBoolean);
      })
      .catch((err) => console.log("error deleting car", err));
  };

  return (
    <div>
      <h2>Your Garage:</h2>
      <table className="allPets">
        {cars
          ? cars.length > 0 &&
            cars.map((car, index) => (
              <tr key={index}>
                <td>{car.year}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>
                  <Link to={`/car/${car._id}`}>Details</Link> |
                  <Link to={`/car/${car._id}/edit`}>Edit Car</Link>
                </td>
              </tr>
            ))
          : "Cars Loading"}
      </table>
    </div>
  );
};

export default DisplayAllCars;

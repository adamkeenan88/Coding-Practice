import { navigate } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "@reach/router";
import "../Components/styles.css";

const DisplayOneCar = (props) => {
  const { carId } = props;
  const [carInfo, setCarInfo] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/car/${carId}`)
      .then((queriedCar) => {
        console.log(queriedCar.data.car);
        setCarInfo(queriedCar.data.car);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const deleteCar = (id) => {
    axios
      .delete(`http://localhost:8000/api/car/${carId}`)
      .then((response) => {
        console.log("deletion successful");
        navigate("/");
      })
      .catch((err) => console.log("error deleting car", err));
  };

  const [Likes, setLikes] = useState(0);

  return (
    <div>
      <section className="pageHeader">
        <div className="petShelter">Car Garage</div>
        <div className="linkBox">
          <Link to={`/`}>Home</Link>
        </div>
      </section>
      {carInfo ? (
        <div>
          <h1 id="details">Details about: {carInfo.model}</h1>
          <section id="displayone">
            <div className="displaycolumnone">
              <p>Year:</p>
              <p>Make:</p>
              <p>Model:</p>
              <p>Engine:</p>
              <p>Color:</p>
            </div>
            <div className="displaycolumntwo">
              <p>{carInfo.year}</p>
              <p>{carInfo.make}</p>
              <p>{carInfo.model}</p>
              <p>{carInfo.engine}</p>
              <p>{carInfo.color}</p>
            </div>
          </section>
          <button onClick={() => setLikes(Likes + 1)}>
            Like {carInfo.model}
          </button>
          <p>{Likes} Like(s)</p>
        </div>
      ) : (
        <h1>DTA IS LOADING</h1>
      )}
    </div>
  );
};

export default DisplayOneCar;

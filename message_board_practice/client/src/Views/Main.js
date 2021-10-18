import React, { useState, useEffect } from "react";
// import PetForm from "../Components/NewPetForm";
import DisplayAllCars from "../Components/DisplayAllCars";
import "../Components/styles.css";
import { Link } from "@reach/router";
import io from "socket.io-client";
const Main = () => {
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);
  const [socket] = useState(() => io(":8000"));

  useEffect(() => {
    console.log("Is this running?");
    socket.on("Welcome", (data) => console.log(data));
    return () => socket.disconnect(true);
  }, []);
  return (
    <div>
      <section classname="pageHeader">
        <div class="petShelter">Car Projects</div>
        <div class="linkBox">
          <Link to={`/car/new`}>Add a New Car</Link>
        </div>
      </section>
      <DisplayAllCars
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
    </div>
  );
};
export default Main;

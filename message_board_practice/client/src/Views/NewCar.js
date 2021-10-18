import CarForm from "../Components/NewCarForm";
import { Link } from "@reach/router";
import React, { useState } from "react";
import "../Components/styles.css";

const NewCar = () => {
  const [formSubmittedBoolean, setFormSubmittedBoolean] = useState(false);

  return (
    <div>
      <section className="pageHeader">
        <div className="petShelter">Car Journal</div>
        <div className="linkBox">
          <Link to={`/`}>Home</Link>
        </div>
      </section>
      <CarForm
        formSubmittedBoolean={formSubmittedBoolean}
        setFormSubmittedBoolean={setFormSubmittedBoolean}
      />
    </div>
  );
};

export default NewCar;

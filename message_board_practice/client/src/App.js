import React from "react";
import { Router } from "@reach/router";
import Main from "./Views/Main";
import NewCar from "./Views/NewCar";
import DisplayOneCar from "./Components/DisplayOneCar";
import EditCar from "./Components/EditCar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <NewCar path="/car/new" />
        <EditCar path="/car/:carId/edit" />
        <DisplayOneCar path="/car/:carId" />
      </Router>
    </div>
  );
}
export default App;

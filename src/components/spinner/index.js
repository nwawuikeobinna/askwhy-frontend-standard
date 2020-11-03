import React from "react";
import "./index.scss";
import Loader from "./loader.gif";


// Spinner
const Spinner = () => {
  return (
    <div className="spinner">
      <img src={Loader} alt="Loading..." className="spinner_icon" />
    </div>
  );
};

export default Spinner;

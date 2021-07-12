import React from "react";
import { useSelector } from "react-redux";

const Cylinder = () => {
  const isEngineOn = useSelector((state) => state.car.isEngineOn);
  
  return (
    <div
      style={{
        borderRadius: "100%",
        width: "80px",
        height: "80px",
        margin: "30px",
        backgroundColor: isEngineOn ? "green" : "red",
      }}
    ></div>
  );
};

export default Cylinder;

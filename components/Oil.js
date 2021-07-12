import React from "react";
import { useSelector } from "react-redux";

const Oil = () => {
  const oilLevel = useSelector((state) => state.car.oilLevel);
  
  return (
    <div
      style={{
        height: "150px",
        width: "80px",
        border: "1px solid grey",
        display: "flex",
        alignItems: "end",
      }}
    >
      <div
        style={{
          height: `${oilLevel}%`,
          width: "100%",
          backgroundColor: "yellow",
          borderRadius: "5px",
        }}
      ></div>
    </div>
  );
};

export default Oil;

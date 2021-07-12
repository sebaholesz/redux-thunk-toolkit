import React from "react";
import { carActions, fix } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const Screen = () => {
  const dispatch = useDispatch();
  const isEngineOn = useSelector((state) => state.car.isEngineOn);
  const oilLevel = useSelector((state) => state.car.oilLevel);
  const error = useSelector((state) => state.car.error);
  const isBeingFixed = useSelector((state) => state.car.isBeingFixed);

  const carStartHandler = () => {
    dispatch(carActions.start());
  };

  const carStopHandler = () => {
    dispatch(carActions.stop());
  };

  const carGoHandler = () => {
    dispatch(carActions.go(Math.random() * 100));
  };

  const fixHandler = () => {
    dispatch(fix());
  };

  return (
    <>
      <button disabled={isEngineOn || oilLevel === 0} onClick={carStartHandler}>
        Start
      </button>
      <button disabled={!isEngineOn} onClick={carStopHandler}>
        Stop
      </button>
      <button disabled={!isEngineOn} onClick={carGoHandler}>
        Go
      </button>
      <div
        style={{
          width: "50%",
          borderRadius: "10px",
          boxShadow: "0 0 5px rgba(1,1,1,0.5)",
          height: "120px",
          backgroundColor: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {error && (
          <>
            <h3>{error}</h3>
            <button onClick={fixHandler}>Fix it</button>
          </>
        )}
        {isBeingFixed && <h3>Car is being fixed...</h3>}
      </div>
    </>
  );
};

export default Screen;

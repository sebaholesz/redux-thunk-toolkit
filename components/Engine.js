import React, { useEffect } from "react";
import { carActions } from "../redux/store";
import Cylinder from "./Cylinder";
import OilPump from "./OilPump";
import { useDispatch, useSelector } from "react-redux";

const Engine = () => {
  const dispatch = useDispatch();
  const oilLevel = useSelector((state) => state.car.oilLevel);

  useEffect(() => {
    if (oilLevel === 0) dispatch(carActions.notifyError());
  }, [oilLevel, dispatch]);

  return (
    <>
      <Cylinder />
      <OilPump />
    </>
  );
};

export default Engine;

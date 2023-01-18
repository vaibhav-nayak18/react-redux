import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restock } from "./cakeSlice";
const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div className=''>
      <h2>Number of cake - {numOfCakes}</h2>
      <button
        onClick={() => {
          return dispatch(ordered(1));
        }}
      >
        Order cake
      </button>
      <button
        onClick={() => {
          return dispatch(restock(10));
        }}
      >
        Restock cake
      </button>
    </div>
  );
};

export default CakeView;

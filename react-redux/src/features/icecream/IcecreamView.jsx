import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const icecream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div className=''>
      <h2>Number of icecream - {icecream}</h2>
      <button onClick={() => dispatch(ordered(1))}>Order icecream</button>
      <button onClick={() => dispatch(restocked(25))}>Restock icecream</button>
    </div>
  );
};

export default IcecreamView;

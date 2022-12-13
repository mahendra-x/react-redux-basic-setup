import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../redux/slices/customSlice";

const Home = () => {
  const [incrementByamount, setIncrementByamount] = useState(0);
  const count = useSelector((state) => state.custom.c);
  const dispatch = useDispatch();

  const addValue = Number(incrementByamount) || 0;

  const resetAll = () => {
    setIncrementByamount(0);
    dispatch(reset());
  };

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const value = 20;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input
        type="text"
        value={incrementByamount}
        onChange={(e) => setIncrementByamount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByValue(addValue))}>
        Add amount
      </button>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
};

export default Home;

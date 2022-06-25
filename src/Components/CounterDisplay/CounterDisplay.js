// import React, { useState } from "react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../redux/counter";

const CounterDisplay = () => {
  //   const [count, setCount] = useState(0);

  /* const increaser = () => setCount(count + 1);
  const decreaser = () => setCount(count - 1);
  const resetCounter = () => setCount(count * 0); */

  // const {count} = useSelector((state) => state.counter);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="d-flex align-items-center">
      <div className="circle">
        <span>{count}</span>
      </div>
      <div className="d-flex align-items-center">
        <button
          style={{ width: "50px" }}
          className="mx-3 rounded p-2 fs-4"
          //   onClick={increaser}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          style={{ width: "50px" }}
          className="me-3 rounded p-2 fs-4"
          //   onClick={decreaser}
          onClick={() => dispatch(decrement(1))}
        >
          -
        </button>
        <button
          className="me-3 rounded p-2"
          // onClick={resetCounter}
          onClick={() => dispatch(reset(0))}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default CounterDisplay;

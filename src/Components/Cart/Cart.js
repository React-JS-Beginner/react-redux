import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h3
        style={{ textAlign: "right", paddingRight: "6px", color: "#61dafb" }}
      >
        {count}
      </h3>
    </div>
  );
};

export default Cart;

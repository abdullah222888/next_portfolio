"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("counter");

  //   console.log(Counter);

  return (
    <div className="grid m:0 p:0 box-border">
      <button onClick={() => setCount(count + 1)}>Add {count}</button>
    </div>
  );
};

export default Counter;

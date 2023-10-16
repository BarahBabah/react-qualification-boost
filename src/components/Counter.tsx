import React, { useState } from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [count, setCount] = useState(0);

  const implement = () => {
    setCount(count + 1);
  };
  return (
    <div className={classes.green}>
      <button className={classes.btn} onClick={implement}>
        {count}
      </button>
    </div>
  );
};

import React, { useCallback, useState } from "react";
import CountValue from "./CountValue";
import IsFive from "./isFive";

const Counters = () => {
  console.log("Counters");

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const show = useCallback(() => {
    console.log("Show " + count1);
  }, [count1]);

  return (
    <div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <span>
          <CountValue value={count1} id="count1" show={show} />
        </span>
        <button onClick={() => setCount1(count1 - 1)}>-</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <span>
          <CountValue value={count2} id="count2" />
        </span>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
        <IsFive value={count2} />
      </div>
    </div>
  );
};

export default Counters;

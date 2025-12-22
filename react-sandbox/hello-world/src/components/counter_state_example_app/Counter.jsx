import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

function Counter() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function Decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="container">
      <IncrementButton onIncrement={Increment} />
      <p>Count: {count}</p>
      <DecrementButton onDecrement={Decrement} />
    </div>
  );
}

export default Counter;

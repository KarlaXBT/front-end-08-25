import { useState } from "react";

function TavaKalkulaator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState();
  const [operator, setOperator] = useState("");

  function setNumber(number) {
    if (operator === "") {
      setNumber1(number);
    } else {
      setNumber2(number);
    }
  }

  function reset() {
    setNumber1(0);
    setOperator("");
    setNumber2();
  }

  return (
    <div>
      <span>
        {number1} {operator}
      </span>
      {operator && <span> {number2} </span>}
      {operator === "x" && number2 >= 0 && <span>= {number1 * number2} </span>}
      {operator === "+" && number2 >= 0 && <span>= {number1 + number2} </span>}
      {operator === "-" && number2 >= 0 && <span>= {number1 - number2} </span>}
      {operator === "/" && number2 >= 0 && <span>= {number1 / number2} </span>}
      <br />
      <button onClick={() => setNumber(7)}>7</button>
      <button onClick={() => setNumber(8)}>8</button>
      <button onClick={() => setNumber(9)}>9</button>
      <button onClick={() => setOperator("x")}>x</button>
      <br />
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>
      <button onClick={() => setNumber(6)}>6</button>
      <button onClick={() => setOperator("-")}>-</button>
      <br />
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setOperator("+")}>+</button>
      <br />
      <button onClick={() => setOperator("/")}>/</button>
      <button onClick={() => setNumber(0)}>0</button>
      <button onClick={reset}>C</button>
      <button>=</button>
    </div>
  );
}

export default TavaKalkulaator;

import { useState } from "react";

export default function Index() {
  const [color, setColor] = useState("red");
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const Changes = () => {
    setColor("gray");
    setBrand("Mustang");
    setModel("BMW");
    setYear("2000");
  };
  return (
    <>
      <h1>My favorite color is {color}</h1>
      <h3>Click the button and Change your color</h3>
      <button onClick={Changes}>Change</button>
      <p>
        This car is {color} {model} {brand} from {year}
      </p>
      <button onClick={Changes}>Change the car info</button>
    </>
  );
}

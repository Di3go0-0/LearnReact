import { useState } from "react";
import "./App.css";
import { Button } from "./Components/";

function App() {
  const [Count, setCount] = useState(0);
  const [Name, setName] = useState("Diego");

  // batching
  // const IncreaseLocalCount = () => {
  //   setCount(Count + 1); // 0 + 1
  //   setCount(Count + 1); // 0 + 1
  //   setCount(Count + 1); // 0 + 1
  //   setCount(Count + 1); // 0 + 1
  //   setCount(Count + 1); // 0 + 1
  // };

  const IncreaseLocalCount = () => {
    setCount((Count) => Count + 1); // (0) => 0 + 1
    setCount((Count) => Count + 1); // (1) => 1 + 1
    setCount((Count) => Count + 1); // (2) => 2 + 1
    setCount((Count) => Count + 1); // (3) => 3 + 1
    setCount((Count) => Count + 1); // (4) => 4 + 1
  };

  const changeName = () => {
    if (Name === "Juan") {
      setName("Diego");
      return;
    }
    setName("Juan");
  };

  return (
    <>
      <Button label={`Count is ${Count}`} parentMethod={IncreaseLocalCount} />
      <p>{Name}</p>
      <Button label={"Change Name"} parentMethod={changeName} />
    </>
  );
}

export default App;

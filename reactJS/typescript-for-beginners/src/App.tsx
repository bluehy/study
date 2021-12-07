import React from "react";
import Circle from "./Circle";
// import { useState } from "react-dom";

function App() {
  // const [value, setValue] = useState(true);
  // setValue("hello");
  return (
    <div>
      <Circle borderColor="blue" bgColor="skyblue" />
      <Circle bgColor="tomato" />
    </div>
  );
}

export default App;

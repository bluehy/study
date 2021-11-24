import Button from "./Button.js";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all time");
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  }
  useEffect(iRunOnlyOnce, []);
  // state가 변화할 때마다 re-render가 발생
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClick}>Click me</Button>
    </div>
  );
}

export default App;

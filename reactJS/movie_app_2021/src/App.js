import Button from "./Button.js";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all time");
  // state가 변화할 때마다 re-render가 발생
  useEffect(()=>{console.log("CALL THE API...")}, []);
  // state가 변화해도 더는 렌더되지 않는다.
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(()=>{console.log("Search for...",keyword)},[keyword]);
  // keyword가 변화할 때만 기능하도록. deps에 지정된 변수를 react가 watch
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClick}>Click me</Button>
    </div>
  );
}

export default App;

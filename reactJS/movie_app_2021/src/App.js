import Button from "./Button.js";
import styles from "./App.module.css";
import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all time.");
  // state가 변화할 때마다 re-render가 발생
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  useEffect(()=>{console.log("I run only once.")}, []);
  useEffect(()=>{
    if(keyword !== "" & keyword.length > 5){
      console.log("I run when 'keyword' changes.");
    }
  },[keyword]);
  useEffect(()=>{
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(()=>{
    console.log("I run when 'keyword & counter' changes.");
  }, [keyword, counter]);

  // cleanup
  const Hello = () => {
    useEffect(()=>{
      console.log("hi :)");
      return () => console.log("bye :(");
    },[]);
    return <h1>Hello</h1>
  }
  const [showing, setShowing] = useState(false);
  const onHiding = () => setShowing(prev => !prev);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1 className={styles.title}>{counter}</h1>
      <Button text="Click me" onClick={onClick}>Click me</Button>
      <button onClick={onHiding}>{showing? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;

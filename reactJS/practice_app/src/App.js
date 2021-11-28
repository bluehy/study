import {useState} from "react";

function App() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;

  const [toDo, setToDO] = useState("");
  const onChange = (event) => setToDO(event.target.value);

  return (
    <div>
      <h1>{year}년 {month}월</h1>
      <input onChange={onChange} value={toDo} type="text" placeholder="할 일 입력"/>
    </div>
  );
}

export default App;

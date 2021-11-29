import { useState, useEffect } from "react";

function App() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  const [toDo, setToDO] = useState("");
  const [list, setList] = useState([]);

  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDO("");
    setList((prevArr) => [toDo, ...prevArr]);
    // not [toDo, prevArr]
  };
  useEffect(() => {
    console.log(list);
  }, [list]);

  // render
  return (
    <div>
      <h1>
        {year}년 {month}월
      </h1>
      <p>오늘의 할 일 갯수 : {list.length}</p>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일"
        />
        <button>추가</button>
      </form>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <button>🔘</button>
            {item}
          </li>
          // Each child in a list should have a unique "key" prop.
        ))}
      </ul>
    </div>
  );
}

export default App;

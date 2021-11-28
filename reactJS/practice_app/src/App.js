import { useState } from "react";

function App() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;

  const [toDo, setToDO] = useState("");
  const onChange = (event) => setToDO(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDO("");
  };

  return (
    <div>
      <h1>
        {year}년 {month}월
      </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일"
        />
        <button>추가</button>
        <ul></ul>
      </form>
    </div>
  );
}

export default App;

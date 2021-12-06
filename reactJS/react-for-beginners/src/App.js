import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Child = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
`;

function App() {
  return (
    <Parents>
      <Child></Child>
      <div></div>
    </Parents>
  );
}

export default App;

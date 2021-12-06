import styled from "styled-components";

const Parents = styled.div`
  display: flex;
`;

const Child = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
`;

const ChildTwo = styled(Child)`
  color: blue;
`;

const Title = styled.h1`
  color: white;
`;

function App() {
  return (
    <Parents>
      <Child>
        <Title>Title</Title>
      </Child>
      <ChildTwo></ChildTwo>
    </Parents>
  );
}

export default App;

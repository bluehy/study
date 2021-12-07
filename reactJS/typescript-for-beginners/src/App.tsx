import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: teal;
`;

function App() {
  return (
    <Container>
      <Box></Box>
      <Box></Box>
    </Container>
  );
}

export default App;

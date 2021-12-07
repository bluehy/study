import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
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

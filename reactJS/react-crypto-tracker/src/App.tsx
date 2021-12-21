import React from "react";
import { createGlobalStyle } from "styled-components";
import Router from "./Router";

const GlobalStyle = createGlobalStyle`
  body{
    color: #333;
  }
`;

function App() {
  return;
  <>
    <GlobalStyle />
    <Router />;
  </>;
}

export default App;

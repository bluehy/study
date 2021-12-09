import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} /* {Component} */ />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;

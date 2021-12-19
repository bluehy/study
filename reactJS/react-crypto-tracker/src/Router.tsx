import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;

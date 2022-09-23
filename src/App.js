import { Routes, Route, Navigate } from "react-router-dom";

import Nav from "./layout/Nav/Nav";
import Home from "./routes/Home/Home";
import Experiment from "./routes/Experiment/Experiment";
import Footer from "./layout/Footer/Footer";

import "./css/global/app.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sandbox" element={<Experiment />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

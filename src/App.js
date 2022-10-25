import { Routes, Route, Navigate } from "react-router-dom";

import Nav from "./layout/Nav/Nav";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import ContactSuccess from "./routes/Contact/ContactSuccess";
import Sandbox from "./routes/Sandbox/Sandbox";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-success" element={<ContactSuccess />} />
        <Route path="/sandbox" element={<Sandbox />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

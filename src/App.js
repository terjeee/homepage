import { Routes, Route, Navigate } from "react-router-dom";

import Nav from "./layout/Nav/Nav";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import ContactFeedback from "./routes/Contact/ContactFeedback";
import Sandbox from "./routes/Sandbox/Sandbox";
import Footer from "./layout/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/homepage" element={<Home />} />
        <Route path="/homepage/sandbox" element={<Sandbox />} />
        <Route path="/homepage/contact" element={<Contact />} />
        <Route path="/homepage/contact-:feedback" element={<ContactFeedback />} />
        <Route path="*" element={<Navigate to="/homepage" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

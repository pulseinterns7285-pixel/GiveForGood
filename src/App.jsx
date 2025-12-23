import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Education from "./pages/Education.jsx";
import Community from "./pages/Community.jsx";
import Women from "./pages/Women.jsx";
import History from "./pages/History.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/education" element={<Education />} />
        <Route path="/community" element={<Community />} />
        <Route path="/women" element={<Women />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

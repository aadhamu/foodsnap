import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Disclaimer from "./pages/Disclaimer";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/Disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

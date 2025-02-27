import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import all pages
import Home from "./components/Home";
import Destinations from "./components/Destinations";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Packages from "./components/Packages";
import DestinationDetail from "./components/DestinationDetail";
import SafariDetail from "./components/SafariDetail"; // ✅ Import SafariDetail

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/safari-detail/:slug" element={<SafariDetail />} />

          {/* ✅ New Route Added */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

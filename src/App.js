import { Navbar } from "./components";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Services from "./pages/ServicesPage/Services";
import Projects from "./pages/ProjectsPage/Projects";
import ContactPage from "./pages/ContactPage/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;

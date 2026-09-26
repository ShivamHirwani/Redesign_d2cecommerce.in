import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Team from "./pages/Team";
import Media from "./pages/Media";
import Franchise from "./pages/Franchise";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/policy/Terms";
import Privacy from "./pages/policy/Privacy";
import Shipping from "./pages/policy/Shipping";
import Refund from "./pages/policy/Refund";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/team" element={<Team />} />
            <Route path="/media" element={<Media />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy/terms" element={<Terms />} />
            <Route path="/policy/privacy" element={<Privacy />} />
            <Route path="/policy/shipping" element={<Shipping />} />
            <Route path="/policy/refund" element={<Refund />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

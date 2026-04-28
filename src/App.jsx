import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import CustomWork from './pages/CustomWork';
import FAQ from './pages/FAQ';
import Partnership from './pages/Partnership';
import Booking from './pages/Booking';
import Terms from './pages/Terms';
import TemplatePreview from './pages/TemplatePreview';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/custom-work" element={<PageTransition><CustomWork /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/partnership" element={<PageTransition><Partnership /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><Booking /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/template/:id" element={<PageTransition><TemplatePreview /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;

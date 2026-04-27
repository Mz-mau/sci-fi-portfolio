import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Booking from './pages/Booking';
import Terms from './pages/Terms';
import TemplatePreview from './pages/TemplatePreview';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: 'var(--nav-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/template/:id" element={<TemplatePreview />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

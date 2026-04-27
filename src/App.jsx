import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Booking from './pages/Booking';

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
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

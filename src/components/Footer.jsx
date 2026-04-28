import { Hexagon, Mail, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Hexagon className="logo-icon" size={20} />
            <span className="logo-text text-glow">Mariyazi</span>
          </div>
          <p className="footer-description">
            Building high-performance custom websites and business automation tools tailored to your unique needs.
          </p>
        </div>
        
        <div className="footer-links">
          <Link to="/faq">FAQ</Link>
          <Link to="/partnership">Partnership</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link"><Globe size={20} /></a>
          <a href="#" className="social-link"><MessageSquare size={20} /></a>
          <a href="#" className="social-link"><Mail size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mariyazi. All rights reserved.</p>
        <div style={{ marginTop: '1rem' }}>
          <Link to="/terms" style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

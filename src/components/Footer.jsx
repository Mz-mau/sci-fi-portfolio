import { Hexagon, Mail, Globe, MessageSquare } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Hexagon className="logo-icon" size={20} />
            <span className="logo-text text-glow">STUDIO</span>
          </div>
          <p className="footer-description">
            Crafting elegant, sci-fi inspired digital experiences for the modern web.
          </p>
        </div>
        
        <div className="footer-social">
          <a href="#" className="social-link"><Globe size={20} /></a>
          <a href="#" className="social-link"><MessageSquare size={20} /></a>
          <a href="#" className="social-link"><Mail size={20} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

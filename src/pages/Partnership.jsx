import { Users, Briefcase, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Partnership.css';

const Partnership = () => {
  return (
    <div className="partnership-page container section animate-fade-in">
      <div className="page-header">
        <h1 className="section-title">Grow <span className="gradient-text">Together</span></h1>
        <p className="page-subtitle">Exclusive partnership opportunities for social media influencers and forward-thinking businesses.</p>
      </div>

      <div className="partnership-grid">
        <div className="partnership-card glass-panel">
          <div className="card-icon text-glow"><Users size={40} /></div>
          <h2>For Influencers</h2>
          <p>Partner with us to offer your audience elite digital solutions. Get exclusive referral benefits and custom packages for your brand.</p>
          <ul className="benefit-list">
            <li><Zap size={16} /> Affiliate Commissions</li>
            <li><Zap size={16} /> Free Custom Website</li>
            <li><Zap size={16} /> Early Access to New Themes</li>
          </ul>
        </div>

        <div className="partnership-card glass-panel">
          <div className="card-icon text-glow"><Briefcase size={40} /></div>
          <h2>For Businesses</h2>
          <p>Wholesale digital services and strategic white-label partnerships for agencies and corporate enterprises.</p>
          <ul className="benefit-list">
            <li><Zap size={16} /> White-Label Solutions</li>
            <li><Zap size={16} /> Bulk Discount Pricing</li>
            <li><Zap size={16} /> Dedicated Support Lead</li>
          </ul>
        </div>
      </div>

      <div className="partnership-cta glass-panel animate-fade-in">
        <h2>Become a Partner</h2>
        <p>Join our elite network of collaborators and help us architect the modern web.</p>
        <Link to="/booking">
          <Button variant="primary" size="large">
            Apply Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Partnership;

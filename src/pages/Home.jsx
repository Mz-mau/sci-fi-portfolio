import { ArrowRight, Code, Monitor, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TiltCard from '../components/TiltCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content animate-fade-in">
          <div className="badge">AVAILABLE FOR FREELANCE</div>
          <h1 className="hero-title glitch-text" data-text="Designing Elite Digital Experiences for Every Business.">
            Designing Elite <br/> <span className="text-glow">Digital Experiences</span> for Every Business.
          </h1>
          <p className="hero-subtitle delay-1 animate-fade-in">
            We architect high-performance, custom web applications and business automations designed to help founders and ambitious startups scale with absolute efficiency.
          </p>
          <div className="hero-actions delay-2 animate-fade-in">
            <Button variant="primary" size="large" onClick={() => document.getElementById('templates').scrollIntoView({ behavior: 'smooth' })}>
              View Templates <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Button>
            <Link to="/booking">
              <Button variant="outline" size="large">Launch Your Site</Button>
            </Link>
          </div>
        </div>
        
        {/* Animated 3D/Sci-Fi element representation */}
        <div className="hero-visual delay-3 animate-fade-in">
          <div className="orbital-ring ring-1"></div>
          <div className="orbital-ring ring-2"></div>
          <div className="orbital-ring ring-3"></div>
          <div className="core-glow"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container section">
        <div className="features-grid">
          <TiltCard className="feature-card glass-panel">
            <Monitor className="feature-icon" size={32} />
            <h3>Immersive UI/UX</h3>
            <p>Designing modern, premium interfaces that focus on visual hierarchy, conversion, and world-class aesthetics.</p>
          </TiltCard>
          <TiltCard className="feature-card glass-panel">
            <Zap className="feature-icon" size={32} />
            <h3>Blazing Fast</h3>
            <p>Optimized code and assets ensuring instant load times and seamless transitions.</p>
          </TiltCard>
          <TiltCard className="feature-card glass-panel">
            <Code className="feature-icon" size={32} />
            <h3>Modern Tech</h3>
            <p>Built using the latest web technologies like React, Vite, and highly optimized CSS.</p>
          </TiltCard>
        </div>
      </section>

      {/* Starter Templates Section */}
      <section className="templates-section container section" id="templates">
        <h2 className="section-title glitch-text" data-text="Starter Templates">Starter <span className="gradient-text">Templates</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Professionally designed, highly customizable themes for your specific business niche.
        </p>

        <p className="section-subtitle" style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          Premium foundation architectures specifically engineered for solo business owners and new startups. Launch your brand with an elite digital presence.
        </p>
        <div className="templates-grid">
          {[
            { id: 'salon', title: 'Salons & Spa', img: '/template_salon.png', color: '#ffb6c1' },
            { id: 'food', title: 'Food Services', img: '/template_food.png', color: '#ffa500' },
            { id: 'health', title: 'Healthcare & Practitioners', img: '/template_health.png', color: '#00ced1' },
            { id: 'ecommerce', title: 'E-Commerce Retail', img: '/template_ecommerce.png', color: '#d2b48c' },
            { id: 'realestate', title: 'Real Estate & Properties', img: '/template_realestate.png', color: '#ffd700' },
            { id: 'mining', title: 'Mining & Industry', img: '/template_mining.png', color: '#a9a9a9' },
            { id: 'recreational', title: 'Recreational', img: '/template_recreational.png', color: '#00fa9a' },
            { id: 'fitness', title: 'Fitness & Gym', img: '/template_fitness.png', color: '#ff4500' },
            { id: 'babysitting', title: 'Babysitting', img: '/template_babysitting.png', color: '#87ceeb' },
          ].map((template) => (
            <TiltCard key={template.id} className="template-card glass-panel animate-fade-in" style={{ '--theme-color': template.color }}>
              <div className="template-image-wrapper">
                <img src={template.img} alt={template.title} className="template-image" />
                <div className="template-price-tag">Available at only $119 starting</div>
              </div>
              <div className="template-info">
                <h3 className="template-title" style={{ color: template.color }}>{template.title} Theme</h3>
                <Link to={`/template/${template.id}`} style={{ width: '100%' }}>
                  <Button variant="outline" size="medium" style={{ width: '100%', marginTop: '1rem', borderColor: template.color, color: template.color }}>
                    Preview Theme <ExternalLink size={16} style={{ marginLeft: '8px' }} />
                  </Button>
                </Link>
              </div>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section container section">
        <div className="newsletter-container glass-panel animate-fade-in">
          <div className="newsletter-content">
            <h2 className="glitch-text" data-text="Stay Ahead of the Void">Stay Ahead of <span className="gradient-text">the Void</span></h2>
            <p>Get the latest on high-performance web tech, automation strategies, and new template drops.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" className="form-input" required />
            <Button variant="primary" size="medium">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section container section">
        <p className="trust-title">ENGINEERING FOR VISIONARIES WORLDWIDE</p>
        <div className="trust-logos">
          <div className="trust-logo">ALPHA</div>
          <div className="trust-logo">NEON</div>
          <div className="trust-logo">VOID</div>
          <div className="trust-logo">CORE</div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { ShoppingCart, Star, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './Shop.css';

const Shop = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Full Design',
      description: 'A completely bespoke, high-end design architecture crafted specifically for your startup, without the automated deployment setup.',
      price: '$399',
      features: ['Bespoke UI/UX Design', 'Up to 5 Pages', 'Flawless Mobile Responsiveness'],
      popular: false
    },
    {
      id: 2,
      title: 'The Complete Package',
      description: 'The ultimate turnkey solution. A fully automated, premium website deployed and ready to capture clients from day one.',
      price: '$499',
      features: ['Full Setup & Automation', 'Free Domain & Hosting', 'SEO Optimization', '1-Month Support'],
      popular: true
    },
    {
      id: 3,
      title: 'Quantum Web Experience',
      description: 'The ultimate immersive web application with advanced 3D animations and state-of-the-art tech.',
      price: '$3,999',
      features: ['Advanced Animations', 'WebGL/3D Elements', 'Custom Backend', 'Premium Branding'],
      popular: false
    }
  ];

  return (
    <div className="shop-page container section animate-fade-in">
      <div className="shop-header">
        <h1 className="section-title">Agency <span className="gradient-text">Services</span></h1>
        <p className="shop-subtitle">Elite digital engineering packages designed to scale your solo enterprise to the next dimension.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className={`service-card glass-panel animate-fade-in delay-${index + 1} ${service.popular ? 'popular' : ''}`}
          >
            {service.popular && <div className="popular-badge"><Star size={14} /> Most Popular</div>}
            
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <div className="service-price text-glow">{service.price}</div>
            
            <ul className="service-features">
              {service.features.map((feature, i) => (
                <li key={i}><Zap size={16} className="feature-bullet" /> {feature}</li>
              ))}
            </ul>
            
            <div className="service-action">
              <Link to="/booking" style={{ width: '100%', display: 'block' }}>
                <Button variant={service.popular ? 'primary' : 'secondary'} size="large" style={{ width: '100%' }}>
                  <ShoppingCart size={18} style={{ marginRight: '8px' }} />
                  Purchase
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

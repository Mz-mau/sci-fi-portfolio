import { Palette, Layers, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import './CustomWork.css';

const CustomWork = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Logo & Identity',
      description: 'Crafting unique, futuristic visual identities that capture the essence of your brand in a single icon.',
      features: ['Primary & Secondary Logos', 'Color Palette', 'Typography System', 'Brand Guidelines']
    },
    {
      icon: <Layers size={32} />,
      title: 'UI/UX Design',
      description: 'Designing immersive digital interfaces with a focus on modern aesthetics and flawless user journeys.',
      features: ['Wireframing', 'High-Fidelity Mockups', 'Interactive Prototypes', 'Design Systems']
    },
    {
      icon: <Cpu size={32} />,
      title: 'Business Operation Automation',
      description: 'Streamlining your enterprise with custom-built internal tools, automated workflows, and CRM integrations.',
      features: ['Internal Dashboards', 'Workflow Automation', 'API Integrations', 'Performance Optimization']
    }
  ];

  return (
    <div className="custom-work-page container section animate-fade-in">
      <div className="page-header">
        <h1 className="section-title">Custom <span className="gradient-text">Solutions</span></h1>
        <p className="page-subtitle">Beyond templates. We build elite, one-of-a-kind digital artifacts for visionaries.</p>
      </div>

      <div className="custom-services-grid">
        {services.map((service, index) => (
          <div key={index} className="custom-service-card glass-panel animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="service-icon-wrapper text-glow">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-feature-list">
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="cta-section glass-panel animate-fade-in">
        <h2 className="cta-title">Have a specific project in mind?</h2>
        <p className="cta-text">From minimalist logos to complex enterprise-level applications, let's architect your vision.</p>
        <Link to="/booking">
          <Button variant="primary" size="large">
            Get a Custom Quote <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CustomWork;

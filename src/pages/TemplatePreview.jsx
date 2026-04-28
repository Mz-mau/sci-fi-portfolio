import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Layout, LayoutGrid, LayoutTemplate } from 'lucide-react';
import Button from '../components/Button';
import './TemplatePreview.css';

const templates = {
  salon: { title: 'Salons & Spa', img1: '/template_salon.png', img2: '/template_salon_2.png', img3: '/template_salon_3.png', color: '#ffb6c1' },
  food: { title: 'Food Services', img1: '/template_food.png', img2: '/template_food_2.png', img3: '/template_food_3.png', color: '#ffa500' },
  health: { title: 'Healthcare & Practitioners', img1: '/template_health.png', img2: '/template_health_2.png', img3: '/template_health_3.png', color: '#00ced1' },
  ecommerce: { title: 'E-Commerce Retail', img1: '/template_ecommerce.png', img2: '/template_ecommerce_2.png', img3: '/template_ecommerce_3.png', color: '#d2b48c' },
  realestate: { title: 'Real Estate & Properties', img1: '/template_realestate.png', img2: '/template_realestate_2.png', img3: '/template_realestate_3.png', color: '#ffd700' },
  mining: { title: 'Mining & Industry', img1: '/template_mining.png', img2: '/template_mining_2.png', img3: '/template_mining_3.png', color: '#a9a9a9' },
  recreational: { title: 'Recreational', img1: '/template_recreational.png', img2: '/template_recreational_2.png', img3: '/template_recreational_3.png', color: '#00fa9a' },
  fitness: { title: 'Fitness & Gym', img1: '/template_fitness.png', img2: '/template_fitness_2.png', img3: '/template_fitness_3.png', color: '#ff4500' },
  babysitting: { title: 'Babysitting', img1: '/template_babysitting.png', img2: '/template_babysitting_2.png', img3: '/template_babysitting_3.png', color: '#87ceeb' },
};

const TemplatePreview = () => {
  const { id } = useParams();
  const template = templates[id];
  const [variation, setVariation] = useState('1');

  if (!template) {
    return <div className="container section">Template Not Found</div>;
  }

  const currentImg = variation === '1' ? template.img1 : variation === '2' ? template.img2 : template.img3;

  return (
    <div className="template-preview-page animate-fade-in" style={{ '--theme-color': template.color }}>
      {/* Sticky Action Bar */}
      <div className="preview-action-bar glass-panel">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/" className="back-link">
              <ArrowLeft size={20} /> Back
            </Link>
            <h2 className="preview-title" style={{ color: template.color }}>{template.title} Theme</h2>
          </div>
          
          <div className="device-toggles hide-mobile">
            <span className="variation-label">Design Variant:</span>
            <Layout size={20} className={variation === '1' ? 'active' : ''} onClick={() => setVariation('1')} />
            <LayoutGrid size={20} className={variation === '2' ? 'active' : ''} onClick={() => setVariation('2')} />
            <LayoutTemplate size={20} className={variation === '3' ? 'active' : ''} onClick={() => setVariation('3')} />
          </div>
          
          <div className="action-buttons">
            <span className="preview-price hide-mobile">Only $119 starting</span>
            <Link to="/booking">
              <Button variant="primary" size="medium" style={{ background: template.color, color: '#000', borderColor: template.color }}>
                Book This Theme
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Simulated Browser Window */}
      <div className="preview-container container section">
        <div className="browser-window">
          <div className="browser-chrome">
            <div className="dots">
              <span></span><span></span><span></span>
            </div>
            <div className="url-bar">www.your-{id}-business.com</div>
          </div>
          
          <div className="browser-content">
            <img 
              src={currentImg} 
              alt={`${template.title} Variation ${variation}`} 
              className="full-preview-image" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;

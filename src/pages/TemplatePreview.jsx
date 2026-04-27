import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Monitor, Smartphone, Tablet } from 'lucide-react';
import Button from '../components/Button';
import './TemplatePreview.css';

const templates = {
  salon: { title: 'Salons & Spa', img: '/template_salon.png', color: '#ffb6c1' },
  food: { title: 'Food Services', img: '/template_food.png', color: '#ffa500' },
  health: { title: 'Healthcare & Practitioners', img: '/template_health.png', color: '#00ced1' },
  ecommerce: { title: 'E-Commerce Retail', img: '/template_ecommerce.png', color: '#d2b48c' },
  realestate: { title: 'Real Estate & Properties', img: '/template_realestate.png', color: '#ffd700' },
  mining: { title: 'Mining & Industry', img: '/template_mining.png', color: '#a9a9a9' },
  recreational: { title: 'Recreational', img: '/template_recreational.png', color: '#00fa9a' },
  fitness: { title: 'Fitness & Gym', img: '/template_fitness.png', color: '#ff4500' },
  babysitting: { title: 'Babysitting', img: '/template_babysitting.png', color: '#87ceeb' },
};

const TemplatePreview = () => {
  const { id } = useParams();
  const template = templates[id];
  const [deviceMode, setDeviceMode] = useState('desktop');

  if (!template) {
    return <div className="container section">Template Not Found</div>;
  }

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
            <Monitor size={20} className={deviceMode === 'desktop' ? 'active' : ''} onClick={() => setDeviceMode('desktop')} />
            <Tablet size={20} className={deviceMode === 'tablet' ? 'active' : ''} onClick={() => setDeviceMode('tablet')} />
            <Smartphone size={20} className={deviceMode === 'mobile' ? 'active' : ''} onClick={() => setDeviceMode('mobile')} />
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
      <div className={`preview-container container section mode-${deviceMode}`}>
        <div className="device-frame">
          {deviceMode === 'desktop' && (
            <div className="browser-chrome">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="url-bar">www.your-{id}-business.com</div>
            </div>
          )}
          
          {deviceMode !== 'desktop' && (
            <div className="mobile-notch"></div>
          )}
          
          <div className="browser-content">
            <img src={template.img} alt={`${template.title} UI Preview`} className={`full-preview-image mode-${deviceMode}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;

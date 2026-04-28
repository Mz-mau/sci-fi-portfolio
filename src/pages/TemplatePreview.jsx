import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Monitor, Smartphone, Tablet } from 'lucide-react';
import Button from '../components/Button';
import './TemplatePreview.css';

const templates = {
  salon: { title: 'Salons & Spa', imgDesktop: '/template_salon.png', imgTablet: '/template_salon_tablet.png', imgMobile: '/template_salon_mobile.png', color: '#ffb6c1' },
  food: { title: 'Food Services', imgDesktop: '/template_food.png', imgTablet: '/template_food_tablet.png', imgMobile: '/template_food_mobile.png', color: '#ffa500' },
  health: { title: 'Healthcare & Practitioners', imgDesktop: '/template_health.png', imgTablet: '/template_health_tablet.png', imgMobile: '/template_health_mobile.png', color: '#00ced1' },
  ecommerce: { title: 'E-Commerce Retail', imgDesktop: '/template_ecommerce.png', imgTablet: '/template_ecommerce_tablet.png', imgMobile: '/template_ecommerce_mobile.png', color: '#d2b48c' },
  realestate: { title: 'Real Estate & Properties', imgDesktop: '/template_realestate.png', imgTablet: '/template_realestate_tablet.png', imgMobile: '/template_realestate_mobile.png', color: '#ffd700' },
  mining: { title: 'Mining & Industry', imgDesktop: '/template_mining.png', imgTablet: '/template_mining_tablet.png', imgMobile: '/template_mining_mobile.png', color: '#a9a9a9' },
  recreational: { title: 'Recreational', imgDesktop: '/template_recreational.png', imgTablet: '/template_recreational_tablet.png', imgMobile: '/template_recreational_mobile.png', color: '#00fa9a' },
  fitness: { title: 'Fitness & Gym', imgDesktop: '/template_fitness.png', imgTablet: '/template_fitness_tablet.png', imgMobile: '/template_fitness_mobile.png', color: '#ff4500' },
  babysitting: { title: 'Babysitting', imgDesktop: '/template_babysitting.png', imgTablet: '/template_babysitting_tablet.png', imgMobile: '/template_babysitting_mobile.png', color: '#87ceeb' },
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
            {deviceMode === 'desktop' && <img src={template.imgDesktop} alt={`${template.title} Desktop Preview`} className={`full-preview-image mode-${deviceMode}`} />}
            {deviceMode === 'tablet' && <img src={template.imgTablet} alt={`${template.title} Tablet Preview`} className={`full-preview-image mode-${deviceMode}`} />}
            {deviceMode === 'mobile' && <img src={template.imgMobile} alt={`${template.title} Mobile Preview`} className={`full-preview-image mode-${deviceMode}`} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreview;

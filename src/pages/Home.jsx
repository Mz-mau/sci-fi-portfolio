import { ArrowRight, Code, Monitor, Zap } from 'lucide-react';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
  const projects = [
    { id: 1, title: 'Nebula Dashboard', category: 'Web App', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'Quantum E-Commerce', category: 'E-Commerce', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'Stellar FinTech UI', category: 'UX/UI Design', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'Void Landing Page', category: 'Marketing', image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-content animate-fade-in">
          <div className="badge">AVAILABLE FOR FREELANCE</div>
          <h1 className="hero-title">
            Designing the <span className="text-glow">Future</span> of <br/> Digital Experiences.
          </h1>
          <p className="hero-subtitle delay-1 animate-fade-in">
            I craft blazing-fast, sci-fi elegant web applications that captivate users and elevate brands to the next dimension.
          </p>
          <div className="hero-actions delay-2 animate-fade-in">
            <Button variant="primary" size="large">
              View Portfolio <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Button>
            <Button variant="outline" size="large">Contact Me</Button>
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
          <div className="feature-card glass-panel">
            <Monitor className="feature-icon" size={32} />
            <h3>Immersive UI/UX</h3>
            <p>Designing interfaces that look like they belong in 2050, focusing on visual hierarchy and aesthetics.</p>
          </div>
          <div className="feature-card glass-panel">
            <Zap className="feature-icon" size={32} />
            <h3>Blazing Fast</h3>
            <p>Optimized code and assets ensuring instant load times and seamless transitions.</p>
          </div>
          <div className="feature-card glass-panel">
            <Code className="feature-icon" size={32} />
            <h3>Modern Tech</h3>
            <p>Built using the latest web technologies like React, Vite, and highly optimized CSS.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section container section" id="portfolio">
        <h2 className="section-title">Selected <span className="gradient-text">Works</span></h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card glass-panel animate-fade-in delay-${(index % 4) + 1}`}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <Button variant="primary" size="medium">View Details</Button>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

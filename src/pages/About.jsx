import { Terminal, Hexagon, Code2 } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container section animate-fade-in">
      <div className="about-header">
        <h1 className="section-title">Beyond the <span className="gradient-text">Code</span></h1>
      </div>
      
      <div className="about-content">
        <div className="about-image-container glass-panel">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
            alt="Workspace" 
            className="about-image"
          />
          <div className="tech-overlay">
            <Hexagon className="tech-icon floating" size={48} />
          </div>
        </div>
        
        <div className="about-text">
          <h2 className="text-glow">Architecting the Void</h2>
          <p>
            We are a collective of digital artisans specializing in crafting immersive, highly functional web platforms for solo business owners and ambitious startups. Our work bridges the gap between premium aesthetics and raw performance, drawing inspiration from sci-fi minimalism to build interfaces that give new brands an elite competitive edge.
          </p>
          <p>
            Every pixel is calculated. Every interaction is intentional. We transform complex operational needs into elegant, automated digital products that allow founders to focus entirely on scaling their enterprise.
          </p>
          
          <div className="skills-grid">
            <div className="skill-item glass-panel">
              <Code2 className="skill-icon" size={24} />
              <h4>Frontend Mastery</h4>
              <p>React, Next.js, WebGL</p>
            </div>
            <div className="skill-item glass-panel">
              <Terminal className="skill-icon" size={24} />
              <h4>System Architecture</h4>
              <p>Scalable, robust systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

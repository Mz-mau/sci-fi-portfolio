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
            I am a digital artisan specializing in creating immersive, highly functional web experiences. My work bridges the gap between aesthetics and performance, drawing inspiration from sci-fi minimalism to build interfaces that feel lightyears ahead.
          </p>
          <p>
            Every pixel is calculated. Every animation is intentional. I transform complex problems into elegant, intuitive digital products.
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

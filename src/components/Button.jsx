import React, { useRef, useState } from 'react';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 }); // 30% pull
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button 
      ref={btnRef}
      className={`sci-btn sci-btn-${variant} sci-btn-${size} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
      }}
      {...props}
    >
      <span className="sci-btn-content">{children}</span>
      {variant === 'primary' && <span className="sci-btn-glow"></span>}
    </button>
  );
};

export default Button;

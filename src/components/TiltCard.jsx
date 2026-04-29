import React, { useState, useRef } from 'react';

const TiltCard = ({ children, className = '' }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xRotation = ((mouseY - height / 2) / height) * 20; // 20 degrees max
    const yRotation = ((mouseX - width / 2) / width) * -20;

    setTilt({ x: xRotation, y: yRotation });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.5s ease-out' : 'none',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
};

export default TiltCard;

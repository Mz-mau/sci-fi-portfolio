import './Button.css';

const Button = ({ children, variant = 'primary', size = 'medium', className = '', ...props }) => {
  return (
    <button 
      className={`sci-btn sci-btn-${variant} sci-btn-${size} ${className}`}
      {...props}
    >
      <span className="sci-btn-content">{children}</span>
      {variant === 'primary' && <span className="sci-btn-glow"></span>}
    </button>
  );
};

export default Button;

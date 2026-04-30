import { Mail, Phone, MapPin, Send, MessageSquare, Palette, Cpu } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';
import './Booking.css'; // Reuse form styles

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Logo Design', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    const payload = {
      access_key: "924db1d5-f1ed-4835-9db7-a7c5b4a0467c",
      subject: `New Inquiry: ${formData.subject}`,
      from_name: "Mariyazi Contact Form",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      category: formData.subject
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: 'Logo Design', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: result.message || 'Submission failed.' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  return (
    <div className="booking-page container section animate-fade-in">
      <div className="booking-layout">
        <div className="booking-info">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Whether you need a futuristic logo identity or a complex business automation system, our engineers are ready to architect your vision.
          </p>

          <div className="booking-features">
            <div className="booking-feature">
              <div className="feature-icon-wrapper"><Palette size={20} /></div>
              <div>
                <h4>Identity Design</h4>
                <p>Custom logos and brand guidelines.</p>
              </div>
            </div>
            <div className="booking-feature">
              <div className="feature-icon-wrapper"><Cpu size={20} /></div>
              <div>
                <h4>System Architecture</h4>
                <p>Full-scale business automation and apps.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <Mail className="text-glow" size={20} />
              <span style={{ color: 'var(--color-text-secondary)' }}>ops@mariyazi.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <MessageSquare className="text-glow" size={20} />
              <span style={{ color: 'var(--color-text-secondary)' }}>Live Chat Available for Clients</span>
            </div>
          </div>
        </div>

        <div className="booking-form-container glass-panel">
          {status.success ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div className="success-icon" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚀</div>
              <h2 className="text-glow" style={{ marginBottom: '1rem' }}>Transmission Received</h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>Our engineers will review your request and get back to you within 24 hours.</p>
              <Button variant="outline" size="medium" style={{ marginTop: '2rem' }} onClick={() => setStatus({ ...status, success: false })}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@company.com" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Inquiry Type</label>
                <select id="subject" value={formData.subject} onChange={handleChange} style={{ 
                  width: '100%', 
                  padding: '0.8rem', 
                  background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  color: '#fff',
                  outline: 'none'
                }}>
                  <option value="Logo Design">Logo Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="Tell us about your project..." required value={formData.message} onChange={handleChange}></textarea>
              </div>
              
              <Button variant="primary" size="large" style={{ width: '100%', marginTop: '1rem' }} disabled={status.submitting}>
                {status.submitting ? 'Transmitting...' : 'Send Message'}
              </Button>
              {status.error && <p style={{ color: '#ff4444', marginTop: '1rem', textAlign: 'center' }}>{status.error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

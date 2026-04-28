import { Calendar as CalendarIcon, Clock, Video, CheckCircle } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Button from '../components/Button';
import './Booking.css';

const Booking = () => {
  const [date, setDate] = useState(new Date());
  const [formData, setFormData] = useState({ name: '', email: '', project: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: '' });

    // Web3Forms Integration
    // To make this work, replace YOUR_ACCESS_KEY_HERE with your key from web3forms.com
    const payload = {
      access_key: "924db1d5-f1ed-4835-9db7-a7c5b4a0467c", 
      subject: "New Booking Request from Mariyazi",
      from_name: "Mariyazi System",
      name: formData.name,
      email: formData.email,
      project_details: formData.project,
      requested_date: date.toDateString()
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      
      if (result.success) {
        setStatus({ submitting: false, success: true, error: '' });
        setFormData({ name: '', email: '', project: '' }); // Reset form
      } else {
        setStatus({ submitting: false, success: false, error: result.message || 'Transmission failed.' });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: 'Network error. Please try again later.' });
    }
  };

  return (
    <div className="booking-page container section animate-fade-in">
      <div className="booking-layout">
        
        <div className="booking-info">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Book Your <span className="gradient-text">Discovery Call</span>
          </h1>
          <p className="booking-desc">
            Ready to bring your vision to life? Book a 30-minute discovery call where our team will discuss your startup goals, aesthetic preferences, and operational needs.
          </p>
          
          <div className="booking-details">
            <div className="detail-item">
              <Clock className="detail-icon" size={20} />
              <span>30 Minutes</span>
            </div>
            <div className="detail-item">
              <Video className="detail-icon" size={20} />
              <span>Google Meet / Zoom</span>
            </div>
            <div className="detail-item">
              <CalendarIcon className="detail-icon" size={20} />
              <span>Usually available Mon-Fri</span>
            </div>
          </div>
        </div>

        <div className="booking-form-container glass-panel">
          <h3 className="form-title">Schedule a Consultation</h3>
          
          {status.success ? (
            <div className="success-message" style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-accent-cyan)' }}>
              <CheckCircle size={48} style={{ margin: '0 auto 1rem auto' }} />
              <h4>Request Received</h4>
              <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>Your consultation request has been received. Our team will contact you shortly.</p>
              <Button variant="outline" size="medium" style={{ marginTop: '2rem' }} onClick={() => setStatus({ ...status, success: false })}>
                Send Another Request
              </Button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required placeholder="John Doe" className="form-input" value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required placeholder="john@example.com" className="form-input" value={formData.email} onChange={handleChange} />
              </div>
              
              <div className="form-group">
                <label htmlFor="project">Project Details (Brief Description)</label>
                <textarea id="project" required rows="4" placeholder="Tell us about your company and what you need..." className="form-input" value={formData.project} onChange={handleChange}></textarea>
              </div>
              
              <div className="form-group">
                <label>Select a Date</label>
                <div className="calendar-wrapper">
                  <Calendar onChange={setDate} value={date} className="sci-fi-calendar" />
                </div>
                <p style={{ color: 'var(--color-accent-cyan)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  Selected: {date.toDateString()}
                </p>
              </div>

              {status.error && <p style={{ color: '#ff5f56', fontSize: '0.9rem' }}>{status.error}</p>}
              
              <Button variant="primary" size="large" style={{ width: '100%', marginTop: '1rem', opacity: status.submitting ? 0.7 : 1 }} disabled={status.submitting}>
                {status.submitting ? 'Submitting...' : 'Request Consultation'}
              </Button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Booking;

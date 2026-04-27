import { Calendar as CalendarIcon, Clock, Video } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Button from '../components/Button';
import './Booking.css';

const Booking = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="booking-page container section animate-fade-in">
      <div className="booking-layout">
        
        <div className="booking-info">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Initiate <span className="gradient-text">Transmission</span>
          </h1>
          <p className="booking-desc">
            Ready to bring your vision to life? Book a 30-minute discovery call where we'll discuss your project goals, aesthetic preferences, and pricing options.
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
          <h3 className="form-title">Schedule Connection</h3>
          <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">System Designation (Name)</label>
              <input type="text" id="name" placeholder="John Doe" className="form-input" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Comms Link (Email)</label>
              <input type="email" id="email" placeholder="john@example.com" className="form-input" />
            </div>
            
            <div className="form-group">
              <label htmlFor="project">Project Coordinates (Brief Description)</label>
              <textarea id="project" rows="4" placeholder="Tell me about your idea..." className="form-input"></textarea>
            </div>
            
            <div className="form-group">
              <label>Select Synchronization Date</label>
              <div className="calendar-wrapper">
                <Calendar onChange={setDate} value={date} className="sci-fi-calendar" />
              </div>
              <p style={{ color: 'var(--color-accent-cyan)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Selected: {date.toDateString()}
              </p>
            </div>
            
            <Button variant="primary" size="large" style={{ width: '100%', marginTop: '1rem' }}>
              Request Synchronization
            </Button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Booking;

import { Calendar as CalendarIcon, Clock, Video, CheckCircle } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Button from '../components/Button';
import './Booking.css';

const Booking = () => {
  // Official Scheduling Link - Hidden details for a cleaner look
  const SCHEDULING_URL = "https://calendly.com/mariyazworld06/30min?hide_landing_page_details=1&hide_gdpr_banner=1"; 

  return (
    <div className="booking-page container section animate-fade-in">
      <div className="booking-layout">
        
        <div className="booking-info">
          <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Book Your <span className="gradient-text">Discovery Call</span>
          </h1>
          <p className="booking-desc">
            Ready to bring your vision to life? Secure a 30-minute discovery call on our official schedule. You will receive an instant confirmation email with all the details once your slot is reserved.
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
              <span>Instant Confirmation</span>
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(0, 217, 255, 0.05)', borderRadius: '16px', border: '1px solid rgba(0, 217, 255, 0.1)' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
              <strong>Note:</strong> We've integrated an elite scheduling system. Once you book, you'll receive an instant confirmation email with your meeting link.
            </p>
          </div>
        </div>

        <div className="booking-form-container glass-panel" style={{ padding: '0', overflow: 'hidden', minHeight: '600px' }}>
          {/* Professional Scheduling Widget */}
          <iframe 
            src={SCHEDULING_URL}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule a Consultation"
            style={{ minHeight: '650px', borderRadius: '24px' }}
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Booking;

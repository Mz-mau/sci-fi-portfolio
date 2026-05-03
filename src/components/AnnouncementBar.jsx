import { Zap } from 'lucide-react';
import './AnnouncementBar.css';

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <Zap size={14} className="announcement-icon" />
        <span>GRAND OPENING SPECIAL: <strong>60% OFF</strong> ALL SERVICES FOR A LIMITED TIME</span>
        <Zap size={14} className="announcement-icon" />
      </div>
    </div>
  );
};

export default AnnouncementBar;

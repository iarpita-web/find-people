import React from 'react';
import './UserCard.css';

const UserCard = ({ user, onFetchDetails }) => {
  const handleFetchDetails = () => {
    onFetchDetails(user);
  };

  return (
    <div className="user-card">
      <div className="user-avatar">
        <img 
          src="/logo192.png" 
          alt={`${user.first_name} ${user.last_name}`}
          className="avatar-image"
        />
      </div>
      
      <div className="card-content">
        <div className="user-info">
          <h3 className="user-name">
            {user.first_name} {user.last_name}
          </h3>
          
          <div className="user-location">
            <svg className="location-icon" viewBox="0 0 24 24" width="14" height="14">
              <path fill="#666" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="location-text">{user.city}</span>
          </div>
          
          <div className="user-contact">
            <svg className="contact-icon" viewBox="0 0 24 24" width="14" height="14">
              <path fill="#666" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="contact-text">{user.contact_number}</span>
          </div>
        </div>
        
        <div className="fetch-details-btn-container">
          <button 
            className="fetch-details-btn"
            onClick={handleFetchDetails}
          >
            Fetch Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
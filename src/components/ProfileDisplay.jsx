import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

const ProfileDisplay = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <div
      style={{
        maxWidth: '450px',
        margin: '30px auto',
        padding: '25px',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          color: '#007BFF',
          fontSize: '24px',
        }}
      >
        Profile Information
      </h2>

      {['name', 'email', 'age'].map((field) => (
        <p
          key={field}
          style={{
            marginBottom: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          {field.charAt(0).toUpperCase() + field.slice(1)}:{' '}
          <span style={{ fontWeight: 'normal', color: '#555' }}>
            {profile[field] || 'Not provided'}
          </span>
        </p>
      ))}
    </div>
  );
};

export default ProfileDisplay;

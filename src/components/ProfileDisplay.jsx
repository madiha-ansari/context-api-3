// src/components/ProfileDisplay.js
import React, { useContext } from 'react';
import { ProfileContext } from '../context/ProfileContext';

const ProfileDisplay = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <div>
      <h2>Profile Information:</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default ProfileDisplay;

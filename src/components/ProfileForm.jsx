// src/components/ProfileForm.js
import React, { useContext, useState } from 'react';
import { ProfileContext } from '../context/ProfileContext';

const ProfileForm = () => {
  const { setProfile } = useContext(ProfileContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        placeholder="Enter your age"
        value={formData.age}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;

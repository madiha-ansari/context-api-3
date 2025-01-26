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
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '450px',
        margin: '30px auto',
        padding: '25px',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          color: '#007BFF',
          fontSize: '24px',
        }}
      >
        Update Your Profile
      </h2>

      {['name', 'email', 'age'].map((field) => (
        <div
          key={field}
          style={{ marginBottom: '20px', position: 'relative' }}
        >
          <label
            htmlFor={field}
            style={{
              display: 'block',
              marginBottom: '6px',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}:
          </label>
          <input
            type={field === 'age' ? 'number' : field === 'email' ? 'email' : 'text'}
            id={field}
            name={field}
            placeholder={`Enter your ${field}`}
            value={formData[field]}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>
      ))}

      <button
        type="submit"
        style={{
          display: 'block',
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#007BFF')}
      >
        Submit
      </button>
    </form>
  );
};

export default ProfileForm;

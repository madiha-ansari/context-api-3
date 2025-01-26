// src/App.js
import React from 'react';
import { ProfileProvider } from './context/ProfileContext';
import ProfileForm from './components/ProfileForm';
import ProfileDisplay from './components/ProfileDisplay';

const App = () => {
  return (
    <ProfileProvider>
      <div className="App">
        <h1>Portfolio Page</h1>
        <ProfileForm />
        <ProfileDisplay />
      </div>
    </ProfileProvider>
  );
};

export default App;

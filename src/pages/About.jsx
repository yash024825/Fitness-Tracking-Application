import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>About This App</h2>
      <p>
        FitTrack is a simple MERN application that helps you track your daily 
        steps and calories. Your data is stored securely in MongoDB so you 
        can view your progress anytime you log in.
      </p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default About;

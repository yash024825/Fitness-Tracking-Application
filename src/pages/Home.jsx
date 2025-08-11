import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome to FitTrack</h1>
      <p>
        Track your steps, monitor your calories, and reach your fitness goals 
        with our easy-to-use tracker. Your health journey starts here.
      </p>
      <div>
        <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
        <button onClick={() => navigate('/about')}>About Us</button>
      </div>
    </div>
  );
};

export default Home;

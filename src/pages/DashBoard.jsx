import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const steps = 500;
  const calories = 50000;
  const goal = 10000;
  const progress = (steps / goal) * 100;

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="card">
        <p><strong>Steps Today:</strong> {steps}</p>
        <p><strong>Calories Burned:</strong> {calories}</p>
        <p><strong>Goal:</strong> {goal} steps</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress.toFixed(1)}% of your daily goal</p>
      </div>
      <div>
        <button onClick={() => navigate('/tracker')}>Go to Tracker</button>
        <button onClick={() => navigate('/about')}>About Us</button>
      </div>
    </div>
  );
};

export default Dashboard;

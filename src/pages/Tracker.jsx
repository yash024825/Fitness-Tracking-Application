import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Tracker = () => {
  const navigate = useNavigate();
  const steps = 2;
  const calories = 0.08;

  return (
    <div className="container">
      <h2>Live Tracker</h2>
      <div className="card">
        <p><strong>{steps}</strong> steps</p>
        <p><strong>Calories burned:</strong> {calories} kcal</p>
        <input type="number" placeholder="Enter steps" style={{ padding: '8px', margin: '10px' }} />
        <button>Save</button>
      </div>
      <button onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
    </div>
  );
};

export default Tracker;

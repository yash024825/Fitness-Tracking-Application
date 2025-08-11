import React from "react";

const StepCard = ({ steps, calories, goal }) => {
  const progress = Math.min((steps / goal) * 100, 100).toFixed(1);

  return (
    <div style={styles.card}>
      <h3>Steps Today: {steps}</h3>
      <p>Calories Burned: {calories}</p>
      <p>Goal: {goal} steps</p>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progress, width: `${progress}%` }}></div>
      </div>
      <p>{progress}% of your daily goal</p>
    </div>
  );
};

const styles = {
  card: {
    background: "#f4f4f4",
    padding: "1rem",
    borderRadius: "10px",
    margin: "1rem auto",
    maxWidth: "400px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  progressBar: {
    background: "#ddd",
    height: "10px",
    borderRadius: "5px",
    overflow: "hidden",
    margin: "0.5rem 0",
  },
  progress: {
    background: "#4caf50",
    height: "100%",
  },
};

export default StepCard;

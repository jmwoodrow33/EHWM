import React from 'react';
import { useGame } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';

export function Dashboard() {
  const { currentGame } = useGame();
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      {currentGame ? (
        <p>Welcome to your wrestling world! Game ID: {currentGame.id}</p>
      ) : (
        <p>No game loaded.</p>
      )}
    </div>
  );
}
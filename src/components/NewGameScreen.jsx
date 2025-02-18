import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export function NewGameScreen() {
  const { startNewGame } = useGame();
  const navigate = useNavigate();

  const handleStart = () => {
    startNewGame({ settings: 'default' });
    navigate('/game');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
      <h2 className="text-3xl font-bold mb-4">New Game Setup</h2>
      <button onClick={handleStart} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Start Game</button>
    </div>
  );
}


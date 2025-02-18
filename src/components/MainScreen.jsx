import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export function MainScreen() {
  const { currentGame } = useGame();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div className="w-1/5 bg-gray-800 text-white flex flex-col p-4">
        <button onClick={() => navigate('/dashboard')} className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600">Dashboard</button>
        <button onClick={() => navigate('/manage')} className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600">Manage</button>
        <button onClick={() => navigate('/booking')} className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600">Booking</button>
        <button onClick={() => navigate('/main-menu')} className="p-2 bg-red-600 rounded hover:bg-red-500">Main Menu</button>
      </div>
      <div className="w-4/5 p-6 bg-gray-100">
        <h2 className="text-3xl font-bold">Game Dashboard</h2>
        {currentGame ? <p>Game ID: {currentGame.id}</p> : <p>No game loaded.</p>}
      </div>
    </div>
  );
}
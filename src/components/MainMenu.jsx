import React from 'react';
import { useGame } from '../context/GameContext';
import { useNavigate } from 'react-router-dom';

export function MainMenu() {
    const navigate = useNavigate();
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
        <h2 className="text-3xl font-bold mb-6">Main Menu</h2>
        <button onClick={() => navigate('/')} className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 text-xl">Return to Main Screen</button>
      </div>
    );
  }
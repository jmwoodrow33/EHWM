import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';
export function LoadGameScreen() {
    const { games, loadGame } = useGame();
    const navigate = useNavigate();
  
    const handleLoad = (id) => {
      loadGame(id);
      navigate('/game');
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Load Game</h2>
        {games.length > 0 ? (
          games.map(g => (
            <button key={g.id} onClick={() => handleLoad(g.id)} className="mb-2 bg-green-500 px-4 py-2 rounded hover:bg-green-600">Load Game {g.id}</button>
          ))
        ) : (
          <p>No saved games found.</p>
        )}
      </div>
    );
  }
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export function Booking() {
    const navigate = useNavigate();
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Booking</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li onClick={() => navigate('/booking/segments')}>Segments</li>
          <li onClick={() => navigate('/booking/matches')}>Matches (Singles, Tag)</li>
          <li onClick={() => navigate('/booking/feuds')}>Feuds</li>
        </ul>
      </div>
    );
  }
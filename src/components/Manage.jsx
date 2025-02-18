import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../context/GameContext';

export function Manage() {
    const navigate = useNavigate();
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">Manage</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li onClick={() => navigate('/manage/company')}>Company</li>
          <li onClick={() => navigate('/manage/roster')}>Roster (Brands, Teams, Factions, Feuds)</li>
          <li onClick={() => navigate('/manage/titles')}>Titles</li>
          <li onClick={() => navigate('/manage/gimmicks')}>Gimmick Matches</li>
          <li onClick={() => navigate('/manage/segments')}>Segments</li>
          <li onClick={() => navigate('/manage/stats')}>Statistics</li>
        </ul>
      </div>
    );
  }
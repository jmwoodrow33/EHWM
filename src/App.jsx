import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MainScreen } from './components/MainScreen';
import { NewGameScreen } from './components/NewGameScreen';
import { LoadGameScreen } from './components/LoadGameScreen';
import { Dashboard } from './components/Dashboard';
import { Manage } from './components/Manage';
import { Booking } from './components/Booking';
import { GameProvider } from './context/GameContext';
import './index.css'; // Ensure global styles are loaded

function App() {
  return (
    <GameProvider>
      <Router>
        <div className="min-h-screen bg-black text-white font-sans flex flex-col">
          <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 flex justify-around text-lg font-bold shadow-md border-b border-gray-700">
            <Link to="/dashboard" className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition">Dashboard</Link>
            <Link to="/manage" className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition">Manage</Link>
            <Link to="/booking" className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition">Booking</Link>
            <Link to="/" className="p-2 bg-red-700 rounded hover:bg-red-600 transition">Main Screen</Link>
          </nav>

          <div className="flex-grow pt-20 pb-4 px-6 bg-gradient-to-b from-black to-gray-900 text-white rounded-lg shadow-lg mx-2 sm:mx-6 border border-gray-700">
            <Routes>
              <Route path="/" element={<NewGameScreen />} />
              <Route path="/new-game" element={<NewGameScreen />} />
              <Route path="/load-game" element={<LoadGameScreen />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GameProvider>
  );
}

export default App;
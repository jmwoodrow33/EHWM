import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export const useGame = () => useContext(GameContext);

export function GameProvider({ children }) {
  const [currentGame, setCurrentGame] = useState(null);
  const [games, setGames] = useState([]);

  const startNewGame = (settings) => {
    const newGame = { id: Date.now(), settings, data: {} };
    setGames([...games, newGame]);
    setCurrentGame(newGame);
  };

  const loadGame = (id) => {
    const game = games.find(g => g.id === id);
    setCurrentGame(game);
  };

  return (
    <GameContext.Provider value={{ currentGame, games, startNewGame, loadGame }}>
      {children}
    </GameContext.Provider>
  );
}
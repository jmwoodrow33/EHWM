// Step 2: RosterManager.jsx
import React, { useState, useEffect } from 'react';
import db from '../db/database';

export function RosterManager() {
  const [wrestlers, setWrestlers] = useState([]);
  const [name, setName] = useState('');
  const [alignment, setAlignment] = useState('Face');

  useEffect(() => {
    db.wrestlers.toArray().then(setWrestlers);
  }, []);

  const addWrestler = async () => {
    await db.wrestlers.add({ name, alignment, stats: {}, contract: {} });
    setWrestlers(await db.wrestlers.toArray());
    setName('');
    setAlignment('Face');
  };

  return (
    <div>
      <h2>Manage Roster</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <select value={alignment} onChange={e => setAlignment(e.target.value)}>
        <option value="Face">Face</option>
        <option value="Heel">Heel</option>
      </select>
      <button onClick={addWrestler}>Add Wrestler</button>
      <ul>
        {wrestlers.map(w => <li key={w.id}>{w.name} - {w.alignment}</li>)}
      </ul>
    </div>
  );
}
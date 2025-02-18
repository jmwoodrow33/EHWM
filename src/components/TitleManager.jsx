// Step 3: TitleManager.jsx
import React, { useState, useEffect } from 'react';
import db from '../db/database';

export function TitleManager() {
  const [titles, setTitles] = useState([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    db.titles.toArray().then(setTitles);
  }, []);

  const addTitle = async () => {
    await db.titles.add({ name, company, history: [] });
    setTitles(await db.titles.toArray());
    setName('');
    setCompany('');
  };

  return (
    <div>
      <h2>Manage Titles</h2>
      <input placeholder="Title Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
      <button onClick={addTitle}>Add Title</button>
      <ul>
        {titles.map(t => <li key={t.id}>{t.name} - {t.company}</li>)}
      </ul>
    </div>
  );
}
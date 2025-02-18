// Step 1: CompanyManager.jsx
import React, { useState, useEffect } from 'react';
import db from '../db/database';

export function CompanyManager() {
  const [companies, setCompanies] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    db.companies.toArray().then(setCompanies);
  }, []);

  const addCompany = async () => {
    await db.companies.add({ name, location });
    setCompanies(await db.companies.toArray());
    setName('');
    setLocation('');
  };

  return (
    <div>
      <h2>Manage Companies</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <button onClick={addCompany}>Add Company</button>
      <ul>
        {companies.map(c => <li key={c.id}>{c.name} - {c.location}</li>)}
      </ul>
    </div>
  );
}
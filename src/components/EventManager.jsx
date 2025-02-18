// Step 4: EventManager.jsx
import React, { useState, useEffect } from 'react';
import db from '../db/database';

export function EventManager() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    db.events.toArray().then(setEvents);
  }, []);

  const addEvent = async () => {
    await db.events.add({ name, date, matches: [] });
    setEvents(await db.events.toArray());
    setName('');
    setDate('');
  };

  return (
    <div>
      <h2>Manage Events</h2>
      <input placeholder="Event Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {events.map(e => <li key={e.id}>{e.name} - {e.date}</li>)}
      </ul>
    </div>
  );
}
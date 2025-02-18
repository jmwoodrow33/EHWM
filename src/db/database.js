import Dexie from 'dexie';

export const db = new Dexie('WrestlingBookingDB');

db.version(1).stores({
  companies: '++id, name, location, roster, titles, shows',
  wrestlers: '++id, name, stats, alignment, contract, titlesHeld',
  titles: '++id, name, company, history',
  events: '++id, name, date, matches',
  matches: '++id, type, participants, winner, titleMatch'
});

export default db;

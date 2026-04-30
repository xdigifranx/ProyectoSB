import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = 'C:\\SQLITE\\sqlite-tools-win-x64-3510200\\SiempreBonitasApp.db';
console.log('Ruta de la BD:', dbPath);

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error abriendo base de datos:', err);
  } else {
    console.log('Conectado a SQLite');
  }
});


export default db;

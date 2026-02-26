import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const dbPath = path.join(__dirname, '..', '..', 'database.sqlite');
const dbPath = 'C:\\SQLITE\\sqlite-tools-win-x64-3510200\\SiempreBonitasApp.db';
console.log('Ruta de la BD:', dbPath);

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error abriendo base de datos:', err);
  } else {
    console.log('Conectado a SQLite');
  }
});

// export function initDatabase() {
//   db.serialize(() => {
//     // Crear tabla de usuarios
//     db.run(`
//       CREATE TABLE IF NOT EXISTS usuarios (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nombre TEXT NOT NULL,
//         email TEXT UNIQUE NOT NULL,
//         contraseña TEXT NOT NULL,
//         createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
//       )
//     `);

//     // Crear tabla de cursos
//     db.run(`
//       CREATE TABLE IF NOT EXISTS cursos (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         titulo TEXT NOT NULL,
//         descripcion TEXT,
//         precio REAL NOT NULL,
//         createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
//       )
//     `);

//     // Crear tabla de servicios
//     db.run(`
//       CREATE TABLE IF NOT EXISTS servicios (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         nombre TEXT NOT NULL,
//         descripcion TEXT,
//         precio REAL NOT NULL,
//         createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
//       )
//     `);
//   });
// }

export default db;

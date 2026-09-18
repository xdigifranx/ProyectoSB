import 'dotenv/config';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let dbPath = process.env.DATABASE_URL ?? '';
if (dbPath.startsWith('file:')) {
  dbPath = dbPath.slice('file:'.length);
}

const resolveRelativeToBackend = (relativePath: string) => {
  const cwdPath = path.resolve(process.cwd(), relativePath);
  if (path.basename(cwdPath) === 'dev.db' && path.basename(path.dirname(cwdPath)) === 'backend') {
    return cwdPath;
  }
  return path.resolve(__dirname, '../../', relativePath);
};

if (!dbPath) {
  dbPath = path.resolve(__dirname, '../../SiempreBonitasApp.db');
} else if (!path.isAbsolute(dbPath)) {
  dbPath = resolveRelativeToBackend(dbPath);
}

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error abriendo base de datos:', err);
  } else {
    console.log('Conectado a SQLite:', dbPath);
  }
});

export function dbAll<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows as T[]);
    });
  });
}

export function dbGet<T>(sql: string, params: unknown[] = []): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row as T | undefined);
    });
  });
}

export default db;

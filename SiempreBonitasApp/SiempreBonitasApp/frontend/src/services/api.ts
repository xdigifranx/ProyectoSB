const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:3003/api';

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    throw new ApiError(`Error en la API (${res.status})`, res.status);
  }
  return res.json() as Promise<T>;
}

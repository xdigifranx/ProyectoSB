# Siempre Bonitas App

Aplicación web para el salón de belleza **Siempre Bonitas**. Monorepo con frontend en React y backend en Express + SQLite.

## Estructura del proyecto

```
SiempreBonitasApp/
├── frontend/                 # React + Vite + TypeScript
│   └── src/
│       ├── components/
│       │   ├── layout/       # NavBar, Footer
│       │   └── home/         # Secciones de la página principal
│       ├── context/          # Estado global (Empresa)
│       ├── layouts/          # Layouts compartidos
│       ├── pages/            # Páginas por ruta
│       ├── services/         # Llamadas a la API
│       └── types/            # Tipos TypeScript
├── backend/                  # Express + SQLite
│   └── src/
│       ├── controllers/      # Lógica HTTP
│       ├── database/         # Conexión SQLite
│       ├── middleware/       # Manejo de errores
│       ├── models/           # Tipos de datos
│       ├── repositories/     # Acceso a base de datos
│       └── routes/           # Rutas por dominio
└── package.json              # Scripts del monorepo
```

## Requisitos

- Node.js >= 16
- npm

## Instalación

```bash
npm install
```

## Configuración

**Backend** — copiá el archivo de entorno:

```bash
cp backend/.env.example backend/.env
```

**Frontend** — opcional (tiene valores por defecto):

```bash
cp frontend/.env.example frontend/.env
```

## Desarrollo

Levantar frontend y backend a la vez:

```bash
npm run dev
```

O por separado:

```bash
npm run dev:backend   # http://localhost:3003
npm run dev:frontend  # http://localhost:5173
```

## Build

```bash
npm run build
```

## API

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/empresa/nombre` | Nombre del salón |
| GET | `/api/empresa/url` | Imagen del header |
| GET | `/api/empresa/logo` | Logo |
| GET | `/api/empresa/direccion` | Dirección |
| GET | `/api/empresa/telefono` | Teléfono |
| GET | `/api/empresa/redes` | Redes sociales |
| GET | `/api/promociones/ruta-imagen` | Promociones |
| GET | `/api/servicios` | Listado de servicios |
| GET | `/api/servicios/:id` | Servicio por ID |

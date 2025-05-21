# Veritone Assessment

This repository contains a full-stack shopping list application with a React + Vite frontend and a Node.js (TypeScript) backend. The project is containerized using Docker and orchestrated with Docker Compose for easy development and deployment.

## Project Structure

- `frontend/` — React + Vite application
- `backend/` — Node.js (TypeScript) API server
- `docker-compose.yml` — Orchestrates frontend and backend containers

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

## Local Development

### 1. Clone the repository

```bash
git clone <repo-url>
cd veritone-assessment
```

### 2. Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

### 3. Start development servers

#### Using Docker Compose (recommended)

This will start both frontend and backend in development mode:

```bash
docker-compose up --build
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:4000](http://localhost:4000)

#### Or run separately (without Docker)

- **Frontend:**
  ```bash
  cd frontend
  npm run dev
  ```
- **Backend:**
  ```bash
  cd backend
  npm run dev
  ```

## Production Build & Deployment

### 1. Build Docker images

```bash
docker-compose build
```

### 2. Start containers in production mode

```bash
docker-compose up -d
```

### 3. Access the app

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:4000](http://localhost:4000)

## Additional Scripts

- To stop containers: `docker-compose down`
- To rebuild: `docker-compose up --build`

---

For more details, see the `frontend/README.md` or check the source code.

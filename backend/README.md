# Backend API — Veritone Assessment

This is the Node.js (TypeScript) backend for the Veritone Assessment shopping list application. It provides a RESTful API for managing shopping list items.

## Setup & Development

### Prerequisites

- Node.js v18+
- npm

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm run dev
```

### Build and run in production

```bash
npm run build
npm start
```

- `npm run build` compiles TypeScript to JavaScript in the `dist/` directory.
- `npm start` runs the compiled app using Node.js.

## API Endpoints

All endpoints are now prefixed with `/api/items` (e.g., `http://localhost:4000/api/items`).

### `GET /api/items`

- **Description:** Get all shopping list items.
- **Response:** Array of item objects.

### `POST /api/items`

- **Description:** Add a new shopping list item.
- **Body:**

  ```json
  {
    "name": "string",
    "quantity": number,
    "notes": "string" // optional
  }
  ```

- **Response:** The created item object.

### `PUT /api/items/:id`

- **Description:** Update an existing shopping list item.
- **Body:**

  ```json
  {
    "name": "string",
    "quantity": number,
    "notes": "string" // optional
  }
  ```

- **Response:** The updated item object.

### `DELETE /api/items/:id`

- **Description:** Delete a shopping list item by ID.
- **Response:** Success message or deleted item object.

## Notes

- The backend runs on port `4000` by default.
- For more details, see the source code in `src/`.

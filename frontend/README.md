# Veritone Assessment — Frontend

This is the React + TypeScript + Vite frontend for the Veritone Assessment shopping list application. It provides a modern, responsive UI for managing your shopping list and interacts with the backend API.

## Features

- Add, edit, and delete shopping list items
- Mark items as completed
- Responsive and accessible design
- State management with Redux Toolkit
- API integration with the backend

## Getting Started

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

- The app will be available at [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

## Project Structure

- `src/` — Main source code
- `src/components/` — Reusable UI components
- `src/features/shoppingList/` — Shopping list Redux logic
- `src/pages/` — App pages
- `public/` — Static assets

## API

This frontend expects the backend API to be running at `/api/items` (e.g., `http://localhost:4000/api/items`).

If you change the backend API base path, update the `API_BASE` variable in `src/features/shoppingList/ShoppingListSaga.ts` accordingly.

---

## Original Vite README

The original Vite project README is included below for reference. For Vite-specific configuration, advanced ESLint setup, and plugin details, see the section after this line:

---

<!-- Original Vite README below (starts with an H2 to avoid multiple H1s) -->

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

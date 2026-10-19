# DevForge-Admin

A reusable admin dashboard boilerplate built with **Nuxt 4**, **Vue 3**, and **Vuetify 4**. This project is designed for learning modern web technologies, building a developer portfolio, and accelerating future admin dashboard projects.

## Tech Stack

- **Framework:** Nuxt 4
- **UI Framework:** Vuetify 4
- **Frontend:** Vue 3
- **Routing:** Vue Router
- **Linting:** ESLint 9+
- **Git Hooks:** Husky
- **Commit Convention:** Conventional Commits
- **Package Manager:** Bun (recommended)

## Prerequisites

- [Bun](https://bun.sh/) installed
- [Git](https://git-scm.com/) installed

You can also use npm, pnpm, or Yarn.

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd DevForge-Admin
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Start the Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start the development server |
| `bun run build` | Build the application for production |
| `bun run preview` | Preview the production build locally |
| `bun run generate` | Generate a static version of the application |
| `bun run lint` | Check code with ESLint |
| `bun run lint:fix` | Automatically fix ESLint issues |

## Code Quality

### ESLint

Check for code quality and linting issues:

```bash
bun run lint
```

Automatically fix supported issues:

```bash
bun run lint:fix
```

### Git Hooks

This project uses Husky and lint-staged to help maintain code quality.

- **Pre-commit:** Run ESLint on staged JavaScript, TypeScript, and Vue files when configured.
- **Commit message:** Use Conventional Commits when Commitlint hooks are configured.

Examples:

```text
feat: add user management
fix: resolve navigation issue
refactor: simplify API utilities
docs: update README
chore: update dependencies
```

## Project Goals

- Learn and experiment with modern frontend technologies.
- Build reusable UI components and admin layouts.
- Establish consistent coding standards.
- Create a portfolio project that demonstrates practical development skills.
- Reuse the boilerplate as a starting point for future applications.

## Backend Integration

The planned backend is **DevForge-API**, built with Laravel and MySQL.

The frontend will integrate with the backend for features such as:

- Authentication and authorization
- User and role management
- CRUD operations
- Data tables, filtering, and pagination
- Dashboard statistics and reporting

Backend integration will be added as the project develops.

## Documentation

- [Nuxt Documentation](https://nuxt.com/docs)
- [Vue Documentation](https://vuejs.org/guide/introduction.html)
- [Vuetify Documentation](https://vuetifyjs.com/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Bun Documentation](https://bun.sh/docs)

## License

This project is currently intended for learning and portfolio development.

<img width="1917" height="927" alt="image" src="https://github.com/user-attachments/assets/028fdad0-99e7-4d1e-aa4a-8d5e53976a64" />


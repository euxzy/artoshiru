# artoshiru

A cross-platform personal finance tracking app built with SvelteKit, Hono, ORPC, React Native, and TailwindCSS, organized in a monorepo structure.

This app helps users efficiently manage their monthly income and expenses with a clean, responsive, and user-friendly interface.

## Features

- **TypeScript** - For type safety and improved developer experience
- **SvelteKit** - Web framework for building Svelte apps
- **React Native** - Build mobile apps using React
- **Expo** - Tools for React Native development
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Hono** - Lightweight, performant server framework
- **oRPC** - End-to-end type-safe APIs with OpenAPI integration
- **Bun** - Runtime environment
- **Drizzle** - TypeScript-first ORM
- **SQLite/Turso** - Database engine
- **Authentication** - Email & password authentication with Better Auth
- **Husky** - Git hooks for code quality
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, generate shadcn component:
```bash
bun generate:shadcn
```

## Database Setup

This project uses SQLite with Drizzle ORM.

1. Start the local SQLite database:

```bash
cd apps/server && bun db:local
```

2. Update your `.env` file in the `apps/server` directory with the appropriate connection details if needed.

3. Apply the schema to your database:

```bash
bun db:push
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the web application.
Use the Expo Go app to run the mobile application.
The API is running at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
artoshiru/
├── apps/
│   ├── web/            # Frontend application (SvelteKit)
│   ├── native/         # Mobile application (React Native, Expo)
│   └── server/         # Backend API (Hono, ORPC)
│
├── packages/
│   ├── eslint-config/  # Eslint config for each apps
│   └── svelte/         # Shared libs for Svelte apps
```

## Available Scripts

- `bun dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun dev:web`: Start only the web application
- `bun dev:server`: Start only the server
- `bun check-types`: Check TypeScript types across all apps
- `bun dev:native`: Start the React Native/Expo development server
- `bun db:push`: Push schema changes to database
- `bun db:studio`: Open database studio UI
- `cd apps/server && bun db:local`: Start the local SQLite database
- `bun format`: Format code in all applications using Prettier
- `bun lint`: Run ESLint to analyze the code for syntax errors and code quality issues
- `bun generate:shadcn`: Generate a shared shadcn component for the UI
- `bun shadcn`: A shorthand for shadcn cli

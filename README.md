# Artoshiru

**Artoshiru** is a cross-platform personal finance tracking app built with **SvelteKit**, **Hono**, **oRPC**, **React Native**, and **TailwindCSS**, structured in a **monorepo** setup.

> From "Artos" (Sundanese for _money_) + "Shirusu" (記す / しるす - Japanese for _to record_ or _to note down_)

Together, they represent the purpose of the app: **recording your finances clearly and efficiently**.

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

Install dependencies:

```bash
bun install
```

Generate UI components with `shadcn`:

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

The API is running at [http://localhost:3000](http://localhost:3000).

Use the Expo Go app to run the mobile application.

## Project Structure

```
artoshiru/
├── apps/
│   ├── web/            # Frontend application (SvelteKit)
│   ├── native/         # Mobile application (React Native, Expo)
│   └── server/         # Backend API (Hono, ORPC)
│
├── packages/
│   ├── eslint-config/  # Shared ESLint config
│   └── svelte/         # Shared Svelte libraries
```

## Available Scripts

| Script                           | Description                                    |
| -------------------------------- | ---------------------------------------------- |
| `bun dev`                        | Start all applications in development mode     |
| `bun dev:web`                    | Start only the web application                 |
| `bun dev:server`                 | Start only the backend server                  |
| `bun dev:native`                 | Start the React Native/Expo development server |
| `bun run build`                  | Build all applications                         |
| `bun db:push`                    | Push schema changes to database                |
| `bun db:studio`                  | Open Drizzle Studio UI                         |
| `bun format`                     | Format codebase using Prettier                 |
| `bun lint`                       | Run ESLint checks                              |
| `bun check-types`                | Check TypeScript types                         |
| `bun generate:shadcn`            | Generate reusable shadcn/ui component          |
| `bun shadcn`                     | Alias for shadcn CLI                           |
| `cd apps/server && bun db:local` | Start the local SQLite database                |

---

## Contributing

Contributions are welcome! Feel free to open issues or PRs.

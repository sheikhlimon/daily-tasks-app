# Daily Tasks App

A modern, responsive daily tasks app built with React, TypeScript, and Tailwind CSS. Follows Test-Driven Development (TDD) practices, features a clean design, and includes a light/dark mode toggle.

## Features

- ✅ Add, toggle, and delete tasks
- 📱 Responsive design (mobile-friendly)
- 🧪 Full test coverage with Vitest
- 🌙 Light/Dark mode toggle

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build**: Vite
- **Testing**: Vitest, React Testing Library
- **Icons**: Lucide React
- **Linting**: ESLint, Prettier

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/sheikhlimon/daily-tasks-app.git
   cd daily-tasks-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- **Add Task**: Type in the input and click "Add" or press Enter.
- **Toggle Completion**: Click the checkbox next to a task.
- **Delete Task**: Click the trash icon next to a task.
- **Theme Toggle**: Click the sun/moon icon in the top-right to switch light/dark mode.

## Testing

Run tests with:

```bash
npm test
```

Tests cover adding tasks, toggling, deleting, input validation, and UI interactions.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── App.tsx          # Main app component
├── App.test.tsx     # Unit tests for App component
├── main.tsx         # App entry point
├── index.css        # Tailwind CSS imports
├── setupTest.ts     # Test setup
├── components/
│   ├── tasks/
│   │   ├── AddTask.tsx      # Add task form
│   │   ├── TaskItemList.tsx # Individual task item
│   │   ├── TaskList.tsx     # Task list container
│   │   └── TaskListHeader.tsx # Task count header
├── types/
│   └── index.ts             # TypeScript types
└── theme/
    ├── theme.ts             # Theme definitions
    ├── ThemeProvider.tsx    # Theme provider component
    └── useTheme.ts          # Theme hook
```

## License

MIT License - see [LICENSE](LICENSE) for details.

# Quiz Bowl

A multiplayer quiz game built with React 19, Vite 7, and Tailwind CSS.

## Project Structure

```
src/
├── App.jsx              # Main app (thin orchestrator)
├── App.css              # Global styles
├── main.jsx
├── index.css
├── constants/
│   └── config.js        # Lobby code, room code, timing, max score
├── data/
│   └── questionBank.js  # Rounds and questions
├── hooks/
│   └── useGameState.js  # Game logic and state
└── components/
    ├── AppHeader.jsx
    ├── index.js
    └── screens/
        ├── WelcomeScreen.jsx
        ├── LobbyScreen.jsx
        ├── RoundIntroScreen.jsx
        ├── SuddenDeathIntroScreen.jsx
        ├── QuestionScreen.jsx
        ├── CorrectAnswerScreen.jsx
        ├── LeaderboardScreen.jsx
        ├── MatchCompleteScreen.jsx
        └── index.js
```

### Key Files

- **config.js** – Change `VALID_LOBBY_CODE`, `ROOM_DISPLAY_CODE`, timing constants
- **questionBank.js** – Add or edit rounds and questions
- **useGameState.js** – All game logic (rounds, scoring, transitions)
- **screens/** – Each screen is a separate component for easier maintenance

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

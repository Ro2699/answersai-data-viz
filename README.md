# AnswersAi Frontend Engineer Take-Home

This is a front-end dashboard project built with React and TypeScript. It includes data visualization, user interactions, and Firebase authentication. The design and features are based on the Figma file provided in the take-home assignment.

The project is also deployed and accessible at:  
**https://answersai-data-viz.onrender.com**

I completed this project in approximately 5.5 hours.

## Tech Stack

- React 18 with TypeScript
- Vite (for fast development and build)
- Redux Toolkit (for state management)
- Tailwind CSS (for styling)
- Recharts (for charts and graphing)
- React Router (for routing)
- Firebase Authentication (Google and Email/Password login)

## Features

### Dashboard Page

- Sidebar with icons
- Header with tabs and search bar
- Scenario banner with summary message
- Line chart with dropdown and hover tooltip
- KPI cards showing key numbers

### SlideOver Panel

- Opens by clicking "Edit Variables"
- Search bar and buttons for autofill and rerun
- Variables shown as pills with selection and hover
- Context box appears after 1.5 seconds of hover
- Sections for Primary and Secondary variables
- Can be closed by X button, ESC key, or background click

### Chart Interactions

- Custom tooltip appears on hover
- Tooltip shows value and a short comment like “4.6% above target”
- Tooltip fades in smoothly

### Authentication

- Google sign-in using Firebase
- Email and password login also supported
- Firebase setup is complete in the app

## Project Structure

src/
├── app/ # Redux store
├── components/ # Reusable UI parts
├── features/ # Redux slices
├── pages/ # Route views
├── routes/ # Router setup
├── firebase.ts # Firebase config
├── main.tsx # App entry point
└── index.css # Global styles

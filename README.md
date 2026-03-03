# Skill Swap Platform

A community platform where people exchange skills instead of money. Users can explore skills publicly, create profiles, and propose skill swaps in a structured way.

## Features

### Guest Experience
- Browse skills publicly without login
- View skill categories and descriptions
- Understand platform concept through landing page

### User Experience
- Complete onboarding flow
- Manage skill profiles (offer & want to learn)
- Browse skill marketplace with filters
- View AI-powered match suggestions
- Propose and manage skill swaps
- Track active swaps and sessions
- Give and receive feedback/ratings
- Manage availability and preferences

### UI/UX
- Fully responsive (mobile-first design)
- Dark/Light mode support
- Mobile app-like navigation
- Desktop web experience
- Modern, clean interface with TailwindCSS
- Smooth animations and transitions

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Routing**: React Router v6
- **UI Components**: Custom components with shadcn/ui patterns

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # Base UI components (buttons, cards, etc.)
│   └── layout/       # Layout components (navbar, footer, etc.)
├── pages/            # Page components
├── contexts/         # React contexts (auth, theme, etc.)
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
└── data/             # Mock data and constants
```

## Core User Flow

1. Guest → Browse Skills
2. Login / Sign Up
3. Onboarding (skills, availability, bio)
4. Dashboard
5. Browse Marketplace / View Matches
6. Propose Skill Swap
7. Manage Active Swaps
8. Complete & Give Feedback

## License

MIT

# Skill Swap - Setup Instructions

## Prerequisites

You need to install Node.js (which includes npm) before running this application.

### Install Node.js

1. **Download Node.js:**
   - Visit: https://nodejs.org/
   - Download the LTS (Long Term Support) version for Windows
   - Recommended: Node.js 18.x or higher

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard
   - Make sure to check "Add to PATH" during installation
   - Restart your terminal/PowerShell after installation

3. **Verify Installation:**
   ```powershell
   node --version
   npm --version
   ```

## Installation Steps

Once Node.js is installed, follow these steps:

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages including:
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router
- Lucide Icons

### 2. Start Development Server

```powershell
npm run dev
```

The application will start at `http://localhost:5173`

### 3. Build for Production

```powershell
npm run build
```

### 4. Preview Production Build

```powershell
npm run preview
```

## Quick Start Guide

### Demo Accounts

You can login with these demo accounts:

- **Email:** sarah@example.com (Password: any)
- **Email:** michael@example.com (Password: any)
- **Email:** emma@example.com (Password: any)

### User Flow

1. **Guest Experience:**
   - Visit the landing page
   - Browse skills without logging in
   - View skill categories and descriptions

2. **Sign Up:**
   - Create a new account
   - Complete the onboarding process:
     - Select skills you can offer
     - Choose skills you want to learn
     - Write a short bio

3. **Dashboard:**
   - View your stats and quick actions
   - See active swaps and pending proposals
   - Access your skill profile

4. **Find Matches:**
   - Browse the skill marketplace
   - View AI-powered match suggestions
   - See users with complementary skills

5. **Propose Swaps:**
   - Select a user to swap with
   - Propose a skill exchange
   - Set session details

6. **Manage Swaps:**
   - Track active skill exchanges
   - View progress and completed sessions
   - Give feedback after completion

## Features

### ✅ Implemented Features

- **Authentication System**
  - Login/Signup pages
  - Protected routes
  - User session management

- **Onboarding Flow**
  - Multi-step skill selection
  - Bio creation
  - Progress indicators

- **User Dashboard**
  - Stats overview
  - Quick actions
  - Active swaps display

- **Skill Marketplace**
  - Browse all skills
  - Search functionality
  - Category filters

- **Matching System**
  - View compatible users
  - Match percentage display
  - Skill complementarity

- **Swap Management**
  - Proposal system
  - Active swaps tracking
  - Session progress

- **Profile Management**
  - Edit personal info
  - Manage skills
  - View ratings

- **UI/UX Features**
  - Dark/Light mode toggle
  - Fully responsive design
  - Mobile-first approach
  - Bottom navigation for mobile
  - Smooth animations

## Project Structure

```
skilpool/
├── src/
│   ├── components/
│   │   ├── ui/              # Base UI components
│   │   ├── layout/          # Layout components
│   │   ├── SkillCard.tsx    # Skill display card
│   │   └── UserCard.tsx     # User profile card
│   ├── contexts/
│   │   ├── AuthContext.tsx  # Authentication state
│   │   ├── ThemeContext.tsx # Dark/Light mode
│   │   └── NotificationContext.tsx
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── SignupPage.tsx
│   │   ├── OnboardingPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── BrowseSkillsPage.tsx
│   │   ├── MatchesPage.tsx
│   │   ├── SwapsPage.tsx
│   │   └── ProfilePage.tsx
│   ├── data/
│   │   ├── skills.ts        # Skill categories & data
│   │   └── mockData.ts      # Demo users & swaps
│   ├── types/
│   │   └── index.ts         # TypeScript types
│   ├── utils/
│   │   └── cn.ts            # Utility functions
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Technology Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **State Management:** React Context API

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```powershell
# Kill the process using the port
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### TypeScript Errors

All TypeScript errors will resolve after running `npm install`.

### Module Not Found

If you see module errors:
```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse -Force node_modules
npm install
```

## Next Steps

After the application is running:

1. Explore the landing page
2. Sign up for a new account
3. Complete the onboarding flow
4. Browse skills and view matches
5. Try proposing a skill swap
6. Toggle between light and dark modes
7. Test the mobile responsive design

## Support

For issues or questions:
- Check the README.md for additional information
- Review the code comments for implementation details
- All components are well-documented with TypeScript types

---

**Happy Skill Swapping! 🎉**

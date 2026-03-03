import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { NotificationProvider } from '@/contexts/NotificationContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileNav } from '@/components/layout/MobileNav';
import { LandingPage } from '@/pages/LandingPage';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { BrowseSkillsPage } from '@/pages/BrowseSkillsPage';
import { OnboardingPage } from '@/pages/OnboardingPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { MatchesPage } from '@/pages/MatchesPage';
import { SwapsPage } from '@/pages/SwapsPage';
import { ProfilePage } from '@/pages/ProfilePage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const OnboardingRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isOnboarded } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (!isOnboarded) {
    return <Navigate to="/onboarding" />;
  }
  
  return <>{children}</>;
};

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/browse" element={<BrowseSkillsPage />} />
          
          <Route
            path="/onboarding"
            element={
              <ProtectedRoute>
                <OnboardingPage />
              </ProtectedRoute>
            }
          />
          
          <Route
            path="/dashboard"
            element={
              <OnboardingRoute>
                <DashboardPage />
              </OnboardingRoute>
            }
          />
          
          <Route
            path="/skills"
            element={
              <OnboardingRoute>
                <BrowseSkillsPage />
              </OnboardingRoute>
            }
          />
          
          <Route
            path="/matches"
            element={
              <OnboardingRoute>
                <MatchesPage />
              </OnboardingRoute>
            }
          />
          
          <Route
            path="/swaps"
            element={
              <OnboardingRoute>
                <SwapsPage />
              </OnboardingRoute>
            }
          />
          
          <Route
            path="/profile"
            element={
              <OnboardingRoute>
                <ProfilePage />
              </OnboardingRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
      {isAuthenticated && <MobileNav />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <AppContent />
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;

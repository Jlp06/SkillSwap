import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';
import { mockUsers } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isOnboarded: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isOnboarded, setIsOnboarded] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedOnboarded = localStorage.getItem('isOnboarded');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsOnboarded(storedOnboarded === 'true');
    }
  }, []);

  const login = async (email: string, _password: string) => {
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      const hasCompletedOnboarding = foundUser.skillsOffered.length > 0 && !!foundUser.bio;
      setIsOnboarded(hasCompletedOnboarding);
      localStorage.setItem('isOnboarded', String(hasCompletedOnboarding));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (email: string, _password: string, name: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      skillsOffered: [],
      skillsWanted: [],
      createdAt: new Date().toISOString(),
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsOnboarded(false);
    localStorage.setItem('isOnboarded', 'false');
  };

  const logout = () => {
    setUser(null);
    setIsOnboarded(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isOnboarded');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const completeOnboarding = () => {
    setIsOnboarded(true);
    localStorage.setItem('isOnboarded', 'true');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isOnboarded,
        login,
        signup,
        logout,
        updateUser,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Bell, Moon, Sun, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { unreadCount } = useNotifications();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setNotificationsOpen] = useState(false);

  return (
    <nav className="
      sticky top-0 z-50 w-full
      backdrop-blur-xl
      bg-background/60
      border-b border-white/10
    ">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex h-16 items-center justify-between">
          {/* BRAND */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="
                h-9 w-9 rounded-xl
                bg-gradient-to-br from-purple-500 to-indigo-500
                flex items-center justify-center
                text-white font-bold
                shadow-lg shadow-purple-500/30
              ">
                S
              </div>
              <span className="font-semibold text-lg tracking-wide hidden sm:inline-block">
                Skill Swap
              </span>
            </Link>

            {/* DESKTOP NAV */}
            {isAuthenticated && (
              <div className="hidden md:flex items-center gap-6">
                {['Dashboard', 'Skills', 'Matches', 'Swaps'].map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase()}`}
                    className="
                      relative text-sm text-muted-foreground
                      hover:text-foreground
                      after:absolute after:left-0 after:-bottom-1
                      after:h-[2px] after:w-0 after:bg-purple-500
                      hover:after:w-full
                      after:transition-all
                    "
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            {/* THEME */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="hidden sm:inline-flex"
            >
              {theme === 'light'
                ? <Moon className="h-5 w-5" />
                : <Sun className="h-5 w-5" />
              }
            </Button>

            {isAuthenticated ? (
              <>
                {/* NOTIFICATIONS */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setNotificationsOpen((prev) => !prev)}
                  className="relative"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="
                      absolute -top-1 -right-1
                      h-5 w-5 rounded-full
                      bg-gradient-to-r from-purple-500 to-indigo-500
                      text-white text-xs flex items-center justify-center
                    ">
                      {unreadCount}
                    </span>
                  )}
                </Button>

                {/* USER */}
                <Link to="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5" />
                    <span className="ml-2 hidden md:inline">
                      {user?.name}
                    </span>
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="hidden sm:inline-flex"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/browse" className="hidden sm:inline-block">
                  <Button variant="ghost" size="sm">
                    Browse Skills
                  </Button>
                </Link>

                <Link to="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button
                    size="sm"
                    className="
                      bg-gradient-to-r from-purple-500 to-indigo-500
                      text-white
                      hover:scale-105 active:scale-95
                      transition-all
                      shadow-lg shadow-purple-500/30
                    "
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}

            {/* MOBILE TOGGLE */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen
                ? <X className="h-5 w-5" />
                : <Menu className="h-5 w-5" />
              }
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="
            md:hidden mt-4 p-4
            rounded-2xl
            bg-background/80
            backdrop-blur-xl
            border border-white/10
          ">
            <div className="flex flex-col gap-2">
              {(isAuthenticated
                ? ['Dashboard', 'Skills', 'Matches', 'Swaps', 'Profile']
                : ['Browse', 'Login', 'Signup']
              ).map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="px-4 py-2 rounded-lg hover:bg-accent"
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="px-4 py-2 text-left rounded-lg hover:bg-accent"
              >
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
              {isAuthenticated && (
                <button
                  onClick={logout}
                  className="px-4 py-2 text-left rounded-lg text-destructive hover:bg-accent"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

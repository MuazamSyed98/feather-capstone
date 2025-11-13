import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sun, Moon, LogOut, User } from 'lucide-react'
import { NotificationCenter } from './NotificationCenter'
import type { User as UserType } from '@/types'

interface NavBarProps {
  user: UserType | null
  onLogout: () => void
}

export const NavBar = ({ user, onLogout }: NavBarProps) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
  const navigate = useNavigate()

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    document.documentElement.classList.toggle('dark', newDarkMode)
  }

  const handleLogout = () => {
    onLogout()
    navigate('/login')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass-effect shadow-lg border-b border-gray-200/50 dark:border-gray-700/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
                <img 
                  src="/images/image001.png" 
                  alt="Feather Logo" 
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling!.style.display = 'block'
                  }}
                />
                <span className="text-white text-lg hidden">🪶</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold gradient-text">
                  Feather
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Market Insights
                </span>
              </div>
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <NotificationCenter />

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* User menu */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-300">
                <User className="h-4 w-4" />
                <span>{user?.email}</span>
              </div>
              
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavBar } from './NavBar'
import { Sidebar } from './Sidebar'
import { useAuth } from '@/hooks/useAuth'
import { Menu, X } from 'lucide-react'

interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const { user, logout } = useAuth()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Market', href: '/market', icon: '📈' },
    { name: 'Portfolio', href: '/portfolio', icon: '💼' },
    { name: 'Recommendations', href: '/recommendations', icon: '🤖' },
    { name: 'Charts', href: '/charts', icon: '📊' },
    { name: 'Risk', href: '/risk', icon: '🛡️' },
    { name: 'Backtesting', href: '/backtesting', icon: '🧪' },
    { name: 'Screener', href: '/screener', icon: '🔍' },
    { name: 'Analytics', href: '/analytics', icon: '📊' },
    { name: 'Social', href: '/social', icon: '👥' },
    { name: 'News', href: '/news', icon: '📰' },
    { name: 'Alerts', href: '/alerts', icon: '🔔' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <NavBar user={user} onLogout={logout} />
      
      <div className="flex">
        {/* Mobile sidebar */}
        <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex w-64 flex-col bg-white dark:bg-gray-800">
            <div className="flex h-16 items-center justify-between px-4">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Feather</span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    location.pathname === item.href
                      ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:pt-16">
          <Sidebar navigation={navigation} currentPath={location.pathname} />
        </div>

        {/* Main content */}
        <div className="lg:pl-64 flex-1">
          <main className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        className="fixed bottom-4 right-4 z-40 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700">
          <Menu className="h-6 w-6" />
        </div>
      </button>
    </div>
  )
}

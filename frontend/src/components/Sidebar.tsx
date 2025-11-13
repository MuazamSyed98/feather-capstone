import { Link } from 'react-router-dom'

interface SidebarProps {
  navigation: Array<{
    name: string
    href: string
    icon: string
  }>
  currentPath: string
}

export const Sidebar = ({ navigation, currentPath }: SidebarProps) => {
  return (
    <div className="flex flex-col h-full pt-16 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
              currentPath === item.href
                ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

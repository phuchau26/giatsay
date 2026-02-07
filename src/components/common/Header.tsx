import { Search, Bell, User } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

interface HeaderProps {
  readonly title: string
  readonly showSearch?: boolean
  readonly onSearch?: (term: string) => void
  readonly actions?: React.ReactNode
}

export default function Header({ title, showSearch = true, onSearch, actions }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchFocused, setSearchFocused] = useState(false)

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    onSearch?.(value)
  }

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-border px-6 py-4 z-30">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-text-primary animate-fade-in">{title}</h1>
        
        <div className="flex items-center gap-4">
          {showSearch && (
            <div className={clsx(
              'relative transition-all duration-300',
              searchFocused ? 'w-80' : 'w-64'
            )}>
              <Search 
                className={clsx(
                  'absolute left-3 top-1/2 -translate-y-1/2 transition-colors',
                  searchFocused ? 'text-primary' : 'text-text-secondary'
                )} 
                size={18} 
              />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="input pl-10 w-full"
              />
            </div>
          )}
          
          {actions}
          
          <Link 
            to="/staff/notifications"
            className="relative p-2 text-text-secondary hover:text-primary hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full animate-pulse-subtle" />
          </Link>
          
          <Link 
            to="/owner/settings"
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium group-hover:scale-110 transition-transform">
              NV
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

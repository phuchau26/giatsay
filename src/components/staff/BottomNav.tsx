import { Link, useLocation } from 'react-router-dom'
import { Home, ClipboardList, Plus, Bell, User } from 'lucide-react'
import { clsx } from 'clsx'

const navItems = [
  { id: 'home', label: 'Trang chủ', icon: Home, path: '/staff' },
  { id: 'orders', label: 'Đơn hàng', icon: ClipboardList, path: '/staff/orders' },
  { id: 'create', label: 'Tạo đơn', icon: Plus, path: '/staff/orders/new', isMain: true },
  { id: 'notifications', label: 'Thông báo', icon: Bell, path: '/staff/notifications', badge: 2 },
  { id: 'profile', label: 'Cá nhân', icon: User, path: '/staff/profile' },
]

export default function BottomNav() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border h-16 flex items-center justify-around px-4 z-50 safe-area-pb">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path
        const Icon = item.icon

        if (item.isMain) {
          return (
            <Link
              key={item.id}
              to={item.path}
              className={clsx(
                '-mt-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300',
                'hover:scale-110 hover:shadow-xl active:scale-95',
                'animate-bounce-subtle'
              )}
              style={{ animationDelay: '0.5s' }}
            >
              <Icon className="text-white" size={24} />
            </Link>
          )
        }

        return (
          <Link
            key={item.id}
            to={item.path}
            className={clsx(
              'relative flex flex-col items-center gap-1 py-2 px-3 transition-all duration-300',
              isActive ? 'text-primary scale-110' : 'text-text-secondary hover:text-primary'
            )}
          >
            <div className="relative">
              <Icon 
                size={20} 
                className={clsx(
                  'transition-transform',
                  isActive && 'animate-bounce-subtle'
                )} 
              />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-danger text-white text-[10px] rounded-full flex items-center justify-center animate-pulse-subtle">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-xs">{item.label}</span>
            
            {/* Active indicator */}
            {isActive && (
              <div className="absolute -bottom-1 w-1 h-1 bg-primary rounded-full animate-scale-in" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}

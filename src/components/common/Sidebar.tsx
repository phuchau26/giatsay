import { Link, useLocation } from 'react-router-dom'
import { 
  LayoutDashboard, 
  ClipboardList, 
  FlaskConical, 
  Users, 
  BarChart3, 
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useState } from 'react'
import { clsx } from 'clsx'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/owner/dashboard' },
  { id: 'orders', label: 'Đơn hàng', icon: ClipboardList, path: '/owner/orders' },
  { id: 'inventory', label: 'Kho hóa chất', icon: FlaskConical, path: '/owner/inventory' },
  { id: 'staff', label: 'Nhân viên', icon: Users, path: '/owner/staff' },
  { id: 'reports', label: 'Báo cáo', icon: BarChart3, path: '/owner/reports' },
  { id: 'settings', label: 'Cài đặt', icon: Settings, path: '/owner/settings' },
]

export interface SidebarProps {
  readonly className?: string
}

export default function Sidebar({ className = '' }: SidebarProps) {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside 
      className={clsx(
        'bg-slate-900 text-white min-h-screen flex flex-col transition-all duration-300',
        collapsed ? 'w-20' : 'w-64',
        className
      )}
    >
      {/* Logo */}
      <div className="p-4 border-b border-slate-700">
        <Link to="/owner/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform">
            <span className="text-xl">🧺</span>
          </div>
          {!collapsed && (
            <span className="text-xl font-bold animate-fade-in">LaundroMagic</span>
          )}
        </Link>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-10"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path
            
            return (
              <li 
                key={item.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link
                  to={item.path}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden',
                    isActive 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:translate-x-1',
                    collapsed && 'justify-center px-2'
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  {/* Hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                  
                  <item.icon 
                    size={20} 
                    className={clsx(
                      'flex-shrink-0 transition-transform',
                      isActive && 'animate-bounce-subtle'
                    )} 
                  />
                  {!collapsed && <span className="relative z-10">{item.label}</span>}
                  
                  {/* Active indicator */}
                  {isActive && !collapsed && (
                    <div className="absolute right-2 w-1.5 h-1.5 bg-white rounded-full animate-pulse-subtle" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-700">
        <div className={clsx(
          'flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer',
          collapsed && 'justify-center px-1'
        )}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0 ring-2 ring-white/20">
            <span className="text-sm font-bold">NV</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0 animate-fade-in">
              <p className="font-medium text-sm truncate">Nguyễn Văn Owner</p>
              <p className="text-xs text-slate-400 truncate">Chủ cửa hàng</p>
            </div>
          )}
          {!collapsed && (
            <Link 
              to="/login" 
              className="text-slate-400 hover:text-white hover:bg-slate-700 p-2 rounded-lg transition-colors"
              title="Đăng xuất"
            >
              <LogOut size={18} />
            </Link>
          )}
        </div>
      </div>
    </aside>
  )
}

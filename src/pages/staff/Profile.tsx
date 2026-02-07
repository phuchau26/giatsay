import { 
  User, 
  Bell, 
  Lock, 
  ClipboardList, 
  HelpCircle, 
  Info,
  ChevronRight,
  LogOut,
  Star,
  Camera
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BottomNav from '../../components/staff/BottomNav'

const menuItems = [
  { icon: User, label: 'Thông tin cá nhân', path: '/staff/profile/info' },
  { icon: Bell, label: 'Cài đặt thông báo', path: '/staff/profile/notifications' },
  { icon: Lock, label: 'Đổi mật khẩu', path: '/staff/profile/password' },
  { icon: ClipboardList, label: 'Lịch sử đơn hàng của tôi', path: '/staff/orders?mine=true' },
  { icon: HelpCircle, label: 'Trợ giúp & Hỗ trợ', path: '/staff/help' },
  { icon: Info, label: 'Về ứng dụng', path: '/staff/about' },
]

export default function StaffProfile() {
  const stats = {
    total: 156,
    completed: 152,
    rating: 4.8,
  }

  const monthProgress = {
    current: 24,
    target: 30,
    bonus: 200000,
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b border-border">
        <h1 className="font-semibold text-lg text-text-primary">Tài khoản của tôi</h1>
      </header>

      <main className="px-4 py-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 text-center">
          <div className="relative inline-block">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
              TM
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center border-2 border-white">
              <Camera size={14} className="text-text-secondary" />
            </button>
          </div>
          <h2 className="font-semibold text-xl text-text-primary mt-4">Trần Văn Minh</h2>
          <span className="badge bg-primary-light text-primary mt-2">Nhân viên giặt</span>
          <p className="text-sm text-text-secondary mt-2">Từ 01/2024</p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl p-4">
          <div className="grid grid-cols-3 text-center">
            <div>
              <p className="text-2xl font-bold text-text-primary">{stats.total}</p>
              <p className="text-xs text-text-secondary">Tổng đơn</p>
            </div>
            <div className="border-x border-border">
              <p className="text-2xl font-bold text-text-primary">{stats.completed}</p>
              <p className="text-xs text-text-secondary">Hoàn thành</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-2xl font-bold text-text-primary">{stats.rating}</span>
              </div>
              <p className="text-xs text-text-secondary">Đánh giá</p>
            </div>
          </div>
        </div>

        {/* Monthly Progress */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-text-primary mb-3">Tháng này</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text-secondary">
              {monthProgress.current}/{monthProgress.target} đơn hoàn thành
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round((monthProgress.current / monthProgress.target) * 100)}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: `${(monthProgress.current / monthProgress.target) * 100}%` }}
            />
          </div>
          <div className="mt-3 p-3 bg-green-50 rounded-lg flex items-center gap-2">
            <span className="text-success">🎯</span>
            <p className="text-sm text-green-700">
              <strong>+{new Intl.NumberFormat('vi-VN').format(monthProgress.bonus)}đ</strong> thưởng nếu đạt mục tiêu
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-xl overflow-hidden">
          {menuItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              className="flex items-center gap-4 px-4 py-4 hover:bg-gray-50 border-b border-border last:border-0"
            >
              <item.icon size={20} className="text-text-secondary" />
              <span className="flex-1 text-text-primary">{item.label}</span>
              <ChevronRight size={18} className="text-text-secondary" />
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 py-4 text-danger font-medium">
          <LogOut size={18} />
          Đăng xuất
        </button>
      </main>

      <BottomNav />
    </div>
  )
}

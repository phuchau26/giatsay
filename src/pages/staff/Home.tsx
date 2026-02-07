import { Bell, Plus, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import BottomNav from '../../components/staff/BottomNav'
import { recentOrders, dashboardStats } from '../../data/mockData'
import { OrderStatus } from '../../types'
import { clsx } from 'clsx'

const statusConfig: Record<OrderStatus, { label: string; className: string; icon: string }> = {
  received: { label: 'Tiếp nhận', className: 'bg-gray-100 text-gray-700', icon: '🟡' },
  washing: { label: 'Đang giặt', className: 'bg-blue-100 text-blue-700', icon: '🔵' },
  ready: { label: 'Chờ lấy', className: 'bg-yellow-100 text-yellow-700', icon: '🟠' },
  completed: { label: 'Hoàn thành', className: 'bg-green-100 text-green-700', icon: '🟢' },
}

export default function StaffHome() {
  const pendingOrders = recentOrders.filter(o => o.status !== 'completed')

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header with gradient */}
      <header className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white px-4 pt-8 pb-6 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="animate-fade-in-up">
              <p className="text-blue-200 text-sm">Xin chào,</p>
              <h1 className="text-xl font-bold">Trần Văn Minh 👋</h1>
            </div>
            <Link 
              to="/staff/notifications"
              className="relative p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
            >
              <Bell size={24} />
              <span className="absolute top-1 right-1 w-3 h-3 bg-danger rounded-full border-2 border-white animate-pulse-subtle" />
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: dashboardStats.todayOrders, label: 'Đơn hôm nay', delay: '0.1s' },
              { value: dashboardStats.processing, label: 'Đang xử lý', delay: '0.2s' },
              { value: dashboardStats.completed, label: 'Hoàn thành', delay: '0.3s' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center animate-fade-in-up hover:bg-white/30 transition-colors cursor-default"
                style={{ animationDelay: stat.delay }}
              >
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 py-4">
        {/* Quick Action Card */}
        <Link 
          to="/staff/orders/new" 
          className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm mb-6 group animate-fade-in-up hover:shadow-lg transition-all"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Plus className="text-white" size={28} />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-text-primary">Tạo đơn hàng mới</p>
            <p className="text-sm text-text-secondary">Thêm đơn hàng nhanh chóng</p>
          </div>
          <ChevronRight className="text-text-secondary group-hover:translate-x-1 transition-transform" size={20} />
        </Link>

        {/* Pending Orders Section */}
        <div className="flex items-center justify-between mb-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-semibold text-text-primary">Đơn cần xử lý</h2>
          <Link to="/staff/orders" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
            Xem tất cả
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="space-y-3">
          {pendingOrders.slice(0, 4).map((order, index) => {
            const status = statusConfig[order.status]
            return (
              <Link 
                key={order.id} 
                to={`/staff/orders/${order.id}`}
                className="block bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-text-secondary font-medium">#{order.id}</span>
                      <span className={clsx(
                        'badge transition-all',
                        status.className,
                        'group-hover:scale-105'
                      )}>
                        {status.icon} {status.label}
                      </span>
                    </div>
                    <p className="font-medium text-text-primary group-hover:text-primary transition-colors">
                      {order.customerName}
                    </p>
                    <p className="text-sm text-text-secondary mt-1">
                      {order.services.map(s => s.name).join(', ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">
                      {new Intl.NumberFormat('vi-VN').format(order.finalAmount)}đ
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      {new Date(order.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="mt-3 flex gap-1">
                  {['received', 'washing', 'ready', 'completed'].map((s, i) => {
                    const statusIndex = ['received', 'washing', 'ready', 'completed'].indexOf(order.status)
                    return (
                      <div 
                        key={s}
                        className={clsx(
                          'h-1 flex-1 rounded-full transition-all duration-500',
                          i <= statusIndex ? 'bg-primary' : 'bg-gray-200'
                        )}
                      />
                    )
                  })}
                </div>
              </Link>
            )
          })}
        </div>

        {pendingOrders.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-5xl mb-4">🎉</div>
            <p className="text-text-secondary font-medium">Tuyệt vời! Không có đơn cần xử lý</p>
          </div>
        )}
      </main>

      {/* Floating Action Button */}
      <Link to="/staff/orders/new" className="fab">
        <Plus size={24} />
      </Link>

      <BottomNav />
    </div>
  )
}

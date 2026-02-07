import { useState } from 'react'
import { ArrowLeft, Check, Trash2, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../../components/staff/BottomNav'
import { clsx } from 'clsx'

interface Notification {
  id: string
  type: 'order' | 'system' | 'promotion'
  title: string
  message: string
  time: string
  read: boolean
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'order',
    title: 'Đơn hàng mới #LD-001240',
    message: 'Khách hàng Nguyễn Văn An vừa tạo đơn hàng mới cần xử lý.',
    time: '5 phút trước',
    read: false
  },
  {
    id: '2',
    type: 'order',
    title: 'Đơn chờ lấy #LD-001235',
    message: 'Đơn hàng của khách Trần Thị Bình đã sẵn sàng để giao.',
    time: '15 phút trước',
    read: false
  },
  {
    id: '3',
    type: 'system',
    title: 'Cập nhật hệ thống',
    message: 'LaundroMagic v2.0 đã được phát hành với nhiều tính năng mới.',
    time: '1 giờ trước',
    read: true
  },
  {
    id: '4',
    type: 'promotion',
    title: '🎉 Thưởng tháng 2',
    message: 'Chúc mừng! Bạn đã nhận được 200,000đ thưởng hiệu suất.',
    time: '2 giờ trước',
    read: true
  },
  {
    id: '5',
    type: 'order',
    title: 'Đánh giá mới',
    message: 'Khách hàng vừa đánh giá 5 sao cho đơn #LD-001200.',
    time: '3 giờ trước',
    read: true
  }
]

const typeConfig = {
  order: { icon: '📋', color: 'bg-blue-100' },
  system: { icon: '⚙️', color: 'bg-gray-100' },
  promotion: { icon: '🎁', color: 'bg-green-100' }
}

export default function StaffNotifications() {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState(mockNotifications)
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  const filteredNotifications = notifications.filter(n => 
    filter === 'all' || !n.read
  )

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b border-border sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)} className="p-1">
              <ArrowLeft className="text-text-primary" size={24} />
            </button>
            <div>
              <h1 className="font-semibold text-lg text-text-primary">Thông báo</h1>
              {unreadCount > 0 && (
                <p className="text-sm text-primary">{unreadCount} chưa đọc</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <button 
                onClick={markAllAsRead}
                className="p-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
              >
                <Check size={20} />
              </button>
            )}
            <button className="p-2 text-text-secondary hover:bg-gray-100 rounded-lg transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4">
          {(['all', 'unread'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                filter === tab 
                  ? 'bg-primary text-white scale-105' 
                  : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
              )}
            >
              {tab === 'all' ? 'Tất cả' : 'Chưa đọc'}
              {tab === 'unread' && unreadCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-white/20 rounded-full text-xs">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Notifications List */}
      <main className="px-4 py-4">
        <div className="space-y-3">
          {filteredNotifications.map((notification, index) => {
            const config = typeConfig[notification.type]
            return (
              <div
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={clsx(
                  'bg-white rounded-xl p-4 transition-all duration-300 cursor-pointer animate-fade-in-up',
                  !notification.read && 'border-l-4 border-primary shadow-md',
                  notification.read && 'opacity-70 hover:opacity-100'
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className={clsx('w-10 h-10 rounded-full flex items-center justify-center', config.color)}>
                    <span className="text-lg">{config.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className={clsx(
                        'font-medium text-text-primary',
                        !notification.read && 'font-semibold'
                      )}>
                        {notification.title}
                      </h3>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          deleteNotification(notification.id)
                        }}
                        className="p-1 text-text-secondary hover:text-danger rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-text-secondary mt-2">
                      {notification.time}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-4xl mb-4">🔔</div>
            <p className="text-text-secondary">
              {filter === 'unread' ? 'Không có thông báo chưa đọc' : 'Không có thông báo nào'}
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}

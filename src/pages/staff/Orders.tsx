import { useState } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import BottomNav from '../../components/staff/BottomNav'
import { recentOrders } from '../../data/mockData'
import { OrderStatus } from '../../types'
import { clsx } from 'clsx'

const statusConfig: Record<OrderStatus, { label: string; className: string; icon: string }> = {
  received: { label: 'Tiếp nhận', className: 'bg-gray-100 text-gray-700', icon: '🟡' },
  washing: { label: 'Đang giặt', className: 'bg-blue-100 text-blue-700', icon: '🔵' },
  ready: { label: 'Chờ lấy', className: 'bg-yellow-100 text-yellow-700', icon: '🟠' },
  completed: { label: 'Hoàn thành', className: 'bg-green-100 text-green-700', icon: '🟢' },
}

const tabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'received', label: 'Tiếp nhận' },
  { id: 'washing', label: 'Đang giặt' },
  { id: 'ready', label: 'Chờ lấy' },
  { id: 'completed', label: 'Xong' },
]

export default function StaffOrders() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOrders = recentOrders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-white px-4 py-4 border-b border-border sticky top-0 z-10">
        <h1 className="font-semibold text-lg text-text-primary mb-4">Danh sách đơn hàng</h1>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo mã đơn, tên khách..."
            className="input pl-10 w-full"
          />
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white px-4 py-2 border-b border-border overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                activeTab === tab.id 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <main className="px-4 py-4">
        <p className="text-sm text-text-secondary mb-3">
          {filteredOrders.length} đơn hàng
        </p>

        <div className="space-y-3">
          {filteredOrders.map(order => {
            const status = statusConfig[order.status]
            return (
              <Link 
                key={order.id}
                to={`/staff/orders/${order.id}`}
                className="block bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-text-secondary">#{order.id}</span>
                      <span className={clsx('badge', status.className)}>
                        {status.icon} {status.label}
                      </span>
                    </div>
                    <p className="font-medium text-text-primary">{order.customerName}</p>
                    <p className="text-sm text-text-secondary mt-1">{order.customerPhone}</p>
                    <p className="text-sm text-text-secondary mt-1">
                      {order.services.map(s => s.name).join(', ')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg text-primary">
                      {new Intl.NumberFormat('vi-VN').format(order.finalAmount)}đ
                    </p>
                    <p className="text-xs text-text-secondary mt-1">
                      {new Date(order.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-secondary">Không tìm thấy đơn hàng nào</p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}

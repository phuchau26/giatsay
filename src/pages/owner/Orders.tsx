import { useState } from 'react'
import { 
  Search, 
  Plus,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter
} from 'lucide-react'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import { recentOrders } from '../../data/mockData'
import { OrderStatus } from '../../types'
import { clsx } from 'clsx'

const statusConfig: Record<OrderStatus, { label: string; className: string }> = {
  received: { label: 'Tiếp nhận', className: 'badge bg-gray-100 text-gray-700' },
  washing: { label: 'Đang giặt', className: 'badge bg-blue-100 text-blue-700' },
  ready: { label: 'Chờ lấy', className: 'badge bg-yellow-100 text-yellow-700' },
  completed: { label: 'Hoàn thành', className: 'badge bg-green-100 text-green-700' },
}

const tabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'received', label: 'Tiếp nhận' },
  { id: 'washing', label: 'Đang giặt' },
  { id: 'ready', label: 'Chờ lấy' },
  { id: 'completed', label: 'Hoàn thành' },
]

export default function OwnerOrders() {
  const [activeTab, setActiveTab] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOrders = recentOrders.filter(order => {
    const matchesTab = activeTab === 'all' || order.status === activeTab
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerPhone.includes(searchTerm)
    return matchesTab && matchesSearch
  })

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <Header 
          title="Quản lý đơn hàng" 
          onSearch={setSearchTerm}
          actions={
            <div className="flex items-center gap-3">
              <button className="btn-secondary flex items-center gap-2">
                <Download size={18} />
                Xuất Excel
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Plus size={18} />
                Tạo đơn mới
              </button>
            </div>
          }
        />
        
        <main className="p-6">
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab, index) => {
              const count = tab.id === 'all' 
                ? recentOrders.length 
                : recentOrders.filter(o => o.status === tab.id).length
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap animate-fade-in',
                    activeTab === tab.id 
                      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                      : 'bg-white text-text-secondary hover:bg-gray-50'
                  )}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tab.label}
                  <span className={clsx(
                    'text-xs px-2 py-0.5 rounded-full',
                    activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
                  )}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Orders Table */}
          <div className="card overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-text-secondary border-b border-border bg-gray-50">
                    <th className="py-4 px-4 font-medium">Mã đơn</th>
                    <th className="py-4 px-4 font-medium">Khách hàng</th>
                    <th className="py-4 px-4 font-medium">Dịch vụ</th>
                    <th className="py-4 px-4 font-medium">Ngày tạo</th>
                    <th className="py-4 px-4 font-medium">Trạng thái</th>
                    <th className="py-4 px-4 font-medium text-right">Tổng tiền</th>
                    <th className="py-4 px-4 font-medium text-center">Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => {
                    const status = statusConfig[order.status]
                    return (
                      <tr 
                        key={order.id} 
                        className="border-b border-border last:border-0 hover:bg-blue-50/50 transition-colors group animate-fade-in"
                        style={{ animationDelay: `${0.3 + index * 0.03}s` }}
                      >
                        <td className="py-4 px-4">
                          <span className="font-semibold text-primary hover:underline cursor-pointer">
                            #{order.id}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <p className="font-medium text-text-primary">{order.customerName}</p>
                          <p className="text-sm text-text-secondary">{order.customerPhone}</p>
                        </td>
                        <td className="py-4 px-4 text-sm text-text-secondary max-w-xs truncate">
                          {order.services.map(s => s.name).join(', ')}
                        </td>
                        <td className="py-4 px-4 text-sm text-text-secondary">
                          {new Date(order.createdAt).toLocaleDateString('vi-VN')}
                        </td>
                        <td className="py-4 px-4">
                          <span className={status.className}>{status.label}</span>
                        </td>
                        <td className="py-4 px-4 text-right font-semibold text-text-primary">
                          {new Intl.NumberFormat('vi-VN').format(order.finalAmount)}đ
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-2 text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors">
                              <Eye size={16} />
                            </button>
                            <button className="p-2 text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg transition-colors">
                              <Edit size={16} />
                            </button>
                            <button className="p-2 text-text-secondary hover:text-danger hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-5xl mb-4">📋</div>
                <p className="text-text-secondary">Không tìm thấy đơn hàng nào</p>
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-border">
              <p className="text-sm text-text-secondary">
                Hiển thị 1-{filteredOrders.length} của {recentOrders.length} đơn hàng
              </p>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1 rounded-lg text-sm text-text-secondary hover:bg-gray-100 transition-colors">
                  Trước
                </button>
                <button className="px-3 py-1 rounded-lg text-sm bg-primary text-white">1</button>
                <button className="px-3 py-1 rounded-lg text-sm text-text-secondary hover:bg-gray-100 transition-colors">
                  2
                </button>
                <button className="px-3 py-1 rounded-lg text-sm text-text-secondary hover:bg-gray-100 transition-colors">
                  3
                </button>
                <button className="px-3 py-1 rounded-lg text-sm text-text-secondary hover:bg-gray-100 transition-colors">
                  Sau
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

import { 
  TrendingUp, 
  ShoppingBag, 
  Clock, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import StatsCard from '../../components/common/StatsCard'
import { dashboardStats, recentOrders, lowStockItems } from '../../data/mockData'
import { clsx } from 'clsx'
import { Link } from 'react-router-dom'

const weeklyRevenueData = [
  { name: 'T2', revenue: 1200000 },
  { name: 'T3', revenue: 1800000 },
  { name: 'T4', revenue: 1500000 },
  { name: 'T5', revenue: 2200000 },
  { name: 'T6', revenue: 1900000 },
  { name: 'T7', revenue: 2800000 },
  { name: 'CN', revenue: 2100000 },
]

const statusConfig = {
  received: { label: 'Tiếp nhận', className: 'badge bg-gray-100 text-gray-700' },
  washing: { label: 'Đang giặt', className: 'badge bg-blue-100 text-blue-700' },
  ready: { label: 'Chờ lấy', className: 'badge bg-yellow-100 text-yellow-700' },
  completed: { label: 'Hoàn thành', className: 'badge bg-green-100 text-green-700' },
}

export default function OwnerDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <Header title="Dashboard" />
        
        <main className="p-6">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard
              title="Đơn hôm nay"
              value={dashboardStats.todayOrders}
              icon={<ShoppingBag className="text-primary" size={24} />}
              trend={{ value: 12, isUp: true }}
              className="animate-fade-in-up stagger-1"
            />
            <StatsCard
              title="Doanh thu"
              value={`${(dashboardStats.revenue / 1000000).toFixed(1)}M`}
              icon={<TrendingUp className="text-success" size={24} />}
              trend={{ value: dashboardStats.revenueChange, isUp: true }}
              className="animate-fade-in-up stagger-2"
            />
            <StatsCard
              title="Đang xử lý"
              value={dashboardStats.processing}
              icon={<Clock className="text-warning" size={24} />}
              className="animate-fade-in-up stagger-3"
            />
            <StatsCard
              title="Hoàn thành"
              value={dashboardStats.completed}
              icon={<CheckCircle className="text-success" size={24} />}
              className="animate-fade-in-up stagger-4"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-text-primary">Doanh thu tuần này</h3>
                <select className="input w-auto text-sm py-1 px-3">
                  <option>Tuần này</option>
                  <option>Tuần trước</option>
                  <option>Tháng này</option>
                </select>
              </div>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weeklyRevenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="name" stroke="#64748B" fontSize={12} />
                    <YAxis 
                      stroke="#64748B" 
                      fontSize={12}
                      tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                    />
                    <Tooltip 
                      formatter={(value: number) => [
                        new Intl.NumberFormat('vi-VN').format(value) + 'đ',
                        'Doanh thu'
                      ]}
                      contentStyle={{
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      fill="url(#colorRevenue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Low Stock Alert */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-text-primary flex items-center gap-2">
                  <AlertTriangle className="text-warning" size={18} />
                  Cảnh báo kho
                </h3>
                <Link to="/owner/inventory" className="text-sm text-primary hover:underline">
                  Xem tất cả
                </Link>
              </div>
              <div className="space-y-3">
                {lowStockItems.map((item, index) => (
                  <div 
                    key={item.id}
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-lg animate-fade-in"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-text-primary text-sm">{item.name}</p>
                      <p className="text-xs text-danger">
                        Còn {item.currentStock} / {item.minStock} {item.unit}
                      </p>
                    </div>
                    <button className="btn-danger text-xs px-3 py-1">
                      Nhập thêm
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="card mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-text-primary">Đơn hàng gần đây</h3>
              <Link to="/owner/orders" className="text-sm text-primary hover:underline">
                Xem tất cả
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-text-secondary border-b border-border">
                    <th className="pb-3 font-medium">Mã đơn</th>
                    <th className="pb-3 font-medium">Khách hàng</th>
                    <th className="pb-3 font-medium">Dịch vụ</th>
                    <th className="pb-3 font-medium">Trạng thái</th>
                    <th className="pb-3 font-medium text-right">Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.slice(0, 5).map((order, index) => {
                    const status = statusConfig[order.status]
                    return (
                      <tr 
                        key={order.id} 
                        className="border-b border-border last:border-0 hover:bg-gray-50 transition-colors animate-fade-in"
                        style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                      >
                        <td className="py-4">
                          <span className="font-medium text-primary">#{order.id}</span>
                        </td>
                        <td className="py-4">
                          <p className="font-medium text-text-primary">{order.customerName}</p>
                          <p className="text-sm text-text-secondary">{order.customerPhone}</p>
                        </td>
                        <td className="py-4 text-sm text-text-secondary">
                          {order.services.map(s => s.name).join(', ')}
                        </td>
                        <td className="py-4">
                          <span className={status.className}>{status.label}</span>
                        </td>
                        <td className="py-4 text-right font-semibold text-text-primary">
                          {new Intl.NumberFormat('vi-VN').format(order.finalAmount)}đ
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

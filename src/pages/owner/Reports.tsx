import { useState } from 'react'
import { 
  Download, 
  Calendar, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  ShoppingBag,
  Users,
  Repeat
} from 'lucide-react'
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import { clsx } from 'clsx'

// Mock data for charts
const revenueData = [
  { name: 'T1', revenue: 4500000, orders: 120 },
  { name: 'T2', revenue: 5200000, orders: 145 },
  { name: 'T3', revenue: 4800000, orders: 132 },
  { name: 'T4', revenue: 6100000, orders: 168 },
  { name: 'T5', revenue: 5500000, orders: 155 },
  { name: 'T6', revenue: 7200000, orders: 195 },
  { name: 'T7', revenue: 6800000, orders: 182 },
]

const serviceData = [
  { name: 'Giặt thường', value: 45, color: '#3B82F6' },
  { name: 'Giặt hấp', value: 25, color: '#10B981' },
  { name: 'Giặt khô', value: 18, color: '#F59E0B' },
  { name: 'Là/Ủi', value: 12, color: '#8B5CF6' },
]

const hourlyData = [
  { hour: '8h', orders: 5 },
  { hour: '9h', orders: 12 },
  { hour: '10h', orders: 18 },
  { hour: '11h', orders: 15 },
  { hour: '12h', orders: 8 },
  { hour: '13h', orders: 10 },
  { hour: '14h', orders: 14 },
  { hour: '15h', orders: 20 },
  { hour: '16h', orders: 22 },
  { hour: '17h', orders: 25 },
  { hour: '18h', orders: 18 },
  { hour: '19h', orders: 8 },
]

const topCustomers = [
  { name: 'Nguyễn Văn An', orders: 24, revenue: 1250000 },
  { name: 'Trần Thị Bình', orders: 18, revenue: 980000 },
  { name: 'Lê Văn Cường', orders: 15, revenue: 820000 },
  { name: 'Phạm Thị Dung', orders: 12, revenue: 650000 },
  { name: 'Hoàng Văn Em', orders: 10, revenue: 540000 },
]

type DateRange = 'today' | 'week' | 'month' | 'year'

export default function OwnerReports() {
  const [dateRange, setDateRange] = useState<DateRange>('month')

  const stats = [
    { 
      label: 'Tổng doanh thu', 
      value: '42,350,000đ', 
      change: '+12%', 
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    { 
      label: 'Tổng đơn hàng', 
      value: '1,247', 
      change: '+8%', 
      trend: 'up',
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      label: 'Khách hàng mới', 
      value: '89', 
      change: '+15%', 
      trend: 'up',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      label: 'Tỷ lệ quay lại', 
      value: '68%', 
      change: '-2%', 
      trend: 'down',
      icon: Repeat,
      color: 'bg-orange-100 text-orange-600'
    },
  ]

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <Header 
          title="Báo cáo & Thống kê" 
          showSearch={false}
          actions={
            <div className="flex items-center gap-3">
              {/* Date Range Selector */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                {(['today', 'week', 'month', 'year'] as DateRange[]).map((range) => (
                  <button
                    key={range}
                    onClick={() => setDateRange(range)}
                    className={clsx(
                      'px-3 py-1.5 text-sm rounded-md transition-all duration-200',
                      dateRange === range 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {range === 'today' ? 'Hôm nay' : 
                     range === 'week' ? 'Tuần' : 
                     range === 'month' ? 'Tháng' : 'Năm'}
                  </button>
                ))}
              </div>
              
              <button className="btn-secondary flex items-center gap-2">
                <Download size={18} />
                Xuất báo cáo
              </button>
            </div>
          }
        />
        
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className={clsx('p-3 rounded-xl', stat.color)}>
                    <stat.icon size={22} />
                  </div>
                  <div className={clsx(
                    'flex items-center gap-1 text-sm font-medium',
                    stat.trend === 'up' ? 'text-success' : 'text-danger'
                  )}>
                    {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-2xl font-bold text-text-primary mt-4">{stat.value}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <div className="lg:col-span-2 card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-semibold text-text-primary mb-6">Doanh thu theo thời gian</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
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
                      tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
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

            {/* Service Distribution */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-text-primary mb-6">Phân bố dịch vụ</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {serviceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            {/* Hourly Orders */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-semibold text-text-primary mb-6">Đơn hàng theo giờ</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="hour" stroke="#64748B" fontSize={12} />
                    <YAxis stroke="#64748B" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Bar 
                      dataKey="orders" 
                      fill="#3B82F6" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Customers */}
            <div className="card animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="font-semibold text-text-primary mb-6">Top khách hàng</h3>
              <div className="space-y-4">
                {topCustomers.map((customer, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={clsx(
                      'w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm',
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 
                      index === 2 ? 'bg-amber-700' : 'bg-gray-300'
                    )}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-text-primary">{customer.name}</p>
                      <p className="text-sm text-text-secondary">{customer.orders} đơn hàng</p>
                    </div>
                    <p className="font-semibold text-text-primary">
                      {new Intl.NumberFormat('vi-VN').format(customer.revenue)}đ
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

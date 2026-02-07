import { useState } from 'react'
import { 
  Plus,
  Search,
  AlertTriangle,
  Package,
  TrendingDown,
  Edit,
  Trash2,
  Download
} from 'lucide-react'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import { clsx } from 'clsx'

interface InventoryItem {
  id: string
  name: string
  icon: string
  category: string
  currentStock: number
  minStock: number
  unit: string
  unitPrice: number
  lastRestocked: string
}

const inventoryItems: InventoryItem[] = [
  { id: '1', name: 'Nước giặt Omo', icon: '🧴', category: 'Chất tẩy', currentStock: 45, minStock: 20, unit: 'lít', unitPrice: 85000, lastRestocked: '2026-02-01' },
  { id: '2', name: 'Nước xả Comfort', icon: '🌸', category: 'Làm mềm', currentStock: 30, minStock: 15, unit: 'lít', unitPrice: 75000, lastRestocked: '2026-02-03' },
  { id: '3', name: 'Bột tẩy trắng', icon: '✨', category: 'Chất tẩy', currentStock: 8, minStock: 10, unit: 'kg', unitPrice: 120000, lastRestocked: '2026-01-25' },
  { id: '4', name: 'Nước hoa quần áo', icon: '🌺', category: 'Hương liệu', currentStock: 12, minStock: 5, unit: 'chai', unitPrice: 45000, lastRestocked: '2026-02-05' },
  { id: '5', name: 'Bao bì đóng gói', icon: '📦', category: 'Vật liệu', currentStock: 200, minStock: 50, unit: 'cái', unitPrice: 2000, lastRestocked: '2026-02-04' },
  { id: '6', name: 'Móc áo', icon: '🧥', category: 'Vật liệu', currentStock: 3, minStock: 30, unit: 'cái', unitPrice: 5000, lastRestocked: '2026-01-20' },
]

const categories = ['Tất cả', 'Chất tẩy', 'Làm mềm', 'Hương liệu', 'Vật liệu']

export default function OwnerInventory() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('Tất cả')

  const filteredItems = inventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'Tất cả' || item.category === category
    return matchesSearch && matchesCategory
  })

  const lowStockCount = inventoryItems.filter(item => item.currentStock <= item.minStock).length
  const totalValue = inventoryItems.reduce((sum, item) => sum + item.currentStock * item.unitPrice, 0)

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <Header 
          title="Quản lý kho hóa chất" 
          onSearch={setSearchTerm}
          actions={
            <div className="flex items-center gap-3">
              <button className="btn-secondary flex items-center gap-2">
                <Download size={18} />
                Xuất báo cáo
              </button>
              <button className="btn-primary flex items-center gap-2">
                <Plus size={18} />
                Nhập hàng
              </button>
            </div>
          }
        />
        
        <main className="p-6">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Tổng mặt hàng', value: inventoryItems.length, icon: Package, color: 'bg-blue-100 text-blue-600' },
              { label: 'Giá trị kho', value: `${(totalValue / 1000000).toFixed(1)}M`, icon: Package, color: 'bg-green-100 text-green-600' },
              { label: 'Sắp hết hàng', value: lowStockCount, icon: TrendingDown, color: 'bg-yellow-100 text-yellow-600', alert: lowStockCount > 0 },
              { label: 'Hết hàng', value: inventoryItems.filter(i => i.currentStock === 0).length, icon: AlertTriangle, color: 'bg-red-100 text-red-600' },
            ].map((stat, index) => (
              <div 
                key={index}
                className={clsx(
                  'card flex items-center gap-4 animate-fade-in-up',
                  stat.alert && 'ring-2 ring-warning ring-offset-2'
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center', stat.color)}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {categories.map((cat, index) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={clsx(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap animate-fade-in',
                  category === cat 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-text-secondary hover:bg-gray-50'
                )}
                style={{ animationDelay: `${0.3 + index * 0.05}s` }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Inventory Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item, index) => {
              const isLowStock = item.currentStock <= item.minStock
              const stockPercentage = Math.min((item.currentStock / item.minStock) * 100, 100)
              
              return (
                <div 
                  key={item.id}
                  className={clsx(
                    'card group animate-fade-in-up hover:shadow-lg transition-all',
                    isLowStock && 'ring-2 ring-warning'
                  )}
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{item.name}</h3>
                        <span className="badge bg-gray-100 text-gray-600">{item.category}</span>
                      </div>
                    </div>
                    {isLowStock && (
                      <span className="badge-warning animate-pulse-subtle">
                        <AlertTriangle size={12} /> Sắp hết
                      </span>
                    )}
                  </div>

                  {/* Stock Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-text-secondary">Tồn kho</span>
                      <span className={clsx(
                        'font-semibold',
                        isLowStock ? 'text-warning' : 'text-text-primary'
                      )}>
                        {item.currentStock} / {item.minStock} {item.unit}
                      </span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className={clsx(
                          'progress-bar-fill',
                          isLowStock ? 'bg-warning' : 'bg-success'
                        )}
                        style={{ width: `${stockPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-border text-sm">
                    <div>
                      <p className="text-text-secondary">Đơn giá</p>
                      <p className="font-medium text-text-primary">
                        {new Intl.NumberFormat('vi-VN').format(item.unitPrice)}đ/{item.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-secondary">Nhập cuối</p>
                      <p className="font-medium text-text-primary">
                        {new Date(item.lastRestocked).toLocaleDateString('vi-VN')}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <button className="btn-primary flex-1 text-sm py-2">
                      <Plus size={16} className="inline mr-1" />
                      Nhập thêm
                    </button>
                    <button className="btn-ghost px-3 py-2">
                      <Edit size={16} />
                    </button>
                    <button className="btn-ghost px-3 py-2 text-danger hover:bg-red-50">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-5xl mb-4">📦</div>
              <p className="text-text-secondary">Không tìm thấy mặt hàng nào</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

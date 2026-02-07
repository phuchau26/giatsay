import { useState } from 'react'
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Phone, 
  Mail, 
  Star,
  Edit,
  Trash2,
  Eye,
  UserPlus
} from 'lucide-react'
import Sidebar from '../../components/common/Sidebar'
import Header from '../../components/common/Header'
import { staffList } from '../../data/mockData'
import { clsx } from 'clsx'

const statusConfig = {
  active: { label: 'Đang làm', className: 'badge-success' },
  inactive: { label: 'Tạm nghỉ', className: 'badge-warning' },
}

export default function OwnerStaff() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredStaff = staffList.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.phone.includes(searchTerm)
  )

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1">
        <Header 
          title="Quản lý nhân viên" 
          onSearch={setSearchTerm}
          actions={
            <button 
              onClick={() => setShowAddModal(true)}
              className="btn-primary flex items-center gap-2"
            >
              <UserPlus size={18} />
              Thêm nhân viên
            </button>
          }
        />
        
        <main className="p-6">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Tổng nhân viên', value: staffList.length, icon: '👥', color: 'bg-blue-100' },
              { label: 'Đang làm việc', value: staffList.filter(s => s.status === 'active').length, icon: '✅', color: 'bg-green-100' },
              { label: 'Tạm nghỉ', value: staffList.filter(s => s.status === 'inactive').length, icon: '⏸️', color: 'bg-yellow-100' },
              { label: 'Đánh giá TB', value: '4.7 ⭐', icon: '⭐', color: 'bg-purple-100' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="card flex items-center gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center', stat.color)}>
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Staff Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredStaff.map((staff, index) => {
              const status = statusConfig[staff.status as keyof typeof statusConfig]
              
              return (
                <div 
                  key={staff.id}
                  className="card-interactive group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
                          {staff.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </div>
                        <div className={clsx(
                          'absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white',
                          staff.status === 'active' ? 'bg-success' : 'bg-gray-400'
                        )} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{staff.name}</h3>
                        <span className={clsx('badge', status.className)}>{status.label}</span>
                      </div>
                    </div>
                    <button className="p-1 text-text-secondary hover:text-text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical size={18} />
                    </button>
                  </div>

                  {/* Contact */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Phone size={14} />
                      <span>{staff.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                      <Mail size={14} />
                      <span>{staff.email}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-t border-border">
                    <div className="text-center">
                      <p className="text-lg font-bold text-text-primary">{staff.ordersCompleted}</p>
                      <p className="text-xs text-text-secondary">Đơn hoàn thành</p>
                    </div>
                    <div className="text-center border-x border-border">
                      <div className="flex items-center justify-center gap-1">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-lg font-bold text-text-primary">{staff.rating}</span>
                      </div>
                      <p className="text-xs text-text-secondary">Đánh giá</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-text-primary">{staff.monthlyOrders}</p>
                      <p className="text-xs text-text-secondary">Đơn tháng</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    <button className="btn-secondary flex-1 text-sm py-2 flex items-center justify-center gap-1">
                      <Eye size={14} />
                      Chi tiết
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

          {filteredStaff.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-5xl mb-4">👥</div>
              <p className="text-text-secondary">Không tìm thấy nhân viên nào</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

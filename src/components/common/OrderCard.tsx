import { Order, OrderStatus } from '../../types'
import { clsx } from 'clsx'
import { ChevronRight, Phone } from 'lucide-react'

export interface OrderCardProps {
  readonly order: Order
  readonly compact?: boolean
  readonly onClick?: () => void
}

const statusConfig: Record<OrderStatus, { label: string; className: string; icon: string }> = {
  received: { label: 'Tiếp nhận', className: 'bg-gray-100 text-gray-700', icon: '🟡' },
  washing: { label: 'Đang giặt', className: 'bg-blue-100 text-blue-700', icon: '🔵' },
  ready: { label: 'Chờ lấy', className: 'bg-yellow-100 text-yellow-700', icon: '🟠' },
  completed: { label: 'Hoàn thành', className: 'bg-green-100 text-green-700', icon: '🟢' },
}

export default function OrderCard({ order, compact = false, onClick }: OrderCardProps) {
  const status = statusConfig[order.status]
  const formattedAmount = new Intl.NumberFormat('vi-VN').format(order.finalAmount) + 'đ'
  
  const timeAgo = getTimeAgo(order.createdAt)

  if (compact) {
    return (
      <div 
        onClick={onClick}
        className="card hover:shadow-hover transition-shadow cursor-pointer"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-text-secondary">#{order.id}</span>
              <span className={clsx('badge', status.className)}>
                {status.icon} {status.label}
              </span>
            </div>
            <p className="font-medium text-text-primary mt-1">{order.customerName}</p>
            <p className="text-sm text-text-secondary">
              {order.services.map(s => s.name).join(', ')}
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-text-primary">{formattedAmount}</p>
            <p className="text-xs text-text-secondary mt-1">{timeAgo}</p>
          </div>
          <ChevronRight className="text-text-secondary ml-2" size={20} />
        </div>
      </div>
    )
  }

  return (
    <div 
      onClick={onClick}
      className="card hover:shadow-hover transition-shadow cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-sm font-medium text-text-secondary">#{order.id}</span>
          <p className="text-lg font-semibold text-text-primary mt-1">{order.customerName}</p>
          <div className="flex items-center gap-2 mt-1 text-sm text-text-secondary">
            <Phone size={14} />
            <span>{order.customerPhone}</span>
          </div>
        </div>
        <span className={clsx('badge', status.className)}>
          {status.icon} {status.label}
        </span>
      </div>

      <div className="border-t border-border pt-4">
        <div className="space-y-2">
          {order.services.map((service) => (
            <div key={service.id} className="flex justify-between text-sm">
              <span className="text-text-secondary">
                {service.name} × {service.quantity} {service.type === 'weight' ? 'kg' : 'món'}
              </span>
              <span className="text-text-primary">
                {new Intl.NumberFormat('vi-VN').format(service.totalPrice)}đ
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-4 pt-4 border-t border-border">
          <span className="font-medium">Tổng cộng</span>
          <span className="font-bold text-lg text-primary">{formattedAmount}</span>
        </div>
      </div>

      {order.notes && (
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800">📝 {order.notes}</p>
        </div>
      )}
    </div>
  )
}

function getTimeAgo(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 60) return `${diffMins} phút trước`
  if (diffHours < 24) return `${diffHours} giờ trước`
  return `${diffDays} ngày trước`
}

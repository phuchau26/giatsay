import { ArrowLeft, Phone, Printer, CheckCircle } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'
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

const statusSteps: OrderStatus[] = ['received', 'washing', 'ready', 'completed']

export default function OrderDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  
  // Find order by id
  const order = recentOrders.find(o => o.id === id) || recentOrders[0]
  const currentStepIndex = statusSteps.indexOf(order.status)

  const getNextStatus = () => {
    const nextIndex = currentStepIndex + 1
    if (nextIndex < statusSteps.length) {
      return statusSteps[nextIndex]
    }
    return null
  }

  const nextStatus = getNextStatus()

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center gap-4 border-b border-border sticky top-0 z-10">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft className="text-text-primary" size={24} />
        </button>
        <div>
          <h1 className="font-semibold text-text-primary">Chi tiết đơn hàng</h1>
          <p className="text-sm text-text-secondary">#{order.id}</p>
        </div>
      </header>

      <main className="px-4 py-4 space-y-4">
        {/* Status Timeline */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between">
            {statusSteps.map((step, index) => {
              const isCompleted = index < currentStepIndex
              const isCurrent = index === currentStepIndex
              const stepConfig = statusConfig[step]
              
              return (
                <div key={step} className="flex flex-col items-center flex-1">
                  <div className={clsx(
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm',
                    isCompleted ? 'bg-success text-white' :
                    isCurrent ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                  )}>
                    {isCompleted ? '✓' : index + 1}
                  </div>
                  <p className={clsx(
                    'text-xs mt-2 text-center',
                    isCurrent ? 'text-primary font-medium' : 'text-text-secondary'
                  )}>
                    {stepConfig.label}
                  </p>
                  {index < statusSteps.length - 1 && (
                    <div className={clsx(
                      'absolute w-full h-0.5 top-4 left-1/2',
                      isCompleted ? 'bg-success' : 'bg-gray-200'
                    )} />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
              <span className="text-primary font-bold">
                {order.customerName.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-text-primary">{order.customerName}</p>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Phone size={14} />
                <span>{order.customerPhone}</span>
              </div>
              {order.customerAddress && (
                <p className="text-sm text-text-secondary mt-1">{order.customerAddress}</p>
              )}
            </div>
            <a 
              href={`tel:${order.customerPhone}`}
              className="w-10 h-10 bg-success text-white rounded-full flex items-center justify-center"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-xl p-4">
          <h3 className="font-semibold text-text-primary mb-3">Chi tiết dịch vụ</h3>
          <div className="space-y-2">
            {order.services.map(service => (
              <div key={service.id} className="flex justify-between text-sm">
                <span className="text-text-secondary">
                  {service.name}: {service.quantity} {service.type === 'weight' ? 'kg' : 'món'} × {new Intl.NumberFormat('vi-VN').format(service.unitPrice)}đ
                </span>
                <span className="text-text-primary font-medium">
                  {new Intl.NumberFormat('vi-VN').format(service.totalPrice)}đ
                </span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border mt-4 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Tạm tính</span>
              <span>{new Intl.NumberFormat('vi-VN').format(order.totalAmount)}đ</span>
            </div>
            {order.discount && (
              <div className="flex justify-between text-sm text-success">
                <span>Giảm giá</span>
                <span>-{new Intl.NumberFormat('vi-VN').format(order.discount)}đ</span>
              </div>
            )}
            <div className="flex justify-between pt-2 border-t border-dashed border-border">
              <span className="font-semibold">Tổng cộng</span>
              <span className="font-bold text-xl text-primary">
                {new Intl.NumberFormat('vi-VN').format(order.finalAmount)}đ
              </span>
            </div>
          </div>
        </div>

        {/* Timing */}
        <div className="bg-white rounded-xl p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-text-secondary">Ngày tạo</p>
              <p className="font-medium text-text-primary">
                {new Date(order.createdAt).toLocaleDateString('vi-VN')} - {new Date(order.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
            <div>
              <p className="text-text-secondary">Hẹn lấy</p>
              <p className="font-medium text-text-primary">
                {new Date(order.pickupDate).toLocaleDateString('vi-VN')} - {new Date(order.pickupDate).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
          {order.notes && (
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">📝 {order.notes}</p>
            </div>
          )}
        </div>
      </main>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-border p-4 space-y-3">
        <div className="flex gap-3">
          <a 
            href={`tel:${order.customerPhone}`}
            className="btn-secondary flex-1 flex items-center justify-center gap-2"
          >
            <Phone size={18} className="text-success" />
            Gọi khách
          </a>
          <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
            <Printer size={18} />
            In phiếu
          </button>
        </div>
        {nextStatus && (
          <button className="btn-primary w-full flex items-center justify-center gap-2">
            {order.status === 'ready' ? (
              <>
                <CheckCircle size={18} />
                Hoàn thành đơn
              </>
            ) : (
              <>
                Chuyển sang: {statusConfig[nextStatus].label} →
              </>
            )}
          </button>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

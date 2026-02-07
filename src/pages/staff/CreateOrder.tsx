import { useState } from 'react'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../../components/staff/BottomNav'
import { services } from '../../data/mockData'
import { clsx } from 'clsx'

interface OrderItem {
  serviceId: string
  quantity: number
}

export default function CreateOrder() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [selectedServices, setSelectedServices] = useState<OrderItem[]>([])
  const [notes, setNotes] = useState('')

  const toggleService = (serviceId: string) => {
    if (selectedServices.find(s => s.serviceId === serviceId)) {
      setSelectedServices(selectedServices.filter(s => s.serviceId !== serviceId))
    } else {
      setSelectedServices([...selectedServices, { serviceId, quantity: 1 }])
    }
  }

  const updateQuantity = (serviceId: string, quantity: number) => {
    setSelectedServices(
      selectedServices.map(s => 
        s.serviceId === serviceId ? { ...s, quantity: Math.max(1, quantity) } : s
      )
    )
  }

  const calculateTotal = () => {
    return selectedServices.reduce((sum, item) => {
      const service = services.find(s => s.id === item.serviceId)
      return sum + (service?.price || 0) * item.quantity
    }, 0)
  }

  const handleSubmit = () => {
    // Submit order logic
    alert('Đơn hàng đã được tạo thành công!')
    navigate('/staff/orders')
  }

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center gap-4 border-b border-border sticky top-0 z-10">
        <button onClick={() => step > 1 ? setStep(step - 1) : navigate(-1)}>
          <ArrowLeft className="text-text-primary" size={24} />
        </button>
        <div className="flex-1">
          <h1 className="font-semibold text-text-primary">Tạo đơn hàng mới</h1>
          <p className="text-sm text-text-secondary">Bước {step}/3</p>
        </div>
      </header>

      {/* Progress */}
      <div className="px-4 py-4 bg-white border-b border-border">
        <div className="flex gap-2">
          {[1, 2, 3].map(s => (
            <div 
              key={s}
              className={clsx(
                'h-1 flex-1 rounded-full',
                s <= step ? 'bg-primary' : 'bg-gray-200'
              )}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="px-4 py-4">
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="font-semibold text-text-primary">Thông tin khách hàng</h2>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Tên khách hàng *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Nhập tên khách hàng"
                className="input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Số điện thoại *
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="0901234567"
                className="input"
              />
            </div>

            <button 
              onClick={() => setStep(2)}
              disabled={!customerName || !customerPhone}
              className="btn-primary w-full mt-6 disabled:opacity-50"
            >
              Tiếp tục <ChevronRight className="inline" size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h2 className="font-semibold text-text-primary">Chọn dịch vụ</h2>
            
            <div className="grid grid-cols-2 gap-3">
              {services.map(service => {
                const selected = selectedServices.find(s => s.serviceId === service.id)
                return (
                  <button
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={clsx(
                      'p-4 rounded-xl text-left transition-all',
                      selected 
                        ? 'bg-primary text-white ring-2 ring-primary' 
                        : 'bg-white text-text-primary hover:bg-gray-50'
                    )}
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <p className="font-medium mt-2">{service.name}</p>
                    <p className={clsx('text-sm', selected ? 'text-blue-100' : 'text-text-secondary')}>
                      {new Intl.NumberFormat('vi-VN').format(service.price)}đ/{service.unit}
                    </p>
                  </button>
                )
              })}
            </div>

            {selectedServices.length > 0 && (
              <div className="bg-white rounded-xl p-4 mt-4">
                <h3 className="font-medium text-text-primary mb-3">Số lượng</h3>
                {selectedServices.map(item => {
                  const service = services.find(s => s.id === item.serviceId)
                  return (
                    <div key={item.serviceId} className="flex items-center justify-between py-2">
                      <span className="text-text-primary">{service?.name}</span>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.serviceId, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.serviceId, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            <button 
              onClick={() => setStep(3)}
              disabled={selectedServices.length === 0}
              className="btn-primary w-full mt-6 disabled:opacity-50"
            >
              Tiếp tục <ChevronRight className="inline" size={18} />
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h2 className="font-semibold text-text-primary">Xác nhận đơn hàng</h2>
            
            {/* Customer Info */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-medium text-text-primary mb-2">Thông tin khách hàng</h3>
              <p className="text-text-secondary">{customerName}</p>
              <p className="text-text-secondary">{customerPhone}</p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="font-medium text-text-primary mb-3">Chi tiết dịch vụ</h3>
              {selectedServices.map(item => {
                const service = services.find(s => s.id === item.serviceId)
                const total = (service?.price || 0) * item.quantity
                return (
                  <div key={item.serviceId} className="flex justify-between py-2 border-b border-border last:border-0">
                    <span className="text-text-primary">
                      {service?.name} × {item.quantity} {service?.unit}
                    </span>
                    <span className="font-medium">
                      {new Intl.NumberFormat('vi-VN').format(total)}đ
                    </span>
                  </div>
                )
              })}
              <div className="flex justify-between pt-4 mt-2 border-t border-border">
                <span className="font-semibold text-text-primary">Tổng cộng</span>
                <span className="font-bold text-xl text-primary">
                  {new Intl.NumberFormat('vi-VN').format(calculateTotal())}đ
                </span>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Ghi chú (tùy chọn)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Nhập ghi chú cho đơn hàng..."
                className="input min-h-24"
              />
            </div>

            <button 
              onClick={handleSubmit}
              className="btn-primary w-full mt-6"
            >
              ✓ Xác nhận tạo đơn
            </button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}

import { useState, useEffect } from 'react'
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react'
import { clsx } from 'clsx'

type ToastType = 'success' | 'error' | 'warning' | 'info'

interface Toast {
  id: string
  type: ToastType
  message: string
  duration?: number
}

interface ToastContainerProps {
  readonly toasts: Toast[]
  readonly onRemove: (id: string) => void
}

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertTriangle,
  info: Info
}

const colorMap = {
  success: 'bg-success text-white',
  error: 'bg-danger text-white',
  warning: 'bg-warning text-white',
  info: 'bg-primary text-white'
}

function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const [isExiting, setIsExiting] = useState(false)
  const Icon = iconMap[toast.type]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => onRemove(toast.id), 300)
    }, toast.duration || 4000)

    return () => clearTimeout(timer)
  }, [toast.id, toast.duration, onRemove])

  const handleClose = () => {
    setIsExiting(true)
    setTimeout(() => onRemove(toast.id), 300)
  }

  return (
    <div
      className={clsx(
        'flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg transition-all duration-300',
        colorMap[toast.type],
        isExiting ? 'opacity-0 translate-x-full' : 'opacity-100 translate-x-0 animate-slide-in-right'
      )}
    >
      <Icon size={20} />
      <p className="flex-1 text-sm font-medium">{toast.message}</p>
      <button 
        onClick={handleClose}
        className="p-1 hover:bg-white/20 rounded transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-[100] space-y-2 max-w-sm">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  )
}

// Hook for using toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (type: ToastType, message: string, duration?: number) => {
    const id = Date.now().toString()
    setToasts(prev => [...prev, { id, type, message, duration }])
  }

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  const toast = {
    success: (message: string) => addToast('success', message),
    error: (message: string) => addToast('error', message),
    warning: (message: string) => addToast('warning', message),
    info: (message: string) => addToast('info', message),
  }

  return { toasts, toast, removeToast }
}

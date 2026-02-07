import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { clsx } from 'clsx'

interface ModalProps {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly title?: string
  readonly children: React.ReactNode
  readonly size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-2xl'
}

export default function Modal({ isOpen, onClose, title, children, size = 'md' }: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(onClose, 200)
  }

  if (!isOpen) return null

  return (
    <div 
      className={clsx(
        'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-200',
        isAnimating ? 'opacity-100' : 'opacity-0'
      )}
      onClick={handleClose}
    >
      <div 
        className={clsx(
          'bg-white rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-hidden transition-all duration-200',
          sizeClasses[size],
          isAnimating ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <h2 className="text-lg font-semibold text-text-primary">{title}</h2>
            <button 
              onClick={handleClose}
              className="p-1 text-text-secondary hover:text-text-primary hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        )}
        
        {/* Content */}
        <div className="overflow-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  )
}

// Confirmation Dialog
interface ConfirmDialogProps {
  readonly isOpen: boolean
  readonly onClose: () => void
  readonly onConfirm: () => void
  readonly title: string
  readonly message: string
  readonly confirmText?: string
  readonly cancelText?: string
  readonly variant?: 'danger' | 'warning' | 'primary'
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Xác nhận',
  cancelText = 'Hủy',
  variant = 'primary'
}: ConfirmDialogProps) {
  const buttonClass = {
    danger: 'btn-danger',
    warning: 'btn bg-warning text-white hover:opacity-90',
    primary: 'btn-primary'
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="p-6 text-center">
        <div className={clsx(
          'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
          variant === 'danger' ? 'bg-red-100' : variant === 'warning' ? 'bg-yellow-100' : 'bg-primary-light'
        )}>
          <span className="text-3xl">
            {variant === 'danger' ? '⚠️' : variant === 'warning' ? '❓' : 'ℹ️'}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary mb-6">{message}</p>
        <div className="flex gap-3">
          <button onClick={onClose} className="btn-secondary flex-1">
            {cancelText}
          </button>
          <button onClick={onConfirm} className={clsx(buttonClass[variant], 'flex-1')}>
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  )
}

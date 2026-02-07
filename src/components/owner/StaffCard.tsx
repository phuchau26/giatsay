import { Staff } from '../../types'
import { clsx } from 'clsx'
import { Phone, Star, Pencil, Eye } from 'lucide-react'

export interface StaffCardProps {
  readonly staff: Staff
  readonly onView?: () => void
  readonly onEdit?: () => void
}

export default function StaffCard({ staff, onView, onEdit }: StaffCardProps) {
  const initials = staff.name.split(' ').map(n => n[0]).join('').slice(-2)

  return (
    <div className="card hover:shadow-hover transition-shadow">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className={clsx(
          'w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg',
          staff.status === 'active' ? 'bg-primary' : 'bg-gray-400'
        )}>
          {initials}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-text-primary">{staff.name}</h3>
            <span className={clsx(
              'badge',
              staff.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            )}>
              {staff.status === 'active' ? 'Đang làm việc' : 'Nghỉ phép'}
            </span>
          </div>
          
          <p className="text-sm text-text-secondary mt-1">{staff.role}</p>
          
          <div className="flex items-center gap-4 mt-2 text-sm text-text-secondary">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>{staff.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-500" />
              <span>{staff.rating}</span>
            </div>
          </div>

          <p className="text-sm text-text-secondary mt-2">
            {staff.ordersCompleted} đơn hoàn thành
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button 
            onClick={onView}
            className="p-2 text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg"
          >
            <Eye size={18} />
          </button>
          <button 
            onClick={onEdit}
            className="p-2 text-text-secondary hover:text-primary hover:bg-primary-light rounded-lg"
          >
            <Pencil size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}

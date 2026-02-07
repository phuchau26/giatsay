import { InventoryItem, StockStatus } from '../../types'
import { clsx } from 'clsx'
import { Pencil, Trash2 } from 'lucide-react'

export interface InventoryTableProps {
  readonly items: InventoryItem[]
  readonly onEdit?: (item: InventoryItem) => void
  readonly onDelete?: (item: InventoryItem) => void
}

const statusConfig: Record<StockStatus, { label: string; className: string; icon: string }> = {
  'in-stock': { label: 'Đủ hàng', className: 'bg-green-100 text-green-700', icon: '✅' },
  'low-stock': { label: 'Sắp hết', className: 'bg-yellow-100 text-yellow-700', icon: '⚠️' },
  'out-of-stock': { label: 'Hết hàng', className: 'bg-red-100 text-red-700', icon: '❌' },
}

export default function InventoryTable({ items, onEdit, onDelete }: InventoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-background">
            <th className="text-left py-3 px-4 font-semibold text-text-secondary text-sm">Tên sản phẩm</th>
            <th className="text-left py-3 px-4 font-semibold text-text-secondary text-sm">Loại</th>
            <th className="text-left py-3 px-4 font-semibold text-text-secondary text-sm">Số lượng</th>
            <th className="text-left py-3 px-4 font-semibold text-text-secondary text-sm">Đơn vị</th>
            <th className="text-left py-3 px-4 font-semibold text-text-secondary text-sm">Ngưỡng</th>
            <th className="text-left py-3 px-4 font-semibold text-text-secondary text-sm">Trạng thái</th>
            <th className="text-left py-3 px-4 font-semibold text-text-secondary text-sm">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const status = statusConfig[item.status]
            return (
              <tr 
                key={item.id} 
                className={clsx(
                  'border-b border-border hover:bg-gray-50',
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                )}
              >
                <td className="py-3 px-4 font-medium text-text-primary">{item.name}</td>
                <td className="py-3 px-4 text-text-secondary">{item.category}</td>
                <td className="py-3 px-4">
                  <span className={clsx(
                    'font-medium',
                    item.status === 'out-of-stock' ? 'text-danger' : 
                    item.status === 'low-stock' ? 'text-warning' : 'text-text-primary'
                  )}>
                    {item.quantity}
                  </span>
                </td>
                <td className="py-3 px-4 text-text-secondary">{item.unit}</td>
                <td className="py-3 px-4 text-text-secondary">{item.alertThreshold}</td>
                <td className="py-3 px-4">
                  <span className={clsx('badge', status.className)}>
                    {status.icon} {status.label}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => onEdit?.(item)}
                      className="p-1.5 text-text-secondary hover:text-primary hover:bg-primary-light rounded"
                    >
                      <Pencil size={16} />
                    </button>
                    <button 
                      onClick={() => onDelete?.(item)}
                      className="p-1.5 text-text-secondary hover:text-danger hover:bg-red-50 rounded"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

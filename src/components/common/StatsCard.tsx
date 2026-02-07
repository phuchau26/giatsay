import { clsx } from 'clsx'

interface StatsCardProps {
  readonly title: string
  readonly value: string | number
  readonly icon: React.ReactNode
  readonly trend?: {
    value: number
    isUp: boolean
  }
  readonly className?: string
}

export default function StatsCard({ title, value, icon, trend, className = '' }: StatsCardProps) {
  return (
    <div className={clsx('card group hover:shadow-hover transition-all duration-300', className)}>
      <div className="flex items-start justify-between">
        <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform">
          {icon}
        </div>
        {trend && (
          <span className={clsx(
            'flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full',
            trend.isUp ? 'bg-green-100 text-success' : 'bg-red-100 text-danger'
          )}>
            {trend.isUp ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-text-primary mt-4 group-hover:scale-105 transition-transform origin-left">{value}</p>
      <p className="text-sm text-text-secondary mt-1">{title}</p>
    </div>
  )
}

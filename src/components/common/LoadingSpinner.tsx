import React from 'react'
import { clsx } from 'clsx'

interface LoadingSpinnerProps {
  readonly size?: 'sm' | 'md' | 'lg'
  readonly color?: 'primary' | 'white' | 'secondary'
  readonly className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-10 h-10 border-3'
}

const colorClasses = {
  primary: 'border-primary border-t-transparent',
  white: 'border-white border-t-transparent',
  secondary: 'border-text-secondary border-t-transparent'
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}: LoadingSpinnerProps) {
  return (
    <div 
      className={clsx(
        'rounded-full animate-spin',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  )
}

// Full page loading
export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center animate-fade-in">
        <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
          <span className="text-3xl">🧺</span>
        </div>
        <LoadingSpinner size="lg" />
        <p className="text-text-secondary mt-4">Đang tải...</p>
      </div>
    </div>
  )
}

// Skeleton loaders
export function SkeletonCard() {
  return (
    <div className="card space-y-4 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
      <div className="h-8 bg-gray-200 rounded w-1/4" />
    </div>
  )
}

export function SkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="card flex gap-4 animate-pulse">
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="h-6 bg-gray-200 rounded w-20" />
        </div>
      ))}
    </div>
  )
}

export function SkeletonTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="space-y-2 animate-pulse">
      <div className="h-10 bg-gray-200 rounded" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-14 bg-gray-100 rounded" />
      ))}
    </div>
  )
}

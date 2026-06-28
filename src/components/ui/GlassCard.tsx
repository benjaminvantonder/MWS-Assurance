import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        'card-flat p-6 gradient-border',
        hover && 'card',
        className
      )}
    >
      {children}
    </div>
  )
}

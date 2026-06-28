import { type ButtonHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center font-medium transition-all duration-300 gpu cursor-pointer rounded-xl',
        'hover:scale-[1.02] active:scale-[0.98]',
        {
          'bg-gradient-to-r from-gold-700 to-gold-600 text-white hover:from-gold-600 hover:to-gold-500 shadow-md hover:shadow-lg hover:shadow-gold-500/20':
            variant === 'primary',
          'bg-white text-[#1c1917] border border-[#e7e5e4] hover:border-[#d4a853] hover:shadow-md hover:shadow-gold-500/10 transition-all':
            variant === 'secondary',
          'text-gold-700 hover:text-gold-800 hover:bg-gold-500/10':
            variant === 'ghost',
          'border border-gold-500/40 text-gold-700 hover:bg-gold-500/10 hover:border-gold-500/60':
            variant === 'outline',
        },
        {
          'px-5 py-2.5 text-sm': size === 'sm',
          'px-7 py-3.5 text-base': size === 'md',
          'px-9 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

import { cn } from '@/utils/cn'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  className?: string
  align?: 'center' | 'left'
}

export function SectionTitle({ subtitle, title, description, className, align = 'center' }: SectionTitleProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-14 md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {subtitle && (
        <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-gold-700 mb-5 font-medium bg-gold-500/10 px-3 py-1.5 rounded-full">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#1c1917] mb-6 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-relaxed text-[#78716c] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

import { useEffect, useRef } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
}

export function ParallaxSection({ children, className = '', speed = 0.3 }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect()
          const scrolled = window.innerHeight - rect.top
          if (scrolled > 0 && rect.top < window.innerHeight) {
            const yPos = (rect.top * speed)
            el.style.transform = `translate3d(0, ${yPos}px, 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`gpu ${className}`}>
      {children}
    </div>
  )
}

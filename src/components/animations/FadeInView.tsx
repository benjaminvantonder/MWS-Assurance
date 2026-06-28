import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface FadeInViewProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function FadeInView({ children, className = '', delay = 0, direction = 'up' }: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`
          el.style.opacity = '1'
          el.style.transform = 'translate(0, 0)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, prefersReduced])

  const getInitialTransform = () => {
    if (prefersReduced) return 'none'
    switch (direction) {
      case 'up': return 'translateY(40px)'
      case 'down': return 'translateY(-40px)'
      case 'left': return 'translateX(40px)'
      case 'right': return 'translateX(-40px)'
      default: return 'none'
    }
  }

  return (
    <div
      ref={ref}
      className={`gpu transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: prefersReduced ? 1 : 0,
        transform: prefersReduced ? 'none' : getInitialTransform(),
      }}
    >
      {children}
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AnimatedGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const grain = () => {
      const imageData = ctx.createImageData(w, h)
      const data = imageData.data
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 20
        data[i] = noise
        data[i + 1] = noise
        data[i + 2] = noise
        data[i + 3] = 8
      }
      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(grain)
    }

    grain()

    const handleResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w
      canvas.height = h
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [prefersReduced])

  if (prefersReduced) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'overlay', opacity: 0.25 }}
    />
  )
}

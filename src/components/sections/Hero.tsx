import { useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { FadeInView } from '@/components/animations/FadeInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import site from '@/data/site.json'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = window.innerWidth
    let h = window.innerHeight
    canvas.width = w
    canvas.height = h

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    const count = Math.min(60, Math.floor((w * h) / 20000))

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      })
    }

    let animationId: number

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(212, 168, 83, ${p.alpha})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 140) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(212, 168, 83, ${0.08 * (1 - dist / 140)})`
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fafaf9] via-white to-[#f5f5f0]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212,168,83,0.3) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl animate-pulseGlow" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-gold-500/5 blur-3xl animate-pulseGlow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 container-narrow text-center pt-24">
        <FadeInView delay={100}>
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold-700 mb-8 font-medium bg-gold-500/10 px-4 py-2 rounded-full">
            Established {site.established}
          </span>
        </FadeInView>

        <FadeInView delay={200}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-[#1c1917] mb-6 leading-[1.05] tracking-tight">
            {site.name.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="gradient-text">{site.name.split(' ').slice(2).join(' ')}</span>
          </h1>
        </FadeInView>

        <FadeInView delay={300}>
          <p className="text-xl md:text-2xl text-[#78716c] mb-3 font-light tracking-wide max-w-2xl mx-auto">
            &ldquo;{site.tagline}&rdquo;
          </p>
        </FadeInView>

        <FadeInView delay={350}>
          <p className="text-sm text-[#a8a29e] mb-10 tracking-wider uppercase">
            Authorised Financial Services Provider &mdash; FSP {site.fspLicense}
          </p>
        </FadeInView>

        <FadeInView delay={400} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#services">
            <Button variant="primary" size="lg">
              Explore Services <ChevronRight size={18} className="ml-1" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </a>
        </FadeInView>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-[#a8a29e]">
          <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#a8a29e] to-transparent" />
        </div>
      </div>
    </section>
  )
}

interface GlowEffectProps {
  className?: string
  color?: string
  size?: string
  opacity?: number
}

export function GlowEffect({ className = '', color = 'rgba(212, 168, 83, 0.15)', size = '600px', opacity = 1 }: GlowEffectProps) {
  return (
    <div
      className={`pointer-events-none fixed ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity,
        transform: 'translateZ(0)',
      }}
    />
  )
}

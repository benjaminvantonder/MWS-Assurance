import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import site from '@/data/site.json'
import { cn } from '@/utils/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/#')) {
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-500',
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            M
          </div>
          <div>
            <span className={cn(
              'font-heading text-base font-semibold transition-colors',
              scrolled ? 'text-[#1c1917]' : 'text-[#1c1917]'
            )}>
              {site.shortName}
            </span>
            <span className="block text-[9px] tracking-[0.15em] uppercase text-[#a8a29e]">
              Established 2000
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {site.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className={cn(
                'px-4 py-2 text-sm rounded-lg transition-colors',
                scrolled
                  ? 'text-[#78716c] hover:text-[#1c1917] hover:bg-black/[0.04]'
                  : 'text-[#78716c] hover:text-[#1c1917] hover:bg-black/[0.04]'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-[#1c1917] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          'md:hidden glass-nav border-t border-black/5 overflow-hidden',
          mobileOpen ? 'animate-slideDown' : 'animate-slideUp'
        )}
        style={{ animationFillMode: 'both' }}
      >
        <div className="container-narrow py-4 flex flex-col gap-1">
          {site.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
              className="px-4 py-3 text-[#78716c] hover:text-[#1c1917] hover:bg-black/[0.03] rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={`
        group relative w-11 h-11 flex items-center justify-center
        rounded-full bg-white text-[#1c1917] shadow-md
        border border-black/8
        transition-all duration-500 ease-out
        hover:bg-gold-500 hover:text-white hover:border-gold-500 hover:shadow-lg hover:shadow-gold-500/20
        ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}
      `}
    >
      <ArrowUp size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span className="absolute right-full mr-3 px-2 py-1 text-xs rounded-lg bg-white text-[#1c1917] border border-black/8 shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Back to top
      </span>
    </button>
  )
}

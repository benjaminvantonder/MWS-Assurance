import { MessageCircle } from 'lucide-react'
import site from '@/data/site.json'

export function WhatsAppButton() {
  const waNumber = site.whatsapp
  const message = encodeURIComponent('Hi! I would like to enquire about your financial services.')

  return (
    <a
      href={`https://wa.me/${waNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        group relative w-11 h-11 flex items-center justify-center
        rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white
        shadow-md shadow-green-500/20
        transition-all duration-500 ease-out
        hover:scale-110 hover:shadow-lg hover:shadow-green-500/30
      "
    >
      <MessageCircle size={18} className="transition-transform duration-300 group-hover:scale-110" />
      <span className="absolute right-full mr-3 px-2 py-1 text-xs rounded-lg bg-white text-[#1c1917] border border-black/8 shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us
      </span>
    </a>
  )
}

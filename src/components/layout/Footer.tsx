import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'
import site from '@/data/site.json'

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e7e5e4]">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-16 pb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold-600 to-gold-800 flex items-center justify-center text-white font-bold shadow-sm">
                M
              </div>
              <div>
                <span className="text-[#1c1917] font-heading text-xl font-semibold">{site.shortName}</span>
                <span className="block text-[10px] tracking-[0.15em] uppercase text-[#a8a29e]">FSP 5182</span>
              </div>
            </div>
            <p className="text-[#78716c] text-sm leading-relaxed max-w-xs">
              Authorised Financial Services Provider. Creating and Protecting Wealth since 2000.
            </p>
          </div>

          <div>
            <h4 className="text-[#1c1917] font-heading text-base font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${site.phone}`} className="flex items-center gap-3 text-[#78716c] hover:text-gold-700 transition-colors text-sm group">
                  <Phone size={15} className="shrink-0 text-gold-600 group-hover:text-gold-700 transition-colors" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-[#78716c] hover:text-gold-700 transition-colors text-sm group">
                  <Mail size={15} className="shrink-0 text-gold-600 group-hover:text-gold-700 transition-colors" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#78716c] text-sm">
                <MapPin size={15} className="shrink-0 mt-0.5 text-gold-600" />
                <span>{site.address.street}, {site.address.suburb}<br />{site.address.city}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1c1917] font-heading text-base font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {site.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#78716c] hover:text-gold-700 transition-colors text-sm inline-flex items-center gap-1.5 group"
                  >
                    <ChevronRight size={12} className="text-gold-500 group-hover:translate-x-0.5 transition-transform" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-8 border-t border-[#e7e5e4] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a8a29e]">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>FSP License No: {site.fspLicense} | Council for Medical Schemes: {site.medicalSchemeBroker}</p>
        </div>
      </div>
    </footer>
  )
}

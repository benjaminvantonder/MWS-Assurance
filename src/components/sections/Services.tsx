import { Shield, CalendarCheck, BarChart3, HeartPulse } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'
import { SectionTitle } from '@/components/ui/SectionTitle'
import services from '@/data/services.json'

const iconMap: Record<string, React.ElementType> = {
  Shield, CalendarCheck, BarChart3, HeartPulse,
}

export function Services() {
  return (
    <section id="services" className="section-padding relative bg-[#fafaf9]">
      <div className="container-narrow">
        <FadeInView>
          <SectionTitle
            subtitle="MWS Assurance and Investment Group — FSP5182"
            title="Our Services"
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <FadeInView key={service.id} delay={100 * i}>
                <a href={service.link} className="block group">
                  <div className="card p-6 md:p-8 gradient-border">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0 group-hover:bg-gold-500/15 transition-all duration-500">
                        {Icon && <Icon size={22} className="text-gold-700" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-heading text-[#1c1917] mb-2 md:mb-3 group-hover:text-gold-800 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#78716c] leading-relaxed mb-3 md:mb-4">
                          {service.description}
                        </p>
                        <ul className="space-y-1.5">
                          {service.features.slice(0, 4).map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs text-[#a8a29e]">
                              <span className="w-1 h-1 rounded-full bg-gold-500/60 shrink-0" />
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </a>
              </FadeInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Calendar, ChevronRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import news from '@/data/news.json'

export function News() {
  return (
    <section id="news" className="section-padding relative bg-white">
      <div className="container-narrow">
        <FadeInView>
          <SectionTitle
            subtitle="MWS Assurance and Investment Group — FSP5182"
            title="Latest News"
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <FadeInView key={item.id} delay={100 * i}>
              <GlassCard className="h-full flex flex-col">
                <div className="aspect-video rounded-xl overflow-hidden mb-5 bg-[#f5f5f0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#a8a29e] mb-3">
                  <Calendar size={12} />
                  {new Date(item.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
                  <span className="text-[#d4a853]/50">|</span>
                  <span className="text-gold-700 font-medium">{item.category}</span>
                </div>
                <h3 className="text-lg font-heading text-[#1c1917] mb-2 leading-tight">{item.title}</h3>
                <p className="text-[#78716c] text-sm leading-relaxed flex-1">{item.excerpt}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-gold-700 text-sm mt-4 hover:text-gold-800 transition-colors font-medium">
                  Read more <ChevronRight size={14} />
                </a>
              </GlassCard>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

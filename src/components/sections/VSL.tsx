import { Play, ChevronRight } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'
import { Button } from '@/components/ui/Button'

export function VSL() {
  return (
    <section className="section-padding relative bg-[#fafaf9]">
      <div className="container-narrow">
        <FadeInView>
          <div className="text-center mb-12">
            <span className="inline-flex items-center text-xs tracking-[0.2em] uppercase text-gold-700 mb-5 font-medium bg-gold-500/10 px-3 py-1.5 rounded-full">
              Video Presentation
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-[#1c1917] mb-6 leading-tight">
              See How We Can Help You
            </h2>
            <p className="text-[#78716c] text-lg max-w-xl mx-auto">
              Watch our presentation to learn how MWS Group creates and protects wealth for our clients.
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={200}>
          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden card-flat gradient-border">
              <div className="aspect-video bg-gradient-to-br from-[#f5f5f0] to-[#e7e5e4] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold-500/10 flex items-center justify-center group cursor-pointer hover:bg-gold-500/20 transition-all duration-500">
                    <Play size={32} className="text-gold-700 ml-1 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-[#78716c] text-sm">Watch Video</p>
                </div>
              </div>
              <div className="p-6 border-t border-[#e7e5e4]">
                <h3 className="text-lg font-heading text-[#1c1917] mb-2">MWS Group &mdash; Your Financial Partner</h3>
                <p className="text-[#78716c] text-sm leading-relaxed">
                  Discover how our comprehensive financial services can help you achieve your financial goals. From insurance to investments, we provide tailored solutions.
                </p>
                <a href="#contact">
                  <Button variant="primary" size="sm" className="mt-4">
                    Book a Consultation <ChevronRight size={16} className="ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}

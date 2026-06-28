import { SEOHead } from '@/components/seo/SEOHead'
import { FadeInView } from '@/components/animations/FadeInView'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { CalendarCheck, ChevronRight, Check } from 'lucide-react'

const features = [
  'Retirement annuity planning',
  'Company provident and pension funds',
  'Will drafting and estate planning',
  'Preservation funds',
  'Living annuities',
  'Tax-efficient retirement solutions',
]

export function Retirement() {
  useScrollToTop([])

  return (
    <>
      <SEOHead
        title="Retirement Planning & Wills"
        description="Professional retirement planning and will drafting services from MWS Assurance and Investment Group. FSP5182."
      />
      <div className="pt-32 pb-20 bg-white">
        <div className="container-narrow">
          <FadeInView>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center">
                <CalendarCheck size={32} className="text-gold-700" />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-gold-700 font-medium">Retirement</span>
                <h1 className="text-4xl md:text-5xl font-heading text-[#1c1917]">Retirement Planning & Wills</h1>
              </div>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <FadeInView delay={100}>
                <div className="space-y-10">
                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Retirement Planning</h2>
                    <p className="text-[#78716c] leading-relaxed mb-4">
                      With only 6% of South Africans retiring financially independent, professional retirement planning is essential. Our products include company owned provident and pension funds, retirement annuities, and preservation funds designed to help you secure a comfortable retirement.
                    </p>
                    <p className="text-[#78716c] leading-relaxed">
                      We work with you to understand your retirement goals and create a tailored plan that maximises tax efficiency while building the nest egg you need.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Wills & Estate Planning</h2>
                    <p className="text-[#78716c] leading-relaxed">
                      A properly drafted will ensures your assets are distributed according to your wishes. We assist with will drafting and estate planning to protect your legacy and provide for your loved ones.
                    </p>
                  </section>
                </div>
              </FadeInView>
            </div>

            <div>
              <FadeInView delay={200}>
                <GlassCard className="sticky top-28">
                  <h3 className="text-lg font-heading text-[#1c1917] mb-4">Our Services</h3>
                  <ul className="space-y-3 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#78716c]">
                        <Check size={16} className="text-gold-700 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="/#contact">
                    <Button variant="primary" className="w-full">
                      Book a Consultation <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </a>
                </GlassCard>
              </FadeInView>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

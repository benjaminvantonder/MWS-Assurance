import { SEOHead } from '@/components/seo/SEOHead'
import { FadeInView } from '@/components/animations/FadeInView'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { HeartPulse, ChevronRight, Check } from 'lucide-react'

const features = [
  'Private medical scheme options',
  'Hospital plans',
  'Comprehensive medical cover',
  'Gap cover recommendations',
  'Scheme switching assistance',
  'Accredited Healthcare Broker BR5694',
]

export function Medical() {
  useScrollToTop([])

  return (
    <>
      <SEOHead
        title="Medical Schemes"
        description="Private medical cover options from MWS Assurance and Investment Group. Accredited Healthcare Broker BR5694."
      />
      <div className="pt-32 pb-20 bg-white">
        <div className="container-narrow">
          <FadeInView>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center">
                <HeartPulse size={32} className="text-gold-700" />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-gold-700 font-medium">Healthcare</span>
                <h1 className="text-4xl md:text-5xl font-heading text-[#1c1917]">Medical Schemes</h1>
              </div>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <FadeInView delay={100}>
                <div className="space-y-10">
                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Private Medical Cover</h2>
                    <p className="text-[#78716c] leading-relaxed mb-4">
                      MWS offers their clients private medical cover options tailored to your healthcare needs. As an accredited Healthcare Broker registered with the Council for Medical Schemes (BR5694), we have the expertise to guide you through the complexities of medical scheme selection.
                    </p>
                    <p className="text-[#78716c] leading-relaxed">
                      We understand that healthcare is a personal matter. Our approach is to understand your specific healthcare needs and budget, then recommend the scheme and option that provides the best value and coverage for you and your family.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Why Choose MWS for Healthcare?</h2>
                    <ul className="space-y-4">
                      <li className="card-light rounded-xl p-5 gradient-border">
                        <h3 className="text-[#1c1917] font-heading mb-1">Expert Guidance</h3>
                        <p className="text-[#78716c] text-sm">Accredited healthcare brokers with in-depth knowledge of South African medical schemes.</p>
                      </li>
                      <li className="card-light rounded-xl p-5 gradient-border">
                        <h3 className="text-[#1c1917] font-heading mb-1">Personalised Recommendations</h3>
                        <p className="text-[#78716c] text-sm">We assess your healthcare needs and budget to find the right cover.</p>
                      </li>
                      <li className="card-light rounded-xl p-5 gradient-border">
                        <h3 className="text-[#1c1917] font-heading mb-1">Ongoing Support</h3>
                        <p className="text-[#78716c] text-sm">Assistance with claims, scheme switching, and annual reviews.</p>
                      </li>
                    </ul>
                  </section>
                </div>
              </FadeInView>
            </div>

            <div>
              <FadeInView delay={200}>
                <GlassCard className="sticky top-28">
                  <h3 className="text-lg font-heading text-[#1c1917] mb-4">What We Offer</h3>
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
                      Get Medical Cover <ChevronRight size={16} className="ml-1" />
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

import { SEOHead } from '@/components/seo/SEOHead'
import { FadeInView } from '@/components/animations/FadeInView'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { Shield, ChevronRight, Check } from 'lucide-react'

const features = [
  'Life insurance with lump sum payouts',
  'Disability cover – lump sum or monthly income',
  'Income protection (tax deductible premiums)',
  'Business insurance: buy & sell agreements',
  'Key person insurance',
  'Dreaded disease / critical illness cover',
  'Supporting legal agreements prepared internally',
]

export function LifeInsurance() {
  useScrollToTop([])

  return (
    <>
      <SEOHead
        title="Life, Disability & Business Insurance"
        description="Comprehensive life, disability, and business insurance solutions from MWS Assurance and Investment Group. FSP5182."
      />
      <div className="pt-32 pb-20 bg-white">
        <div className="container-narrow">
          <FadeInView>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center">
                <Shield size={32} className="text-gold-700" />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-gold-700 font-medium">Insurance</span>
                <h1 className="text-4xl md:text-5xl font-heading text-[#1c1917]">Life, Disability & Business Insurance</h1>
              </div>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <FadeInView delay={100}>
                <div className="space-y-10">
                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Life Insurance</h2>
                    <p className="text-[#78716c] leading-relaxed mb-4">
                      Life Insurance is a cost effective way to guarantee liquidity for beneficiaries. It provides a lump sum to settle commitments such as outstanding mortgage bonds, children&apos;s education and estate taxes in the event of the death, disability or a dreaded disease of the insured.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Disability Insurance</h2>
                    <p className="text-[#78716c] leading-relaxed mb-4">
                      We specialise in insuring our professional and self-employed clients. This insurance will be paid either in a lump sum or on monthly basis should our client become temporarily or permanently disabled. Income protection policies are tax deductible in the hands of the policy holder and lump sum disability claims are paid out tax-free.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Business Insurance</h2>
                    <p className="text-[#78716c] leading-relaxed mb-4">
                      This complex field includes shareholder buy &amp; sell agreements, key person insurance. The use of life insurance cover would be paid out to protect business partners share interests. Supporting legal agreements are prepared internally to reduce cost and delay.
                    </p>
                  </section>
                </div>
              </FadeInView>
            </div>

            <div>
              <FadeInView delay={200}>
                <GlassCard className="sticky top-28">
                  <h3 className="text-lg font-heading text-[#1c1917] mb-4">What&apos;s Covered</h3>
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
                      Get a Quote <ChevronRight size={16} className="ml-1" />
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

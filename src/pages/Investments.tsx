import { SEOHead } from '@/components/seo/SEOHead'
import { FadeInView } from '@/components/animations/FadeInView'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { BarChart3, ChevronRight, Check } from 'lucide-react'

const features = [
  'Unit trusts (local and offshore)',
  'Endowment policies (tax-free after 5–10 years)',
  'Lump sum and monthly investment plans',
  'Retirement annuities with tax benefits',
  'Offshore investment products',
  'Administrated by FSB-approved institutions',
]

export function Investments() {
  useScrollToTop([])

  return (
    <>
      <SEOHead
        title="Local & Offshore Investments"
        description="Tax-efficient investment solutions including unit trusts, endowments, and offshore investments from MWS Group. FSP5182."
      />
      <div className="pt-32 pb-20 bg-white">
        <div className="container-narrow">
          <FadeInView>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center">
                <BarChart3 size={32} className="text-gold-700" />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-gold-700 font-medium">Investments</span>
                <h1 className="text-4xl md:text-5xl font-heading text-[#1c1917]">Local & Offshore Investments</h1>
              </div>
            </div>
          </FadeInView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <FadeInView delay={100}>
                <div className="space-y-10">
                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Investment Solutions</h2>
                    <p className="text-[#78716c] leading-relaxed mb-4">
                      Certain insurance and investment products such as retirement annuities and endowments and unit trusts receive favourable tax treatment and are ideal long and medium-term savings vehicles. Whether you&apos;re saving for children&apos;s education, alterations to your home, or that dream holiday, we have solutions.
                    </p>
                    <p className="text-[#78716c] leading-relaxed">
                      Investments range from local based investments to offshore products. These investments are administrated by FSB approved life and investment companies, ensuring your assets are in safe hands.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-heading text-[#1c1917] mb-4">Investment Options</h2>
                    <ul className="space-y-4">
                      <li className="card-light rounded-xl p-5 gradient-border">
                        <h3 className="text-[#1c1917] font-heading mb-1">Unit Trusts</h3>
                        <p className="text-[#78716c] text-sm">Investments linked to different sectors of the market. They pay clients in dividends or interest.</p>
                      </li>
                      <li className="card-light rounded-xl p-5 gradient-border">
                        <h3 className="text-[#1c1917] font-heading mb-1">Endowment Policies</h3>
                        <p className="text-[#78716c] text-sm">Tax-free investments paid out after a 5 or 10 year term.</p>
                      </li>
                      <li className="card-light rounded-xl p-5 gradient-border">
                        <h3 className="text-[#1c1917] font-heading mb-1">Retirement Annuities</h3>
                        <p className="text-[#78716c] text-sm">Long-term savings vehicles with significant tax advantages.</p>
                      </li>
                    </ul>
                  </section>
                </div>
              </FadeInView>
            </div>

            <div>
              <FadeInView delay={200}>
                <GlassCard className="sticky top-28">
                  <h3 className="text-lg font-heading text-[#1c1917] mb-4">Key Benefits</h3>
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
                      Start Investing <ChevronRight size={16} className="ml-1" />
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

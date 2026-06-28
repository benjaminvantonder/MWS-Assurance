import { FadeInView } from '@/components/animations/FadeInView'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function About() {
  return (
    <section id="about" className="section-padding relative bg-white">
      <div className="container-narrow">
        <FadeInView>
          <SectionTitle
            subtitle="MWS Assurance and Investment Group — FSP5182"
            title="About Us"
            description="MWS Assurance and Investment Group is an Authorised Financial Services Provider 5182, registered with the South African Financial Services Board & Council for Medical Schemes BR5694. We strive to offer the best advice, service, and rewarding relationships with our clients in the Financial Services Industry."
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInView delay={100}>
            <div className="card-flat p-8 gradient-border card">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-5 text-gold-700 text-2xl font-heading">01</div>
              <h3 className="text-xl font-heading text-[#1c1917] mb-3">MWS Introduction</h3>
              <p className="text-[#78716c] text-sm leading-relaxed">
                Mark Spencer founded MWS in 2000, building a practice that places the client first. The practice prides itself on user-friendly, competent service rooted in ethical principles.
              </p>
              <a href="/images/MWS_Introduction.pdf" className="inline-flex items-center gap-2 text-gold-700 text-sm mt-4 hover:text-gold-800 transition-colors font-medium" target="_blank" rel="noopener noreferrer">
                Read the introduction →
              </a>
            </div>
          </FadeInView>

          <FadeInView delay={200}>
            <div className="card-flat p-8 gradient-border card">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-5 text-gold-700 text-2xl font-heading">02</div>
              <h3 className="text-xl font-heading text-[#1c1917] mb-3">What We Do</h3>
              <p className="text-[#78716c] text-sm leading-relaxed">
                Our Products and Services range from Life Insurance, Retirement Planning to any Financial need you have. Each product is customised to suit your individual needs.
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={300}>
            <div className="card-flat p-8 gradient-border card">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-5 text-gold-700 text-2xl font-heading">03</div>
              <h3 className="text-xl font-heading text-[#1c1917] mb-3">Mission Statement</h3>
              <p className="text-[#78716c] text-sm leading-relaxed italic">
                &ldquo;Creating and Protecting Wealth&rdquo;, through sound ethical principles. MWS strives to deliver the most incredible service to our clients.
              </p>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

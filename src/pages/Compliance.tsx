import { SEOHead } from '@/components/seo/SEOHead'
import { FadeInView } from '@/components/animations/FadeInView'
import { GlassCard } from '@/components/ui/GlassCard'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { Shield, ExternalLink } from 'lucide-react'
import site from '@/data/site.json'

const categories = [
  'Long-Term Insurance subcategory A',
  'Short-Term Insurance Personal Lines',
  'Long-Term Insurance subcategory B1',
  'Long-Term Insurance subcategory B2',
  'Long-Term Insurance subcategory B2-A',
  'Long-Term Insurance subcategory B1-A',
  'Short-Term Insurance Personal Lines A1',
  'Long-Term Insurance subcategory C',
  'Retail Pension Benefits',
  'Short-Term Insurance Commercial Lines',
  'Pension Funds Benefits',
  'Participatory interests in a collective investment scheme',
  'Health Service Benefits',
]

export function Compliance() {
  useScrollToTop([])

  return (
    <>
      <SEOHead
        title="Compliance"
        description="MWS Assurance and Investment Group compliance information. FSP5182 – Authorised Financial Services Provider."
      />
      <div className="pt-32 pb-20 bg-white">
        <div className="container-narrow">
          <FadeInView>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 flex items-center justify-center">
                <Shield size={32} className="text-gold-700" />
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase text-gold-700 font-medium">Regulatory</span>
                <h1 className="text-4xl md:text-5xl font-heading text-[#1c1917]">Compliance</h1>
              </div>
            </div>
          </FadeInView>

          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <FadeInView delay={100}>
              <GlassCard>
                <h2 className="text-xl font-heading text-[#1c1917] mb-4">FSP Licence Categories</h2>
                <p className="text-[#78716c] text-sm mb-6">
                  {site.name} FSP {site.fspLicense} is authorized to provide advice and intermediary services in following categories:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {categories.map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm text-[#78716c]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </GlassCard>
            </FadeInView>

            <FadeInView delay={200}>
              <GlassCard>
                <h2 className="text-xl font-heading text-[#1c1917] mb-4">Contact Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] text-[#a8a29e] uppercase tracking-wider mb-1">Head of Private Body</p>
                    <p className="text-[#1c1917]">Celestis Brokers Services (Pty Ltd)</p>
                    <p className="text-[#78716c] text-sm">PO Box 856, Howard Place, 7450</p>
                    <p className="text-[#78716c] text-sm">Tel: 0860 103 807</p>
                    <a href="https://www.masthead.co.za" target="_blank" rel="noopener noreferrer" className="text-gold-700 text-sm hover:text-gold-700 transition-colors inline-flex items-center gap-1">
                      www.masthead.co.za <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </GlassCard>
            </FadeInView>

            <FadeInView delay={300}>
              <GlassCard>
                <h2 className="text-xl font-heading text-[#1c1917] mb-4">Complaints Procedure</h2>
                <p className="text-[#78716c] text-sm mb-4">
                  If you have a complaint, please contact us directly in the first instance. If we cannot resolve the matter, you may contact:
                </p>
                <div className="space-y-5">
                  <div className="pl-4 border-l-2 border-gold-500/20">
                    <h3 className="text-[#1c1917] font-heading text-sm mb-1">Ombudsman for Long Term Insurance</h3>
                    <p className="text-[#78716c] text-sm">Private Bag X45, Claremont 7735</p>
                    <p className="text-[#78716c] text-sm">Tel: 021 657-5000</p>
                  </div>
                  <div className="pl-4 border-l-2 border-gold-500/20">
                    <h3 className="text-[#1c1917] font-heading text-sm mb-1">FAIS Ombud</h3>
                    <p className="text-[#78716c] text-sm">PO Box 74571, Lynnwood Ridge 0040</p>
                    <p className="text-[#78716c] text-sm">Tel: 0860 324 766</p>
                    <p className="text-[#78716c] text-sm">Email: info@faisombud.co.za</p>
                    <a href="https://www.faisombud.co.za" target="_blank" rel="noopener noreferrer" className="text-gold-700 text-sm hover:text-gold-700 transition-colors inline-flex items-center gap-1">
                      www.faisombud.co.za <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="pl-4 border-l-2 border-gold-500/20">
                    <h3 className="text-[#1c1917] font-heading text-sm mb-1">Registrar for Long Term Insurance</h3>
                    <p className="text-[#78716c] text-sm">Financial Services Board, PO Box 35655, Menlo Park 0102</p>
                    <p className="text-[#78716c] text-sm">Tel: 012 428-8000</p>
                  </div>
                </div>
              </GlassCard>
            </FadeInView>
          </div>
        </div>
      </div>
    </>
  )
}

import { Phone, Mail, MapPin } from 'lucide-react'
import { FadeInView } from '@/components/animations/FadeInView'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import site from '@/data/site.json'

export function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-white">
      <div className="container-narrow">
        <FadeInView>
          <SectionTitle
            subtitle="MWS Assurance and Investment Group — FSP5182"
            title="Contact Us"
            description="Get in touch for a consultation. We're here to help you create and protect your wealth."
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeInView delay={100}>
            <div className="space-y-5">
              <div className="card-flat rounded-2xl p-6 gradient-border card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-gold-700" />
                </div>
                <div>
                  <p className="text-[11px] text-[#a8a29e] uppercase tracking-[0.15em] mb-1 font-medium">Phone</p>
                  <a href={`tel:${site.phone}`} className="text-[#1c1917] hover:text-gold-800 transition-colors font-medium">
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="card-flat rounded-2xl p-6 gradient-border card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-gold-700" />
                </div>
                <div>
                  <p className="text-[11px] text-[#a8a29e] uppercase tracking-[0.15em] mb-1 font-medium">Email</p>
                  <a href={`mailto:${site.email}`} className="text-[#1c1917] hover:text-gold-800 transition-colors font-medium">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="card-flat rounded-2xl p-6 gradient-border card flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-gold-700" />
                </div>
                <div>
                  <p className="text-[11px] text-[#a8a29e] uppercase tracking-[0.15em] mb-1 font-medium">Address</p>
                  <p className="text-[#1c1917] text-sm">
                    {site.address.street}, {site.address.suburb}<br />
                    {site.address.city}, {site.address.postalCode}
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={200}>
            <GlassCard>
              <h3 className="text-lg font-heading text-[#1c1917] mb-6">Send us a message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] placeholder:text-[#a8a29e] text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] placeholder:text-[#a8a29e] text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] placeholder:text-[#a8a29e] text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#fafaf9] border border-[#e7e5e4] text-[#1c1917] placeholder:text-[#a8a29e] text-sm focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all resize-none"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </GlassCard>
          </FadeInView>
        </div>
      </div>
    </section>
  )
}

import { FadeInView } from '@/components/animations/FadeInView'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GlassCard } from '@/components/ui/GlassCard'
import team from '@/data/team.json'

export function Team() {
  return (
    <section id="team" className="section-padding relative bg-white">
      <div className="container-narrow">
        <FadeInView>
          <SectionTitle
            subtitle="MWS Assurance and Investment Group — FSP5182"
            title="Our Team"
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <FadeInView key={member.id} delay={100 * i}>
              <GlassCard className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-gold-500/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-heading text-[#1c1917] mb-1">{member.name}</h3>
                <p className="text-gold-700 text-sm font-medium mb-4">{member.position}</p>
                <p className="text-[#78716c] text-sm leading-relaxed">{member.bio}</p>
                {'accolades' in member && member.accolades && (
                  <div className="mt-5 pt-5 border-t border-[#e7e5e4]">
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#a8a29e] mb-3 font-medium">Awards & Recognition</p>
                    <ul className="space-y-1.5">
                      {(member.accolades as string[]).map((a) => (
                        <li key={a} className="text-xs text-[#78716c]">{a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlassCard>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

import { FadeInView } from '@/components/animations/FadeInView'
import { SectionTitle } from '@/components/ui/SectionTitle'
import stats from '@/data/stats.json'

export function Stats() {
  const { stats: data } = stats[0]

  return (
    <section id="stats" className="section-padding relative bg-[#fafaf9]">
      <div className="container-narrow">
        <FadeInView>
          <SectionTitle
            subtitle="Retirement Statistics in South Africa"
            title="The Reality of Retirement"
            description="These statistics highlight why professional financial planning is essential."
          />
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {data.map((stat, i) => (
            <FadeInView key={stat.label} delay={100 * i}>
              <div className="card-flat rounded-2xl p-8 text-center hover:shadow-md hover:border-gold-500/20 transition-all duration-500">
                <div className="text-4xl md:text-5xl font-heading text-gold-700 mb-2">
                  {stat.value}<span className="text-xl">{stat.suffix}</span>
                </div>
                <p className="text-[#78716c] text-sm leading-snug">{stat.label}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

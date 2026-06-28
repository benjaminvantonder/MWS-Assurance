import { FadeInView } from '@/components/animations/FadeInView'
import { SectionTitle } from '@/components/ui/SectionTitle'
import gallery from '@/data/gallery.json'

export function Gallery() {
  return (
    <section id="gallery" className="section-padding relative bg-[#fafaf9]">
      <div className="container-narrow">
        <FadeInView>
          <SectionTitle
            subtitle="MWS Assurance and Investment Group — FSP5182"
            title="Gallery"
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((img, i) => (
            <FadeInView key={i} delay={100 * i}>
              <div className="group relative overflow-hidden rounded-2xl card-flat aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}

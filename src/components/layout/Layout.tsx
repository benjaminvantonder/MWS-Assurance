import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from '@/components/ui/ScrollToTop'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { AnimatedGrain } from '@/components/animations/AnimatedGrain'
import { AmbientParticles } from '@/components/animations/AmbientParticles'

export function Layout() {
  return (
    <div className="relative min-h-screen bg-white text-[#292524] overflow-hidden">
      <AnimatedGrain />
      <AmbientParticles />

      <div className="fixed top-1/3 -left-48 w-72 h-72 rounded-full bg-gold-500/[0.03] blur-[100px] pointer-events-none" />
      <div className="fixed bottom-1/3 -right-48 w-80 h-80 rounded-full bg-gold-500/[0.03] blur-[100px] pointer-events-none" />

      <Header />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        <WhatsAppButton />
        <ScrollToTop />
      </div>
    </div>
  )
}

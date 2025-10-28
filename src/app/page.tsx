import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import AchievementsSection from '@/components/sections/achievements'
import About from '@/components/sections/about'
import DocumentationSection from '@/components/sections/documentation'
import Contact from '@/components/sections/contact'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 px-6 py-16 text-white">
      <Hero />
      <Services />
      <AchievementsSection />
      <About />
      <DocumentationSection />
      <Contact />
    </div>
  )
}

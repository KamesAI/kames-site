import { Hero } from '@/components/sections/hero';
import { HeroBackground } from '@/components/sections/hero-background';
import { Services } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Wrapper relatif pour contenir le Hero et ses éléments superposés */}
      <div className="relative">
        <HeroBackground />
        <Hero />
      </div>

      {/* Reste des sections */}
      <div className="relative z-10 bg-black">
        <Services />
        <Testimonials />
        <AboutSection />
        <FAQ />
        <ContactSection />
      </div>
    </main>
  );
}
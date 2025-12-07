import { Hero } from '@/components/sections/hero';
import { HeroBackground } from '@/components/sections/hero-background';
import { StackMarquee } from '@/components/sections/stack-marquee';
import { Services } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Section Hero avec son Background animé */}
      <div className="relative">
        <HeroBackground />
        <Hero />
      </div>

      <StackMarquee />
      <Services />
      <Testimonials />
      <AboutSection />
      <FAQ />
      <ContactSection />
    </main>
  );
}
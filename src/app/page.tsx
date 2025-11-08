// src/app/page.tsx

import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ContactSection />
    </>
  )
}

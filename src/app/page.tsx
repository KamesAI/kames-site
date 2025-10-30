// src/app/page.tsx

import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/nos-services'
import { AchievementsSection } from '@/components/sections/achievements'
import { AboutSection } from '@/components/sections/notre-histoire'
import { DocumentationSection } from '@/components/sections/documentation-complete'
import { ContactSection } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <hero />

      <nos-services />

      <achievements />

      <notre-histoire />

      <documentation-complete />

      <contact />
    </>
  )
}

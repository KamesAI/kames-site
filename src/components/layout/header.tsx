import Link from 'next/link'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Logo />
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <Link href="/nos-services" className="hover:text-white">Services</Link>
          <Link href="/achievements" className="hover:text-white">Résultats</Link>
          <Link href="/notre-histoire" className="hover:text-white">Notre histoire</Link>
          <Link href="/documentation-complete" className="hover:text-white">Documentation</Link>
        </nav>
      </div>
      <Button asChild variant="gradient">
        <Link href="#contact">Parler à Kames</Link>
      </Button>
    </header>
  )
}

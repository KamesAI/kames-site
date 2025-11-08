import Link from 'next/link'
import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'

const navigation = [
  { href: '#home', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#achievements', label: 'Réalisations' },
  { href: '#about', label: 'À propos' },
  { href: '#documentation', label: 'Documentation' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label === 'Accueil' ? (
                  <span className="text-gradient">{item.label}</span>
                ) : (
                  item.label
                )}
              </Link>
            ))
          </nav>
        </div>
        <Button asChild variant="gradient" size="lg" className="shadow-[0_0_30px_rgba(245,56,160,0.35)]">
          <Link href="#contact">Contactez-nous</Link>
        </Button>
      </div>
    </header>
  )
}

'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-semibold tracking-tight">KAMES</a>

        <nav className="flex items-center gap-6 text-sm text-white/80">
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/realisations" className="hover:text-white">Réalisations</a>
          <a href="/a-propos" className="hover:text-white">À propos</a>
          <a
            href="/contact"
            className="rounded-lg border border-white/15 px-3 py-1.5 hover:bg-white/5"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

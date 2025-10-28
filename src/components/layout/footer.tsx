export default function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/10 text-white/60 text-sm bg-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Kames. Tous droits réservés.</p>
        <p className="text-white/40">Automation IA • Bordeaux / Libourne</p>
      </div>
    </footer>
  )
}

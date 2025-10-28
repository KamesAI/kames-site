import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section id="contact" className="space-y-4 rounded-2xl border border-white/10 p-6 bg-white/[0.03]">
      <h2 className="text-2xl font-semibold gradient-text">Parlez-nous de votre besoin</h2>
      <p className="text-white/70 text-sm leading-relaxed">Expliquez ce qui vous bloque aujourd'hui (qualification de leads, suivi prospects, relance, etc.). On vous répond en 24h.</p>
      <Button variant="gradient">Discuter d'un projet</Button>
    </section>
  )
}

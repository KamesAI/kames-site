export default function Services() {
  const offers = [
    'Répondeur IA 24/7',
    'Tri & Score de Leads',
    'Résumé d’appel + CRM',
    'Relances Email / SMS',
  ]
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold gradient-text">Ce que nous automatisons pour vous</h2>
      <ul className="grid md:grid-cols-2 gap-3 text-white/80 text-sm">
        {offers.map(o => (<li key={o} className="rounded-xl border border-white/10 p-4 bg-white/5">{o}</li>))}
      </ul>
    </section>
  )
}

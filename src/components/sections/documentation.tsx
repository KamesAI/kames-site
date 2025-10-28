export default function DocumentationSection() {
  const topics = [
    'Sécurité & Authentification',
    'Stack technologique',
    'Agents IA',
    'Meilleures pratiques',
  ]
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold gradient-text">Documentation</h2>
      <ul className="grid md:grid-cols-2 gap-3 text-white/80 text-sm">
        {topics.map(t => (<li key={t} className="rounded-xl border border-white/10 p-4 bg-white/5">{t}</li>))}
      </ul>
    </section>
  )
}

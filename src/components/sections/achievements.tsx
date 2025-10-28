export default function AchievementsSection() {
  const stats = [
    {label: 'Temps de réponse', value: '-80%'},
    {label: 'Leads traités automatiquement', value: '200+'},
    {label: 'Coût par lead', value: '-35%'},
  ]
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold gradient-text">Résultats clients</h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        {stats.map(s => (
          <div key={s.label} className="rounded-xl border border-white/10 p-4 bg-white/5">
            <div className="text-2xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <section className="space-y-4 relative rounded-2xl border border-white/10 p-6 bg-[radial-gradient(circle_at_20%_20%,rgba(255,179,0,0.15)_0%,rgba(0,0,0,0)_70%)]">
      <h2 className="text-2xl font-semibold gradient-text">Pourquoi Kames ?</h2>
      <p className="text-white/70 text-sm leading-relaxed">Nous construisons des systèmes IA qui travaillent pendant que vous dormez. Pas de blabla bullshit, juste des process qui tournent en prod.</p>
      <button className="text-left text-white text-sm underline decoration-[#FF6D00]">Voir la vidéo de présentation →</button>
    </section>
  )
}

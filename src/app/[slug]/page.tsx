interface BlogPageProps { params: { slug: string } }

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <section className="px-6 py-24 text-white max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold gradient-text">{params.slug}</h1>
      <p className="text-lg text-white/80">Page dynamique placeholder. Cette route servira pour des articles ou études de cas.</p>
    </section>
  )
}

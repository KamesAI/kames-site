import { notFound } from 'next/navigation';
import { achievements } from '@/lib/achievements-data';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return achievements.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const a = achievements.find((x) => x.slug === params.slug);
  return {
    title: a ? `Étude de cas : ${a.title}` : 'Étude de cas non trouvée',
    description: a?.summary,
  };
}

export default function RealisationPage({ params }: { params: { slug: string } }) {
  const a = achievements.find((x) => x.slug === params.slug);
  if (!a) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24 mx-auto md:py-32">
        {/* LIEN RETOUR */}
        <Link
          href="/"
          className="flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à l'accueil
        </Link>

        {/* LAYOUT: BARRE LATÉRALE + CONTENU */}
        <div className="flex gap-8 md:gap-12">
          {/* BARRE LATÉRALE GAUCHE - MENU VERTICAL */}
          <aside className="w-48 flex-shrink-0">
            <h3 className="text-lg font-semibold text-white mb-6">Études de cas</h3>
            <ul className="space-y-3">
              {achievements.map((cs) => (
                <li key={cs.slug}>
                  <Link
                    href={`/realisations/${cs.slug}`}
                    className={`text-sm font-medium transition-colors block ${
                      cs.slug === a.slug
                        ? 'text-[#FFB300]'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {cs.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* CONTENU PRINCIPAL */}
          <main className="flex-1 max-w-3xl">
            {/* TITRE EN DÉGRADÉ */}
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-8">
              <span className="text-gradient">{a.title}</span>
            </h1>

            {/* SECTION DÉFI */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Défi</h2>
              <p className="text-gray-400 leading-relaxed">{a.summary}</p>
            </div>

            {/* SECTION SOLUTION & RÉSULTATS */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Solution & Résultats</h2>
              <p className="text-gray-400 leading-relaxed">{a.details}</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
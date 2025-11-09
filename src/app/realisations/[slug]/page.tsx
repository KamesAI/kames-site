// src/app/realisations/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { achievements } from '@/lib/achievements-data';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
        <div className="max-w-4xl mx-auto">
          <Link
            href="/achievements"
            className="flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux réalisations
          </Link>

          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            {a.logoUrl && (
              <div className="p-4 rounded-lg bg-card">
                <Image src={a.logoUrl} alt={`Logo ${a.client}`} width={120} height={60} className="object-contain filter invert" />
              </div>
            )}
            <Badge variant="secondary">{a.client}</Badge>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gradient md:text-5xl">{a.title}</h1>

          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold">Défi</h2>
              <p className="mt-4 text-lg text-muted-foreground">{a.summary}</p>

              <h2 className="mt-12 text-2xl font-bold">Solution & Résultats</h2>
              <p className="mt-4 text-lg text-muted-foreground">{a.details}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

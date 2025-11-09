import { getAchievementBySlug, achievements } from '@/lib/achievements-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return achievements.map((achievement) => ({
    slug: achievement.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const achievement = getAchievementBySlug(params.slug);

  if (!achievement) {
    return { title: 'Étude de cas non trouvée' };
  }

  return {
    title: `Étude de cas : ${achievement.title}`,
    description: achievement.summary,
  };
}

export default function AchievementPage({ params }: Props) {
  const achievement = getAchievementBySlug(params.slug);

  if (!achievement) {
    notFound();
  }

  const logo = PlaceHolderImages.find(p => p.id === achievement.logoId);

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-24 mx-auto md:py-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/#achievements" className="flex items-center mb-8 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux réalisations
          </Link>
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            {logo && (
              <div className="p-4 rounded-lg bg-card">
                <Image
                  src={logo.imageUrl}
                  alt={`Logo de ${achievement.client}`}
                  width={120}
                  height={60}
                  className="object-contain filter invert"
                  data-ai-hint={logo.imageHint}
                />
              </div>
            )}
            <Badge variant="secondary">{achievement.client}</Badge>
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gradient md:text-5xl">
            {achievement.title}
          </h1>
          <Card className="mt-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold">Défi</h2>
              <p className="mt-4 text-lg text-muted-foreground">{achievement.summary}</p>
              
              <h2 className="mt-12 text-2xl font-bold">Solution & Résultats</h2>
              <p className="mt-4 text-lg text-muted-foreground">{achievement.details}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

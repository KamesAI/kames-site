import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { achievements } from '@/lib/achievements-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="bg-card section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Nos projets, vos succès.</span>
          </h2>
          <p className="mt-4 text-lg font-semibold text-foreground">
            Découvrez nos implémentations réussies et voyez comment nous avons aidé
            des entreprises à transformer leurs opérations avec des solutions basées sur l'IA.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {achievements.map((achievement) => {
            const logo = PlaceHolderImages.find(p => p.id === achievement.logoId);
            return (
              <Link href="/achievements" key={achievement.slug} className="block group">
                <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-[0_0_1rem_-0.25rem_hsl(var(--primary))] hover:border-primary hover:-translate-y-2">
                  <CardHeader className="flex-row items-center gap-4">
                    {logo && (
                      <div className="p-2 rounded-lg bg-muted">
                        <Image
                          src={logo.imageUrl}
                          alt={'Logo de ' + achievement.client}
                          width={80}
                          height={40}
                          className="object-contain filter invert"
                          data-ai-hint={logo.imageHint}
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl font-bold text-gradient">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{achievement.summary}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center text-sm font-semibold text-primary">
                      Voir l'étude de cas
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

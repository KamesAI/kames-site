'use client';

import { Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TESTIMONIALS = [
  {
    name: 'Claire F.',
    role: 'Psychologue clinicienne',
    quote: "Fini les SMS de rappel manuels. Kames a automatisé mes confirmations de RDV. Je gagne 2h par semaine et je n'ai plus à me soucier de cette tâche.",
    photo: '/images/photo claire.jpeg',
  },
  {
    name: 'Sébastien F.',
    role: 'Gérant, SARL Ferrera Sébastien',
    quote: "Je parle dans mon téléphone après une visite, le devis arrive dans ma boîte mail. Plus besoin de m'y mettre le soir.",
    photo: '/images/photo seb.jpeg',
  },
  {
    name: 'Edouard S.',
    role: 'Photographe & Réalisateur',
    quote: "Mes galeries photo sont livrées automatiquement. Je dépose les fichiers, le système créé par Kames fait le reste. Mes clients reçoivent tout en quelques minutes.",
    photo: '/images/photo edouard.jpeg',
  },
  {
    name: 'Raphaël K.',
    role: 'Fondateur, Studio Nova',
    quote: "Mes clients pensent parler à une humaine ! Je ne rate plus aucun appel et mon agenda se remplit seul 24/7. Une secrétaire, sans les charges.",
    photo: '', // Pas de photo disponible
  },
];

export function Testimonials() {
  return (
    <section id="realisations" className="relative py-24 px-6 max-w-7xl mx-auto border-t border-white/5 min-h-[600px] overflow-hidden">
      {/* Background image en noir et blanc */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 -z-10">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat grayscale"
          style={{
            backgroundImage: 'url(/images/night.sky.background.jpg)',
            opacity: 0.3,
          }}
        />
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Gradient fondu en haut */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none" />
        {/* Gradient fondu en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>
      
      {/* Définition du gradient pour les étoiles */}
      <svg className="w-0 h-0 absolute">
        <defs>
          <linearGradient id="testimonials-star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFB300" />
            <stop offset="50%" stopColor="#FF6D00" />
            <stop offset="100%" stopColor="#F538A0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* En-tête de section centré */}
      <div className="relative z-10 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-6 max-w-4xl mx-auto">
          Vos succès, nos projets
        </h2>
        {/* Modification ici : text-white au lieu de text-white/70 */}
        <h3 className="text-lg text-white max-w-3xl mx-auto font-light leading-relaxed">
          Découvrez nos implémentations réussies et voyez comment nous avons aidé des entreprises à transformer leurs opérations avec des solutions basées sur l'IA.
        </h3>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {TESTIMONIALS.map((testimonial, index) => {
          return (
          <div 
            key={index} 
            className="group h-full"
          >
            {/* Bordure transparente par défaut, dégradé orange -> magenta au hover */}
            <div className="testimonial-border-wrapper relative rounded-xl p-[1px] overflow-hidden h-full">
              {/* Contenu de la carte */}
              <div className="relative rounded-xl bg-black border border-white/10 group-hover:border-transparent h-full flex flex-col">
                {/* Contenu */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* En-tête avec photo, nom/titre et étoiles */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Photo en cercle à gauche */}
                    {testimonial.photo && (
                      <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden relative bg-neutral-700 border-2 border-white/20">
                        <img
                          src={encodeURI(testimonial.photo)}
                          alt={`Photo ${testimonial.name}`}
                          className={`absolute inset-0 w-full h-full object-cover object-center ${
                            index === 1 || index === 2 ? 'scale-150' : ''
                          }`}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.classList.add('bg-neutral-700');
                            }
                          }}
                        />
                      </div>
                    )}
                    {!testimonial.photo && (
                      <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden relative bg-neutral-700 border-2 border-white/20 flex items-center justify-center">
                        <span className="text-white/50 text-xs font-medium">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    
                    {/* Nom et titre au centre */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-white/70 font-light">
                        {testimonial.role}
                      </p>
                    </div>
                    
                    {/* Étoiles en haut à droite */}
                    <div className="flex gap-1 flex-shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5" style={{ fill: 'url(#testimonials-star-gradient)' }} stroke="none" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Citation en bas */}
                  <p className="text-white text-sm font-light leading-relaxed flex-1 mt-auto">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
          );
        })}
      </div>

      {/* CTA "En apprendre plus" */}
      <div className="relative z-10 flex justify-center">
        <Link href="/temoignages">
          <div className="magic-btn-container">
            <span className="magic-btn-content px-6 py-2 flex items-center gap-2 text-sm font-medium">
              En apprendre plus <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
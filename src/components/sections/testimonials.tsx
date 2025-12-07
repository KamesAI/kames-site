'use client';

import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="realisations" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      
      {/* En-tête de section centré */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gradient mb-6 max-w-4xl mx-auto">
          Nos projets, vos succès
        </h2>
        {/* Modification ici : text-white au lieu de text-white/70 */}
        <h3 className="text-lg text-white max-w-3xl mx-auto font-light leading-relaxed">
          Découvrez nos implémentations réussies et voyez comment nous avons aidé des entreprises à transformer leurs opérations avec des solutions basées sur l’IA.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="glass-card p-6 rounded-xl border border-neutral-800 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex gap-1 text-[#FFB300] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current stroke-none" />
              ))}
            </div>
            <p className="text-neutral-300 mb-6 italic font-light">
              "L'accompagnement de Kames a été décisif. Nous avons gagné 15h par semaine sur la gestion administrative."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-neutral-700 rounded-full flex-shrink-0"></div>
              <div>
                <div className="text-white text-sm font-medium">Client Partenaire</div>
                <div className="text-neutral-500 text-xs font-light">CEO, Tech Company</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
'use client';

import { Mail, User, Youtube, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-black section-padding">
      <style jsx global>{`
        /* Style de base : ligne fine grise en bas, fond transparent */
        .input-underlined {
          background-color: transparent;
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0;
          padding-left: 0;
          padding-right: 0;
          box-shadow: none;
          transition: border-color 0.3s ease;
        }

        /* Focus : La ligne du bas devient le dégradé */
        .input-underlined:focus {
          outline: none;
          border-bottom-width: 1px;
          border-image: linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%);
          border-image-slice: 1;
        }
      `}</style>

      <div className="container mx-auto px-6">
        <h2 
          style={{
            background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }} 
          className="text-5xl md:text-6xl font-bold text-center mb-6"
        >
          Travaillons ensemble pour vous faciliter le quotidien.
        </h2>
        <p className="mt-4 text-center text-lg font-medium text-white max-w-3xl mx-auto leading-relaxed">
           Vous avez un projet en tête ou souhaitez en savoir plus ? Parlons-en.
        </p>

        {/* Conteneur principal centré */}
        <div className="mt-16 max-w-4xl mx-auto space-y-20">
          
          {/* Formulaire Style Velios AI - Avec Animation de bordure "Magic" */}
          <div className="relative rounded-2xl p-[1px] overflow-hidden">
            {/* Animation de rotation (Bordure) */}
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#FFB300_50%,#F538A0_100%)]" />
            
            {/* Contenu du formulaire sur fond noir */}
            <div className="relative h-full bg-[#0A0A0A] rounded-2xl p-8 md:p-10">
                <form className="space-y-8">
                
                {/* Ligne 1 : Prénom & Nom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Prénom *</label>
                    <input
                        type="text"
                        placeholder="David"
                        className="input-underlined w-full py-3 text-white placeholder:text-gray-600"
                        required
                    />
                    </div>
                    <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Nom *</label>
                    <input
                        type="text"
                        placeholder="Johnson"
                        className="input-underlined w-full py-3 text-white placeholder:text-gray-600"
                        required
                    />
                    </div>
                </div>

                {/* Ligne 2 : Email */}
                <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Email *</label>
                    <input
                    type="email"
                    placeholder="example@mail.com"
                    className="input-underlined w-full py-3 text-white placeholder:text-gray-600"
                    required
                    />
                </div>

                {/* Ligne 3 : Entreprise */}
                <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Nom de l'entreprise *</label>
                    <input
                    type="text"
                    placeholder="Ex. StaticMania"
                    className="input-underlined w-full py-3 text-white placeholder:text-gray-600"
                    required
                    />
                </div>

                {/* Ligne 4 : Service & Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Type de services*</label>
                    <select className="input-underlined w-full py-3 text-white bg-transparent appearance-none cursor-pointer">
                        <option value="" disabled selected className="bg-[#111]">Sélectionnez un service</option>
                        <option value="starter" className="bg-[#111]">Pack Starter</option>
                        <option value="pro" className="bg-[#111]">Pack Pro</option>
                        <option value="premium" className="bg-[#111]">Pack Premium</option>
                        <option value="autre" className="bg-[#111]">Autre demande</option>
                    </select>
                    </div>
                    <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Votre budget *</label>
                    <select className="input-underlined w-full py-3 text-white bg-transparent appearance-none cursor-pointer">
                        <option value="" disabled selected className="bg-[#111]">Par tranche</option>
                        <option value="<2k" className="bg-[#111]">Moins de 2 000 €</option>
                        <option value="2k-5k" className="bg-[#111]">2 000 € - 5 000 €</option>
                        <option value="5k-10k" className="bg-[#111]">5 000 € - 10 000 €</option>
                        <option value=">10k" className="bg-[#111]">Plus de 10 000 €</option>
                    </select>
                    </div>
                </div>

                {/* Ligne 5 : Détails */}
                <div className="space-y-2">
                    <label className="text-white text-sm font-medium">Détails de votre projet</label>
                    <textarea
                    rows={4}
                    className="input-underlined w-full py-3 text-white placeholder:text-gray-600 resize-none"
                    placeholder="Dites-nous en plus sur vos besoins..."
                    />
                </div>

                {/* Footer Formulaire avec CTA Style "Start Building" (Pill + Glow + Border) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                    <button
                        type="submit"
                        className="w-full md:w-auto px-8 py-2.5 rounded-full bg-[#1a2744] border border-white/30 text-white font-semibold text-sm shadow-[0_0_15px_rgba(26,39,68,0.6)] hover:shadow-[0_0_25px_rgba(26,39,68,0.9)] hover:bg-[#233254] hover:border-white/50 transition-all duration-300 transform hover:scale-105"
                    >
                        Soumettre
                    </button>
                    
                    <span className="text-gray-500 text-sm">
                    Une réponse vous sera donnée sous 24H.
                    </span>
                </div>
                </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
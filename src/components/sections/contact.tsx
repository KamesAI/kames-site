// src/components/sections/contact.tsx
'use client';

import { Mail, User, Youtube, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-background section-padding">
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

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Formulaire */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Écrivez-nous</h3>
              <p className="text-gray-400 text-sm">
                Remplissez ce formulaire et nous vous contacterons rapidement.
              </p>
            </div>

            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-white">Prénom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFB300]"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-2 text-white">Nom</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFB300]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFB300]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Entreprise (Optionnel)</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFB300]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-[#1a1a1a] border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#FFB300] resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-black border-2 border-[#FFB300] text-[#FFB300] font-semibold rounded-md hover:bg-[#FFB300] hover:text-black transition-all duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Bloc unique Coordonnées + Réseaux sociaux */}
          <div className="space-y-6">
            {/* Coordonnées */}
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Coordonnées</h3>
              <p className="text-gray-400 text-sm mb-6">
                Contactez-nous directement via l'un des canaux ci-dessous.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFB300]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#FFB300]" />
                  </div>
                  <span className="text-white">contact.kamesai@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFB300]/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-[#FFB300]" />
                  </div>
                  <span className="text-white">Kames</span>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Réseaux sociaux</h3>
              <p className="text-gray-400 text-sm mb-6">
                Suivez notre actualité et nos projets sur nos réseaux.
              </p>
              <div className="space-y-4">
                <a 
                  href="https://www.youtube.com" 
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  aria-label="YouTube"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFB300]/10 flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-[#FFB300]" />
                  </div>
                  <span className="text-white">YouTube</span>
                </a>
                <a 
                  href="https://www.instagram.com" 
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  aria-label="Instagram"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFB300]/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-[#FFB300]" />
                  </div>
                  <span className="text-white">Instagram</span>
                </a>
                <a 
                  href="https://www.x.com" 
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  aria-label="X (Twitter)"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FFB300]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#FFB300]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                  <span className="text-white">X</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de section */}
        <div className="mt-12 text-center text-white/60 text-sm">
          Bordeaux, France
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
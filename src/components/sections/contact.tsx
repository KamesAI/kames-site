// src/components/sections/contact.tsx
'use client';

import { Mail, User, Youtube, Instagram, Linkedin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gradient text-center">
          Travaillons ensemble pour vous faciliter le quotidien.
        </h2>
        <p className="mt-4 text-center text-foreground">
          Vous avez un projet en tête ou souhaitez en savoir plus ? Parlons-en.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Formulaire */}
          <form className="space-y-4 p-6 border border-white/10 rounded-2xl bg-card/40">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Prénom</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-input text-foreground"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Nom</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-input text-foreground"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 rounded-md bg-input text-foreground"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Entreprise (Optionnel)</label>
              <input
                type="text"
                className="w-full px-3 py-2 rounded-md bg-input text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={6}
                className="w-full px-3 py-2 rounded-md bg-input text-foreground"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 bg-gradient-to-r from-[#FFB300] via-[#FF6D00] to-[#F538A0] text-white font-semibold rounded-md hover:opacity-90"
            >
              Envoyer le message
            </button>
          </form>

          {/* Cartes infos */}
          <div className="space-y-6">
            <div className="p-6 border border-white/10 rounded-2xl bg-card/40">
              <h3 className="text-2xl font-bold mb-2">Coordonnées</h3>
              <p className="text-muted-foreground">
                Contactez-nous directement via l’un des canaux ci-dessous.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contact.kamesai@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <span>Kames</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-white/10 rounded-2xl bg-card/40">
              <h3 className="text-2xl font-bold mb-2">Réseaux sociaux</h3>
              <p className="text-muted-foreground">
                Suivez notre actualité et nos projets sur nos réseaux.
              </p>
              <div className="mt-4 flex gap-4">
                <a href="https://www.youtube.com" className="text-primary" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com" className="text-primary" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com" className="text-primary" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de section (optionnel): petite ligne discrète */}
        <div className="mt-12 text-center text-white/60 text-sm">
          Bordeaux, France
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

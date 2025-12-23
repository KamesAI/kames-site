import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Mentions légales | Kames AI',
  description: 'Mentions légales de Kames AI, agence d\'automatisation par intelligence artificielle.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-black text-white font-['Roboto',sans-serif]">
      {/* Container principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        
        {/* Bouton retour */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-[#FFB300] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 
            className="text-4xl sm:text-5xl font-light mb-6"
            style={{
              background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Mentions légales
          </h1>
          <p className="text-neutral-400 text-lg">
            Informations légales relatives au site web kamesai.com
          </p>
        </div>

        {/* Contenu */}
        <div className="prose prose-invert prose-neutral max-w-none">
          
          {/* Section 1 : Éditeur */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">1. Éditeur du site</h2>
            <div className="text-neutral-300 leading-relaxed space-y-2">
              <p>
                <strong className="text-white">Raison sociale :</strong> Kames AI
              </p>
              <p>
                <strong className="text-white">Statut juridique :</strong> [À compléter : SAS, SARL, Auto-entrepreneur, etc.]
              </p>
              <p>
                <strong className="text-white">SIRET :</strong> [Ton numéro SIRET]
              </p>
              <p>
                <strong className="text-white">Siège social :</strong> [Ton adresse complète]<br />
                Bordeaux, France
              </p>
              <p>
                <strong className="text-white">Email :</strong>{' '}
                <a 
                  href="mailto:contact.kamesai@gmail.com"
                  className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors"
                >
                  contact.kamesai@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Directeur de la publication :</strong> Thomas [Ton nom]
              </p>
            </div>
          </section>

          {/* Section 2 : Hébergement */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">2. Hébergement</h2>
            <div className="text-neutral-300 leading-relaxed space-y-2">
              <p>
                <strong className="text-white">Hébergeur :</strong> Google LLC (Firebase App Hosting)
              </p>
              <p>
                <strong className="text-white">Adresse :</strong><br />
                1600 Amphitheatre Parkway<br />
                Mountain View, CA 94043<br />
                États-Unis
              </p>
              <p>
                <strong className="text-white">Site web :</strong>{' '}
                <a 
                  href="https://firebase.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors"
                >
                  firebase.google.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 3 : Protection des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">3. Protection des données personnelles</h2>
            <div className="text-neutral-300 leading-relaxed space-y-3">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi 
                Informatique et Libertés, vous disposez de droits sur vos données personnelles.
              </p>
              <p>
                Pour en savoir plus sur la collecte, le traitement et la protection de vos données, 
                consultez notre{' '}
                <Link 
                  href="/rgpd"
                  className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors font-medium"
                >
                  Politique de confidentialité (RGPD)
                </Link>.
              </p>
              <p>
                <strong className="text-white">Responsable du traitement des données :</strong><br />
                Thomas [Ton nom]<br />
                Email :{' '}
                <a 
                  href="mailto:contact.kamesai@gmail.com"
                  className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors"
                >
                  contact.kamesai@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Section 4 : Propriété intellectuelle */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">4. Propriété intellectuelle</h2>
            <div className="text-neutral-300 leading-relaxed space-y-3">
              <p>
                L'ensemble du contenu présent sur le site kamesai.com (textes, images, graphismes, 
                logo, vidéos, architecture, icônes, sons, logiciels, etc.) est la propriété 
                exclusive de Kames AI, à l'exception des marques, logos ou contenus appartenant 
                à d'autres sociétés partenaires ou auteurs.
              </p>
              <p>
                Toute reproduction, distribution, modification, adaptation, retransmission ou 
                publication de ces différents éléments est strictement interdite sans l'accord 
                exprès par écrit de Kames AI.
              </p>
            </div>
          </section>

          {/* Section 5 : Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">5. Cookies</h2>
            <div className="text-neutral-300 leading-relaxed space-y-3">
              <p>
                Le site kamesai.com peut utiliser des cookies pour améliorer l'expérience utilisateur 
                et analyser le trafic.
              </p>
              <p>
                Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cependant, certaines 
                fonctionnalités du site pourraient être limitées.
              </p>
              <p>
                Pour plus d'informations, consultez notre{' '}
                <Link 
                  href="/rgpd"
                  className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors font-medium"
                >
                  Politique de confidentialité
                </Link>.
              </p>
            </div>
          </section>

          {/* Section 6 : Limitation de responsabilité */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">6. Limitation de responsabilité</h2>
            <div className="text-neutral-300 leading-relaxed space-y-3">
              <p>
                Kames AI s'efforce de fournir des informations exactes et à jour sur le site kamesai.com. 
                Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des 
                informations mises à disposition.
              </p>
              <p>
                En conséquence, Kames AI décline toute responsabilité pour toute imprécision, inexactitude 
                ou omission portant sur des informations disponibles sur le site.
              </p>
              <p>
                Kames AI ne pourra être tenu responsable des dommages directs ou indirects résultant de 
                l'utilisation du site kamesai.com ou de l'impossibilité de l'utiliser.
              </p>
            </div>
          </section>

          {/* Section 7 : Liens hypertextes */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">7. Liens hypertextes</h2>
            <div className="text-neutral-300 leading-relaxed space-y-3">
              <p>
                Le site kamesai.com peut contenir des liens hypertextes vers d'autres sites web. 
                Kames AI n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant 
                à leur contenu, leur disponibilité ou leur politique de confidentialité.
              </p>
              <p>
                La création de liens vers le site kamesai.com est autorisée, sous réserve que ces 
                liens ne portent pas atteinte à l'image de Kames AI et qu'ils respectent la législation 
                en vigueur.
              </p>
            </div>
          </section>

          {/* Section 8 : Droit applicable */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">8. Droit applicable et juridiction</h2>
            <div className="text-neutral-300 leading-relaxed space-y-3">
              <p>
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p>
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les 
                tribunaux français compétents.
              </p>
            </div>
          </section>

          {/* Section 9 : Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white">9. Contact</h2>
            <div className="text-neutral-300 leading-relaxed space-y-3">
              <p>
                Pour toute question concernant les présentes mentions légales ou le site kamesai.com, 
                vous pouvez nous contacter :
              </p>
              <p>
                <strong className="text-white">Par email :</strong>{' '}
                <a 
                  href="mailto:contact.kamesai@gmail.com"
                  className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors"
                >
                  contact.kamesai@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Footer info */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-neutral-500 italic">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
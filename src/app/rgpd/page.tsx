import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Database, Eye, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Protection des données (RGPD) | Kames AI',
  description: 'Politique de confidentialité et protection des données personnelles de Kames AI.',
};

export default function RGPDPage() {
  return (
    <div className="min-h-screen bg-black text-white font-['Roboto',sans-serif]">
      {/* Container principal */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        
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
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-[#FFB300]" />
            <h1 
              className="text-4xl sm:text-5xl font-light"
              style={{
                background: 'linear-gradient(90deg, #FFB300 0%, #FF6D00 50%, #F538A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Protection de vos données
            </h1>
          </div>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Kames AI s'engage à protéger vos données personnelles conformément au Règlement 
            Général sur la Protection des Données (RGPD). Cette page explique comment nous 
            collectons, utilisons et protégeons vos informations.
          </p>
        </div>

        {/* Highlights - Cartes de promesses */}
        <div className="grid sm:grid-cols-3 gap-4 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#FFB300]/30 transition-all">
            <Lock className="w-8 h-8 text-[#FFB300] mb-3" />
            <h3 className="text-white font-medium mb-2">100% Europe</h3>
            <p className="text-sm text-neutral-400">
              Hébergement et traitement en France uniquement
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#FFB300]/30 transition-all">
            <Database className="w-8 h-8 text-[#FFB300] mb-3" />
            <h3 className="text-white font-medium mb-2">Données sécurisées</h3>
            <p className="text-sm text-neutral-400">
              Chiffrement SSL/TLS et base de données cryptée
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#FFB300]/30 transition-all">
            <Eye className="w-8 h-8 text-[#FFB300] mb-3" />
            <h3 className="text-white font-medium mb-2">Transparence totale</h3>
            <p className="text-sm text-neutral-400">
              Aucune vente de données, suppression automatique
            </p>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="prose prose-invert prose-neutral max-w-none">
          
          {/* Section 1 : Responsable du traitement */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                1
              </span>
              Responsable du traitement des données
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-3 ml-11">
              <p>
                <strong className="text-white">Raison sociale :</strong> Kames AI<br />
                <strong className="text-white">SIRET :</strong> [Ton numéro SIRET]<br />
                <strong className="text-white">Adresse :</strong> 5 allée des pinsons, Libourne, France<br />
                <strong className="text-white">Email :</strong>{' '}
                <a 
                  href="mailto:contact.kamesai@gmail.com"
                  className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors"
                >
                  contact.kamesai@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-white">Délégué à la Protection des Données (DPO) :</strong><br />
                Thomas Callendreau<br />
                Email : contact.kamesai@gmail.com
              </p>
            </div>
          </section>

          {/* Section 2 : Données collectées */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                2
              </span>
              Quelles données collectons-nous ?
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-4 ml-11">
              <p>
                Nous collectons uniquement les données nécessaires à la fourniture de nos services 
                d'automatisation par intelligence artificielle.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h3 className="text-white font-medium mb-3">📋 Données d'identification</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Nom et prénom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Adresse email professionnelle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Numéro de téléphone (optionnel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Entreprise et fonction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h3 className="text-white font-medium mb-3">🤖 Données de workflows (clients uniquement)</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Données CRM : contacts, opportunités commerciales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Données métier spécifiques selon le workflow déployé</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Logs d'exécution (conservés 7 jours maximum)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <h3 className="text-white font-medium mb-3">📊 Données techniques</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Adresse IP (anonymisée après 6 mois)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Cookies techniques (nécessaires au fonctionnement du site)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB300] mt-0.5 flex-shrink-0" />
                    <span>Données de navigation (pages visitées, durée)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 : Finalités */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                3
              </span>
              Pourquoi utilisons-nous vos données ?
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-3 ml-11">
              <table className="w-full text-sm border border-white/10">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-3 text-white font-medium border-b border-white/10">Finalité</th>
                    <th className="text-left p-3 text-white font-medium border-b border-white/10">Base légale</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-3">Répondre à vos demandes de contact</td>
                    <td className="p-3 text-neutral-400">Consentement</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3">Exécuter les contrats d'automatisation</td>
                    <td className="p-3 text-neutral-400">Contrat</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3">Prospection commerciale B2B</td>
                    <td className="p-3 text-neutral-400">Intérêt légitime</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3">Améliorer nos services</td>
                    <td className="p-3 text-neutral-400">Intérêt légitime</td>
                  </tr>
                  <tr>
                    <td className="p-3">Support technique</td>
                    <td className="p-3 text-neutral-400">Contrat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 : Conservation */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                4
              </span>
              Combien de temps gardons-nous vos données ?
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-3 ml-11">
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 space-y-4">
                <div>
                  <p className="text-white font-medium mb-1">💼 Données clients (workflows)</p>
                  <p className="text-sm">
                    <strong className="text-[#FFB300]">Durée du contrat + 90 jours maximum</strong> 
                    → puis suppression automatique et définitive
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">👥 Données prospects</p>
                  <p className="text-sm">
                    <strong className="text-[#FFB300]">3 ans</strong> après le dernier contact 
                    → ou suppression immédiate sur demande
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">📝 Logs d'exécution</p>
                  <p className="text-sm">
                    <strong className="text-[#FFB300]">7 jours maximum</strong> 
                    → purge automatique quotidienne
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium mb-1">📞 Tickets de support</p>
                  <p className="text-sm">
                    <strong className="text-[#FFB300]">1 an</strong> après résolution du ticket
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 : Sécurité */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                5
              </span>
              Comment protégeons-nous vos données ?
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-4 ml-11">
              <p className="text-white font-medium text-lg mb-4">🔒 Nos garanties de sécurité :</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">🌍 Hébergement 100% Europe</p>
                  <p className="text-sm">
                    AWS région Paris (eu-west-3)<br />
                    Certifications : ISO 27001, SOC 2 Type II
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">🔐 Chiffrement renforcé</p>
                  <p className="text-sm">
                    TLS 1.3 pour les échanges<br />
                    Base de données chiffrée (AWS KMS)
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">👤 Accès restreints</p>
                  <p className="text-sm">
                    Authentification multi-facteurs<br />
                    Logs d'accès tracés 6 mois minimum
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">💾 Backups sécurisés</p>
                  <p className="text-sm">
                    Sauvegardes quotidiennes automatiques<br />
                    Chiffrement AES-256
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-5 mt-6">
                <p className="text-white font-medium mb-2">⚠️ Engagement spécial Intelligence Artificielle</p>
                <p className="text-sm">
                  <strong className="text-[#FFB300]">Aucun entraînement de modèles IA</strong> sur vos données. 
                  Tous nos fournisseurs d'API IA (Anthropic Claude, Azure OpenAI, Google Vertex AI) 
                  ont signé des Data Processing Agreements (DPA) garantissant l'option "Zero Data Retention".
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 : Partage des données */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                6
              </span>
              Qui a accès à vos données ?
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-4 ml-11">
              <p>
                Vos données ne sont <strong className="text-white">jamais vendues</strong> à des tiers. 
                Nous les partageons uniquement avec nos sous-traitants techniques, tous couverts par 
                un Data Processing Agreement (DPA) conforme au RGPD.
              </p>

              <table className="w-full text-sm border border-white/10">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-3 text-white font-medium border-b border-white/10">Partenaire</th>
                    <th className="text-left p-3 text-white font-medium border-b border-white/10">Service</th>
                    <th className="text-left p-3 text-white font-medium border-b border-white/10">Localisation</th>
                    <th className="text-left p-3 text-white font-medium border-b border-white/10">Certifications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="p-3 text-white">AWS</td>
                    <td className="p-3">Hébergement</td>
                    <td className="p-3 text-neutral-400">Paris (EU)</td>
                    <td className="p-3 text-neutral-400">ISO 27001, SOC 2</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3 text-white">Anthropic</td>
                    <td className="p-3">API Claude (IA)</td>
                    <td className="p-3 text-neutral-400">EU/US avec DPA</td>
                    <td className="p-3 text-neutral-400">DPA signé</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3 text-white">Microsoft Azure</td>
                    <td className="p-3">API GPT (IA)</td>
                    <td className="p-3 text-neutral-400">France Central (EU)</td>
                    <td className="p-3 text-neutral-400">ISO 27001, DPA</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white">Google Cloud</td>
                    <td className="p-3">API Gemini (IA)</td>
                    <td className="p-3 text-neutral-400">Paris (EU)</td>
                    <td className="p-3 text-neutral-400">ISO 27001, DPA</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm italic">
                Vos données ne quittent <strong className="text-white">jamais l'Union Européenne</strong> 
                (sauf API US avec DPA garantissant la conformité RGPD).
              </p>
            </div>
          </section>

          {/* Section 7 : Vos droits */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                7
              </span>
              Quels sont vos droits ?
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-4 ml-11">
              <p>
                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
              </p>

              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">✅ Droit d'accès (Article 15)</p>
                  <p className="text-sm">
                    Vous pouvez demander une copie de toutes vos données personnelles que nous détenons.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">✏️ Droit de rectification (Article 16)</p>
                  <p className="text-sm">
                    Vous pouvez demander la correction de données inexactes ou incomplètes.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">🗑️ Droit à l'effacement (Article 17)</p>
                  <p className="text-sm">
                    Vous pouvez demander la suppression définitive de vos données (sous certaines conditions).
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">⏸️ Droit à la limitation (Article 18)</p>
                  <p className="text-sm">
                    Vous pouvez demander de geler temporairement le traitement de vos données.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">📦 Droit à la portabilité (Article 20)</p>
                  <p className="text-sm">
                    Vous pouvez récupérer vos données dans un format exploitable (JSON, CSV).
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-white font-medium mb-1">🚫 Droit d'opposition (Article 21)</p>
                  <p className="text-sm">
                    Vous pouvez vous opposer au traitement de vos données pour motif légitime.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFB300]/10 border border-[#FFB300]/30 rounded-lg p-5 mt-6">
                <p className="text-white font-medium mb-2">⏱️ Délai de réponse garanti</p>
                <p className="text-sm">
                  Nous nous engageons à répondre à toute demande d'exercice de droits dans un délai de{' '}
                  <strong className="text-[#FFB300]">30 jours maximum</strong> (conformément au RGPD).
                </p>
              </div>

              <div className="mt-6">
                <p className="text-white font-medium mb-3">📧 Comment exercer vos droits ?</p>
                <p className="mb-3">
                  Envoyez-nous un email à{' '}
                  <a 
                    href="mailto:contact.kamesai@gmail.com"
                    className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors font-medium"
                  >
                    contact.kamesai@gmail.com
                  </a>{' '}
                  en précisant :
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB300] mt-1">•</span>
                    <span>Votre nom et prénom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB300] mt-1">•</span>
                    <span>Le droit que vous souhaitez exercer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB300] mt-1">•</span>
                    <span>Une copie d'un document d'identité (pour vérification)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 : Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                8
              </span>
              Cookies et traceurs
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-3 ml-11">
              <p>
                Le site kamesai.com utilise des cookies techniques strictement nécessaires au 
                fonctionnement du site. Nous n'utilisons <strong className="text-white">aucun cookie 
                publicitaire ou de tracking tiers</strong>.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <p className="text-white font-medium mb-3">🍪 Cookies utilisés :</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB300] mt-1">•</span>
                    <span><strong className="text-white">Cookies de session</strong> : maintien de votre connexion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFB300] mt-1">•</span>
                    <span><strong className="text-white">Cookies de préférence</strong> : mémorisation de vos choix (langue, etc.)</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur. 
                Cependant, certaines fonctionnalités du site pourraient être limitées.
              </p>
            </div>
          </section>

          {/* Section 9 : Réclamations */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                9
              </span>
              Réclamations
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-3 ml-11">
              <p>
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire 
                une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <p className="text-white font-medium mb-2">🏛️ Commission Nationale de l'Informatique et des Libertés (CNIL)</p>
                <p className="text-sm mb-3">
                  <strong className="text-white">Adresse :</strong><br />
                  3 Place de Fontenoy<br />
                  TSA 80715<br />
                  75334 Paris Cedex 07<br />
                  France
                </p>
                <p className="text-sm">
                  <strong className="text-white">Site web :</strong>{' '}
                  <a 
                    href="https://www.cnil.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors"
                  >
                    www.cnil.fr
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 : Modifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                10
              </span>
              Modifications de cette politique
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-3 ml-11">
              <p>
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment 
                pour refléter les changements dans nos pratiques ou dans la législation.
              </p>
              <p>
                Toute modification sera publiée sur cette page avec une nouvelle date de "dernière mise à jour". 
                Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </div>
          </section>

          {/* Section Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-medium mb-4 text-white flex items-center gap-3">
              <span 
                className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold bg-black text-white border border-white/20"
              >
                11
              </span>
              Nous contacter
            </h2>
            <div className="text-neutral-300 leading-relaxed space-y-3 ml-11">
              <p>
                Pour toute question concernant cette politique de confidentialité ou l'exercice 
                de vos droits, vous pouvez nous contacter :
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                <p className="text-sm mb-3">
                  <strong className="text-white">Par email :</strong>{' '}
                  <a 
                    href="mailto:contact.kamesai@gmail.com"
                    className="text-[#FFB300] hover:text-[#FF6D00] underline underline-offset-2 transition-colors"
                  >
                    contact.kamesai@gmail.com
                  </a>
                </p>
                <p className="text-sm">
                  <strong className="text-white">Par courrier :</strong><br />
                  Kames AI<br />
                  5 allée des pinsons<br />
                  Libourne, France
                </p>
              </div>
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
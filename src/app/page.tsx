import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="k-hero"
        style={{
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "72px",
        }}
      >
        <div className="relative z-10 k-section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <h1
            className="k-gradient-text"
            style={{ fontSize: "64px", lineHeight: 1.05, fontWeight: 900 }}
          >
            Transformez votre entreprise<br />avec l’intelligence artificielle
          </h1>

          <p className="mt-6" style={{ fontWeight: 600 }}>
            Kames met l’IA au service de votre croissance.
          </p>

          <div className="mt-6 space-y-2" style={{ maxWidth: 760, margin: "0 auto" }}>
            <p>Nous ne sommes pas une agence</p>
            <p>
              <span className="k-subtle">
                qui développe des systèmes portés par l’IA
              </span>
            </p>
            <p>Nous sommes tout cela à la fois.</p>
          </div>

          {/* Garde ton rond noir avec flèche orange */}
          {/* <ScrollDot /> */}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="k-section">
        <h2 className="k-gradient-text" style={{ fontSize: "44px", fontWeight: 800, textAlign: "center", marginBottom: "8px" }}>
          Nos Services
        </h2>
        <p className="k-subtle" style={{ textAlign: "center", marginBottom: "28px" }}>
          Votre partenaire privilégié pour placer l’IA au cœur de votre entreprise
        </p>

        <div className="k-grid-3">
          {/* Carte 1 */}
          <article className="k-card">
            <h3 className="k-gradient-text" style={{ fontSize: "22px", fontWeight: 800, marginBottom: "12px" }}>
              Offre Standard — Automatisation essentielle
            </h3>
            <ul style={{ lineHeight: 1.7 }}>
              <li>Automatisation ciblée de vos processus métiers via n8n</li>
              <li>Hébergement & déploiement sécurisé (AWS/Firebase)</li>
              <li>Forfait installation + abonnement maintenance</li>
              <li>Check-up mensuel & améliorations continues</li>
            </ul>
            <div style={{ marginTop: 16, opacity: 0.85 }}>À partir de 490 € + 79 €/mois</div>
          </article>

          {/* Carte 2 */}
          <article className="k-card">
            <h3 className="k-gradient-text" style={{ fontSize: "22px", fontWeight: 800, marginBottom: "12px" }}>
              Offre Premium — Système IA complet
            </h3>
            <ul style={{ lineHeight: 1.7 }}>
              <li>Conception & dev d’un système sur mesure (agents IA)</li>
              <li>Supervision continue + intégrations (M365, Google, etc.)</li>
              <li>Mises à jour régulières selon besoins métiers</li>
              <li>Assistance prioritaire & amélioration des performances</li>
            </ul>
            <div style={{ marginTop: 16, opacity: 0.85 }}>À partir de 1 490 € + 149 €/mois</div>
          </article>

          {/* Carte 3 */}
          <article className="k-card">
            <h3 className="k-gradient-text" style={{ fontSize: "22px", fontWeight: 800, marginBottom: "12px" }}>
              Offre Sur Mesure — Écosystème IA complet
            </h3>
            <ul style={{ lineHeight: 1.7 }}>
              <li>Audit complet de vos processus et outils actuels</li>
              <li>Écosystème d’agents IA interconnectés</li>
              <li>Workflows avancés : analyse, génération, décision</li>
              <li>Intégration ERP/CRM/API + évolution long terme</li>
            </ul>
            <div style={{ marginTop: 16, opacity: 0.85 }}>Sur devis (à partir de 5 000 €)</div>
          </article>
        </div>
      </section>
    </>
  );
}

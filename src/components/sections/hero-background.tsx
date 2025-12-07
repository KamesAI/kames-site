export function HeroBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <iframe
        src="https://my.spline.design/chips-Lpmy2Q4HrMAxwGztMvtaZdY0"
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full border-0"
        id="aura-spline"
        title="Hero Background Animation"
        allow="fullscreen"
      />
      {/* Overlay optionnel pour assombrir légèrement et assurer la lisibilité du texte par-dessus */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      
      {/* Dégradé en bas pour une transition fluide vers la section suivante */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
}
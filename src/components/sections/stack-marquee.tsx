'use client';

const TECHNOLOGIES = [
  "n8n", "Airtable", "Cursor", "AWS", "OpenAI", 
  "Anthropic", "Gemini", "Calendly", "GitHub", 
  "Docker", "Slack", "Notion", "Make", "Firebase", "React"
];

export function StackMarquee() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden relative z-20">
      <div className="relative w-full">
        {/* Gradients pour fondre les bords */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        {/* Le conteneur qui défile */}
        <div className="flex w-max">
          <div className="marquee-content animate-scroll flex space-x-16 items-center pl-16">
            {/* On double la liste pour la boucle infinie */}
            {[...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <span key={i} className="text-xl font-medium text-neutral-500 whitespace-nowrap hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
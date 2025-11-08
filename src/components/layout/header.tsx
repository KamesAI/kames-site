"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const items = [
  { id: "services", label: "Services" },
  { id: "realisations", label: "Réalisations" },
  { id: "apropos", label: "À propos" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-white/10 h-[72px]">
      <nav className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-white tracking-wide">
          KAMES
        </Link>
        <div className="flex items-center gap-6">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`nav-link ${active === i.id ? "active" : ""}`}
            >
              {i.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-3 py-2 rounded-full border border-white/15 hover:opacity-90"
          >
            Contactez-nous
          </a>
        </div>
      </nav>
    </header>
  );
}

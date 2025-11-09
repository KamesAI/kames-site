'use client';
import Link from 'next/link';
import Logo from '@/components/logo';
import { Github, Linkedin } from 'lucide-react';
import { usePathname } from 'next/navigation';

const XLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      aria-label="X logo"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );

const navLinks = [
  { href: '#home', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#achievements', label: 'Réalisations' },
  { href: '#about', label: 'À propos' },
  { href: '#documentation', label: 'Documentation' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
    { icon: XLogo, href: '#', label: 'X' },
    { icon: Github, href: '#', label: 'Github' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isServicesPage = pathname === '/nos-services';

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement>,
        anchor: string
      ) => {
        if (isHomePage || isServicesPage) {
            e.preventDefault();
            document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
        }
      };

    const getLinkHref = (anchor: string) => {
        if(isHomePage) return anchor;
        if(isServicesPage) {
            if (anchor === '#contact') {
                return '#contact';
            }
            return `/${anchor}`;
        }
        return `/${anchor}`;
    }

  return (
    <footer className="bg-card text-card-foreground section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Bordeaux, France
            </p>
          </div>
          <div className="md:mx-auto">
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gradient">
              Liens rapides
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={getLinkHref(href)}
                    onClick={(e) => handleScroll(e, href)}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
                 <li>
                    <Link
                        href="/nos-services"
                        className="text-sm text-muted-foreground hover:text-foreground"
                    >
                        Nos Services
                    </Link>
                </li>
            </ul>
          </div>
          <div className="md:ml-auto">
             <h3 className="text-sm font-semibold tracking-wider uppercase text-gradient">
              Suivez-nous
            </h3>
            <div className="flex mt-4 space-x-4">
                {socialLinks.map(({ icon: Icon, href, label}) => (
                    <Link key={label} href={href} className="text-muted-foreground hover:text-foreground">
                        <span className="sr-only">{label}</span>
                        <Icon className="w-6 h-6" fill={label === 'X' ? 'currentColor' : 'none'}/>
                    </Link>
                ))}
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Kames AI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

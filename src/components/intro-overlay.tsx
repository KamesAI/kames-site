'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from '@/components/logo';

export function IntroOverlay() {
  const [phase, setPhase] = useState<'start'|'revealing'|'moving'|'fading'>('start');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem('introPlayed')) return;

    setIsVisible(true);
    const t1 = setTimeout(() => setPhase('revealing'), 100);
    const t2 = setTimeout(() => setPhase('moving'), 2000);
    const t3 = setTimeout(() => setPhase('fading'), 3500);
    const t4 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('introPlayed', 'true');
    }, 4500);

    return () => [t1,t2,t3,t4].forEach(clearTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn(
      'fixed inset-0 z-[100] bg-background transition-opacity duration-1000',
      phase === 'fading' && 'animate-overlay-fade-out'
    )}>
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu transition-all duration-[1.5s] ease-[cubic-bezier(0.77,0,0.175,1)]',
          phase === 'moving' && 'scale-[0.22] top-[2.75rem] left-[5rem]'
        )}
      >
        <div className={cn('whitespace-nowrap', phase === 'revealing' && 'animate-text-reveal')}
             style={{ clipPath: 'polygon(0 0,0 0,0 100%,0% 100%)' }}>
          <Logo className="w-64 h-auto sm:w-80 md:w-96" />
        </div>
      </div>
    </div>
  );
}

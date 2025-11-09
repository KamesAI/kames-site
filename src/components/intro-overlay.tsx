'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

export function IntroOverlay() {
  const [phase, setPhase] = useState('start');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on the client
    if (typeof window === 'undefined') return;

    if (sessionStorage.getItem('introPlayed')) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotionQuery.matches) {
      sessionStorage.setItem('introPlayed', 'true');
      setIsVisible(false);
      return;
    }

    const revealTimer = setTimeout(() => setPhase('revealing'), 100);
    const moveToLogoTimer = setTimeout(() => setPhase('moving'), 2000);
    const fadeOutTimer = setTimeout(() => setPhase('fading'), 3500);
    const endTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('introPlayed', 'true');
    }, 4500);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(moveToLogoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] bg-background transition-opacity duration-1000',
        phase === 'fading' ? 'animate-overlay-fade-out' : 'opacity-100'
      )}
    >
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'transform-gpu transition-all duration-[1.5s] ease-[cubic-bezier(0.77,0,0.175,1)]',
          phase === 'moving' ? 'scale-[0.22] top-[2.75rem] left-[5rem]' : 'scale-100'
        )}
      >
        <div
          className={cn(
            'whitespace-nowrap',
            phase === 'revealing' ? 'animate-text-reveal' : ''
          )}
          style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
        >
          <Logo className="w-64 h-auto sm:w-80 md:w-96" />
        </div>
      </div>
    </div>
  );
}

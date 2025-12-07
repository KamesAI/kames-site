'use client';

import { useEffect, useRef } from 'react';

// Configuration des couleurs Kames
const COLORS = {
  orange: { r: 255, g: 179, b: 0 },      // #FFB300
  orangeVif: { r: 255, g: 109, b: 0 },   // #FF6D00
  magenta: { r: 245, g: 56, b: 160 },    // #F538A0
};

interface Blob {
  x: number;
  y: number;
  radius: number;
  xSpeed: number;
  ySpeed: number;
  color: { r: number; g: number; b: number };
  phase: number;
}

export function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const blobsRef = useRef<Blob[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fonction pour redimensionner le canvas
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    // Initialiser les blobs
    const initBlobs = () => {
      const rect = canvas.getBoundingClientRect();
      const colors = [COLORS.orange, COLORS.orangeVif, COLORS.magenta];
      
      blobsRef.current = Array.from({ length: 6 }, (_, i) => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: Math.random() * 200 + 150,
        xSpeed: (Math.random() - 0.5) * 0.8,
        ySpeed: (Math.random() - 0.5) * 0.8,
        color: colors[i % colors.length],
        phase: Math.random() * Math.PI * 2,
      }));
    };

    // Fonction d'animation
    const animate = (time: number) => {
      const rect = canvas.getBoundingClientRect();
      
      // Fond noir
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Mettre à jour et dessiner les blobs
      blobsRef.current.forEach((blob) => {
        // Mouvement fluide
        blob.x += blob.xSpeed;
        blob.y += blob.ySpeed;
        blob.phase += 0.01;

        // Rebond sur les bords avec marge
        const margin = blob.radius * 0.5;
        if (blob.x < -margin || blob.x > rect.width + margin) {
          blob.xSpeed *= -1;
          blob.x = Math.max(-margin, Math.min(rect.width + margin, blob.x));
        }
        if (blob.y < -margin || blob.y > rect.height + margin) {
          blob.ySpeed *= -1;
          blob.y = Math.max(-margin, Math.min(rect.height + margin, blob.y));
        }

        // Variation du rayon pour effet "respiration"
        const breathingRadius = blob.radius + Math.sin(blob.phase) * 30;

        // Créer le gradient radial
        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, breathingRadius
        );

        // Couleur centrale plus intense
        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.8)`);
        gradient.addColorStop(0.4, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.3)`);
        gradient.addColorStop(0.7, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.1)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, breathingRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Effet de glow global
      ctx.globalCompositeOperation = 'screen';
      
      // Ligne lumineuse ondulante en haut
      const waveGradient = ctx.createLinearGradient(0, 0, rect.width, 0);
      waveGradient.addColorStop(0, 'rgba(255, 179, 0, 0.1)');
      waveGradient.addColorStop(0.5, 'rgba(255, 109, 0, 0.15)');
      waveGradient.addColorStop(1, 'rgba(245, 56, 160, 0.1)');
      
      ctx.fillStyle = waveGradient;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      
      // Dessiner une vague
      for (let x = 0; x <= rect.width; x += 10) {
        const y = Math.sin((x * 0.005) + (time * 0.001)) * 50 + 
                  Math.sin((x * 0.01) + (time * 0.0005)) * 30 + 
                  rect.height * 0.3;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(rect.width, 0);
      ctx.closePath();
      ctx.fill();

      ctx.globalCompositeOperation = 'source-over';

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialisation
    resize();
    initBlobs();
    animationRef.current = requestAnimationFrame(animate);

    // Event listener pour le resize
    window.addEventListener('resize', () => {
      resize();
      initBlobs();
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      
      {/* Overlay pour adoucir les bords et créer de la profondeur */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, rgba(5,5,5,0.4) 50%, rgba(5,5,5,0.95) 100%),
            linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, transparent 30%, transparent 70%, rgba(5,5,5,0.8) 100%)
          `,
        }}
      />
      
      {/* Effet de grain subtil pour texture premium */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
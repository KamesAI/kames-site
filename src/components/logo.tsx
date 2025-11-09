// src/components/logo.tsx
export default function Logo({ className }: { className?: string }) {
  return (
    <div className={className ? className : ''}>
      <div className="text-xl font-bold leading-none text-gradient">Kames AI</div>
    </div>
  );
}

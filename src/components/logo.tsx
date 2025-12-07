export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className || ''}`}>
      <img 
        src="/images/logo-kames.png" 
        alt="Logo Kames AI"
        width={32}
        height={32}
        className="flex-shrink-0"
      />
      <span className="text-xl font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-[#FF9500] via-[#FF6B35] to-[#E91E8C]">
        Kames AI
      </span>
    </div>
  );
}
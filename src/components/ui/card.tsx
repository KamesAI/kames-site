import { cn } from '@/lib/utils'

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn('rounded-2xl border border-white/10 bg-white/[0.03] p-6', className)}>{children}</div>
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn('text-lg font-semibold text-white', className)}>{children}</h3>
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('text-sm text-white/70 leading-relaxed', className)}>{children}</div>
}

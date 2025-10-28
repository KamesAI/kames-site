import { cn } from '@/lib/utils'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn('inline-flex items-center rounded-md border border-white/20 bg-white/10 px-2 py-1 text-[10px] font-medium text-white', className)}>{children}</span>
  )
}

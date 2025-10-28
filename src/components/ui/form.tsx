// Basic form wrapper
export function Form({ children }: { children: React.ReactNode }) {
  return <form className="space-y-4">{children}</form>
}
export function FormField({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>
}
export function FormLabel({ children }: { children: React.ReactNode }) {
  return <label className="text-xs font-medium text-white/70">{children}</label>
}
export function FormMessage({ children }: { children?: React.ReactNode }) {
  if (!children) return null
  return <p className="text-xs text-red-400">{children}</p>
}

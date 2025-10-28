// Very small sheet/drawer placeholder
export function Sheet({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
export function SheetTrigger({ children }: { children: React.ReactNode }) {
  return <button className="text-white">{children}</button>
}
export function SheetContent({ children }: { children: React.ReactNode }) {
  return (
    <aside className="fixed right-0 top-0 h-full w-80 bg-black border-l border-white/10 p-6 text-white">{children}</aside>
  )
}

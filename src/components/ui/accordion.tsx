// Minimal placeholder accordion API compatible-ish with shadcn.
export function Accordion({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
export function AccordionItem({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}
export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return <button className="w-full text-left text-white font-medium py-2">{children}</button>
}
export function AccordionContent({ children }: { children: React.ReactNode }) {
  return <div className="text-white/70 text-sm pb-4">{children}</div>
}

import * as React from "react"

// Version robuste qui accepte les props standard (className, etc.)
// pour éviter les erreurs TypeScript bloquantes à l'avenir.

export function Accordion({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { type?: string, collapsible?: boolean }) {
  return <div className={className} {...props}>{children}</div>
}

export function AccordionItem({ children, className, value, ...props }: React.HTMLAttributes<HTMLDivElement> & { value?: string }) {
  return <div className={className} {...props}>{children}</div>
}

export function AccordionTrigger({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      className={`w-full text-left text-white font-medium py-2 ${className || ''}`} 
      {...props}
    >
      {children}
    </button>
  )
}

export function AccordionContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`text-white/70 text-sm pb-4 ${className || ''}`} 
      {...props}
    >
      {children}
    </div>
  )
}
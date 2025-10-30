import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: DivProps) {
  return <div className={`rounded-2xl border bg-background text-foreground shadow ${className}`} {...props} />;
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return <div className={`p-6 pb-2 ${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }: DivProps) {
  return <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />;
}

export function CardDescription({ className = "", ...props }: DivProps) {
  return <p className={`text-sm text-muted-foreground ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }: DivProps) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}

export function CardFooter({ className = "", ...props }: DivProps) {
  return <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />;
}

export default Card;

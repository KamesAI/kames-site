import * as React from "react";

type FormProps = React.FormHTMLAttributes<HTMLFormElement>;
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export function Form({ className = "", ...props }: FormProps) {
  return <form className={className} {...props} />;
}

export function FormItem({ className = "", ...props }: DivProps) {
  return <div className={`space-y-2 ${className}`} {...props} />;
}

export function FormControl({ className = "", ...props }: DivProps) {
  return <div className={className} {...props} />;
}

export function FormLabel({ className = "", ...props }: LabelProps) {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  );
}

export function FormMessage({ className = "", ...props }: DivProps) {
  return <p className={`text-sm text-destructive ${className}`} {...props} />;
}

// Shim très permissif pour coller à l'API shadcn :
// <FormField name="x" render={({ field }) => (...) } />
export function FormField(props: any) {
  const { render, children, name, className = "", ...rest } = props || {};
  if (typeof render === "function") {
    const fakeField = {
      name: name ?? "",
      value: undefined,
      onChange: () => {},
      onBlur: () => {},
      ref: () => {},
    };
    const fakeMeta = { fieldState: {}, formState: {} };
    return (
      <div className={className} {...rest}>
        {render({ field: fakeField, ...fakeMeta })}
      </div>
    );
  }
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[linear-gradient(135deg,hsl(var(--ocean-blue)),hsl(var(--teal-green)))] text-primary-foreground hover:shadow-[0_0_40px_hsl(var(--ocean-blue)/0.6)] hover:scale-105 transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-[hsl(var(--ocean-blue))] bg-transparent text-foreground hover:bg-[linear-gradient(135deg,hsl(var(--ocean-blue)/0.1),hsl(var(--aqua-green)/0.1))] hover:border-[hsl(var(--aqua-green))] hover:shadow-[0_0_30px_hsl(var(--ocean-blue)/0.4)]",
        secondary: "bg-[linear-gradient(135deg,hsl(var(--teal-green)),hsl(var(--aqua-green)))] text-secondary-foreground hover:shadow-[0_0_35px_hsl(var(--teal-green)/0.5)] hover:scale-105",
        ghost: "hover:bg-[linear-gradient(135deg,hsl(var(--ocean-blue)/0.1),hsl(var(--aqua-green)/0.1))] hover:text-[hsl(var(--ocean-blue))]",
        link: "text-foreground underline-offset-4 hover:underline hover:text-[hsl(var(--ocean-blue))]",
        electric: "bg-[linear-gradient(135deg,hsl(var(--ocean-blue)),hsl(var(--aqua-green)),hsl(var(--teal-green)))] bg-[length:200%_200%] animate-[gradient-shift_3s_ease_infinite] text-white hover:shadow-[0_0_45px_hsl(var(--ocean-blue)/0.6),0_0_60px_hsl(var(--aqua-green)/0.4)] hover:scale-105 transition-all duration-300",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

import Link from "next/link";
import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/** Variants map onto the Bootstrap button classes used by the original markup. */
const buttonLink = cva("btn", {
  variants: {
    variant: {
      primary: "btn-primary",
      outlineLight: "btn-outline-light",
      dark: "btn-dark",
    },
    size: {
      default: "",
      lg: "btn-lg",
    },
  },
  defaultVariants: { variant: "primary", size: "lg" },
});

type ButtonLinkProps = ComponentProps<typeof Link> & VariantProps<typeof buttonLink>;

export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonLink({ variant, size }), className)} {...props} />;
}

/** Same look for in-page anchors (`#section`) which must stay plain <a> for smooth scrolling. */
export function ButtonAnchor({
  variant,
  size,
  className,
  ...props
}: ComponentProps<"a"> & VariantProps<typeof buttonLink>) {
  return <a className={cn(buttonLink({ variant, size }), className)} {...props} />;
}

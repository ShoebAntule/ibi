import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "sm";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "default",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "text-white font-bold cursor-pointer transition-transform duration-300 rounded-lg border-none",
        variant === "primary" && "bg-[#3ED5DD] hover:bg-[#2BC0C7]",
        variant === "secondary" && "bg-neutral-800 hover:bg-neutral-700",
        size === "default" && "px-10 py-6 text-2xl",
        size === "lg" && "px-12 py-7 text-3xl",
        size === "sm" && "px-8 py-4 text-lg",
        "max-sm:text-lg max-sm:px-8 max-sm:py-4",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

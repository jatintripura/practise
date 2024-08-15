import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  color?: string;
  backgroundColor?: string;

  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,

  variant = "primary",
  color,
  backgroundColor,

  fontWeight = "normal",
  className = "",
}) => {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "primary":
        return {
          color: color || "white",
          backgroundColor: backgroundColor || "#24AFB5",
        };
      case "outline":
        return {
          color: color || "black",
          backgroundColor: backgroundColor || "white",
          border: `2px solid ${color || "black"}`,
        };

      default:
        return {
          color: "white",
          backgroundColor: "blue",
        };
    }
  };
  const variants = getVariantStyles(variant);
  return (
    <button
      className={className}
      style={{
        ...variants,
        fontWeight,
        padding: "0.75rem 1.5rem", // Fixed padding for all buttons
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px", // Fixed font size
      }}
    >
      {children}
    </button>
  );
};

export default Button;

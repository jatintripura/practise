import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  onClick,
  children,
}) => {
  const getVariantClass = (variant: ButtonVariant) => {
    switch (variant) {
      case "primary":
        return "bg-blue-500 text-white";
      case "secondary":
        return "bg-gray-500 text-white";
      case "outline":
        return "border border-blue-500 text-blue-500";
      default:
        return "";
    }
  };

  const getSizeClass = (size: ButtonSize) => {
    switch (size) {
      case "small":
        return "px-2 py-1 text-sm";
      case "medium":
        return "px-4 py-2 text-base";
      case "large":
        return "px-6 py-3 text-lg";
      default:
        return "";
    }
  };

  return (
    <button
      className={`rounded ${getVariantClass(variant)} ${getSizeClass(size)}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

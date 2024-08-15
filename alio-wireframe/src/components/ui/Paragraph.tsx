import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;

  variant?: "xl" | "lg";
  className?: string;
  lineHeight?: number | string;
  fontWeight?: "normal" | "semibold" | "bold" | number;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children,

  variant = "xl",
  className = "",
  lineHeight = "normal",
  fontWeight = "normal",
}) => {
  const getDefaultFontSize = (variant: string): string => {
    switch (variant) {
      case "xl":
        return "1.25rem";
      case "lg":
        return "1rem";
      default:
        return "1.25rem";
    }
  };
  const fontSize = getDefaultFontSize(variant);
  return (
    <div className={className} style={{ fontSize, fontWeight, lineHeight }}>
      {children}
    </div>
  );
};

export default Paragraph;

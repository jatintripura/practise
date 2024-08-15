import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;

  color?: string;

  className?: string;
  fontWeight?: "normal" | "semibold" | "bold";
}

const Title: React.FC<TitleProps> = ({
  children,
  color = "",

  className = "",
  fontWeight = "normal",
}) => {
  return (
    <div className={className} style={{ color, fontWeight }}>
      {children}
    </div>
  );
};

export default Title;

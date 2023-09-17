import { useThemeContext } from "@/providers/ThemeColor";
import React from "react";

interface TextLightProps {
  title: string;
  className?: string;
}
const TextLightMemo: React.FC<TextLightProps> = ({ title, className }) => {
    const { currentTheme } = useThemeContext();

  return (
    <div className={`${currentTheme.textLight} text-4xl lg:text-5xl font-bold ${className}`}>
      {title}
    </div>
  );
};

const TextLight = React.memo(TextLightMemo);

export default TextLight;
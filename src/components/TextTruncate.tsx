import React from "react";

interface TextComponentProps {
  text: string;
}

const TextTruncateMemo: React.FC<TextComponentProps> = ({ text }) => {
  if (text.length > 40) {
    const truncatedText = text.slice(0, 100) + "...";
    return <div>{truncatedText}</div>;
  } else {
    return <div>{text}</div>;
  }
};

const TextTruncate = React.memo(TextTruncateMemo);

export default TextTruncate;

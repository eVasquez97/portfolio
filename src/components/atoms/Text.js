import { getCurrentColor, getTextSize, getTextMode } from "@/utils/constants";

const Text = ({ text, size, color, mode, isDark, className }) => {
  const currentColor = getCurrentColor(color);
  const currentMode = getTextMode(mode);
  const currentSize = getTextSize(size);

  return (
    <p
      className={`font-firaCode ${currentSize} ${currentColor} ${currentMode} ${
        isDark && "dark:text-lime-400"
      } ${className} `}
    >
      {text}
    </p>
  );
};

export default Text;

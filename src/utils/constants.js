import {
  TfiFacebook,
  TfiInstagram,
  TfiTwitter,
  TfiLinkedin,
  TfiAngleDoubleRight,
  TfiLightBulb,
  TfiSettings,
  TfiBook,
  TfiBookmark,
} from "react-icons/tfi";

export const allIcons = {
  TfiFacebook,
  TfiInstagram,
  TfiTwitter,
  TfiLinkedin,
  TfiAngleDoubleRight,
  TfiLightBulb,
  TfiSettings,
  TfiBook,
  TfiBookmark,
};

export function getIcon(icon, size) {
  const Icon = allIcons[icon];
  return <Icon size={size ?? "14"} />;
}

export function getTextMode(mode) {
  switch (mode) {
    case "bold":
      return "font-bold";
    case "light":
      return "font-light";
    case "extra-light":
      return "font-extra-light";
    case "semi-bold":
      return "font-semi-bold";
    default:
      return "font-normal";
  }
}

export function getCurrentColor(color) {
  switch (color) {
    case "highlight":
      return "text-lime-400";
    case "opaque":
      return "text-lime-200";
    case "blue-300":
      return "text-blue-300";
    case "sky-300":
      return "text-sky-300";
    default:
      return "text-neutral-200";
  }
}

export function getTextSize(size) {
  switch (size) {
    case "xs":
      return "text-xs";
    case "lg":
      return "text-lg";
    default:
      return "text-sm";
  }
}

export function generateMediaIcon(icon) {
  switch (icon) {
    case "TfiFacebook":
      return "text-neutral-200 bg-blue-600";
    case "TfiInstagram":
      return "text-neutral-200 bg-gradient-to-b from-purple-600 to-orange-500";
    case "TfiLinkedin":
      return "text-neutral-200 bg-blue-900";
    case "TfiTwitter":
      return "text-neutral-200 bg-sky-500";
    default:
  }
}

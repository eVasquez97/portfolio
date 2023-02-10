import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCode,
  FaBook,
} from "react-icons/fa";

export const allIcons = {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaCode,
  FaBook,
};

export function getIcon(icon, size) {
  const Icon = allIcons[icon];
  return <Icon size={size ?? "14"} />;
}

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export const socialMediaIcons = {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
};

export function getIcon(icon) {
  const Icon = socialMediaIcons[icon];
  return <Icon />;
}

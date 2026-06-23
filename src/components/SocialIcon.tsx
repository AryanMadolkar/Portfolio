import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { FiMail, FiFileText, FiLink } from "react-icons/fi";

const ICONS: Record<string, IconType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Instagram: FaInstagram,
  Twitter: FaXTwitter,
  Email: FiMail,
  Resume: FiFileText,
};

export function SocialIcon({ label, size = 16 }: { label: string; size?: number }) {
  const Icon = ICONS[label] ?? FiLink;
  return <Icon size={size} aria-label={label} />;
}

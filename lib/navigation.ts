export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Furniture", href: "/services/custom-furniture" },
      { label: "Cabinetry", href: "/services/cabinetry" },
      { label: "Shelving", href: "/services/shelving" },
      { label: "Restoration", href: "/services/restoration" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Custom Furniture", href: "/services/custom-furniture" },
    { label: "Cabinetry", href: "/services/cabinetry" },
    { label: "Shelving", href: "/services/shelving" },
    { label: "Restoration", href: "/services/restoration" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
}

export const services: Service[] = [
  {
    slug: "custom-furniture",
    title: "Custom Furniture",
    shortDescription:
      "Handcrafted tables, chairs, beds, desks, and more — designed and built to your exact specifications.",
    description:
      "Every piece of custom furniture we build starts with your vision. From dining tables that become the heart of your home to heirloom-quality bed frames passed down through generations, we craft each piece with the precision and care that comes from decades of woodworking tradition. Our Amish heritage shows in every joint, every finish, every detail.",
    features: [
      "Dining & coffee tables",
      "Bed frames & headboards",
      "Desks & workstations",
      "Chairs & benches",
      "Entertainment centers",
      "Custom designs to your specs",
    ],
    cta: "Start Your Custom Piece",
    href: "/services/custom-furniture",
  },
  {
    slug: "cabinetry",
    title: "Cabinetry & Built-Ins",
    shortDescription:
      "Custom cabinetry for kitchens, bathrooms, and living spaces — built to fit your home perfectly.",
    description:
      "Off-the-shelf cabinets can never match the quality or fit of custom-built cabinetry. We design and build cabinets that maximize your space, match your style, and last for decades. From kitchen cabinets to bathroom vanities to built-in bookshelves, every piece is crafted with the same attention to detail our family has brought to woodworking for over 40 years.",
    features: [
      "Kitchen cabinets",
      "Bathroom vanities",
      "Built-in bookshelves",
      "Entertainment centers",
      "Pantry systems",
      "Mudroom built-ins",
    ],
    cta: "Request a Consultation",
    href: "/services/cabinetry",
  },
  {
    slug: "shelving",
    title: "Shelving & Storage",
    shortDescription:
      "Custom shelving solutions that combine beauty and function — from floating shelves to full wall units.",
    description:
      "Whether you need a single floating shelf or a floor-to-ceiling wall unit, we build shelving that turns storage into a design statement. Our custom shelving solutions are engineered for strength and crafted for beauty, using premium hardwoods and time-tested joinery techniques.",
    features: [
      "Floating shelves",
      "Wall-mounted units",
      "Closet systems",
      "Garage storage",
      "Display shelving",
      "Pantry shelving",
    ],
    cta: "Request a Consultation",
    href: "/services/shelving",
  },
  {
    slug: "restoration",
    title: "Restoration & Refinishing",
    shortDescription:
      "Breathe new life into cherished furniture — expert restoration and refinishing for antiques and heirlooms.",
    description:
      "Some pieces are worth saving. Whether it is a family heirloom, an antique find, or a beloved piece that has seen better days, our restoration services bring furniture back to its former glory. We repair structural damage, strip and refinish surfaces, replace hardware, and restore pieces with the respect they deserve.",
    features: [
      "Antique restoration",
      "Surface refinishing",
      "Structural repair",
      "Hardware replacement",
      "Re-staining & re-sealing",
      "Color matching",
    ],
    cta: "Get a Restoration Estimate",
    href: "/services/restoration",
  },
];

import {
  FaHome,
  FaPaintRoller,
  FaBolt,
  FaCouch,
  FaHammer,
  FaTools,
} from "react-icons/fa";

const services = [
  // ================= 1. PLUMBING =================
  {
    id: 7,
    slug: "plumbing",
    title: "Plumbing Services",
    shortTitle: "Plumbing",
    description:
      "Professional plumbing installation, repair and maintenance services.",
    icon: FaTools,
    image:
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80",
   
  },

  // ================= 2. PAINTING =================
  {
    id: 3,
    slug: "home-painting",
    title: "Home Painting",
    shortTitle: "Painting",
    description:
      "Give your home a fresh new look with professional painting services.",
    longDescription:
      "Our painting professionals help you select the right colors, finishes and materials while delivering clean and durable results for both interior and exterior spaces.",
    icon: FaPaintRoller,
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Interior painting",
      "Exterior painting",
      "Wall preparation",
      "Texture painting",
      "Color consultation",
      "Premium finishes",
    ],
  },

  // ================= 3. MARBLE & TILES =================
  {
    id: 8,
    slug: "marble-tiles",
    title: "Marble & Tiles",
    shortTitle: "Marble & Tiles",
    description:
      "Professional marble and tile installation for beautiful and durable spaces.",
    longDescription:
      "Our marble and tile experts provide professional installation for floors, walls, kitchens, bathrooms and other spaces using quality materials and precise finishing.",
    icon: FaHammer,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Marble flooring",
      "Tile installation",
      "Bathroom tiles",
      "Kitchen tiles",
      "Wall tiles",
      "Floor polishing",
    ],
  },

  // ================= 4. ELECTRICAL =================
  {
    id: 4,
    slug: "electrical",
    title: "Electrical Work",
    shortTitle: "Electrical",
    description:
      "Safe and reliable electrical solutions for your home.",
    
    icon: FaBolt,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    
  },

  // ================= 5. AC FITTING & REPAIRS =================
  {
    id: 9,
    slug: "ac-fitting-repairs",
    title: "AC Fitting & Repairs",
    shortTitle: "AC Services",
    description:
      "Reliable air conditioner installation, fitting, repair and maintenance services.",
    longDescription:
      "Our AC professionals provide installation, fitting, servicing and repair solutions for homes and offices to keep your cooling systems working efficiently.",
    icon: FaTools,
    image:
      "https://premiumairconditioning.co.za/cdn/shop/files/happy-male-technician-repairing-air-conditioner-2024-03-12-20-30-41-utc_a5232b4f-1ede-45c6-b2fd-012f3073a8c0.jpg?v=1736771847",
    features: [
      "AC installation",
      "AC fitting",
      "AC repair",
      "AC servicing",
      "Gas filling",
      "AC maintenance",
    ],
  },

 

  // ================= 7. HOME RENOVATION =================
  {
    id: 6,
    slug: "home-renovation",
    title: "Home Renovation",
    shortTitle: "Renovation",
    description:
      "Transform your existing home with complete renovation solutions.",
    longDescription:
      "Whether you want to update a single room or renovate your entire property, our team can handle planning, design, construction and finishing under one roof.",
    icon: FaHammer,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Complete home renovation",
      "Kitchen renovation",
      "Bathroom renovation",
      "Flooring replacement",
      "Wall renovation",
      "Interior upgrades",
    ],
  },

  

  // ================= 9. ROOM TRANSFER =================
  {
    id: 11,
    slug: "room-transfer",
    title: "Room Transfer",
    shortTitle: "Room Transfer",
    description:
      "Professional room shifting and transfer solutions for a smooth and hassle-free move.",
    longDescription:
      "Our room transfer service helps you safely move furniture, appliances and household items from one room or location to another with proper handling and care.",
    icon: FaHome,
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Room shifting",
      "Furniture moving",
      "Appliance shifting",
      "Packing assistance",
      "Loading and unloading",
      "Safe item handling",
    ],
  },

  // ================= 10. CHIMNEY FITTING & REPAIRS =================
  {
    id: 12,
    slug: "chimney-fitting-repairs",
    title: "Chimney Fitting & Repairs",
    shortTitle: "Chimney",
    description:
      "Professional kitchen chimney installation, fitting, repair and maintenance services.",
    longDescription:
      "Our professionals handle kitchen chimney installation, duct fitting, repair and maintenance to keep your kitchen clean, fresh and properly ventilated.",
    icon: FaTools,
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Chimney installation",
      "Chimney fitting",
      "Duct installation",
      "Chimney repair",
      "Chimney cleaning",
      "Chimney maintenance",
    ],
  },

  // ================= 11. METAL & ALUMINIUM =================
  {
    id: 13,
    slug: "metal-aluminium",
    title: "Metal & Aluminium",
    shortTitle: "Metal & Aluminium",
    description:
      "Custom metal and aluminium fabrication solutions for homes and commercial spaces.",
    longDescription:
      "Our metal and aluminium professionals provide customized fabrication and installation services for doors, windows, railings, partitions and other requirements.",
    icon: FaTools,
    image:
      "https://static.wixstatic.com/media/081a9a_844a22d71970440ea28bf5cf00ca6092~mv2.jpg/v1/fill/w_676%2Ch_514%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/081a9a_844a22d71970440ea28bf5cf00ca6092~mv2.jpg",
    features: [
      "Aluminium doors",
      "Aluminium windows",
      "Metal doors",
      "Railings",
      "Partitions",
      "Custom fabrication",
    ],
  },


  // ================= 13. AMC =================
  {
  id: 5,
  slug: "annual-maintenance-charges",
  title: "Annual Maintenance Charges",
  shortTitle: "AMC",
  description:
    "Reliable annual maintenance services to keep your home and essential systems running smoothly.",
  
  icon: FaTools,
  image:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
 
},
   // ================= 6. HOME CONSTRUCTION =================
  {
    id: 1,
    slug: "home-construction",
    title: "Home Construction",
    shortTitle: "Construction",
    description:
      "Build your dream home with complete end-to-end construction services.",
    longDescription:
      "From architectural planning and structural work to finishing and final handover, our team manages your home construction with professional planning, quality materials and experienced workers.",
    icon: FaHome,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Architectural planning",
      "Structural construction",
      "Brick and concrete work",
      "Roofing",
      "Flooring",
      "Complete project management",
    ],
  },

  // ================= 8. MODULAR KITCHEN =================
  {
    id: 10,
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    shortTitle: "Modular Kitchen",
    description:
      "Modern modular kitchens designed for style, functionality and maximum storage.",
    longDescription:
      "We design and install customized modular kitchens according to your space, lifestyle and storage requirements with modern finishes and practical layouts.",
    icon: FaCouch,
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Modular kitchen design",
      "Kitchen cabinets",
      "Countertop installation",
      "Kitchen storage",
      "Kitchen lighting",
      "Complete kitchen installation",
    ],
  },

   
  // ================= 12. INTERIOR DESIGN =================
  {
    id: 2,
    slug: "interior-design",
    title: "Interior Design",
    shortTitle: "Interior",
    description:
      "Create beautiful and functional interiors designed around your lifestyle.",
    longDescription:
      "Our interior design service combines aesthetics, functionality and comfort to create spaces that feel personal and work perfectly for your everyday life.",
    icon: FaCouch,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Living room design",
      "Bedroom design",
      "Kitchen design",
      "False ceiling",
      "Lighting design",
      "Custom furniture",
    ],
  },

];

export default services;
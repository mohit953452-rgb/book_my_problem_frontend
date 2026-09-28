const professionalsData = [
  {
    id: 1,
    name: "Aarav Design Studio",
    slug: "aarav-design-studio",
    category: "Interior Designer",
    city: "Kathmandu",
    rating: 4.9,
    reviews: 128,
    experience: 8,
    verified: true,
    available: true,

    description:
      "A modern interior design studio specializing in residential interiors, apartments, living rooms, bedrooms and complete home makeovers.",

    services: [
      "Home Interior",
      "Living Room Design",
      "Bedroom Design",
      "Modular Kitchen",
      "Wardrobe Design",
    ],

    projectsCompleted: 86,
    startingPrice: "NPR 25,000",
    responseTime: "Within 2 hours",

    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 2,
    name: "Himalayan Build Works",
    slug: "himalayan-build-works",
    category: "Contractor",
    city: "Lalitpur",
    rating: 4.8,
    reviews: 96,
    experience: 11,
    verified: true,
    available: true,

    description:
      "Experienced residential construction contractor providing complete home construction, structural work, renovation and finishing services.",

    services: [
      "Home Construction",
      "Structural Work",
      "Renovation",
      "Flooring",
      "Painting",
      "Finishing Work",
    ],

    projectsCompleted: 74,
    startingPrice: "NPR 1,500/sq.ft",
    responseTime: "Within 3 hours",

    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 3,
    name: "Modern Living Architects",
    slug: "modern-living-architects",
    category: "Architect",
    city: "Kathmandu",
    rating: 4.9,
    reviews: 154,
    experience: 10,
    verified: true,
    available: true,

    description:
      "Architecture firm focused on modern residential planning, 2D and 3D designs, space optimization and complete architectural consultation.",

    services: [
      "House Planning",
      "2D Floor Plan",
      "3D Design",
      "Elevation Design",
      "Architectural Consultation",
    ],

    projectsCompleted: 112,
    startingPrice: "NPR 35,000",
    responseTime: "Within 1 hour",

    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 4,
    name: "Pokhara Home Studio",
    slug: "pokhara-home-studio",
    category: "Interior Designer",
    city: "Pokhara",
    rating: 4.7,
    reviews: 82,
    experience: 7,
    verified: true,
    available: true,

    description:
      "Interior design professionals creating comfortable and contemporary homes with practical layouts and premium finishes.",

    services: [
      "Home Interior",
      "Bedroom Interior",
      "Kitchen Design",
      "Living Room",
      "Home Decor",
    ],

    projectsCompleted: 61,
    startingPrice: "NPR 20,000",
    responseTime: "Within 4 hours",

    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 5,
    name: "Bhaktapur Construction Team",
    slug: "bhaktapur-construction-team",
    category: "Contractor",
    city: "Bhaktapur",
    rating: 4.8,
    reviews: 107,
    experience: 13,
    verified: true,
    available: false,

    description:
      "Professional construction team handling new residential buildings, extensions, renovation projects and complete finishing work.",

    services: [
      "Home Construction",
      "Renovation",
      "Brick Work",
      "Plaster Work",
      "Flooring",
      "Painting",
    ],

    projectsCompleted: 118,
    startingPrice: "NPR 1,450/sq.ft",
    responseTime: "Within 1 day",

    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 6,
    name: "CraftSpace Furniture",
    slug: "craftspace-furniture",
    category: "Furniture Expert",
    city: "Lalitpur",
    rating: 4.8,
    reviews: 91,
    experience: 12,
    verified: true,
    available: true,

    description:
      "Custom furniture specialists creating modern wardrobes, modular kitchens, TV units, storage cabinets and customized furniture.",

    services: [
      "Custom Furniture",
      "Wardrobe",
      "Modular Kitchen",
      "TV Unit",
      "Storage Cabinet",
      "Office Furniture",
    ],

    projectsCompleted: 143,
    startingPrice: "NPR 18,000",
    responseTime: "Within 2 hours",

    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 7,
    name: "Butwal Home Experts",
    slug: "butwal-home-experts",
    category: "Home Renovation",
    city: "Butwal",
    rating: 4.6,
    reviews: 68,
    experience: 6,
    verified: true,
    available: true,

    description:
      "Home renovation professionals handling complete room makeovers, painting, flooring, furniture upgrades and residential improvements.",

    services: [
      "Home Renovation",
      "Painting",
      "Flooring",
      "False Ceiling",
      "Furniture Upgrade",
    ],

    projectsCompleted: 52,
    startingPrice: "NPR 15,000",
    responseTime: "Within 5 hours",

    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 8,
    name: "Chitwan Build & Design",
    slug: "chitwan-build-design",
    category: "Contractor",
    city: "Chitwan",
    rating: 4.7,
    reviews: 73,
    experience: 9,
    verified: true,
    available: true,

    description:
      "Construction and home improvement professionals providing residential construction, renovation and finishing services throughout Chitwan.",

    services: [
      "Home Construction",
      "Renovation",
      "Roofing",
      "Flooring",
      "Painting",
      "Plumbing",
    ],

    projectsCompleted: 67,
    startingPrice: "NPR 1,400/sq.ft",
    responseTime: "Within 3 hours",

    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 9,
    name: "Everest Electrical Solutions",
    slug: "everest-electrical-solutions",
    category: "Electrician",
    city: "Kathmandu",
    rating: 4.8,
    reviews: 134,
    experience: 9,
    verified: true,
    available: true,

    description:
      "Professional electrical service provider offering residential wiring, lighting installation, DB work, switchboard installation and electrical repairs.",

    services: [
      "House Wiring",
      "Lighting Installation",
      "Electrical Repair",
      "DB Installation",
      "Switchboard Work",
      "Fan Installation",
    ],

    projectsCompleted: 320,
    startingPrice: "NPR 1,500",
    responseTime: "Within 30 minutes",

    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 10,
    name: "Kathmandu Plumbing Care",
    slug: "kathmandu-plumbing-care",
    category: "Plumber",
    city: "Kathmandu",
    rating: 4.7,
    reviews: 119,
    experience: 8,
    verified: true,
    available: true,

    description:
      "Reliable plumbing professionals handling bathroom plumbing, kitchen plumbing, leakage repair, water pipelines and installation work.",

    services: [
      "Plumbing Repair",
      "Bathroom Plumbing",
      "Kitchen Plumbing",
      "Pipe Installation",
      "Leakage Repair",
      "Water Tank Installation",
    ],

    projectsCompleted: 410,
    startingPrice: "NPR 800",
    responseTime: "Within 45 minutes",

    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 11,
    name: "ColorCraft Painting Services",
    slug: "colorcraft-painting-services",
    category: "Painter",
    city: "Lalitpur",
    rating: 4.8,
    reviews: 87,
    experience: 7,
    verified: true,
    available: true,

    description:
      "Professional painting team offering interior and exterior painting, texture finishes, waterproofing and decorative wall solutions.",

    services: [
      "Interior Painting",
      "Exterior Painting",
      "Wall Texture",
      "Waterproofing",
      "Decorative Painting",
    ],

    projectsCompleted: 184,
    startingPrice: "NPR 35/sq.ft",
    responseTime: "Within 2 hours",

    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 12,
    name: "Nepal Modular Kitchen Studio",
    slug: "nepal-modular-kitchen-studio",
    category: "Modular Kitchen",
    city: "Kathmandu",
    rating: 4.9,
    reviews: 142,
    experience: 9,
    verified: true,
    available: true,

    description:
      "Modular kitchen specialists designing modern, space-efficient kitchens with premium cabinets, countertops and smart storage.",

    services: [
      "Modular Kitchen",
      "Kitchen Cabinets",
      "Countertop Installation",
      "Kitchen Storage",
      "Kitchen Renovation",
    ],

    projectsCompleted: 156,
    startingPrice: "NPR 1,20,000",
    responseTime: "Within 2 hours",

    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 13,
    name: "Urban Floor & Tiles",
    slug: "urban-floor-tiles",
    category: "Tiles & Flooring",
    city: "Pokhara",
    rating: 4.7,
    reviews: 64,
    experience: 10,
    verified: true,
    available: true,

    description:
      "Flooring specialists providing tile installation, marble work, wooden flooring and complete flooring solutions for homes.",

    services: [
      "Floor Tiles",
      "Wall Tiles",
      "Marble Work",
      "Wooden Flooring",
      "Bathroom Tiles",
    ],

    projectsCompleted: 203,
    startingPrice: "NPR 90/sq.ft",
    responseTime: "Within 3 hours",

    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 14,
    name: "Comfort AC Solutions",
    slug: "comfort-ac-solutions",
    category: "AC Technician",
    city: "Kathmandu",
    rating: 4.6,
    reviews: 76,
    experience: 7,
    verified: true,
    available: true,

    description:
      "AC installation and repair specialists providing residential air conditioning installation, servicing, gas charging and maintenance.",

    services: [
      "AC Installation",
      "AC Repair",
      "AC Servicing",
      "Gas Charging",
      "AC Maintenance",
    ],

    projectsCompleted: 290,
    startingPrice: "NPR 1,200",
    responseTime: "Within 1 hour",

    image:
      "https://images.unsplash.com/photo-1631545806609-5d7a8f4f4c1f?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 15,
    name: "Elegant Home Decor",
    slug: "elegant-home-decor",
    category: "Home Decor",
    city: "Bhaktapur",
    rating: 4.8,
    reviews: 58,
    experience: 6,
    verified: true,
    available: true,

    description:
      "Home decor specialists creating stylish living spaces with lighting, wall art, curtains, decorative furniture and accessories.",

    services: [
      "Home Decor",
      "Wall Decor",
      "Lighting",
      "Curtains",
      "Decorative Furniture",
    ],

    projectsCompleted: 74,
    startingPrice: "NPR 12,000",
    responseTime: "Within 4 hours",

    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 16,
    name: "Green Valley Architects",
    slug: "green-valley-architects",
    category: "Architect",
    city: "Pokhara",
    rating: 4.9,
    reviews: 101,
    experience: 14,
    verified: true,
    available: false,

    description:
      "Experienced architecture firm designing modern residential homes with practical planning, sustainable concepts and detailed 3D visualization.",

    services: [
      "Architectural Design",
      "House Planning",
      "3D Visualization",
      "Elevation",
      "Structural Consultation",
    ],

    projectsCompleted: 132,
    startingPrice: "NPR 45,000",
    responseTime: "Within 1 day",

    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 17,
    name: "Prime Home Renovators",
    slug: "prime-home-renovators",
    category: "Home Renovation",
    city: "Kathmandu",
    rating: 4.7,
    reviews: 93,
    experience: 10,
    verified: true,
    available: true,

    description:
      "Complete home renovation company specializing in old house renovation, room remodeling, flooring, painting and modern upgrades.",

    services: [
      "Complete Renovation",
      "Room Remodeling",
      "Flooring",
      "Painting",
      "False Ceiling",
      "Bathroom Renovation",
    ],

    projectsCompleted: 98,
    startingPrice: "NPR 30,000",
    responseTime: "Within 2 hours",

    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 18,
    name: "SmartSpace Interior",
    slug: "smartspace-interior",
    category: "Interior Designer",
    city: "Biratnagar",
    rating: 4.6,
    reviews: 49,
    experience: 5,
    verified: true,
    available: true,

    description:
      "Creative interior designers focused on affordable modern home interiors, compact apartments and smart space utilization.",

    services: [
      "Apartment Interior",
      "Bedroom Design",
      "Living Room",
      "Storage Solutions",
      "Home Decor",
    ],

    projectsCompleted: 42,
    startingPrice: "NPR 18,000",
    responseTime: "Within 5 hours",

    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 19,
    name: "Reliable Roofing & Construction",
    slug: "reliable-roofing-construction",
    category: "Construction Expert",
    city: "Dharan",
    rating: 4.7,
    reviews: 61,
    experience: 12,
    verified: true,
    available: true,

    description:
      "Construction specialists providing roofing, structural repair, waterproofing and residential construction services.",

    services: [
      "Roofing",
      "Waterproofing",
      "Structural Repair",
      "Home Construction",
      "Roof Maintenance",
    ],

    projectsCompleted: 88,
    startingPrice: "NPR 20,000",
    responseTime: "Within 3 hours",

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 20,
    name: "Premium Home Solutions",
    slug: "premium-home-solutions",
    category: "Home Services",
    city: "Kathmandu",
    rating: 4.9,
    reviews: 176,
    experience: 15,
    verified: true,
    available: true,

    description:
      "Complete home service provider offering construction, interior design, electrical, plumbing, painting and renovation services under one platform.",

    services: [
      "Home Construction",
      "Interior Design",
      "Electrical",
      "Plumbing",
      "Painting",
      "Renovation",
      "Furniture",
    ],

    projectsCompleted: 245,
    startingPrice: "NPR 10,000",
    responseTime: "Within 30 minutes",

    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
];

export default professionalsData;
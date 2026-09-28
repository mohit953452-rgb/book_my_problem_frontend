const plumbingServices = [
  // ================= MARVEL PIPES =================

  {
    id: 1,
    slug: "cpvc-pipe-3-4-marvel",
    title: "CPVC Pipe 3/4",
    price: "₹700",
    description:
      "High-quality 3/4 inch CPVC pipe suitable for reliable plumbing and water supply installations.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    slug: "pvc-pipe-4-marvel",
    title: "PVC Pipe 4",
    price: "₹2,970",
    description:
      "Durable 4 inch PVC pipe designed for plumbing, drainage and water flow applications.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    slug: "pvc-pipe-2-1-2-marvel",
    title: "PVC Pipe 2 1/2",
    price: "₹1,598",
    description:
      "Strong and durable 2.5 inch PVC pipe for various residential plumbing requirements.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  // ================= L.Q.C =================

  {
    id: 4,
    slug: "cpvc-pipe-3-4-lqc",
    title: "C.P.V.C Pipe 3/4",
    price: "₹370",
    description:
      "3/4 inch CPVC pipe suitable for household water supply and plumbing installations.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 5,
    slug: "pvc-pipe-4-lqc",
    title: "PVC Pipe 4",
    price: "₹2,365",
    description:
      "4 inch PVC pipe designed for durable plumbing and drainage applications.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    slug: "pvc-pipe-2-1-2-lqc",
    title: "PVC Pipe 2 1/2",
    price: "₹1,315",
    description:
      "2.5 inch PVC pipe for residential plumbing and drainage requirements.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  // ================= COMBOARD =================

  {
    id: 7,
    slug: "bencardo-comboard",
    title: "Bencardo Comboard",
    price: "₹15,225",
    description:
      "Quality Bencardo comboard designed for modern bathroom installations.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 8,
    slug: "hindware-comboard",
    title: "Hindware Comboard",
    price: "₹34,650",
    description:
      "Premium Hindware comboard for comfortable and stylish bathroom setups.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 9,
    slug: "diverter-selfmix",
    title: "Diverter (Selfmix)",
    price: "₹12,600",
    description:
      "Self-mix diverter designed for convenient hot and cold water control.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 10,
    slug: "concealed-cock",
    title: "Concealed Cock",
    price: "₹1,417",
    description:
      "Concealed cock fitting for clean and modern bathroom plumbing installations.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 11,
    slug: "diverter-selfmix-2",
    title: "Diverter (Selfmix)",
    price: "₹7,875",
    description:
      "Self-mix diverter suitable for modern bathroom water control systems.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  // ================= PAN SEAT =================

  {
    id: 12,
    slug: "pan-seat-840",
    title: "Pan Seat",
    price: "₹840",
    description:
      "Standard bathroom pan seat suitable for residential toilet installations.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 13,
    slug: "pan-seat-1050",
    title: "Pan Seat",
    price: "₹1,050",
    description:
      "Durable pan seat designed for comfortable and reliable bathroom use.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 14,
    slug: "pan-seat-1312",
    title: "Pan Seat",
    price: "₹1,312.50",
    description:
      "Quality pan seat for residential bathroom and toilet installations.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 15,
    slug: "pan-seat-2100",
    title: "Bencardo Pan Seat",
    price: "₹2,100",
    description:
      "Bencardo pan seat offering reliable quality and comfortable bathroom use.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 16,
    slug: "hindware-pan-seat",
    title: "Hindware Pan Seat",
    price: "₹3,307.50",
    description:
      "Premium Hindware pan seat designed for modern bathroom installations.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  // ================= PLUMBING SERVICES =================

  {
    id: 17,
    slug: "hand-pump-repairing",
    title: "Hand Pump Repairing",
    price: "₹500",
    description:
      "Professional hand pump repair service to restore proper water flow and operation.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 18,
    slug: "motor-check-wall-fitting",
    title: "Motor Check Wall Fitting",
    price: "₹400",
    description:
      "Inspection and wall fitting service for water pump motors.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 19,
    slug: "motor-gate-valve",
    title: "Motor Gate Valve",
    price: "₹150",
    description:
      "Gate valve service for controlling water flow in motor-based plumbing systems.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 20,
    slug: "commode-repairing-system-box",
    title: "Commode Repairing / System Box",
    price: "₹500",
    description:
      "Professional repair service for commode systems and flush boxes.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 21,
    slug: "spray-changing",
    title: "Spray Changing",
    price: "₹150",
    description:
      "Bathroom spray replacement service for improved performance and convenience.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 22,
    slug: "wall-mixture-repair",
    title: "Wall Mixture Repair",
    price: "₹500",
    description:
      "Repair service for wall-mounted bathroom mixer taps.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 23,
    slug: "shower-change",
    title: "Shower Change",
    price: "₹150",
    description:
      "Professional shower replacement service for bathroom installations.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 24,
    slug: "t-j-change",
    title: "T/J Change",
    price: "₹200",
    description:
      "T-joint replacement service for efficient and leak-free plumbing connections.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  // ================= COMMODE & BASIN FITTING =================

  {
    id: 25,
    slug: "commode-fitting-1-piece",
    title: "Commode Fitting (1 Piece)",
    price: "₹1,500",
    description:
      "Professional installation of one-piece commode with proper plumbing connections.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 26,
    slug: "commode-fitting-2-piece",
    title: "Commode Fitting (2 Piece)",
    price: "₹1,200",
    description:
      "Professional installation of two-piece commode systems.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 27,
    slug: "basin-fitting",
    title: "Basin Fitting",
    price: "₹700",
    description:
      "Professional bathroom basin installation with proper plumbing connections.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 28,
    slug: "stand-basin-fitting",
    title: "Stand Basin Fitting",
    price: "₹1,200",
    description:
      "Complete installation service for stand-mounted bathroom basins.",
    image:
      "https://images.unsplash.com/photo-1584622781867-2f3f5f3f5f3f?auto=format&fit=crop&w=800&q=80",
  },

  // ================= GEYSER & WASHING MACHINE =================

  {
    id: 29,
    slug: "waste-coupling-set",
    title: "Waste Coupling Set",
    price: "₹150",
    description:
      "Waste coupling set installation for proper bathroom drainage connections.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 30,
    slug: "connection-pipe-change",
    title: "Connection Pipe Change",
    price: "₹150",
    description:
      "Replacement of plumbing connection pipes to maintain a reliable water supply.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 31,
    slug: "geyser-fitting",
    title: "Geyser Fitting",
    price: "₹450",
    description:
      "Professional geyser installation with secure water pipe connections.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 32,
    slug: "washing-machine-fitting",
    title: "Washing Machine Fitting",
    price: "₹1,000",
    description:
      "Complete plumbing connection and fitting service for washing machines.",
    image:
      "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
  },

  // ================= WATER TANK & FILTER =================

  {
    id: 33,
    slug: "filter-fitting-aqua",
    title: "Filter Fitting (Aqua)",
    price: "₹1,000",
    description:
      "Professional Aqua water filter fitting with proper plumbing connections.",
    image:
      "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 34,
    slug: "tank-fitting",
    title: "Tank Fitting",
    price: "₹2,000",
    description:
      "Water tank fitting and plumbing connection service for reliable water storage.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c0a7c9?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 35,
    slug: "tank-wash",
    title: "Tank Wash",
    price: "₹700",
    description:
      "Professional water tank cleaning and washing service.",
    image:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c0a7c9?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 36,
    slug: "pan-seat-change",
    title: "Pan Seat Change",
    price: "₹2,700",
    description:
      "Professional pan seat replacement service for bathroom toilets.",
    image:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  },
];

export default plumbingServices;
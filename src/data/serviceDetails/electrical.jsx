const electricalServices = [
  // ================= SWITCH & SOCKET =================

  {
    id: 1,
    slug: "16a-switch-fitting",
    title: "16A Switch Fitting Charge",
    price: "₹120",
    description:
      "Professional fitting and installation of 16A electrical switches for safe and reliable operation.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    slug: "16a-socket-fitting",
    title: "16A Socket Fitting Charge",
    price: "₹150",
    description:
      "Installation and fitting of 16A electrical sockets for household appliances and power connections.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    slug: "6a-switch-fitting",
    title: "6A Switch Fitting Charge",
    price: "₹120",
    description:
      "Professional installation of 6A switches for lights, fans and other household electrical points.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 4,
    slug: "6a-socket-fitting",
    title: "6A Socket Fitting Charge",
    price: "₹125",
    description:
      "Safe and reliable fitting of 6A electrical sockets for regular household use.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 5,
    slug: "bell-switch-fitting",
    title: "Bell Switch Fitting Charge",
    price: "₹100",
    description:
      "Professional installation and replacement of electrical bell switches.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    slug: "regulator-fitting",
    title: "Regulator Fitting Charge",
    price: "₹200",
    description:
      "Installation and fitting of fan regulators for smooth speed control.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    slug: "indicator-fitting",
    title: "Indicator Fitting Charge",
    price: "₹100",
    description:
      "Installation of electrical indicators for convenient power and circuit status monitoring.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 8,
    slug: "telephone-line-intercom",
    title: "Telephone Line / Intercom",
    price: "₹950",
    description:
      "Installation and connection of telephone lines and intercom systems for homes and offices.",
    image:
      "https://images.unsplash.com/photo-1580529401301-4d4aa7f88c8f?auto=format&fit=crop&w=800&q=80",
  },

  // ================= CCTV & EARTHING =================

  {
    id: 9,
    slug: "cctv-per-line-complete",
    title: "CCTV Per Line (Complete)",
    price: "₹1500",
    description:
      "Complete CCTV line installation including wiring and basic connection work.",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 10,
    slug: "earthing-per-line",
    title: "Earthing Per Line",
    price: "₹300",
    description:
      "Electrical earthing line installation to improve system safety and reduce electrical risks.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 11,
    slug: "tv-line-per-room",
    title: "TV Line Per Room",
    price: "₹450",
    description:
      "Professional TV cable line installation and connection for individual rooms.",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 12,
    slug: "earthing-connection",
    title: "Earthing Connection",
    price: "₹7500",
    description:
      "Complete earthing connection work designed to provide proper electrical safety and grounding.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 13,
    slug: "lighting-earthing-connection",
    title: "Earthing Connection Lighting",
    price: "₹9000",
    description:
      "Earthing and grounding connection for lighting and electrical systems.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },

  // ================= MCB / ELCB / MCCB =================

  {
    id: 14,
    slug: "mcb-sp-fitting",
    title: "MCB SP Fitting Charge",
    price: "₹100",
    description:
      "Single-pole MCB installation and fitting for individual electrical circuits.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 15,
    slug: "mcb-dp-fitting",
    title: "MCB DP Fitting Charge",
    price: "₹150",
    description:
      "Double-pole MCB fitting for safe isolation and protection of electrical circuits.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 16,
    slug: "mcb-tp-fitting",
    title: "MCB TP Fitting Charge",
    price: "₹500",
    description:
      "Three-pole MCB fitting and connection for suitable electrical installations.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 17,
    slug: "elcb-fitting",
    title: "ELCB Fitting Charge",
    price: "₹1500-2000",
    description:
      "ELCB installation to provide additional protection against electrical leakage and faults.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 18,
    slug: "mccb-fitting",
    title: "MCCB Fitting Charge",
    price: "₹1000",
    description:
      "Professional MCCB installation for high-capacity electrical protection systems.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 19,
    slug: "panel-board-fitting",
    title: "Panel Board Fitting Charge",
    price: "₹3500",
    description:
      "Electrical panel board installation and fitting for organized power distribution.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 20,
    slug: "sub-panel-board-fitting",
    title: "Sub Panel Board Fitting Charge",
    price: "₹3500",
    description:
      "Installation of sub-panel boards for efficient distribution of electrical circuits.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  // ================= MAIN ELECTRICAL WORK =================

  {
    id: 21,
    slug: "db-fitting",
    title: "DB Fitting Charge",
    price: "₹1500",
    description:
      "Distribution board fitting and connection for safe management of electrical circuits.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 22,
    slug: "stabilizer-connection",
    title: "Stabilizer Connection",
    price: "300 PER KVA",
    description:
      "Professional stabilizer connection for protecting appliances from voltage fluctuations.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 23,
    slug: "pipe-distribution",
    title: "Pipe Distribution",
    price: "₹5 PER LTR",
    description:
      "Electrical pipe distribution work for organized and protected cable routing.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 24,
    slug: "fan-fitting",
    title: "Fan Fitting",
    price: "₹150",
    description:
      "Professional ceiling fan installation with proper mounting and electrical connection.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },

  // ================= AC SERVICES =================

  {
    id: 25,
    slug: "ac-fitting",
    title: "AC Fitting Charge",
    price: "₹2000",
    description:
      "Professional air conditioner installation and electrical connection service.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 26,
    slug: "ac-servicing",
    title: "AC Servicing",
    price: "₹800",
    description:
      "Complete AC servicing to maintain cooling performance and system efficiency.",
    image:
      "https://images.unsplash.com/photo-1631545806609-7c5e0e2c2e2a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 27,
    slug: "ac-point-wiring",
    title: "AC Point + Wiring",
    price: "₹4000 PER ROOM",
    description:
      "AC electrical point installation with dedicated wiring for safe operation.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 28,
    slug: "main-line-distribution-fitting",
    title: "Main Line Distribution Fitting Charge",
    price: "₹1500-2000",
    description:
      "Main electrical line distribution and connection work for residential installations.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  // ================= LIGHTING =================

  {
    id: 29,
    slug: "dom-light-fitting",
    title: "DOM Light Fitting",
    price: "₹200",
    description:
      "Professional fitting and installation of decorative and functional DOM lights.",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 30,
    slug: "ex-fan-fitting",
    title: "EX Fan Fitting",
    price: "₹350",
    description:
      "Exhaust fan fitting and electrical connection for improved ventilation.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 31,
    slug: "mirror-light-fitting",
    title: "Mirror Light Fitting",
    price: "₹250",
    description:
      "Professional installation of mirror lights for bathrooms, bedrooms and dressing areas.",
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 32,
    slug: "generator-line-distribution",
    title: "Generator Line Distribution Fitting Charge",
    price: "₹1000-1200 PER CONNECTION",
    description:
      "Generator power line distribution and connection for reliable backup electricity.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },

  // ================= FRIDGE =================

  {
    id: 33,
    slug: "fridge-gas-change",
    title: "Fridge Gas Change",
    price: "₹2500",
    description:
      "Refrigerator gas replacement service to restore proper cooling performance.",
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 34,
    slug: "double-fridge-gas-change",
    title: "D Fridge Gas Change",
    price: "₹3500",
    description:
      "Gas replacement service for double-door refrigerators.",
    image:
      "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 35,
    slug: "electrical-load-switch-fitting",
    title: "Electrical Load Switch Fitting",
    price: "₹500",
    description:
      "Installation and fitting of electrical load switches for controlled power distribution.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  // ================= CABLE LAYING =================

  {
    id: 36,
    slug: "6mm-10mm-cable-laying",
    title: "6MM-10MM Cable Laying Per Meter",
    price: "₹20 PER METER",
    description:
      "Professional laying and routing of 6mm to 10mm electrical cables.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 37,
    slug: "10mm-35mm-cable-laying",
    title: "10MM-35MM Cable Laying Per Meter",
    price: "₹30 PER METER",
    description:
      "Cable laying service for 10mm to 35mm electrical cables.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 38,
    slug: "35mm-95mm-cable-laying",
    title: "35MM-95MM Cable Laying Per Meter",
    price: "₹60 PER METER",
    description:
      "Professional installation and routing of heavy electrical cables.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 39,
    slug: "120mm-300mm-cable-laying",
    title: "120MM-300MM Cable Laying Per Meter",
    price: "₹90 PER METER",
    description:
      "Heavy-duty cable laying service for large electrical installations.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 40,
    slug: "300mm-400mm-cable-laying",
    title: "300MM-400MM Cable Laying Per Meter",
    price: "₹130 PER METER",
    description:
      "Professional laying of high-capacity electrical cables for large installations.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  // ================= MOTOR =================

  {
    id: 41,
    slug: "motor-cover-fitting",
    title: "Motor Cover Fitting Charge",
    price: "₹300",
    description:
      "Motor cover fitting and installation service for electrical motors.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 42,
    slug: "motor-servicing",
    title: "Motor Servicing Charge",
    price: "₹1200",
    description:
      "Motor inspection, cleaning and servicing to maintain reliable operation.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 43,
    slug: "motor-winding-per-hp",
    title: "Motor Winding Per HP",
    price: "₹2500",
    description:
      "Professional motor winding service based on motor horsepower.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 44,
    slug: "wall-fan-fitting",
    title: "Wall Fan Fitting",
    price: "₹250",
    description:
      "Wall-mounted fan installation with secure mounting and electrical connection.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },

  // ================= LIGHTS & SOCKETS =================

  {
    id: 45,
    slug: "concealed-light-fitting",
    title: "Concealed Light Fitting",
    price: "₹100 PER PCS",
    description:
      "Professional concealed light installation for modern interior lighting.",
    image:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 46,
    slug: "rope-light",
    title: "Rope Light",
    price: "₹20 PER MTR",
    description:
      "Rope light installation for decorative and accent lighting applications.",
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 47,
    slug: "open-listry",
    title: "Open Listry",
    price: "₹20 PER PCS",
    description:
      "Open electrical fitting and installation work for required lighting points.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 48,
    slug: "open-power-socket-fitting",
    title: "Open Power Socket Fitting",
    price: "₹100 PER PCS",
    description:
      "Installation of open power sockets with proper electrical connection.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
  },

  // ================= GANG SWITCH =================

  {
    id: 49,
    slug: "4-gang-10-gang-fitting",
    title: "4 Gang - 10 Gang Fitting",
    price: "₹200",
    description:
      "Installation and fitting of multi-gang electrical switch boards.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 50,
    slug: "1-gang-3-gang-fitting",
    title: "1 Gang - 3 Gang Fitting",
    price: "₹100",
    description:
      "Professional installation of 1 to 3 gang electrical switch boards.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
  },

  // ================= PHASE CHANGEOVER =================

  {
    id: 51,
    slug: "single-phase-changeover",
    title: "Single Phase Change Over Fitting",
    price: "₹300",
    description:
      "Single-phase changeover switch installation for managing alternate power sources.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 52,
    slug: "three-double-phase-changeover",
    title: "Three Double Phase Change Over Fitting",
    price: "₹1000",
    description:
      "Professional changeover installation for larger electrical power systems.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  // ================= INVERTER =================

  {
    id: 53,
    slug: "inverter-fitting",
    title: "Inverter Fitting",
    price: "₹1000",
    description:
      "Professional inverter installation and electrical connection service.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 54,
    slug: "inverter-connection-per-room",
    title: "Inverter Connection Per Room",
    price: "₹250",
    description:
      "Room-wise inverter connection and wiring for backup power supply.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 55,
    slug: "inverter-battery-change",
    title: "Inverter Battery Change",
    price: "₹200 PER FLAT",
    description:
      "Professional inverter battery replacement and connection service.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 56,
    slug: "normal-wiring",
    title: "Normal Wiring",
    price: "₹3500 PER ROOM",
    description:
      "Standard electrical wiring service for rooms with proper cable routing and connections.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  // ================= WATER PUMP =================

  {
    id: 57,
    slug: "water-pump-1hp-fitting",
    title: "Water Pump 1 HP Fitting",
    price: "₹500",
    description:
      "Installation and electrical connection of 1 HP water pumps.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },

  // ================= SUMMERSHAvel =================

  {
    id: 58,
    slug: "summershavel-panel-change",
    title: "Summershavel Panel Change",
    price: "₹400",
    description:
      "Panel replacement service for Summershavel electrical equipment.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 59,
    slug: "summershavel-fitting",
    title: "Summershavel Fitting",
    price: "₹1500-2000",
    description:
      "Professional fitting and installation service for Summershavel equipment.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 60,
    slug: "summershavel-panel-board-connection",
    title: "Summershavel Panel Board Connection",
    price: "₹400 PER FLAT",
    description:
      "Panel board connection service for Summershavel electrical systems.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
  },

  // ================= FAN REPAIR =================

  {
    id: 61,
    slug: "fan-winding",
    title: "Fan Winding",
    price: "₹800",
    description:
      "Professional fan motor winding service to restore proper fan performance.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 62,
    slug: "fan-capacitor-change",
    title: "Fan Capacitor Change",
    price: "₹90",
    description:
      "Replacement of faulty fan capacitors to restore proper starting and speed.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 63,
    slug: "fan-bearing-change",
    title: "Fan Bearing Change",
    price: "₹250",
    description:
      "Fan bearing replacement to reduce noise and improve smooth rotation.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  },

  // ================= COOLER =================

  {
    id: 64,
    slug: "cooler-water-pump-change",
    title: "Cooler Water Pump Change",
    price: "₹175",
    description:
      "Replacement of cooler water pumps to maintain proper water circulation.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 65,
    slug: "cooler-regulator-change",
    title: "Cooler Regulator Change",
    price: "₹200",
    description:
      "Replacement of faulty cooler regulators for proper speed control.",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 66,
    slug: "cooler-strip-change",
    title: "Cooler Strip Change",
    price: "₹150",
    description:
      "Cooler strip replacement and fitting for electrical cooling systems.",
    image:
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80",
  },

  // ================= SOLAR =================

  {
    id: 67,
    slug: "solar-wiring",
    title: "Solar Wiring",
    price: "₹300 PER ROOM",
    description:
      "Solar electrical wiring installation for connecting solar power systems.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 68,
    slug: "solar-panel-single-fitting",
    title: "Solar Panel Single Fitting",
    price: "₹700",
    description:
      "Installation and fitting of a single solar panel with proper electrical connection.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 69,
    slug: "solar-geyser-fitting",
    title: "Solar Geyser Fitting",
    price: "₹15000",
    description:
      "Professional solar geyser installation and electrical connection service.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
  },
];

export default electricalServices;
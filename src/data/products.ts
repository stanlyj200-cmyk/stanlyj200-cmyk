import { Product, CareerOpportunity, TimelineStep, EmployeeBenefit, FAQItem, Review } from '../types';

export const productsData: Product[] = [
  {
    id: "volt-fan-x1",
    name: "AeroStrom Smart Ceiling Fan",
    category: "Climate & Air",
    image: "https://images.unsplash.com/photo-1527515637462-c19d40fc05ec?auto=format&fit=crop&w=800&q=80",
    energyRating: "5-Star BEE / Ultra-Efficient",
    brief: "Sleek brushless DC aerofoil design with integrated smart climate sync and interactive ambient halo.",
    description: "The AeroStrom Smart Ceiling Fan utilizes advanced aerospace-inspired winglet blades and a whisper-quiet Brushless Direct Current (BLDC) motor. It tracks your room's temperature and humidity dynamically, adjusting speed to maintain optimal comfort while consuming up to 65% less power than standard fans. Includes an integrated multi-spectrum LED halo that supports circular rhythm lighting.",
    features: [
      "Ultra-Quiet BLDC Motor (operating at under 28dB)",
      "Dynamic Climate Sync (Auto-adjusts speed based on humidity & temperature)",
      "Circadian RGBWW LED Halo (Simulates natural sunlight patterns)",
      "Reversible Winter/Summer Flow (Distributes warm air efficiently in winter)",
      "Universal Voice Integration (Compatible with Amazon Alexa, Google Home, Apple HomeKit)"
    ],
    specs: {
      "Motor Type": "High-Torque Sensorless BLDC",
      "Power Consumption": "5W (Min) to 35W (Max)",
      "Air Delivery Rate": "280 CMM (Cubic Meters per Minute)",
      "Blade Span & Material": "52-inch / Carbon-Fiber Structured Polymer",
      "Connectivity": "Wi-Fi 6 (802.11ax), Bluetooth 5.2, Thread/Matter"
    },
    gallery: [
      "https://images.unsplash.com/photo-1527515637462-c19d40fc05ec?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviewsCount: 142
  },
  {
    id: "volt-bulb-l9",
    name: "LuminaLux Smart LED Bulb",
    category: "Smart Lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80",
    energyRating: "A+++ High Efficiency",
    brief: "Experience 16 million colors with multi-zone control and automated power reporting.",
    description: "The LuminaLux smart lighting element brings studio-grade color precision to your living space. With a color rendering index (CRI) exceeding 95, it delivers crisp, natural representation across millions of shades. Its built-in energy telemetry chip relays real-time power drainage reports directly to the Voltix Cloud Hub App.",
    features: [
      "16 Million RGB Colours + Tunable White (1800K - 8000K)",
      "Power-Usage Telemetry (Track precise electrical drain in micro-watts)",
      "Dynamic Music & Screen Syncing (Adapts light frequencies to audio feeds)",
      "Zero-Flicker Driver Technology (Protects eye health and prevents fatigue)",
      "Smart Routing Mesh (Automatically bounces network signals to remote home corners)"
    ],
    specs: {
      "Luminous Flux": "1100 Lumens (equivalent to 75W Incandescent)",
      "Lifespan Rating": "50,000 Operating Hours",
      "Power Wattage": "9W at Full Luminance",
      "Fitting Type": "E27 / B22 base options available",
      "Color Accuracy": "CRI > 95, R9 > 80"
    },
    gallery: [
      "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviewsCount: 389
  },
  {
    id: "volt-pur-p5",
    name: "AeroShield AI Air Purifier",
    category: "Climate & Air",
    image: "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=800&q=80",
    energyRating: "5-Star Low Energy",
    brief: "A 3-stage medical-grade H13 HEPA purifier with real-time PM2.5 air telemetry.",
    description: "Equipped with high-precision particulate sensors, the AeroShield Purifier identifies and counters 99.97% of airborne pathogens, dust, pollen, gases, and odors. Featuring an intelligent auto-fan speed engine powered by deep reinforcement learning models, it optimizes active scrubbing while keeping energy draw exceptionally low.",
    features: [
      "Medical-Grade H13 HEPA & Active Carbon Dual Stage Filtration",
      "Neural Eco-Loop (Optimizes scrubbing power dynamically based on air quality historical curves)",
      "PM2.5 / PM10 / VOC Comprehensive Color Screen Interface",
      "Aromatherapy Capsule Chamber (Diffuse soothing botanical oils dynamically)",
      "Hyper-Silent Night Safeguard (Emits only 19dB in Sleep comfort preset)"
    ],
    specs: {
      "CADR Rating": "450 m³/h (Clean Air Delivery Rate)",
      "Effective Area Coverage": "Up to 580 sq. ft.",
      "Filter Lifespan": "8,760 hours (Smart health notification on app)",
      "Maximum Energy Draw": "24 Watts on Max Turbo mode",
      "Pollutant Sensitivities": "Laser PM2.5 sensor, TVOC gas sensor, Humidity & Temp sensor"
    },
    gallery: [
      "https://images.unsplash.com/photo-1622445262465-2481c4574875?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviewsCount: 215
  },
  {
    id: "volt-heat-h8",
    name: "HydroThermal Instant Smart Heater",
    category: "Water Systems",
    image: "https://images.unsplash.com/photo-1585131972851-93f545166292?auto=format&fit=crop&w=800&q=80",
    energyRating: "A+ High Performance",
    brief: "Tankless copper coils meeting dynamic digital mixing for instant tailored heated outlets.",
    description: "The HydroThermal smart water heater leverages an advanced, high-performance tankless copper core that operates only during live water flow, eliminating idle storage heating losses. Complete with dynamic thermal balancing, it stabilizes output temperature regardless of external fluctuations, with built-in voice controls for smart prep scheduling.",
    features: [
      "Tankless Thermal Delivery (Warm water in under 2 seconds)",
      "Anti-Scald Microsecond Safeguard (Automatically caps output to target comfort)",
      "Built-In Magnesium Anti-Scale Anode (Prevents hard water buildup and scales)",
      "Daily Hot Water Analytical Tracker (In-app tracking of water volume used & BTU energy)",
      "Carbon-Resistant Polycarbonate Shell (Completely waterproof IPX4 design)"
    ],
    specs: {
      "Power Rating": "3000W / 4500W Dynamic Multi-Phase",
      "Max Operating Pressure": "0.8 MPa (Mega Pascals)",
      "Thermal Core Material": "High-Grade Oxygen-Free Copper Heating Module",
      "Waterproofing Class": "IPX4 splash protective safety standard",
      "Water Temp Range": "30°C to 55°C customized smart targets"
    },
    gallery: [
      "https://images.unsplash.com/photo-1585131972851-93f545166292?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.6,
    reviewsCount: 98
  },
  {
    id: "volt-strip-s2",
    name: "VoltGuard 6-Way IoT Power Strip",
    category: "Smart Power & Grid",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80",
    energyRating: "Ultra-High Surge Protection",
    brief: "6 individually switchable smart socket gates and 4 high-speed dynamic USB-C power ports.",
    description: "Protect and monitor all connected household equipment with our high-surge protection VoltGuard strip. Features full electrical current telemetry across every single outlet, letting you establish custom schedules, timer cycles, phantom drain mitigation, and voltage deviation alerts.",
    features: [
      "6 Individually Routed Electrical Relays (Toggle each device on/off separately)",
      "4 Dynamic Smart IC USB-C Ports (Supporting PD charging up to 65W)",
      "4500-Joule Fire-Retardant Surge Protection Shield",
      "Auto-Isolate Idle Devices (Cuts idle power draw to zero when standby is detected)",
      "Thread/Matter Supported (Instantly connects with home networking grids)"
    ],
    specs: {
      "Total Wattage Capacity": "3820 Watts, 16 Amps Peak Max",
      "Surge Dissipation Value": "4500 Joules rating",
      "Response Trigger Time": "Less than 1 Nanosecond safety shunt",
      "Cable Specifications": "2.5-yard Heavy-Duty double insulated copper wire",
      "Communication Protocols": "Wi-Fi (2.4GHz), Matter mesh (Thread)"
    },
    gallery: [
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1615840287214-7fe58a8f3685?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviewsCount: 304
  },
  {
    id: "volt-stove-i4",
    name: "PyroInduct Smart Dual Cooktop",
    category: "Smart Kitchen",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
    energyRating: "92% Superb Thermal Transfer",
    brief: "Sleek Schott Glas double zones with infrared vessel telemetry and responsive smart dials.",
    description: "The PyroInduct Smart Dual Cooktop uses electromagnetic induction fields to transfer thermal heat directly to the ferrous cookware, bypassing glass warming for high safety and outstanding energy efficiency. It has built-in cooking weight sensors, thermal optic telemetry, and recipes syncing.",
    features: [
      "Double Dual-Zone Electromagnetic Cores (Up to 3200W boost burner)",
      "Responsive Active Smart Dial UI (Full feedback control with neon thermal ring)",
      "Schott Ceramic Glass Plate (Scratch resistant, extremely durable and easy to clean)",
      "Embedded Weighing Grid (Tracks live ingredients weights while prepping)",
      "Visual Cook Telemetry Sync (Casts target pan temp charts on the Voltix App)"
    ],
    specs: {
      "Burner Configuration": "1x 2200W Rapid Core, 1x 1500W Standard Core",
      "Heating Intensity Increments": "20 Precision Power Gradations",
      "Minimum Pan Detection Size": "3.5 inches diameter automatic shutoff",
      "Ventilation System": "Dual ultra-silent high-RPM cooling centrifugal fans",
      "Outer Dimensions": "28 x 15.5 x 2.2 inches"
    },
    gallery: [
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.7,
    reviewsCount: 156
  },
  {
    id: "volt-fridge-f7",
    name: "PreserveX Smart Quad Refrigerator",
    category: "Smart Kitchen",
    image: "https://images.unsplash.com/photo-1584282479155-2195fcfd3ff6?auto=format&fit=crop&w=800&q=80",
    energyRating: "A+++ Zero-Frost Elite Value",
    brief: "Four compartments with individual micro-climate zoning and inventory scan optics.",
    description: "PreserveX is a 680-liter smart cooling workstation. Its integrated camera layout scans raw goods, logs expiration dates, and recommends recipes. Powered by dual inverter compressors, it handles individual moisture tracking, preventing odors from bleeding across separate target zones.",
    features: [
      "OpticScan Shelf Cameras (Tracks food quantity and warns for expiring dates)",
      "Quad-Zoned Dual Inverter Compressors (Optimizes cold air distribution and cuts power)",
      "Active Oxygen Odor Sanitizer (Deletes 99.9% of food microbes and cross-odors)",
      "Dynamic Pitch Glass Door (Turns transparent with simple knock gestures)",
      "Fast chilling turbo zone (Rapid ice/freeze with dedicated app control)"
    ],
    specs: {
      "Total Active Capacity": "680 Liters (Fresh Food: 420L, Freeze Workspace: 260L)",
      "Daily Electric Consumption": "0.78 kWh / 24 Hours operation",
      "Compressor Architecture": "V-Linear Triple Intelligent Inverter",
      "Internal Cameras": "3x Wide-Angle HDR shelf scan modules",
      "Exterior Display": "21.5-inch High-Brightness Touchscreen IPS panel"
    },
    gallery: [
      "https://images.unsplash.com/photo-1584282479155-2195fcfd3ff6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1547043736-b2247cb34b01?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviewsCount: 74
  },
  {
    id: "volt-solar-s8",
    name: "Aegis Solar Power Management Hub",
    category: "Smart Power & Grid",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    energyRating: "99.2% Hybrid Wave Conversion",
    brief: "A smart hybrid solar inverter with predictive storage and automated grid routing.",
    description: "The Aegis Solar Hub is the ultimate orchestrator of clear solar power and automated home energy distribution. It monitors forecast models and home usage habits to preload battery reserves. It manages your grid, batteries, solar lines, and vehicle charging automatically.",
    features: [
      "99.2% Extreme True Pure Sine-Wave Electric Conversion Efficiency",
      "Grid AI Dispatcher (Sells surplus power automatically back during high tariffs)",
      "Double MPPT Power Trackers (Maximizes PV solar current production under partial shade)",
      "Modular Battery Integrator (Plug and expand storage capacities up to 60kWh)",
      "Industrial IP66 Waterproof Housing (Ideal for outdoor wall mounts)"
    ],
    specs: {
      "Continuous AC Output Power": "10.0 kW / Single and Three-Phase adaptable",
      "DC Storage Inputs": "120V to 500V MPPT PV Voltage Range",
      "Peak Inverter Conversion": "99.2% CEC Certified standard efficiency",
      "Cooling Technology": "Zero-fan convection passive cooling",
      "Grid Certificates": "UL1741-SA, IEEE1547 standard compliance"
    },
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620027131802-aa40237dd534?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1548613053-2200af639343?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviewsCount: 53
  }
];

export const reviewsData: Review[] = [
  {
    id: "rev-01",
    productId: "volt-fan-x1",
    userName: "Alexander Vance",
    rating: 5,
    date: "2026-05-12",
    comment: "This BLDC ceiling fan is incredibly silent. The dynamic sensor adjustments work like magic. It scales up exactly when the kitchen is active and room temperatures rise. 5 Stars!",
    verified: true
  },
  {
    id: "rev-02",
    productId: "volt-fan-x1",
    userName: "Sophia Loren",
    rating: 4,
    date: "2026-04-20",
    comment: "Excellent design, looks like a turbine wing underneath. The LED halo is fantastic for ambient night light, very responsive with Apple HomeKit. Highly recommended.",
    verified: true
  },
  {
    id: "rev-03",
    productId: "volt-bulb-l9",
    userName: "Marcus K.",
    rating: 5,
    date: "2026-06-02",
    comment: "The precision in color calibration is outstanding. The real-time micro-watts power graph in the app really makes you review your energy patterns. A+++ bulb.",
    verified: true
  },
  {
    id: "rev-04",
    productId: "volt-pur-p5",
    userName: "Elena Rostova",
    rating: 5,
    date: "2026-05-28",
    comment: "This has helped dramatically with my pet allergy. I love that it shifts to ultra-silent mode at night. Clean interface too.",
    verified: true
  },
  {
    id: "rev-05",
    productId: "volt-fridge-f7",
    userName: "Julian Mercer",
    rating: 5,
    date: "2026-05-15",
    comment: "Incredible piece of hardware. The glass dynamic scan is highly practical, and the built-in cameras help me avoid buying duplicates at the grocery store. Absolutely premium look.",
    verified: true
  }
];

export const careerJobs: CareerOpportunity[] = [
  {
    id: "car-01",
    title: "Senior Embedded Firmware Architect",
    department: "R&D - Embedded Systems",
    location: "Voltix Global HQ (Frankfurt, DE / Hybrid)",
    type: "Full-time",
    experience: "8+ years in C/C++, RTOS, Cortex-M architectures",
    description: "Lead the firmware design for our next generation IoT microcontrollers. Specify performance bounds, energy optimization parameters, and security boot loaders for premium appliances.",
    requirements: [
      "Extensive experience with FreeRTOS, Zephyr, or embedded Linux.",
      "Expertise in power state transition algorithms and ultra-low-current sleep scheduling.",
      "In-depth grasp of SPI, I2C, CAN, secure element boot routines, and BLE protocol stacks.",
      "Solid team leadership skills and commitment to Agile-driven firmware delivery."
    ]
  },
  {
    id: "car-02",
    title: "IoT Systems & Integration Architect",
    department: "Cloud & Connectivity",
    location: "Tech Innovation Hub (Austin, TX, US / Hybrid)",
    type: "Full-time",
    experience: "6+ years with Thread, Matter, microservice meshes",
    description: "Architect the cloud integrations and Thread connectivity of our home ecosystem. You'll ensure Matter compatibility across smart heaters, induction cooktops, and solar management systems.",
    requirements: [
      "Strong coding skills in Rust, Go, or Node.js.",
      "Deep understanding of the Matter specifications, Thread Group networks, and BLE commissioning.",
      "Experience deploying and debugging high-throughput MQTT broker clusters.",
      "Hands-on background with GCP, Kubernetes, and TLS mutual authentication pipelines."
    ]
  },
  {
    id: "car-03",
    title: "AI Automation Research Intern",
    department: "R&D - Artificial Intelligence",
    location: "AI Labs (Tokyo, JP)",
    type: "Internship",
    experience: "Strong background in statistics and PyTorch / TensorFlow",
    description: "Develop, validate, and convert reinforcement learning algorithms for appliance cooling cycles, minimizing daily wattages while strictly matching target food temperature thresholds.",
    requirements: [
      "Enrolled in or recently graduated with an MS/PhD in Computer Science, Robotics, or Data Science.",
      "Proficient in Python, machine learning workflows, and model quantization (TFLite, ONNX).",
      "Passion for building green energy smart algorithms and hardware integrations.",
      "Self-motivated researcher ready to publish patents and technical breakthroughs."
    ]
  },
  {
    id: "car-04",
    title: "Power Electronics Design Engineer",
    department: "Grid Solutions",
    location: "Advanced Labs (Munich, DE)",
    type: "Full-time",
    experience: "5+ years inside high-voltage converters, MPPT algorithms",
    description: "Design advanced hybrid pure sine wave solar inverters. Fine-tune thermal dissipate profiles, inductor designs, and optimize high-frequency silicon carbide switching configurations.",
    requirements: [
      "Strong expertise in buck-boost topologies, grid-tie phase matching, and MPPT loops.",
      "Proficiency with simulation packages (PLECS, LTspice, Matlab Simulink).",
      "Familiarity with compliance standards (UL 1741, IEC 62109-1).",
      "Degree in Electrical Engineering focused on power electronics."
    ]
  }
];

export const employeeBenefits: EmployeeBenefit[] = [
  {
    title: "Eco Compensation & Health",
    description: "Full family health, dental, and vision insurance alongside carbon footprint offsets and green commute subsidies.",
    icon: "HeartPulse"
  },
  {
    title: "Continuous Learning Fund",
    description: "Annual stipend of $4,000 for industry standards, certifications, and international scientific summits.",
    icon: "GraduationCap"
  },
  {
    title: "Silicon & Hardware access",
    description: "Get free advanced Voltix mock modules, testing suites, smart devices, and solar installations for your personal home.",
    icon: "Cpu"
  },
  {
    title: "Hybrid Freedom Policy",
    description: "Flexible working hours and dynamic workspace allocation allowing you to define peak research setups.",
    icon: "MapPinHouse"
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-01",
    question: "Do Voltix appliances operate locally if our internet connection goes offline?",
    answer: "Yes. Voltix appliances are fully engineered with multi-routing local meshes. They communicate over local thread lanes and operate using on-board triggers. If internet connectivity drops, your local configurations, scheduling, wall switches, and sensors continue operating seamlessly.",
    category: "Connectivity"
  },
  {
    id: "faq-02",
    question: "What is the warranty model on the Aegis Solar Hub and AeroStrom Fan?",
    answer: "Our industrial products, including the Aegis Solar Management Hub and Smart Water Heater systems, feature a comprehensive 7-year structural warranty, while client appliances (AeroStrom, LuminaLux) feature a 3-year warranty. You can register your warranty transparently in the support section.",
    category: "Warranty"
  },
  {
    id: "faq-03",
    question: "Are Voltix Smart Appliances compatible with unified Matter standards?",
    answer: "Absolutely. All model lines are certified Matter-ready. This guarantees instant cross-compatibility with Apple Home, Google Nest, and dynamic home platforms without third-party converters or proprietary gateways.",
    category: "Matter Compatibility"
  },
  {
    id: "faq-04",
    question: "How does the power savings telemetry calculate monthly carbon reduction?",
    answer: "Our onboard smart chips measure voltage phase displacement and absolute wattage output multiple times per second. By comparing live running patterns with standardized baselines, Voltix calculates direct energy reductions (kWh) and displays the equivalent grams of carbon offset on the Voltix Cloud App.",
    category: "Energy Telemetry"
  }
];

export const manufacturingTimeline: TimelineStep[] = [
  {
    title: "Concept Design",
    description: "Architecting futuristic aesthetics and multi-use packaging.",
    status: "completed",
    meta: "Milestone 1",
    details: [
      "Detailed market behavior assessment",
      "Sustainable industrial design draft selections",
      "Ergonomics and UX wireframe flows"
    ]
  },
  {
    title: "Engineering",
    description: "Optimizing magnetic circuits and multi-layer board trace routers.",
    status: "completed",
    meta: "Milestone 2",
    details: [
      "Rigorous FEA magnetic and static stress simulations",
      "Low noise thermal dissipater and air guide prototyping",
      "Failsafe hardware fuse lines and power circuit design"
    ]
  },
  {
    title: "Prototype Development",
    description: "Fabrication of rapid working silicon iterations via 3D metal prints.",
    status: "completed",
    meta: "Milestone 3",
    details: [
      "SLA structural model mockups for wind tunnel testing",
      "Initial modular firmware execution loops compiled on ARM cores",
      "Functional multi-zone interface assembly"
    ]
  },
  {
    title: "Testing & Certification",
    description: "Validating against intensive electrical discharge and fall stresses.",
    status: "completed",
    meta: "Milestone 4",
    details: [
      "40,000-hour continuous failure state thermal trials",
      "Electrostatic surge immunity (ESD) test (IEC-61000 standard)",
      "CE, FCC, and Matter certification procedures"
    ]
  },
  {
    title: "Quality Assurance",
    description: "In-line automatic computerized optical inspections.",
    status: "ongoing",
    meta: "Milestone 5",
    details: [
      "Real-time X-ray scan of multi-layer PCB solder joins",
      "Robotic spectral laser calibration of lighting color points",
      "Calibrate energy usage telemetry sensors"
    ]
  },
  {
    title: "Mass Production",
    description: "Precision automated robotic lines producing clean appliances.",
    status: "ongoing",
    meta: "Milestone 6",
    details: [
      "ISO 9001 and ISO 14001 green-certified zero-waste plant operations",
      "Multi-axis automated industrial arm tooling sets",
      "100% biodegradable custom card packaging integration"
    ]
  },
  {
    title: "Distribution",
    description: "Global low-emission sea and freight supply nodes.",
    status: "future",
    meta: "Milestone 7",
    details: [
      "Intertwined distribution networks spanning 50+ countries",
      "Zero-carbon domestic delivery options and last-mile EV fleets",
      "Transparent supply path barcodes showing exact product carbon footprints"
    ]
  }
];

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Wifi, Brain, Shield, Gauge, Sparkles, Binary, Compass } from "lucide-react";

export default function Innovation() {
  const [selectedTech, setSelectedTech] = useState<number | null>(0);

  const innovations = [
    {
      title: "Embedded Systems Development",
      headline: "ARM Cortex-M Microcontrollers with Hardened Real-Time Kernels",
      description: "Our microcontrollers run on an optimized, secure RTOS environment customized inhouse to handle analog sensors and digital energy telemetry lines simultaneously. By removing bloated middleware, we guarantee microsecond response timers for emergency relays.",
      icon: <Cpu className="h-6 w-6 text-blue-500" />,
      features: [
        "Failsafe memory segmentation prevents firmware crashes",
        "Hardware-level AES-256 secure element encrypting user telemetry",
        "Deterministic task scheduler ensuring sensor polling priority",
        "Ultra-low wattage deep sleep states (under 5μA standby draw)"
      ],
      diagram: "01001100_embedded_rtos_core"
    },
    {
      title: "IoT & Matter Connectivity Integration",
      headline: "Unified Cross-Brand Smart Home Architecture",
      description: "Voltix is a leading pioneer behind Matter over Thread standard alliances. The Thread protocol operates a decentralised local mesh, letting appliances communicate with switches and hubs locally, without routing data to external servers or cloud services.",
      icon: <Wifi className="h-6 w-6 text-indigo-500" />,
      features: [
        "Matter 1.3 Certified (Instant setup with iOS, Android & Google hubs)",
        "Thread Local Mesh avoids single points of router failure",
        "Self-healing routers automatically bypass broken signals",
        "Zero Cloud Dependency: All home logic stays strictly offline"
      ],
      diagram: "802.15.4_thread_mesh_node"
    },
    {
      title: "AI-Powered Automation",
      headline: "Edge Reinforcement Learning Optimizing Household Thermals",
      description: "We deploy quantized lightweight neural networks directly inside our refrigerators, fans, and air scrubbers. These networks evaluate daily occupancy profiles, regional weather feeds, and sensory metrics, executing fan curves and cooling loops to minimize energy wastage.",
      icon: <Brain className="h-6 w-6 text-cyan-500" />,
      features: [
        "On-device quantization runs AI weights directly on Cortex processors",
        "Predictive cooling limits ice production during high-tariff grid hours",
        "Adaptive air scrubbing scales up before standard allergy peaks",
        "Zero cloud metadata leakage: All learning files stay local"
      ],
      diagram: "quantized_deep_q_network_model"
    },
    {
      title: "Energy Optimization Technologies",
      headline: "Silicon Carbide (SiC) Power Switches & Fluid Dynamics",
      description: "Our water heaters and induction stove cores leverage next-gen Silicon Carbide semiconductors. SiC chips support exceptionally high switching frequencies with almost zero heat losses, achieving up to 99% electrical-to-thermal transmission efficiency.",
      icon: <Gauge className="h-6 w-6 text-emerald-500" />,
      features: [
        "Silicon Carbide (SiC) switches reduce internal heat generation by 75%",
        "Active Phase Correction balances load shifts on residential solar grids",
        "Computational Fluid Dynamics (CFD) modeled fan & pump blades",
        "Anti-Scale induction coils reduce mineral scaling thermal impedance"
      ],
      diagram: "silicon_carbide_99.2%_efficiency"
    }
  ];

  return (
    <div className="section-container bg-slate-50 dark:bg-slate-900/40 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
              R&D DISCOVERIES
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineering the Smart Home Layer
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Voltix allocates 18% of global revenues directly into electrical engineering research. Our focus is custom silicon algorithms and pure eco-materials.
          </p>
        </div>

        {/* Dynamic Bento Box Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column Selector (1/3 width) */}
          <div className="lg:col-span-5 space-y-3.5">
            {innovations.map((tech, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedTech(idx)}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer border transition-all duration-300 relative overflow-hidden ${
                  selectedTech === idx
                    ? "bg-white border-blue-500 shadow-lg dark:bg-slate-950 dark:border-blue-500 shadow-blue-500/5"
                    : "bg-white/60 border-slate-200/50 hover:bg-white hover:border-slate-300 dark:bg-slate-900/40 dark:border-slate-800 dark:hover:bg-slate-900"
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${selectedTech === idx ? "bg-blue-100 dark:bg-blue-950/50" : "bg-slate-100 dark:bg-slate-900"}`}>
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {tech.title}
                    </h3>
                    <span className="text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 mt-1 uppercase block tracking-wider">
                      Module: {tech.diagram}
                    </span>
                  </div>
                </div>
                {selectedTech === idx && (
                  <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-blue-600" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column Details Display (2/3 width) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              {selectedTech !== null && (
                <motion.div
                  key={selectedTech}
                  initial={{ opacity: 0, scale: 0.98, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -10 }}
                  className="p-6 sm:p-8 rounded-3xl border border-slate-200/65 bg-white dark:border-slate-800 dark:bg-slate-950 shadow-xl overflow-hidden relative"
                >
                  <div className="space-y-6">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                      TECHNOLOGY SPECIFICATION
                    </span>

                    <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                      {innovations[selectedTech].headline}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                      {innovations[selectedTech].description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                        Performance Breakthroughs:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {innovations[selectedTech].features.map((feat, idx) => (
                          <div key={idx} className="flex space-x-2.5 items-start">
                            <span className="text-blue-600 dark:text-blue-400 text-xs font-sans mt-0.5 font-bold">✔</span>
                            <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-400 leading-normal font-medium">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Digital Simulation Log Widget */}
                    <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-white/5 font-mono text-[10px] text-slate-400 space-y-2 select-none">
                      <div className="flex justify-between text-[9px] text-slate-500 border-b border-white/5 pb-1">
                        <span>FIRMWARE COMPONENT TELEMETRY</span>
                        <span className="text-cyan-400">ACTIVE POOLING</span>
                      </div>
                      <div className="flex space-x-1.5 items-center">
                        <Binary className="h-3 w-3 text-blue-500" />
                        <span>LOG // SYS:[{innovations[selectedTech].diagram.toUpperCase()}] INIT...</span>
                      </div>
                      <div className="text-emerald-400">
                        {`>> STATUS: STABLE // HEAP: OK // NO_LATENCY_DETECTION // POWER_DRAW: 4.88 MicroAmps`}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Future Product Roadmap Section */}
        <div className="mt-24 border border-blue-500/10 rounded-3xl bg-slate-100 p-6 sm:p-10 dark:bg-slate-900/20 relative overflow-hidden">
          {/* Subtle decoration vector */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="h-32 w-32 text-blue-500 animate-pulse" />
          </div>

          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 tracking-wider bg-blue-500/10 dark:bg-blue-500/5 px-2.5 py-1 rounded uppercase">
              RESOURCES & HORIZONS
            </span>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Future Product Horizon: Smart Home Solid-State Transformers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Our advanced electronics research division is designing a solid-state micro-transformer capable of replacing large copper wiring breakers. Leveraging ultra-fast wide bandgap silicon processors, it isolates electrical arc risks in nanoseconds, eliminating domestic fire hazards while shrinking standard home electrical panels by 85%. Scheduled for field certifications in Q1 2027.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

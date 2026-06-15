import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, Clock, PlayCircle, Eye, ChevronRight, 
  Settings, ArrowRight, ShieldCheck, Factory, Truck 
} from "lucide-react";
import { TimelineStep } from "../types";
import { manufacturingTimeline } from "../data/products";

export default function Manufacturing() {
  const [activeStep, setActiveStep] = useState<number>(4); // Defaults to QA step

  const getStatusIcon = (status: TimelineStep["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
      case "ongoing":
        return <Clock className="h-5 w-5 text-amber-500 animate-pulse" />;
      case "future":
        return <PlayCircle className="h-5 w-5 text-slate-400" />;
    }
  };

  const getStatusColor = (status: TimelineStep["status"]) => {
    switch (status) {
      case "completed":
        return "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20";
      case "ongoing":
        return "border-amber-500 bg-amber-50 dark:bg-amber-950/20";
      case "future":
        return "border-slate-300 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/30";
    }
  };

  return (
    <div className="section-container bg-white dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
              OPERATIONAL TIMELINE
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Our Sustainable Manufacturing Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Track our structured process from raw mathematical drafts to global customer shipping lanes. Voltix maintains ISO certified clean room facilities.
          </p>
        </div>

        {/* Horizontal Timeline Connector (visible on Desktop) */}
        <div className="hidden lg:flex items-center justify-between relative mb-12 px-6">
          {/* Gray connector line behind steps */}
          <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          {/* Active progress color overlay */}
          <div 
            className="absolute top-1/2 left-10 h-0.5 bg-gradient-to-r from-emerald-500 via-amber-500 to-transparent -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeStep / (manufacturingTimeline.length - 1)) * 90}%` }}
          />

          {manufacturingTimeline.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = step.status === "completed";
            const isOngoing = step.status === "ongoing";

            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none"
              >
                {/* Node Ring */}
                <div 
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? "ring-4 ring-blue-500/20 border-blue-600 bg-white dark:bg-slate-950 scale-110 shadow-lg" 
                      : getStatusColor(step.status)
                  }`}
                >
                  {getStatusIcon(step.status)}
                </div>

                {/* Micro Label */}
                <span className={`text-[10px] font-mono mt-2 uppercase tracking-wider font-semibold ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400 group-hover:text-slate-600"}`}>
                  {step.meta}
                </span>

                <span className={`text-xs font-sans font-bold mt-1 max-w-[100px] text-center ${isActive ? "text-slate-950 dark:text-white font-extrabold" : "text-slate-500"}`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Vertical Stepper Navigation */}
        <div className="lg:hidden flex flex-wrap gap-2.5 mb-8">
          {manufacturingTimeline.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold tracking-tight border flex items-center space-x-1.5 transition ${
                activeStep === idx
                  ? "bg-blue-600 text-white border-blue-500"
                  : "bg-slate-50 text-slate-500 dark:bg-slate-900 border-slate-200/50 dark:border-slate-800"
              }`}
            >
              <span>{idx + 1}.</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Detailed Panel Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-10 rounded-3xl border border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/30 grid md:grid-cols-12 gap-8 items-center"
          >
            {/* Core Info Details */}
            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2">
                <span className="text-xs font-mono font-bold bg-slate-900 text-white dark:bg-slate-800 dark:text-blue-400 px-3 py-1 rounded">
                  STAGE 0{activeStep + 1}
                </span>
                <span className={`text-xs px-2.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider ${
                  manufacturingTimeline[activeStep].status === "completed"
                    ? "text-emerald-600 bg-emerald-500/10"
                    : manufacturingTimeline[activeStep].status === "ongoing"
                    ? "text-amber-500 bg-amber-500/10"
                    : "text-slate-400 bg-slate-400/10"
                }`}>
                  {manufacturingTimeline[activeStep].status}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {manufacturingTimeline[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                {manufacturingTimeline[activeStep].description}
              </p>

              {/* Action Milestones Bullets */}
              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest block">
                  Quality Audit Gate Metrics:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  {manufacturingTimeline[activeStep].details.map((dt, idx) => (
                    <div key={idx} className="flex space-x-2 items-start text-slate-700 dark:text-slate-300 font-medium">
                      <span className="text-blue-500 font-bold mt-0.5">▪</span>
                      <span>{dt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Operational Simulation Graphic */}
            <div className="md:col-span-5 relative">
              <div className="border border-slate-200 bg-white p-6 rounded-2xl dark:border-slate-800 dark:bg-slate-950 shadow-lg space-y-4 font-mono text-[11px] text-slate-400">
                <div className="flex justify-between items-center text-slate-500 text-[9px] border-b pb-1.5 border-slate-100 dark:border-slate-800">
                  <span>FACILITY TELEMETRY // STAGE_0{activeStep + 1}</span>
                  <span className="text-emerald-500">● SYNCED</span>
                </div>
                
                {/* Specific mock diagnostics based on step */}
                {activeStep === 0 && (
                  <div className="space-y-1.5">
                    <div>CAD_ENGINE_LOAD: 12% // RENDER_THREAD: OK</div>
                    <div>VECTOR_STRESS_MODELING: SUCCESS</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded overflow-hidden">
                      <div className="bg-blue-600 h-full w-[100%]" />
                    </div>
                  </div>
                )}
                {activeStep === 1 && (
                  <div className="space-y-1.5">
                    <div>PCB_ROUTING_DENSITY: 88% // FOUR_LAYERS</div>
                    <div>THERMAL_DISPERSAL_FACTOR: 1.04</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded overflow-hidden">
                      <div className="bg-cyan-500 h-full w-[95%]" />
                    </div>
                  </div>
                )}
                {activeStep === 2 && (
                  <div className="space-y-1.5">
                    <div>RAPID_METAL_PRINTERS: CONNECTED</div>
                    <div>CORTEX_A_EMBEDDED_BOOT: STABLE</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded overflow-hidden">
                      <div className="bg-purple-600 h-full w-[88%]" />
                    </div>
                  </div>
                )}
                {activeStep === 3 && (
                  <div className="space-y-1.5">
                    <div>ESD_DISCHARGE_SAFETY: PASSED [15kV]</div>
                    <div>MATTER_MESH_STRESS: 500 CONCURRENTS</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[100%]" />
                    </div>
                  </div>
                )}
                {activeStep === 4 && (
                  <div className="space-y-1.5">
                    <div>COMPUTERIZED_XRAY_DETECTORS: STABLE</div>
                    <div>ALIGN_OPTICAL_CALIBRATE: 99.8%</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded overflow-hidden">
                      <div className="bg-pink-600 h-full w-[99.8%]" />
                    </div>
                  </div>
                )}
                {activeStep === 5 && (
                  <div className="space-y-1.5">
                    <div>PLC_LINE_AUTOPILOT: ENGAGED [UNIT-8]</div>
                    <div>IS0_14001_EMISSIONS: NULL</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded overflow-hidden">
                      <div className="bg-sky-500 h-full w-[74%]" />
                    </div>
                  </div>
                )}
                {activeStep === 6 && (
                  <div className="space-y-1.5">
                    <div>LOGISTICS_CARRIERS: AIR / FREIGHT</div>
                    <div>DELIVERY_NODES: Europe / Asia / US</div>
                    <div className="w-full bg-slate-100 dark:bg-slate-900 h-2 rounded overflow-hidden">
                      <div className="bg-slate-400 h-full w-[20%]" />
                    </div>
                  </div>
                )}

                <div className="flex justify-between text-xs pt-1.5 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Node Identifier:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-100">FKT-PRD-0{activeStep + 1}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}

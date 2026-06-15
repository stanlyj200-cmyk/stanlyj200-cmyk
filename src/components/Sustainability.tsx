import { useState } from "react";
import { motion } from "motion/react";
import { Leaf, Award, Recycle, CloudSun, Gauge, Sparkles } from "lucide-react";

export default function Sustainability() {
  // Dynamic calculator state
  const [householdCount, setHouseholdCount] = useState<number>(3);
  const [applianceMix, setApplianceMix] = useState<string>("average"); // "all", "climate", "average"

  // Base metrics
  // Average savings per household annually using Voltix suite is ~280 kWh, converting to ~110 kg CO2 offset, 30L packaging waste saved
  const getCalculatedImpact = () => {
    let scalar = 1;
    if (applianceMix === "all") scalar = 1.4;
    if (applianceMix === "climate") scalar = 0.8;

    const energySaved = Math.round(householdCount * 280 * scalar);
    const co2Saved = Math.round(householdCount * 110 * scalar);
    const wasteSaved = Math.round(householdCount * 12 * scalar);

    return { energySaved, co2Saved, wasteSaved };
  };

  const { energySaved, co2Saved, wasteSaved } = getCalculatedImpact();

  return (
    <div className="section-container bg-slate-50 dark:bg-slate-900/40 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10">
              <span className="text-xs font-mono font-medium tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                ZERO EMISSIONS TARGET
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Green Hardware For A Cleaner Climate
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed text-justify">
              Every appliance we engineer is designed to exist inside a circular lifecycle. From sourcing conflict-free silicon chips to optimizing thermal dispersion, we actively calculate and shrink our absolute energy footprint.
            </p>

            {/* Metrics points */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200/50 bg-white/60 dark:border-slate-800 dark:bg-slate-950/20 flex space-x-2.5">
                <Recycle className="h-5 w-5 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-950 dark:text-white">100% Recyclable Packaging</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">We completely ban expanded foam fillers.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-200/50 bg-white/60 dark:border-slate-800 dark:bg-slate-950/20 flex space-x-2.5">
                <CloudSun className="h-5 w-5 text-yellow-500 mt-1" />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-950 dark:text-white font-sans">Zero Carbon Target</h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Off-setting our entire supply pipeline by 2030.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80"
              alt="Wind turbines for green production"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/5">
              <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider block uppercase">
                PRODUCTION POWER SUPPLY
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-white block mt-1">
                Zero-Waste Plant powered by 100% On-site Wind Turbines
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Calculator Block */}
        <div className="p-6 sm:p-10 rounded-3xl border border-emerald-500/10 bg-white dark:border-slate-800 dark:bg-slate-950 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Calculator Controls (LHS) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
                  COMMUNAL IMPACT CALCULATOR
                </span>
                <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Calculate Your Communal Savings Metrics
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
                  See how many resource items your immediate neighborhood preserves annually when replacing outdated standard inductive elements and fans with Voltix energy architectures.
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-350">Household Volume:</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">{householdCount} Homes</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={householdCount}
                  onChange={(e) => setHouseholdCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Mix select */}
              <div className="space-y-2">
                <span className="text-xs text-slate-400 font-semibold uppercase font-mono block">Appliance deployment scope:</span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    onClick={() => setApplianceMix("all")}
                    className={`p-2.5 rounded-lg font-bold border transition ${
                      applianceMix === "all"
                        ? "bg-emerald-500 text-white border-emerald-400 shadow-sm"
                        : "bg-slate-50 text-slate-500 border-slate-200/50 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800"
                    }`}
                  >
                    Complete Suite
                  </button>
                  <button
                    onClick={() => setApplianceMix("average")}
                    className={`p-2.5 rounded-lg font-bold border transition ${
                      applianceMix === "average"
                        ? "bg-emerald-500 text-white border-emerald-400 shadow-sm"
                        : "bg-slate-50 text-slate-500 border-slate-200/50 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800"
                    }`}
                  >
                    Moderate Setup
                  </button>
                  <button
                    onClick={() => setApplianceMix("climate")}
                    className={`p-2.5 rounded-lg font-bold border transition ${
                      applianceMix === "climate"
                        ? "bg-emerald-500 text-white border-emerald-400 shadow-sm"
                        : "bg-slate-50 text-slate-500 border-slate-200/50 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800"
                    }`}
                  >
                    Lighting & Fans
                  </button>
                </div>
              </div>
            </div>

            {/* Calculations Output Results (RHS) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  C02 OFF-SET
                </span>
                <h4 className="font-sans text-3xl font-extrabold text-emerald-500 dark:text-emerald-400">
                  {co2Saved} <span className="text-xs uppercase font-bold text-slate-400">Kg</span>
                </h4>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Reduces carbon similar to planting {Math.round(co2Saved / 22)} mature pine trees.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-center space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  ENERGY SAVED
                </span>
                <h4 className="font-sans text-3xl font-extrabold text-blue-500 dark:text-blue-400">
                  {energySaved} <span className="text-xs uppercase font-semibold text-slate-400">kWh</span>
                </h4>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Conserves the same capacity used to fuel {Math.round(energySaved / 30)} dynamic office setups.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-center space-y-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  LANDFILL SAVED
                </span>
                <h4 className="font-sans text-3xl font-extrabold text-purple-500 dark:text-purple-400">
                  {wasteSaved} <span className="text-xs uppercase font-semibold text-slate-400">Kg</span>
                </h4>
                <p className="text-[10px] text-slate-400 leading-normal">
                  Bans equivalent single-use polymer waste from reaching coastal fills.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

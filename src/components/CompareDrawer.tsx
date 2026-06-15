import { motion } from "motion/react";
import { X, Scale, Trash2, ShieldCheck, Cpu } from "lucide-react";
import { Product } from "../types";

interface CompareDrawerProps {
  compareList: Product[];
  onRemove: (id: string) => void;
  onClose: () => void;
}

export default function CompareDrawer({ compareList, onRemove, onClose }: CompareDrawerProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 bg-slate-150/90 dark:bg-slate-950/95 border-t border-slate-200 dark:border-slate-800 backdrop-blur-xl shadow-2xl animate-slide-up max-h-[85vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Block drawer */}
        <div className="flex justify-between items-center border-b pb-3 border-slate-200 dark:border-slate-800">
          <div className="flex items-center space-x-2">
            <Scale className="h-5 w-5 text-blue-500 animate-bounce" />
            <h3 className="font-sans font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Technical Comparison Matrix
            </h3>
            <span className="text-[10px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full uppercase">
              {compareList.length} of 3 Products Select
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 px-3 text-xs bg-slate-200/50 hover:bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 rounded-lg font-bold"
          >
            Collapse Drawer ✕
          </button>
        </div>

        {compareList.length === 0 ? (
          <div className="text-center py-10 space-y-2">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              No products selected. Click the compare icon on product cards inside the Showcase directory to inspect.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Guide details label column (hidden on Mobile, beautifully structured on screens) */}
            <div className="hidden md:flex flex-col justify-end pb-3 space-y-11 text-xs font-mono font-bold text-slate-400 uppercase">
              <span className="border-b pb-1">APP LEVEL SPEC:</span>
              <span className="border-b pb-1">Category Code:</span>
              <span className="border-b pb-1">BEE Energy index:</span>
              <span className="border-b pb-1">Power Consumption:</span>
              <span className="border-b pb-1">Main Material Span:</span>
            </div>

            {/* Compared items card loop */}
            {compareList.map((prod) => (
              <div 
                key={prod.id} 
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow flex flex-col justify-between space-y-4 font-normal"
              >
                {/* Visual Header card info */}
                <div className="flex items-center space-x-3 border-b pb-3 border-slate-100 dark:border-slate-800/40">
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-lg object-cover bg-slate-100" 
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-sans font-bold text-sm text-slate-900 dark:text-white truncate">
                      {prod.name}
                    </h4>
                    <span className="text-[9px] font-semibold text-blue-500 uppercase font-mono block">
                      Ref: {prod.id.toUpperCase()}
                    </span>
                  </div>
                  <button
                    onClick={() => onRemove(prod.id)}
                    className="p-1 px-2 rounded-md hover:bg-red-50 hover:text-red-600 transition"
                    title="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                {/* Compared lines details */}
                <div className="space-y-4 text-xs sm:text-sm">
                  {/* Category */}
                  <div className="md:border-0 border-b pb-1 md:pb-0 flex md:block justify-between">
                    <span className="md:hidden text-[10px] uppercase font-mono text-slate-400 font-bold block">Category:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{prod.category}</span>
                  </div>

                  {/* Energy Rating */}
                  <div className="md:border-0 border-b pb-1 md:pb-0 flex md:block justify-between">
                    <span className="md:hidden text-[10px] uppercase font-mono text-slate-400 font-bold block">Energy rating:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 font-sans">{prod.energyRating.split(" ")[0]}</span>
                  </div>

                  {/* Power Draw */}
                  <div className="md:border-0 border-b pb-1 md:pb-0 flex md:block justify-between">
                    <span className="md:hidden text-[10px] uppercase font-mono text-slate-400 font-bold block">Power/Consumption:</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block truncate">{prod.specs["Power Consumption"] || prod.specs["Daily Electric Consumption"] || "Variable Efficiency"}</span>
                  </div>

                  {/* Dimensions Or Material Span */}
                  <div className="md:border-0 pb-1 md:pb-0 flex md:block justify-between">
                    <span className="md:hidden text-[10px] uppercase font-mono text-slate-400 font-bold block">Hardware scale:</span>
                    <span className="text-slate-500 dark:text-slate-405 block truncate">{prod.specs["Blade Span & Material"] || prod.specs["Effective Area Coverage"] || prod.specs["Total Active Capacity"] || "Unified Standard"}</span>
                  </div>
                </div>

                {/* Connectivity flag confirmation */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/40 text-[10px] font-mono text-slate-400 flex items-center space-x-1 uppercase">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Matter 1.3 Certified</span>
                </div>

              </div>
            ))}

            {/* Placeholder column to encourage user to add more */}
            {compareList.length < 3 && (
              <div className="hidden md:flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-xl p-6 text-center text-xs text-slate-400">
                <Cpu className="h-6 w-6 text-slate-300 animate-pulse mb-2" />
                <span>Select up to {3 - compareList.length} more appliances to run side-by-side matrices.</span>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

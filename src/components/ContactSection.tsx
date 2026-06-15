import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, Phone, MapPin, Globe, CheckCircle2, 
  Send, AlertCircle, Compass, Sparkles 
} from "lucide-react";

export default function ContactSection() {
  const [activeHub, setActiveHub] = useState<string>("frankfurt");
  
  // Form submission state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formCategory, setFormCategory] = useState("Sales");
  const [formSuccessHash, setFormSuccessHash] = useState<string | null>(null);
  const globalHubs = {
    Delhi: {
      city: "Delhi,Germany",
      facility: "Global HQ & Power Electronics Lab",
      address: "Ludwig-Erhard-Anlage 6-8, 60327 Delhi am Main",
      tel: "+49 (0) 69-VOLTIX",
      latLng: "50.1124° N, 8.6512° E",
      email: "eu.support@voltix.com"
    },
    Chennai: {
      city: "Chennai,Texas, US",
      facility: "IoT & Thread Networking Systems",
      address: "800 Cesar Chavez St,Chennai, TX 78701",
      tel: "+1 (512) 555-VOLT",
      latLng: "30.2672° N, 97.7431° W",
      email: "us.support@voltix.com"
    },
    tokyo: {
      city: "Tokyo, Japan",
      facility: "AI Systems & Microfluidics Labs",
      address: "1-chōme-2-1 Shinbashi, Minato City, Tokyo 105-0004",
      tel: "+81 (0) 3-5555-VOLT",
      latLng: "35.6664° N, 139.7583° E",
      email: "jp.support@voltix.com"
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    const mockHash = `VTX-MSG-${formCategory.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setFormSuccessHash(mockHash);
  };

  const handleResetForm = () => {
    setFormName("");
    setFormEmail("");
    setFormMessage("");
    setFormSuccessHash(null);
  };

  return (
    <div className="section-container bg-white dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
              Global coordinates
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Connect With Global Offices
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Whether inquiring about multi-unit developer pricing or high-voltage solar mesh consulting, our global offices stand ready to coordinate.
          </p>
        </div>

        {/* Global Hubs Interactive Selection Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LHS: Hub Selector (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
              Select Regional Hub:
            </span>
            {Object.entries(globalHubs).map(([key, hub]) => (
              <div
                key={key}
                onClick={() => setActiveHub(key)}
                className={`p-4 rounded-xl cursor-pointer border transition ${
                  activeHub === key
                    ? "border-blue-500 bg-blue-500/5 shadow-md"
                    : "border-slate-100 bg-slate-50/50 hover:bg-slate-100 dark:border-slate-850 dark:bg-slate-900/10 dark:hover:bg-slate-900"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-sans font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {hub.city}
                  </span>
                  <span className="text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded font-semibold">
                    ACTIVE
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium block mt-1 font-sans">{hub.facility}</span>
              </div>
            ))}
          </div>

          {/* RHS: Map Coordinate View (8 cols) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHub}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="p-6 sm:p-8 border border-slate-200/50 bg-white rounded-2xl shadow-xl dark:border-slate-805 dark:bg-slate-950 flex flex-col sm:flex-row justify-between items-center gap-6"
              >
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                      FACILITY SPECIFICATIONS
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {globalHubs[activeHub as keyof typeof globalHubs].city}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold block mt-1 font-sans">
                      {globalHubs[activeHub as keyof typeof globalHubs].facility}
                    </p>
                  </div>

                  {/* Lines details */}
                  <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-350 font-normal">
                    <p className="flex items-center space-x-2 font-medium">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span>{globalHubs[activeHub as keyof typeof globalHubs].address}</span>
                    </p>
                    <p className="flex items-center space-x-2 font-medium">
                      <Phone className="h-4 w-4 text-blue-500" />
                      <span>{globalHubs[activeHub as keyof typeof globalHubs].tel}</span>
                    </p>
                    <p className="flex items-center space-x-2 font-medium">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <span>{globalHubs[activeHub as keyof typeof globalHubs].email}</span>
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block font-semibold leading-none">GEO-COORDINATES BASE:</span>
                    <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold block mt-1">
                      {globalHubs[activeHub as keyof typeof globalHubs].latLng}
                    </span>
                  </div>
                </div>

                {/* Abstract tech high contrast grid map simulation */}
                <div className="relative w-48 sm:w-64 h-44 border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60 rounded-xl overflow-hidden flex items-center justify-center select-none shadow-inner">
                  {/* Subtle map coordinates markings background */}
                  <div className="absolute inset-0 opacity-15">
                    <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />
                  </div>
                  <div className="text-center relative z-10 space-y-1.5 p-4 uppercase">
                    <Compass className="h-10 w-12 text-blue-500 mx-auto animate-spin-slow" />
                    <span className="font-mono text-[9px] text-slate-400 font-bold block">RADAR FEED LOCK</span>
                    <span className="text-[10px] font-bold text-slate-800 dark:text-slate-100 block mt-1 font-mono">
                      SYNC: OK
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Contact Form Details block */}
        <div className="p-6 sm:p-10 rounded-3xl border border-slate-200/50 bg-slate-50 dark:border-slate-805 dark:bg-slate-900/10 shadow-xl max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* LHS Pitch (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                COMMUNICATION DISPATCH
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white leading-tight">
                Initiate Secure Inquiries
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Have specific design requirements or commercial developments? Select a communication category. Our routing system directs emails into proper technician hands for rapid resolution.
              </p>

              <div className="space-y-2 text-xs text-slate-400 font-semibold font-mono">
                <div>EUROPE OFFICE: frankfurt_node@voltix.org</div>
                <div>AMERICAS OFFICE: austin_node@voltix.org</div>
                <div>ASIA-PACIFIC OFFICE: tokyo_node@voltix.org</div>
              </div>
            </div>

            {/* RHS form block (7 cols) */}
            <div className="md:col-span-7">
              {formSuccessHash ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="text-center py-6 space-y-4 text-xs font-medium"
                >
                  <div className="p-2.5 bg-emerald-500/10 rounded-full w-fit mx-auto">
                    <CheckCircle2 className="h-10 w-12 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-base sm:text-lg text-slate-950 dark:text-white">Message Logged Successfully</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-405 mt-1 font-sans">
                      Our dispatch routing server successfully directed your file metrics. A coordinator will email back shortly.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-950 border border-white/5 rounded-xl font-mono text-[10px]">
                    <span className="text-slate-400">YOUR TRANSMIT_HASH:</span>
                    <span className="font-bold text-emerald-400 block mt-1">{formSuccessHash}</span>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2 border border-slate-200 dark:border-slate-800 text-slate-500 rounded-lg text-xs font-bold font-sans hover:bg-slate-50"
                  >
                    Send another dispatch
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 text-xs font-medium">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider font-bold block">Your Name:</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Name"
                        className="w-full px-3.5 py-2.5 border border-slate-200 bg-white text-sm rounded-lg dark:border-slate-800 dark:bg-slate-950 dark:text-white outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider font-bold block">Your Email:</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-3.5 py-2.5 border border-slate-200 bg-white text-sm rounded-lg dark:border-slate-800 dark:bg-slate-950 dark:text-white outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-1 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider font-bold block">Inquiry Category:</label>
                      <select
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-200 bg-white text-sm rounded-lg dark:border-slate-800 dark:bg-slate-950 dark:text-white outline-none focus:ring-1 focus:ring-blue-500 font-sans font-semibold text-slate-700"
                      >
                        <option value="Sales">Commercial Sales & Developer Bulk Pricing</option>
                        <option value="Support">Engineering Support & Telemetry Syncing</option>
                        <option value="Careers">Partnership & Research Affiliations</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider font-bold block">Message Particulars:</label>
                    <textarea
                      required
                      rows={3}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Detail your request..."
                      className="w-full px-3.5 py-2.5 border border-slate-200 bg-white text-sm rounded-lg dark:border-slate-800 dark:bg-slate-950 dark:text-white outline-none focus:ring-1 focus:ring-blue-500 font-normal leading-relaxed text-justify"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 hover:scale-101 text-white font-bold rounded-lg text-sm transition shadow-lg"
                    >
                      Transmit Dispatch Parameters
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Zap, Send, Mail, Linkedin, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;

    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setSubscribed(true);
      setNewsEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 dark:bg-slate-950 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Segment: Brand details & Newsletter enrollment form */}
        <div className="grid lg:grid-cols-12 gap-8 items-center border-b border-slate-800 pb-12">
          
          {/* Brand Copy */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { onNavigate("home"); window.scrollTo({ top:0, behavior: "smooth" }); }}>
              <div className="p-1.5 rounded-lg bg-blue-600 border border-blue-500 shadow-lg">
                <Zap className="h-4 w-4 text-white animate-pulse" />
              </div>
              <div>
                <span className="font-sans text-lg font-bold tracking-tight text-white uppercase">
                  Voltix
                </span>
                <span className="text-[10px] font-mono block leading-3 text-blue-400 font-bold tracking-widest">
                  SMART APPLIANCES GLOBAL
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm text-justify">
              Redefining global electrical appliance baselines with integrated power modules, high and low-frequency silicon-carbide components, and Matter protocols.
            </p>
          </div>

          {/* Newsletter Enrollment Form */}
          <div className="lg:col-span-7 bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 max-w-md ml-auto w-full text-xs">
            <h4 className="font-sans font-bold text-white tracking-tight uppercase text-[10px] tracking-wider mb-1">
              Join Our Engineering Dispatch
            </h4>
            <p className="text-slate-500 mb-3.5 leading-normal">
              Register your email to secure monthly technical roadmap logs, energy research whitepapers, and dynamic device catalogs.
            </p>

            {subscribed ? (
              <div className="flex items-center space-x-2 p-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-xs">
                <CheckCircle2 className="h-4 w-4" />
                <span>Subscription recorded successfully. Secure welcome log dispatched.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 text-slate-100 rounded-lg outline-none focus:ring-1 focus:ring-blue-500 font-normal"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition uppercase font-mono tracking-wider flex items-center space-x-1"
                >
                  {subscribing ? (
                    <div className="animate-spin h-3.5 w-3.5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <span>ENROLL</span>
                      <Send className="h-3 w-3" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Mid segment: Sitemaps Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs pb-12 border-b border-slate-800 font-normal">
          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider font-mono">Appliances Range</h5>
            <div className="flex flex-col space-y-2">
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("products")}>Climate & Air Systems</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("products")}>Smart LED Modules</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("products")}>Water Heaters</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("products")}>Kitchen Induction Cooktops</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("products")}>Solar Management Modules</span>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider font-mono">Innovation R&D</h5>
            <div className="flex flex-col space-y-2">
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("innovation")}>Firmware & Microkernels</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("innovation")}>Matter over Thread protocols</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("innovation")}>Silicon Carbide Switches</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("innovation")}>Neural cooling models</span>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider font-mono">Operational Sitemaps</h5>
            <div className="flex flex-col space-y-2">
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("manufacturing")}>Manufacturing Timeline</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("sustainability")}>Eco Packaging Rules</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("careers")}>Technical Career Openings</span>
              <span className="hover:text-white cursor-pointer" onClick={() => onNavigate("support")}>Unified Warranty Database</span>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-bold text-white uppercase text-[10px] tracking-wider font-mono">Compliance & Security</h5>
            <div className="flex flex-col space-y-2">
              <span>BEE High Efficiency Certificates</span>
              <span>ISO 9001:2015 Certifications</span>
              <span>FCC and CE Conformity Marks</span>
              <span>Matter 1.3 Ecosystem standard</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright segment and certifications lists */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 font-normal space-y-4 sm:space-y-0">
          <div>
            &copy; {currentYear} Voltix Smart Appliances AG. Engineered globally for zero-waste living. All rights reserved.
          </div>
          <div className="flex space-x-4 items-center uppercase tracking-widest font-mono">
            <span className="flex items-center space-x-1.5 border border-slate-800 bg-slate-950/20 px-2 py-0.5 rounded text-blue-400">
              <ShieldCheck className="h-3 w-3" />
              <span>Matter Certified</span>
            </span>
            <span className="border border-slate-800 bg-slate-950/20 px-2 py-0.5 rounded">
              WEEE Compliance
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

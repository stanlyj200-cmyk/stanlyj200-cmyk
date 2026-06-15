import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FileText, Download, ShieldCheck, MessageSquare, Send, 
  HelpCircle, ChevronDown, ChevronUp, CheckCircle, 
  User, Sparkles, AlertCircle 
} from "lucide-react";
import { faqItems, productsData } from "../data/products";
import { FAQItem, SupportManual } from "../types";

export default function Support() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  
  // Warranty State
  const [warrantyStep, setWarrantyStep] = useState<number>(1);
  const [warrantyProduct, setWarrantyProduct] = useState("");
  const [warrantySerial, setWarrantySerial] = useState("");
  const [warrantyDate, setWarrantyDate] = useState("");
  const [warrantyCert, setWarrantyCert] = useState<string | null>(null);

  // Chatbot State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ sender: 'user' | 'bot', text: string, time: string }>>([
    { 
      sender: 'bot', 
      text: "Hello! Welcome to Voltix Global Digital Support. I am your engineering assistant. Ask me about Matter syncing, BLDC warranty registration, or air cleaning CADR parameters.", 
      time: "Just now" 
    }
  ]);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const manuals: SupportManual[] = [
    { productId: "volt-fan-x1", productName: "AeroStrom Ceiling Fan Manual", fileSize: "1.4 MB", version: "v4.2", downloadUrl: "#" },
    { productId: "volt-bulb-l9", productName: "LuminaLux Led Element Datasheet", fileSize: "890 KB", version: "v2.1", downloadUrl: "#" },
    { productId: "volt-pur-p5", productName: "AeroShield AI Air Scrubber Manual", fileSize: "2.1 MB", version: "v3.0", downloadUrl: "#" },
    { productId: "volt-solar-s8", productName: "Aegis Solar Hybrid Inverter Spec", fileSize: "5.8 MB", version: "v9.3", downloadUrl: "#" }
  ];

  const handleWarrantyRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!warrantyProduct || !warrantySerial || !warrantyDate) return;

    // Generate unique lock certificate
    const certCode = `VLTX-SECURE-WARR-${Math.floor(100000 + Math.random() * 900000)}`;
    setWarrantyCert(certCode);
    setWarrantyStep(3);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg, time: "Just now" }]);
    setChatInput("");
    setIsTyping(true);

    // Simulate AI model latency
    setTimeout(() => {
      let botResponse = "Thank you. Our engineering portal logged your inquiry. For immediate human contact, call +49 (0) 69-VOLTIX or email support@voltix.com.";

      const lower = userMsg.toLowerCase();
      if (lower.includes("warranty")) {
        botResponse = "Voltix appliances feature an elite 3-year consumer warranty. Industrial products like the Aegis Solar Hub or HydroThermal Heaters feature a 7-year heavy duty structural warranty including direct field engineers replacement.";
      } else if (lower.includes("matter") || lower.includes("thread") || lower.includes("connectivity")) {
        botResponse = "All Voltix appliances are Matter 1.3 compliant out-of-the-box. They communicate over safe local Thread lanes. No cloud or custom bridge bridges are required—you can direct pair using Apple HomeKit, Google Nest, or Home Assistant gateways.";
      } else if (lower.includes("fan") || lower.includes("aerostrom")) {
        botResponse = "The AeroStrom Smart Ceiling Fan uses a brushless direct current (BLDC) motor drawing only 5W on silent speed, complete with built-in temperature sensors and an RGBWW ambient circadian LED ring.";
      } else if (lower.includes("solar") || lower.includes("aegis") || lower.includes("battery")) {
        botResponse = "The Aegis Solar Power Hub supports a continuous 10kW load. It runs double MPPT lines, dynamically balancing grid feed and battery charging. It is IP66 protected for outdoor structures.";
      } else if (lower.includes("purifier") || lower.includes("air") || lower.includes("filter")) {
        botResponse = "Our air purifiers use H13 True medical-grade HEPA filters. Filters typically sustain active operations up to 8,760 hours (approx 1 year). Clean-air replacement filters can be secured on our website.";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse, time: "Just now" }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleResetWarranty = () => {
    setWarrantyStep(1);
    setWarrantyProduct("");
    setWarrantySerial("");
    setWarrantyDate("");
    setWarrantyCert(null);
  };

  return (
    <div className="section-container bg-slate-50 dark:bg-slate-900/40 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
              HELP desk
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Voltix Safe Customer Lobby
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Register your high-performance hardware warranty, download detailed wiring manuals, review FAQ lists, or converse directly with our virtual helpdesk.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LHS: Warranty registration (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-805 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center space-x-3.5">
              <div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-xl">
                <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  Unified Warranty Register
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-semibold font-mono tracking-wider uppercase">
                  Register Secure Hardware Protections
                </p>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="flex items-center justify-between border-y py-3 text-xs text-slate-500 border-slate-100 dark:border-slate-800">
              <span className={warrantyStep >= 1 ? "text-blue-600 font-bold font-mono" : ""}>1. Device Info</span>
              <span>⟶</span>
              <span className={warrantyStep >= 2 ? "text-blue-600 font-bold font-mono" : ""}>2. Serial Hash</span>
              <span>⟶</span>
              <span className={warrantyStep === 3 ? "text-emerald-500 font-bold font-mono" : ""}>3. Certificate</span>
            </div>

            {/* Active wizard step */}
            {warrantyStep === 1 && (
              <div className="space-y-4 text-xs font-medium">
                <div className="space-y-1.5">
                  <label className="text-slate-500 dark:text-slate-450 uppercase font-mono tracking-wider block">Appliance Model Class:</label>
                  <select
                    value={warrantyProduct}
                    onChange={(e) => setWarrantyProduct(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">-- Choose Appliance Model --</option>
                    {productsData.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div className="pt-2">
                  <button
                    disabled={!warrantyProduct}
                    onClick={() => setWarrantyStep(2)}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-xs text-white font-bold rounded-lg uppercase transition"
                  >
                    Continue to validation
                  </button>
                </div>
              </div>
            )}

            {warrantyStep === 2 && (
              <form onSubmit={handleWarrantyRegister} className="space-y-4 text-xs font-medium">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-500 dark:text-slate-450 uppercase font-mono tracking-wider block">Alphanumeric Serial No:</label>
                    <input
                      type="text"
                      required
                      value={warrantySerial}
                      onChange={(e) => setWarrantySerial(e.target.value)}
                      placeholder="e.g. VT-X1-8849-B"
                      className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-500 dark:text-slate-450 uppercase font-mono tracking-wider block">Purchase Date:</label>
                    <input
                      type="date"
                      required
                      value={warrantyDate}
                      onChange={(e) => setWarrantyDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                    />
                  </div>
                </div>
                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setWarrantyStep(1)}
                    className="w-1/3 py-3 border border-slate-200 dark:border-slate-800 text-slate-500 rounded-lg text-xs font-semibold hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 bg-blue-600 hover:bg-blue-500 text-xs text-white font-bold rounded-lg uppercase transition animate-pulse"
                  >
                    Commit Secure Register
                  </button>
                </div>
              </form>
            )}

            {warrantyStep === 3 && warrantyCert && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-6 space-y-5"
              >
                <div className="p-3 bg-emerald-500/10 rounded-full w-fit mx-auto">
                  <CheckCircle className="h-10 w-12 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white">Warranty Certified Successfully</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Your on-board microcontroller telemetry chips are now synced to global service networks.
                  </p>
                </div>

                {/* Printable certificate card */}
                <div className="text-left border border-slate-200 dark:border-slate-800 rounded-2xl p-5 bg-slate-50 dark:bg-slate-950 max-w-md mx-auto space-y-3.5 font-mono text-[10px] select-none text-slate-500 block">
                  <div className="flex justify-between items-center border-b pb-1.5 font-bold">
                    <span>VOLTIX PROTECTION CONTRACT</span>
                    <span className="text-emerald-500">VALID CHIP</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-slate-400 block font-semibold">DEVICE CLASS:</span>
                    <span className="col-span-2 font-bold text-slate-800 dark:text-slate-100">{warrantyProduct}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-slate-400 block font-semibold">SERIAL ID:</span>
                    <span className="col-span-2 font-bold text-slate-800 dark:text-slate-100">{warrantySerial.toUpperCase()}</span>
                  </div>
                  <div className="grid grid-cols-3">
                    <span className="text-slate-400 block font-semibold">DATE COMMITTED:</span>
                    <span className="col-span-2 font-bold text-slate-800 dark:text-slate-100">{warrantyDate}</span>
                  </div>
                  <div className="border-t pt-2 border-dashed">
                    <span className="text-slate-400 font-semibold block">SYSTEM VERIFY SHA_HASH CODE:</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400 select-all font-mono font-bold block mt-1">{warrantyCert}</span>
                  </div>
                </div>

                <button
                  onClick={handleResetWarranty}
                  className="px-6 py-2 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-50"
                >
                  Register another appliance
                </button>
              </motion.div>
            )}
          </div>

          {/* RHS: Manual downloads (5 cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-805 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-950/50 rounded-xl">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  Wiring & Manual PDF Vault
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-mono font-semibold tracking-wider uppercase">
                  Technical Specifications Schematics
                </p>
              </div>
            </div>

            {/* List Manuals */}
            <div className="space-y-4">
              {manuals.map((man) => (
                <div 
                  key={man.productId} 
                  className="flex items-center justify-between p-3.5 border border-slate-100 dark:border-slate-850 rounded-xl hover:bg-slate-50/50 Transition"
                >
                  <div className="space-y-0.5">
                    <h5 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 font-sans">
                      {man.productName}
                    </h5>
                    <p className="text-[10px] text-slate-400 font-mono font-semibold">
                      Size: {man.fileSize} | Revision: {man.version}
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      alert(`Initiating secure SSL transfer for ${man.productName}. Download will trigger shortly.`);
                    }}
                    className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-300 hover:text-blue-500 border border-slate-100 dark:border-slate-800"
                    title="Download Manual"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions FAQs Section */}
        <div className="border-t pt-16 border-slate-200/50 dark:border-slate-850">
          <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b pb-3 border-slate-100 dark:border-slate-800">
            Frequently Answered Concerns (FAQs)
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((faq) => {
              const isOpen = activeFaq === faq.id;

              return (
                <div 
                  key={faq.id} 
                  className="p-5 border border-slate-250/20 bg-white rounded-2xl dark:border-slate-850 dark:bg-slate-950/25 cursor-pointer hover:border-slate-300 transition-all duration-300"
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                >
                  <div className="flex justify-between items-center">
                    <div className="space-y-1 flex-1 pr-4">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                        Category: {faq.category}
                      </span>
                      <h4 className="font-sans text-sm sm:text-base font-bold text-slate-950 dark:text-white leading-snug">
                        {faq.question}
                      </h4>
                    </div>
                    <div className="text-slate-400">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </div>
                  </div>

                  {/* FAQ answer expansion with simple transition */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 font-normal">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Chat Support Trigger Floating Widget */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="flex items-center space-x-2 px-4 py-3 rounded-full bg-gradient-to-tr from-[#00d1ff] to-[#0070f3] text-white font-bold leading-tight shadow-[0_0_20px_rgba(0,209,255,0.45)] hover:bg-opacity-90 hover:scale-105 transition-all duration-300 border border-white/15"
          >
            <MessageSquare className="h-5 w-5 fill-current animate-pulse" />
            <span className="text-xs tracking-wider uppercase font-sans font-extrabold sm:block hidden">
              Converse Support
            </span>
          </button>

          {/* Chat Panel Box Drawer */}
          <AnimatePresence>
            {chatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="absolute bottom-16 right-0 w-80 sm:w-96 h-96 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 text-xs"
              >
                {/* Chat header */}
                <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center font-sans">
                  <div>
                    <h4 className="font-extrabold text-sm tracking-wide">Voltix Telemetry Help</h4>
                    <span className="text-[10px] text-blue-200 font-mono tracking-wider font-semibold">ONLINE HELPDESK ENGINE</span>
                  </div>
                  <button 
                    onClick={() => setChatOpen(false)} 
                    className="text-white bg-white/20 hover:bg-white/30 rounded px-1.5 py-0.5 font-bold uppercase"
                  >
                    ✕
                  </button>
                </div>

                {/* Message Streams Panel */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-950 font-normal">
                  {chatMessages.map((msg, index) => {
                    const isBot = msg.sender === 'bot';

                    return (
                      <div key={index} className={`flex ${isBot ? 'justify-start' : 'justify-end'} items-start space-x-2`}>
                        {isBot && (
                          <div className="p-1 rounded-md bg-blue-100 text-blue-600 mt-1">
                            <Sparkles className="h-3.5 w-3.5" />
                          </div>
                        )}
                        <div className={`p-3 max-w-[80%] rounded-xl text-justify leading-relaxed ${
                          isBot 
                            ? 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800/60' 
                            : 'bg-blue-600 text-white'
                        }`}>
                          <p>{msg.text}</p>
                        </div>
                      </div>
                    );
                  })}
                  {isTyping && (
                    <div className="flex justify-start items-center space-x-1.5 text-slate-400 font-mono text-[10px] pl-7">
                      <div className="animate-bounce h-1.5 w-1.5 bg-slate-400 rounded-full" />
                      <div className="animate-bounce delay-75 h-1.5 w-1.5 bg-slate-400 rounded-full" />
                      <div className="animate-bounce delay-150 h-1.5 w-1.5 bg-slate-400 rounded-full" />
                      <span>Voltix Engine is writing...</span>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Form Inputs and trigger */}
                <form onSubmit={handleSendMessage} className="p-3 border-t bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 flex space-x-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Enter keywords: matter, warranty, fan..."
                    className="flex-1 px-3 py-1.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs dark:text-white rounded-lg outline-none focus:ring-1 focus:ring-blue-500 font-medium"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

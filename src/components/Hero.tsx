import { motion } from "motion/react";
import { ArrowRight, PhoneCall, ShieldCheck, Zap, Globe, Users } from "lucide-react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const stats = [
    {
      value: "1M+",
      label: "Products Sold",
      desc: "Delivering intelligent power worldwide",
      icon: <Zap className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
    },
    {
      value: "50+",
      label: "Countries Served",
      desc: "Seamless global logistics and nodes",
      icon: <Globe className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
    },
    {
      value: "99%",
      label: "Customer Rating",
      desc: "Voted leading reliability standards",
      icon: <Users className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
    },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80"
          alt="Voltix Smart Home Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover select-none transform scale-105 filter brightness-[0.75] dark:brightness-[0.45] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent dark:from-slate-950/95 dark:via-slate-950/80 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent" />
        {/* Subtle glowing mesh overlays */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 items-center">
        {/* Hero Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00d1ff] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
              Energy Rating: A+++ Certified
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[0.95]"
          >
            Powering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d1ff] to-[#0070f3] drop-shadow-sm">
              Future of Smart Living
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed font-normal"
          >
            Integrating AI-powered automation and high-efficiency engineering to transform your home into a sustainable ecosystem.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-2"
          >
            <button
              onClick={() => onNavigate("products")}
              className="px-8 py-4 bg-[#0070f3] hover:bg-[#00d1ff] hover:text-black text-sm font-bold uppercase tracking-widest rounded-lg flex items-center gap-3 group transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Explore Products</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/10 text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Download Catalog</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Featured Showcase Panel (Glassmorphism card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-5 relative"
        >
          <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            {/* Top right energy flag */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-cyan-500 text-white text-[10px] font-mono tracking-widest px-4 py-1.5 rounded-bl-xl uppercase font-semibold">
              A+++ ENERGY RATED
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-blue-400 tracking-wider block uppercase">
                Featured Innovation
              </span>
              <h3 className="font-sans text-2xl font-bold text-white tracking-tight">
                Aegis Solar Hub
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect clear solar inputs to live household needs with predictive AI routing and real-time smart grid synchronization.
              </p>

              {/* Graphical simulation of microgrid flow */}
              <div className="border border-white/5 rounded-xl bg-slate-950/60 p-4 space-y-3 font-mono text-[11px] text-slate-300">
                <div className="flex items-center justify-between border-b border-white/5 pb-1.5 text-slate-400">
                  <span>MICROGRID ENERGY PATH</span>
                  <span className="text-emerald-400 animate-pulse">● FEEDING</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-blue-400">PV Solar Input</span>
                  <span className="font-bold text-slate-100">8.42 kW</span>
                </div>
                {/* Visual energy flow bar */}
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[80%] rounded-full animate-pulse" />
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-purple-400">Battery Level</span>
                  <span className="font-bold text-slate-100">92.4%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full w-[92.4%] rounded-full" />
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-slate-400 border-t border-white/5">
                <span>Matter & Thread Enabled</span>
                <span className="text-blue-400 hover:underline cursor-pointer flex items-center space-x-1" onClick={() => onNavigate("products")}>
                  <span>See specs</span>
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Grid statistics - Bottom line banner */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200/10 bg-slate-100/20 backdrop-blur-xl p-4 dark:border-white/10 dark:bg-[#050608]/75 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col justify-center text-center md:text-left"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

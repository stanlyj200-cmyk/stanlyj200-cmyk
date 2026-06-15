import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Eye, Flame, Award, Heart, Leaf, Mail, Linkedin, Globe } from "lucide-react";

export default function About() {
  const [activeLeader, setActiveLeader] = useState<number | null>(null);

  const values = [
    {
      title: "Engineering Excellence",
      description: "We hold ourselves to rigorous structural standards, refusing short-term compromises to generate durable silicon power grids.",
      icon: <Award className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
    },
    {
      title: "Eco Sustainability",
      description: "We are committed to full zero-waste processes, optimizing thermodynamic layouts to decrease customer emissions.",
      icon: <Leaf className="h-6 w-6 text-emerald-500 dark:text-emerald-400" />,
    },
    {
      title: "User Accessibility First",
      description: "Our IoT setups are configured logically, giving families control without forcing complex code languages or setups.",
      icon: <Heart className="h-6 w-6 text-rose-500 dark:text-rose-400" />,
    },
  ];

  const leaders = [
    {
      name: "Dr. Marcus Vance",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "Dr. Vance holds a Ph.D. in Power Electronics from ETH Zurich. He previously led smart grids research at Fraunhofer, championing IoT standards that now govern intelligent houseware globally.",
    },
    {
      name: "Elena Rostova",
      role: "Chief of Product & Engineering",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Elena boasts 15 years in sustainable industrial design. Her focus on fluid aerodynamics directly birthed Voltix's carbon-fiber ceiling fan blades and high-efficiency heat exchangers.",
    },
    {
      name: "Kaito Takahashi",
      role: "Director of Embedded Systems R&D",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      bio: "Kaito managed dynamic firmware pipelines for microcontrollers in Tokyo. He directs Voltix's on-board Matter compatibility layer and machine learning edge logic.",
    },
  ];

  return (
    <div className="section-container bg-slate-50 dark:bg-slate-900/40 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
                OUR STORY
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Powering Progress Through Engineering Innovation
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Founded in 2021 by a team of visionary power electronic engineers and industrial designers, Voltix emerged with a core focus: dismantle the division between high-efficiency energy grids and everyday electrical house appliances.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              We believed standard home appliances were architecturally lagging—utilizing power-hungry, noisy motors and enclosed proprietary communication grids. Voltix redesigned these core modules from the ground up, placing pure-copper brushless DC motors, integrated power electronics, and standardized Matter communication protocols into everyday appliances. Today, we empower over a million homes across 50 countries with green, smart, and responsive utilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
              alt="Voltix Engineering Labs"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/5">
              <span className="text-[10px] font-mono text-blue-400 font-semibold tracking-wider block uppercase">
                RESEARCH FACILITIES
              </span>
              <span className="text-sm font-sans font-bold text-white block mt-1">
                Advanced Power Lab, Frankfurt, Germany
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Bento */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-slate-200/50 bg-white dark:border-slate-800/60 dark:bg-slate-950/40 backdrop-blur-sm shadow-sm space-y-4"
          >
            <div className="p-3 w-fit rounded-xl bg-blue-100 dark:bg-blue-950/50">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To engineer the world's most innovative, energy-efficient, and responsive smart home appliances—enabling household users to minimize their absolute ecological footprint effortlessly without compromising comfort or performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="p-8 rounded-2xl border border-slate-200/50 bg-white dark:border-slate-800/60 dark:bg-slate-950/40 backdrop-blur-sm shadow-sm space-y-4"
          >
            <div className="p-3 w-fit rounded-xl bg-blue-100 dark:bg-blue-950/50">
              <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-sans text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To build a cohesive, zero-emission home ecosystem where solar power arrays, backup battery modules, and ambient appliances collaborate autonomously to optimize grid safety, air quality, and resource distribution.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#00d1ff] tracking-widest uppercase">
              GUIDING PRINCIPLES
            </span>
            <h3 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Our Core Values
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Every PCB layout, software variable, and material choice traces directly back to these core ideals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-slate-200/55 bg-white dark:border-slate-800/50 dark:bg-slate-950/20 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 w-fit mb-4">
                  {val.icon}
                </div>
                <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Directory */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[10px] font-mono font-bold text-[#00d1ff] tracking-widest uppercase">
              LEADERSHIP & INTELLECT
            </span>
            <h3 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Scientific Pioneers
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Meet the executive team bridging high electronics and intelligent household solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative border border-slate-200/60 rounded-2xl bg-white p-5 cursor-pointer hover:border-blue-500 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-950/40 transition-all duration-300"
                onClick={() => setActiveLeader(activeLeader === i ? null : i)}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex space-x-3">
                      <button className="p-2 rounded-full bg-slate-900/60 border border-white/20 hover:bg-blue-600 hover:border-blue-500 text-white transition duration-200">
                        <Mail className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-full bg-slate-900/60 border border-white/20 hover:bg-blue-600 hover:border-blue-500 text-white transition duration-200">
                        <Linkedin className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                      {leader.name}
                    </h4>
                    <p className="text-xs font-mono font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase mt-0.5">
                      {leader.role}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    BIO
                  </span>
                </div>

                {/* Animated Bio expander */}
                <motion.div
                  initial={false}
                  animate={{ height: activeLeader === i ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-3 mt-3 border-t border-slate-100 dark:border-slate-800">
                    {leader.bio}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

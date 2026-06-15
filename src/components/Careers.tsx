import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, HeartPulse, GraduationCap, Cpu, 
  MapPinHouse, CheckCircle2, ChevronDown, ChevronUp, X 
} from "lucide-react";
import { careerJobs, employeeBenefits } from "../data/products";
import { CareerOpportunity } from "../types";

export default function Careers() {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<CareerOpportunity | null>(null);
  
  // Job submit states
  const [applicantName, setApplicantName] = useState("");
  const [applicantMail, setApplicantMail] = useState("");
  const [applicantResume, setApplicantResume] = useState("");
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartPulse":
        return <HeartPulse className="h-6 w-6 text-emerald-500" />;
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-blue-500" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-indigo-500" />;
      case "MapPinHouse":
        return <MapPinHouse className="h-6 w-6 text-purple-500" />;
      default:
        return <Briefcase className="h-6 w-6 text-slate-500" />;
    }
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantMail || !applicantResume) return;

    // Simulate database write & security log hashing
    const mockHash = `VTX-APP-${applyingJob?.id.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmissionId(mockHash);
  };

  const handleCloseModal = () => {
    setApplyingJob(null);
    setApplicantName("");
    setApplicantMail("");
    setApplicantResume("");
    setSubmissionId(null);
  };

  return (
    <div className="section-container bg-white dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
              JOIN THE FUTURE
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Pioneer Sustainable Energy Systems
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Want to transform home appliance aerodynamics or configure next-generation Matter microchips? Join our global scientific hubs across Frankfurt, Austin, Tokyo, and more.
          </p>
        </div>

        {/* Employee Perks Grid */}
        <div className="mb-24">
          <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 border-b pb-3 border-slate-100 dark:border-slate-800">
            Specialized Employee Privileges
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {employeeBenefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl border border-slate-200/50 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/10 hover:border-slate-300 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 w-fit mb-4 border border-slate-100 dark:border-slate-800 shadow-sm">
                  {getBenefitIcon(benefit.icon)}
                </div>
                <h4 className="font-sans font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  {benefit.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-2">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Open Positions Accordion */}
        <div>
          <h3 className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 border-b pb-3 border-slate-100 dark:border-slate-800">
            Current Technical Openings
          </h3>

          <div className="space-y-4">
            {careerJobs.map((job) => {
              const isOpen = activeJob === job.id;

              return (
                <div 
                  key={job.id} 
                  className="border border-slate-200/60 rounded-2xl bg-white overflow-hidden dark:border-slate-800/80 dark:bg-slate-950/40 hover:border-blue-500/25 transition-all duration-300"
                >
                  {/* Summary Block header */}
                  <div 
                    onClick={() => setActiveJob(isOpen ? null : job.id)}
                    className="p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between cursor-pointer space-y-4 sm:space-y-0"
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold uppercase">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 font-bold">
                          {job.type}
                        </span>
                      </div>
                      <h4 className="font-sans font-bold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        📍 {job.location} | Requirements: {job.experience}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyingJob(job);
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg leading-tight transition"
                      >
                        Apply Now
                      </button>
                      <div className="p-1 rounded bg-slate-50 dark:bg-slate-900 text-slate-400">
                        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Accordion Expansion Detail Description */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-6 pt-2 sm:px-6 border-t border-slate-100 dark:border-slate-850 space-y-4 text-xs sm:text-sm">
                      <div className="space-y-1.5">
                        <h5 className="font-bold text-slate-950 dark:text-white font-sans uppercase text-xs tracking-wider">
                          Role Overview:
                        </h5>
                        <p className="text-slate-500 dark:text-slate-405 leading-relaxed font-normal">
                          {job.description}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-3">
                        <h5 className="font-bold text-slate-950 dark:text-white font-sans uppercase text-xs tracking-wider">
                          Pre-requisite Target Skills:
                        </h5>
                        <ul className="list-disc pl-5 space-y-1.5 text-slate-500 dark:text-slate-400 font-medium">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Apply Modal Popup */}
        <AnimatePresence>
          {applyingJob && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6 relative"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                    {applyingJob.department}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-slate-900 dark:text-white uppercase leading-tight">
                    Apply for: {applyingJob.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    System target: {applyingJob.location}
                  </p>
                </div>

                {submissionId ? (
                  <motion.div 
                    initial={{ scale: 0.96 }} 
                    animate={{ scale: 1 }} 
                    className="text-center py-6 space-y-4"
                  >
                    <div className="p-3 bg-emerald-500/10 rounded-full w-fit mx-auto">
                      <CheckCircle2 className="h-10 w-12 text-emerald-500" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-sans font-bold text-lg text-slate-900 dark:text-white">Application Received Gatekeeper</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Thanks for applying. Our talent acquisition systems will review your file parameters and compile a response in under 72 hours.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-50 dark:bg-slate-950/70 border border-slate-100 dark:border-slate-805 rounded-xl font-mono text-[10px]">
                      <span className="text-slate-400">YOUR APP_SUBMIT_HASH:</span>
                      <span className="font-bold text-slate-900 dark:text-emerald-400 block mt-1">{submissionId}</span>
                    </div>

                    <button
                      onClick={handleCloseModal}
                      className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition"
                    >
                      Close Portal
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleApplySubmit} className="space-y-4 text-xs font-medium">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider font-semibold block">Full Name:</label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-sm rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider font-semibold block">Email Address:</label>
                        <input
                          type="email"
                          required
                          value={applicantMail}
                          onChange={(e) => setApplicantMail(e.target.value)}
                          placeholder="Email"
                          className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-sm rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-slate-500 dark:text-slate-400 uppercase font-mono tracking-wider font-semibold block">Resume & Research Projects Bio:</label>
                      <textarea
                        required
                        rows={4}
                        value={applicantResume}
                        onChange={(e) => setApplicantResume(e.target.value)}
                        placeholder="Please detail your experience in C/C++, Rust connectivity mesh, motor electronics, or dynamic hardware design frameworks..."
                        className="w-full px-3 py-2 border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 text-sm rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500 leading-relaxed font-normal"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-sm transition"
                      >
                        Submit Electrical Credentials
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

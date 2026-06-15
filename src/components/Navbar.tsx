import { useState } from "react";
import { Zap, Menu, X, Sun, Moon, Scale } from "lucide-react";

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  compareCount: number;
  onOpenCompare: () => void;
}

export default function Navbar({
  currentSection,
  setCurrentSection,
  darkMode,
  setDarkMode,
  compareCount,
  onOpenCompare,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "products", label: "Products" },
    { id: "about", label: "About Us" },
    { id: "innovation", label: "Innovation" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "sustainability", label: "Sustainability" },
    { id: "careers", label: "Careers" },
    { id: "support", label: "Support" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setCurrentSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 backdrop-blur-md bg-opacity-80 border-slate-200/20 bg-slate-50/90 dark:border-white/5 dark:bg-[#050608]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="w-8.5 h-8.5 bg-gradient-to-tr from-[#00d1ff] to-[#0070f3] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,209,255,0.4)] transition-all duration-300 group-hover:scale-105">
              <Zap className="h-4.5 w-4.5 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-sans text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                VOLTIX<span className="text-[#00d1ff]">smart</span>
              </span>
              <span className="text-[9px] font-mono block leading-3 text-blue-600 dark:text-blue-400 font-bold tracking-widest">
                ELECTRICAL ECOSYSTEMS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                  currentSection === item.id
                    ? "text-blue-600 dark:text-white border-b-2 border-blue-600 dark:border-[#00d1ff] pb-1"
                    : "text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Compare Button */}
            <button
              onClick={onOpenCompare}
              className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-all duration-200"
              title="Compare Products"
            >
              <Scale className="h-5 w-5" />
              {compareCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-md animate-bounce">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-all duration-200"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-amber-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-all duration-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/20 bg-slate-50 dark:bg-slate-950 px-4 py-3 space-y-1 shadow-inner max-h-[80vh] overflow-y-auto">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-md text-base font-semibold tracking-tight transition-all ${
                currentSection === item.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-150 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

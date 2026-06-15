import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";
import About from "./components/About";
import Innovation from "./components/Innovation";
import Manufacturing from "./components/Manufacturing";
import Sustainability from "./components/Sustainability";
import Careers from "./components/Careers";
import Support from "./components/Support";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CompareDrawer from "./components/CompareDrawer";
import { Product } from "./types";

export default function App() {
  // Dark mode initialized to true by default to match the requested premium tech cyberpunk aesthetic
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [currentSection, setCurrentSection] = useState<string>("home");
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [compareDrawerOpen, setCompareDrawerOpen] = useState<boolean>(false);

  // Synchronize document dark modes class for nested setups
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleAddToCompare = (product: Product) => {
    if (compareList.some((item) => item.id === product.id)) return;
    if (compareList.length >= 3) {
      alert("You can compare a maximum of 3 products simultaneously.");
      return;
    }
    setCompareList([...compareList, product]);
    setCompareDrawerOpen(true); // Auto expand matrix drawer when adding
  };

  const handleRemoveFromCompare = (id: string) => {
    setCompareList(compareList.filter((item) => item.id !== id));
  };

  // Safe router navigation mapping
  const renderActiveSection = () => {
    switch (currentSection) {
      case "home":
        return <Hero onNavigate={setCurrentSection} />;
      case "products":
        return (
          <ProductsSection
            onAddToCompare={handleAddToCompare}
            onRemoveFromCompare={handleRemoveFromCompare}
            compareList={compareList}
            onOpenCompare={() => setCompareDrawerOpen(true)}
          />
        );
      case "about":
        return <About />;
      case "innovation":
        return <Innovation />;
      case "manufacturing":
        return <Manufacturing />;
      case "sustainability":
        return <Sustainability />;
      case "careers":
        return <Careers />;
      case "support":
        return <Support />;
      case "contact":
        return <ContactSection />;
      default:
        return <Hero onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 relative overflow-hidden ${
      darkMode ? "bg-[#050608] text-slate-100" : "bg-slate-50 text-slate-900"
    }`}>
      {/* Background Decorative Ambient Glow Elements */}
      {darkMode && (
        <>
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#00d1ff] rounded-full blur-[120px] opacity-10 pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#0070f3] rounded-full blur-[100px] opacity-10 pointer-events-none z-0" />
        </>
      )}

      {/* Dynamic Header */}
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        compareCount={compareList.length}
        onOpenCompare={() => setCompareDrawerOpen(!compareDrawerOpen)}
      />

      {/* Main Sections Stream / Router */}
      <main className="flex-1 pb-12 pt-16 z-10 relative">
        {renderActiveSection()}
      </main>

      {/* Slide-Up Comps tray */}
      {compareDrawerOpen && (
        <CompareDrawer
          compareList={compareList}
          onRemove={handleRemoveFromCompare}
          onClose={() => setCompareDrawerOpen(false)}
        />
      )}

      {/* Global Footer */}
      <Footer onNavigate={setCurrentSection} />
    </div>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, Star, Scale, Info, Download, CheckCircle2, 
  Trash2, X, AlertCircle, Plus, Eye, ChevronRight 
} from "lucide-react";
import { Product, Review } from "../types";
import { productsData, reviewsData } from "../data/products";

interface ProductsSectionProps {
  onAddToCompare: (product: Product) => void;
  onRemoveFromCompare: (id: string) => void;
  compareList: Product[];
  onOpenCompare: () => void;
}

export default function ProductsSection({
  onAddToCompare,
  onRemoveFromCompare,
  compareList,
  onOpenCompare
}: ProductsSectionProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Interactive reviews state (simulated dynamic submissions)
  const [reviews, setReviews] = useState<Review[]>(reviewsData);
  const [newReviewComment, setNewReviewComment] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewName, setNewReviewName] = useState("");
  
  // Dynamic brochure generation state
  const [generatingBrochure, setGeneratingBrochure] = useState<Product | null>(null);
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  const categories = [
    "All",
    "Climate & Air",
    "Smart Lighting",
    "Water Systems",
    "Smart Power & Grid",
    "Smart Kitchen"
  ];

  const filteredProducts = productsData.filter((prod) => {
    const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prod.brief.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || prod.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddReview = (productId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const added: Review = {
      id: `rev-gen-${Date.now()}`,
      productId,
      userName: newReviewName,
      rating: newReviewRating,
      date: new Date().toISOString().split("T")[0],
      comment: newReviewComment,
      verified: true
    };

    setReviews([added, ...reviews]);
    setNewReviewName("");
    setNewReviewComment("");
    setNewReviewRating(5);
  };

  const triggerBrochureDownload = (product: Product) => {
    setGeneratingBrochure(product);
    setBrochureSuccess(false);
    setTimeout(() => {
      setBrochureSuccess(true);
      setTimeout(() => {
        setGeneratingBrochure(null);
        setBrochureSuccess(false);
        // Clean simulation of printing/pdf stream trigger
        window.print();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="section-container bg-white dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d1ff] animate-pulse"></span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#00d1ff] uppercase">
              SHOWCASE DIRECTORY
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Futuristic Appliances Portfolio
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
            Explore our line of Matter-enabled, energy-efficient appliances. Filter products, compare specifications, and generate dynamic laboratory specification sheets.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-between mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
          
          {/* Categories Horizontal Slider */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold tracking-tight rounded-lg transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box & Compare Indicator */}
          <div className="flex space-x-3 w-full md:w-80 items-center justify-end">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search appliances..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {compareList.length > 0 && (
              <button
                onClick={onOpenCompare}
                className="flex items-center space-x-1 px-3 py-2 bg-blue-50 text-blue-600 border border-blue-200 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-900 rounded-lg text-xs font-semibold transition"
              >
                <Scale className="h-4 w-4" />
                <span>Compare ({compareList.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((prod) => {
              const inComparison = compareList.some((c) => c.id === prod.id);

              return (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col border border-slate-200/60 rounded-2xl bg-white overflow-hidden dark:border-slate-800/80 dark:bg-slate-950/40 hover:shadow-xl transition-all duration-300"
                >
                  {/* Thumbnail / Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden select-none">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Floating Energy Tag */}
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] bg-slate-900/80 backdrop-blur-sm text-white font-mono tracking-widest border border-white/10 uppercase">
                      {prod.energyRating.split(" ")[0]}
                    </div>
                    
                    {/* Detail Quick View Hover Button */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="p-2.5 rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition shadow-lg"
                        title="Quick View Product"
                      >
                        <Eye className="h-4.5 w-4.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (inComparison) {
                            onRemoveFromCompare(prod.id);
                          } else {
                            if (compareList.length >= 3) {
                              alert("You can compare a maximum of 3 products simultaneously.");
                              return;
                            }
                            onAddToCompare(prod);
                          }
                        }}
                        className={`p-2.5 rounded-full transition shadow-lg ${
                          inComparison 
                            ? "bg-blue-600 text-white hover:bg-red-600" 
                            : "bg-white text-slate-900 hover:bg-blue-600 hover:text-white"
                        }`}
                        title={inComparison ? "Remove from comparison" : "Add to comparison"}
                      >
                        <Scale className="h-4.5 w-4.5" />
                      </button>
                    </div>
                  </div>

                  {/* Appliance Description Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                        <span>{prod.category}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-amber-400 stroke-amber-400" />
                          <span className="text-slate-800 dark:text-slate-200">{prod.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-sans font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors leading-snug">
                        {prod.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {prod.brief}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <button
                        onClick={() => setSelectedProduct(prod)}
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center space-x-0.5"
                      >
                        <span>Specifications</span>
                        <ChevronRight className="h-3 w-3" />
                      </button>
                      
                      <button
                        onClick={() => triggerBrochureDownload(prod)}
                        className="p-1.5 text-slate-500 hover:text-blue-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition"
                        title="Brochure PDF"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Detailed Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="w-full max-w-4xl rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-900/60 sticky top-0 z-10">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="overflow-y-auto p-6 space-y-8 max-h-[calc(90vh-90px)]">
                  {/* Grid Content */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Gallery view */}
                    <div className="space-y-4">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-3 right-3 text-white text-[10px] font-mono bg-slate-950/70 p-1.5 rounded-md">
                          ENERGY INDEX: {selectedProduct.energyRating}
                        </span>
                      </div>
                      
                      {/* Secondary Gallery Thumbs */}
                      <div className="grid grid-cols-3 gap-2">
                        {selectedProduct.gallery.map((gImg, idx) => (
                          <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100">
                            <img
                              src={gImg}
                              alt="Gallery Preview"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Pitch & Specs */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Description
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                          {selectedProduct.description}
                        </p>
                      </div>

                      {/* Technical Specs Table */}
                      <div>
                        <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                          Technical Specifications
                        </h4>
                        <div className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden text-xs">
                          {Object.entries(selectedProduct.specs).map(([key, val], idx) => (
                            <div 
                              key={key} 
                              className={`grid grid-cols-5 p-3 font-normal ${
                                idx % 2 === 0 
                                  ? "bg-slate-50 dark:bg-slate-900/40" 
                                  : "bg-white dark:bg-slate-950/20"
                              } border-b border-slate-100 dark:border-slate-800/40 las:border-0`}
                            >
                              <span className="col-span-2 font-mono text-slate-500 dark:text-slate-400">{key}</span>
                              <span className="col-span-3 font-sans font-bold text-slate-800 dark:text-slate-200">{val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Features Block */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Key Technology Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProduct.features.map((feat, idx) => (
                        <div key={idx} className="flex space-x-2.5 items-start p-3 bg-slate-50 dark:bg-slate-900/30 rounded-xl border border-slate-100 dark:border-slate-800">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* User Feedback & Submit Form */}
                  <div className="pt-6 border-t border-slate-150 dark:border-slate-800">
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">
                      Customer Reviews ({reviews.filter(r => r.productId === selectedProduct.id).length})
                    </h4>

                    {/* Submit Review */}
                    <form 
                      onSubmit={(e) => handleAddReview(selectedProduct.id, e)}
                      className="p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-150 dark:border-slate-800/80 mb-6 space-y-3.5"
                    >
                      <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                        Write a Verified Review
                      </span>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          value={newReviewName}
                          onChange={(e) => setNewReviewName(e.target.value)}
                          placeholder="Your Name"
                          className="px-3 py-1.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-slate-500 font-mono">Rating:</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((stars) => (
                              <button
                                type="button"
                                key={stars}
                                onClick={() => setNewReviewRating(stars)}
                                className="p-0.5"
                              >
                                <Star className={`h-4 w-4 ${stars <= newReviewRating ? "fill-amber-400 text-amber-400" : "text-slate-300 dark:text-slate-700"}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <textarea
                        required
                        rows={2}
                        value={newReviewComment}
                        onChange={(e) => setNewReviewComment(e.target.value)}
                        placeholder="Describe your user experiences and energy savings with this Voltix machine..."
                        className="w-full px-3 py-1.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-xs rounded-lg dark:text-white outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg leading-tight transition"
                      >
                        Submit Verified Review
                      </button>
                    </form>

                    {/* Feedbacks Grid */}
                    <div className="space-y-4">
                      {reviews.filter(r => r.productId === selectedProduct.id).map((rev) => (
                        <div key={rev.id} className="p-4 border border-slate-100 dark:border-slate-850 rounded-xl space-y-1">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-bold text-slate-900 dark:text-white">{rev.userName}</span>
                            <span className="text-slate-400 font-mono text-[10px]">{rev.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < rev.rating ? "fill-amber-400 text-amber-400" : "text-slate-200 dark:text-slate-800"}`} />
                            ))}
                            {rev.verified && (
                              <span className="text-[9px] text-emerald-500 bg-emerald-500/10 px-1.5 py-0.2 rounded font-mono font-bold ml-1 uppercase">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-1.5 text-justify">
                            {rev.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Dynamic Brochure Printing / PDF Simulation Overlay */}
        <AnimatePresence>
          {generatingBrochure && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-fade-in">
              <div id="print-area" className="w-full max-w-2xl bg-white text-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-100 space-y-6 relative overflow-hidden">
                {/* Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600" />
                
                {/* Printing Logo block */}
                <div className="flex justify-between items-start border-b pb-4">
                  <div>
                    <span className="font-sans text-xl font-bold tracking-tight text-slate-900 uppercase">
                      Voltix 
                    </span>
                    <span className="text-[10px] font-mono block leading-3 text-blue-600 font-bold tracking-widest">
                      SMART APPLIANCES GLOBAL
                    </span>
                  </div>
                  <div className="text-right font-mono text-[10px] text-slate-400">
                    <div>DOC-REF: VL-TX-{generatingBrochure.id.toUpperCase()}</div>
                    <div>SECURE DATE: {new Date().toISOString().split("T")[0]}</div>
                  </div>
                </div>

                {brochureSuccess ? (
                  <motion.div 
                    initial={{ scale: 0.95 }} 
                    animate={{ scale: 1 }} 
                    className="flex flex-col items-center justify-center py-10 space-y-3 text-center"
                  >
                    <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">Datasheet Compiled Successfully</h4>
                      <p className="text-xs text-slate-500 mt-1">Passing electrical safety parameters to printer queues...</p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-blue-600">
                      <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                      <span className="text-xs font-mono tracking-widest font-bold uppercase">
                        Compiling Dynamic Energy Laboratory Specification Datasheet...
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex space-x-4 items-center">
                        <img 
                          src={generatingBrochure.image} 
                          alt="Device Model" 
                          referrerPolicy="no-referrer"
                          className="w-20 h-20 rounded-lg object-cover" 
                        />
                        <div>
                          <h4 className="font-sans font-bold text-lg text-slate-900 leading-tight">
                            {generatingBrochure.name}
                          </h4>
                          <span className="text-xs text-slate-400 font-semibold uppercase font-mono">
                            Category: {generatingBrochure.category}
                          </span>
                        </div>
                      </div>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 text-xs border-y py-4">
                        {Object.entries(generatingBrochure.specs).slice(0, 4).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-semibold text-slate-500 block">{key}</span>
                            <span className="font-bold text-slate-900">{value}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-3 bg-red-400/5 rounded-xl border border-red-500/10 text-[10px] sm:text-xs">
                        <div className="flex space-x-2">
                          <AlertCircle className="h-4 w-4 text-red-600" />
                          <span className="text-slate-500">
                            CONFIDENTIALITY NOTICE: This PDF sheet contains certified laboratory specs validating Voltix multi-channel telemetry drivers. Any unauthorized distribution is prohibited.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

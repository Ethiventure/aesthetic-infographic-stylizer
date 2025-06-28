
import React from 'react';
import StyleCard from '../StyleCard';

const CleanSection = () => {
  const cleanStyles = [
    {
      theme: "Midcentury Modern",
      purpose: "Retro clean sophistication",
      headingFont: "Jost",
      bodyFont: "Inter",
      mainColor: "#FF6B35",
      accentColors: ["#F7931E", "#004E64"],
      background: "#FFFDF7",
      textColor: "#2D2D2D",
      visualDetails: "Atomic patterns, boomerang shapes, bold geometric forms",
      assets: {
        icons: ["atomic", "geometric", "midcentury"],
        patterns: ["atomic", "boomerang", "geometric"],
        textures: ["atomic", "clean", "retro"],
        illustrations: ["midcentury", "atomic", "geometric"]
      }
    },
    {
      theme: "Nordic Winter",
      purpose: "Sophisticated icy minimalism",
      headingFont: "Work Sans",
      bodyFont: "Inter",
      mainColor: "#4A90E2",
      accentColors: ["#7BB3F0", "#B8D4F1"],
      background: "#FBFCFD",
      textColor: "#2C3E50",
      visualDetails: "Crisp lines, crystalline patterns, sophisticated blues",
      assets: {
        icons: ["crystalline", "minimal", "clean"],
        patterns: ["crystalline", "geometric", "minimal"],
        textures: ["crystalline", "frosted", "clean"],
        illustrations: ["minimal", "crystalline", "clean"]
      }
    },
    {
      theme: "Tactile UI",
      purpose: "Sophisticated depth",
      headingFont: "Inter",
      bodyFont: "Inter",
      mainColor: "#667EEA",
      accentColors: ["#764BA2", "#F093FB"],
      background: "#F8F9FA",
      textColor: "#2D3748",
      visualDetails: "Sophisticated shadows, refined depth, premium materials",
      assets: {
        icons: ["refined", "depth", "premium"],
        patterns: ["depth", "refined", "premium"],
        textures: ["refined depth", "premium", "sophisticated"],
        illustrations: ["refined", "premium", "depth"]
      }
    },
    {
      theme: "Swiss Modernism",
      purpose: "Precision-based design",
      headingFont: "Helvetica Neue",
      bodyFont: "Helvetica Neue",
      mainColor: "#E74C3C",
      accentColors: ["#2C3E50", "#FFFFFF"],
      background: "#FFFFFF",
      textColor: "#2C3E50",
      visualDetails: "Mathematical precision, perfect grids, international style",
      assets: {
        icons: ["precise", "geometric", "minimal"],
        patterns: ["grid", "precise", "geometric"],
        textures: ["clean", "precise", "minimal"],
        illustrations: ["geometric", "precise", "minimal"]
      }
    },
    {
      theme: "Soft Brutalism",
      purpose: "Refined concrete aesthetics",
      headingFont: "Inter",
      bodyFont: "Inter",
      mainColor: "#6C7B7F",
      accentColors: ["#9CA9B3", "#B8C5D1"],
      background: "#F7F8FA",
      textColor: "#2D3436",
      visualDetails: "Refined brutalist forms, sophisticated concrete textures",
      assets: {
        icons: ["refined brutal", "geometric", "sophisticated"],
        patterns: ["refined", "geometric", "structured"],
        textures: ["refined concrete", "sophisticated", "structured"],
        illustrations: ["refined brutal", "geometric", "sophisticated"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'linear-gradient(135deg, #FBFCFD 0%, #FFFDF7 25%, #F8F9FA 50%, #FFFFFF 75%, #F7F8FA 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234A90E2' fill-opacity='0.02'%3E%3Crect width='120' height='120'/%3E%3Crect x='20' y='20' width='80' height='80'/%3E%3Crect x='40' y='40' width='40' height='40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-700 mb-4 font-['Work_Sans'] tracking-wide">
            ❄️ Clean / Minimal
          </h2>
          <p className="text-lg text-slate-600 font-['Inter'] max-w-2xl mx-auto">
            Pure, sophisticated aesthetics focused on simplicity, functionality, and timeless elegance
          </p>
          <div className="mt-4 text-sm text-slate-600 bg-slate-50 rounded-lg p-3 inline-block border border-slate-200">
            <strong>Free Asset Sources:</strong> Feather Icons (minimal icons), Phosphor Icons (refined), 
            Tabler Icons (clean), CSS.gg (geometric), Figma Community (minimal UI kits)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cleanStyles.map((style, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <StyleCard style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleanSection;

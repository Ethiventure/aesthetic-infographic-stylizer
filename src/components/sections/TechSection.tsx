
import React from 'react';
import StyleCard from '../StyleCard';

const TechSection = () => {
  const techStyles = [
    {
      theme: "Digital Brutalism",
      purpose: "Raw productivity",
      headingFont: "Syne",
      bodyFont: "Space Grotesk",
      mainColor: "#FFBE00",
      accentColors: ["#5EEAFF", "#FF5C5C"],
      background: "#1D1F20",
      textColor: "#FAFBFC",
      visualDetails: "High-contrast cards, grid overlays, duotone icons",
      assets: {
        icons: ["geometric", "minimal"],
        patterns: ["grid", "duotone", "high contrast"],
        textures: ["rough", "digital"],
        illustrations: ["abstract", "geometric"]
      }
    },
    {
      theme: "Colourful Glassmorphism",
      purpose: "Translucent vibrance",
      headingFont: "Manrope",
      bodyFont: "Nunito",
      mainColor: "#7C3AED",
      accentColors: ["#EF476F", "#FFD166", "#38BDF8"],
      background: "#F1F5F9",
      textColor: "#1E293B",
      visualDetails: "Frosted panels, corner blurs, liquid blobs",
      assets: {
        icons: ["minimal", "tech"],
        patterns: ["glass", "blur", "liquid"],
        textures: ["frosted", "translucent"],
        illustrations: ["abstract", "fluid"]
      }
    },
    {
      theme: "Tech E-Learning",
      purpose: "Clean micro-learning",
      headingFont: "Sora",
      bodyFont: "Lexend",
      mainColor: "#A084EE",
      accentColors: ["#2563EB", "#0A1128"],
      background: "#F8FAFC",
      textColor: "#1E293B",
      visualDetails: "Modular cards, lilac CTAs, journey indicators",
      assets: {
        icons: ["minimal", "tech"],
        patterns: ["modular", "progress"],
        textures: ["clean", "soft"],
        illustrations: ["educational", "tech"]
      }
    },
    {
      theme: "AI-First Minimalism",
      purpose: "Adaptive clean UI",
      headingFont: "Sora",
      bodyFont: "Inter",
      mainColor: "#4F46E5",
      accentColors: ["#818CF8", "#38BDF8"],
      background: "#F9FAFB",
      textColor: "#111827",
      visualDetails: "Generative gradients, fluid layouts",
      assets: {
        icons: ["minimal", "tech"],
        patterns: ["gradient", "fluid", "adaptive"],
        textures: ["smooth", "generative"],
        illustrations: ["AI", "abstract"]
      }
    },
    {
      theme: "Cyberpunk",
      purpose: "Neon techno night",
      headingFont: "Orbitron",
      bodyFont: "Rajdhani",
      mainColor: "#0FF0FC",
      accentColors: ["#FF006E"],
      background: "#18122B",
      textColor: "#F4FAFF",
      visualDetails: "Neon glows, glitch overlays, circuit motifs",
      assets: {
        icons: ["tech", "geometric"],
        patterns: ["neon", "glitch", "circuit"],
        textures: ["neon glow", "digital"],
        illustrations: ["cyberpunk", "futuristic"]
      }
    },
    {
      theme: "Neo-Pastel Utility",
      purpose: "Soft functional UI",
      headingFont: "Nunito",
      bodyFont: "DM Sans",
      mainColor: "#A084EE",
      accentColors: ["#B6E0FE", "#98C9A3"],
      background: "#F8F9FA",
      textColor: "#212529",
      visualDetails: "Color blocks, clean panels",
      assets: {
        icons: ["minimal", "geometric"],
        patterns: ["blocks", "clean"],
        textures: ["soft", "pastel"],
        illustrations: ["minimal", "functional"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #1D1F20 0%, #18122B 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFBE00' fill-opacity='0.1'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4 font-['Syne'] tracking-wide">
            ⚡️ Digital / Tech
          </h2>
          <p className="text-lg text-cyan-200 font-['Space_Grotesk'] max-w-2xl mx-auto">
            Future-forward, high-tech aesthetics embracing digital innovation and technological advancement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStyles.map((style, index) => (
            <StyleCard key={index} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;

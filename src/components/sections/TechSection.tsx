
import React from 'react';
import StyleCard from '../StyleCard';

const TechSection = () => {
  const techStyles = [
    {
      theme: "Digital Brutalism",
      purpose: "Raw productivity",
      headingFont: "Space Grotesk",
      bodyFont: "JetBrains Mono",
      mainColor: "#FF3B30",
      accentColors: ["#FF9F0A", "#30D158"],
      background: "#1C1C1E",
      textColor: "#F2F2F7",
      visualDetails: "Raw concrete textures, harsh contrasts, industrial typography",
      assets: {
        icons: ["brutal", "industrial", "raw"],
        patterns: ["concrete", "brutal", "industrial"],
        textures: ["concrete", "raw", "industrial"],
        illustrations: ["brutal", "industrial", "geometric"]
      }
    },
    {
      theme: "Colourful Glassmorphism",
      purpose: "Translucent vibrance",
      headingFont: "Comfortaa",
      bodyFont: "Nunito",
      mainColor: "#7C3AED",
      accentColors: ["#EF476F", "#FFD166", "#38BDF8"],
      background: "#F1F5F9",
      textColor: "#1E293B",
      visualDetails: "Frosted glass panels, rainbow gradients, soft blurs",
      assets: {
        icons: ["glass", "rounded", "soft"],
        patterns: ["glass", "gradient", "soft blur"],
        textures: ["frosted", "glass", "translucent"],
        illustrations: ["glass", "soft", "translucent"]
      }
    },
    {
      theme: "Tech E-Learning 2025",
      purpose: "AI-powered micro-learning",
      headingFont: "Inter",
      bodyFont: "Inter",
      mainColor: "#6366F1",
      accentColors: ["#8B5CF6", "#06B6D4"],
      background: "#FAFAFA",
      textColor: "#171717",
      visualDetails: "Neural network patterns, adaptive interfaces, AI-assisted layouts",
      assets: {
        icons: ["ai", "neural", "adaptive"],
        patterns: ["neural", "adaptive", "ai"],
        textures: ["neural", "ai", "adaptive"],
        illustrations: ["ai", "neural", "futuristic"]
      }
    },
    {
      theme: "AI-First Minimalism",
      purpose: "Adaptive clean UI",
      headingFont: "Inter",
      bodyFont: "Inter",
      mainColor: "#4F46E5",
      accentColors: ["#818CF8", "#38BDF8"],
      background: "#F9FAFB",
      textColor: "#111827",
      visualDetails: "Generative gradients, adaptive layouts, AI-driven aesthetics",
      assets: {
        icons: ["minimal", "ai", "adaptive"],
        patterns: ["generative", "adaptive", "minimal"],
        textures: ["smooth", "adaptive", "minimal"],
        illustrations: ["ai", "minimal", "adaptive"]
      }
    },
    {
      theme: "Cyberpunk",
      purpose: "Neon techno night",
      headingFont: "Orbitron",
      bodyFont: "Share Tech Mono",
      mainColor: "#00FFFF",
      accentColors: ["#FF00FF", "#FFFF00"],
      background: "#0A0A0F",
      textColor: "#E0E0E0",
      visualDetails: "Neon glows, digital glitches, cybernetic patterns",
      assets: {
        icons: ["neon", "cyber", "glitch"],
        patterns: ["circuit", "neon", "glitch"],
        textures: ["neon glow", "cyber", "glitch"],
        illustrations: ["cyberpunk", "neon", "futuristic"]
      }
    },
    {
      theme: "Neo-Pastel Utility",
      purpose: "Unconventional soft functionality",
      headingFont: "DM Sans",
      bodyFont: "DM Sans",
      mainColor: "#E879F9",
      accentColors: ["#60A5FA", "#34D399", "#FBBF24"],
      background: "#FEFEFE",
      textColor: "#1F2937",
      visualDetails: "Unexpected color combinations, asymmetric layouts, playful utility",
      assets: {
        icons: ["playful", "asymmetric", "colorful"],
        patterns: ["asymmetric", "playful", "colorful"],
        textures: ["soft", "playful", "colorful"],
        illustrations: ["playful", "colorful", "modern"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative overflow-hidden"
      style={{ 
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1C1C1E 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300FFFF' fill-opacity='0.1'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4 font-['Space_Grotesk'] tracking-wide">
            ⚡️ Digital / Tech
          </h2>
          <p className="text-lg text-cyan-200 font-['JetBrains_Mono'] max-w-2xl mx-auto">
            Future-forward, high-tech aesthetics embracing digital innovation and technological advancement
          </p>
          <div className="mt-4 text-sm text-cyan-100 bg-slate-800/70 rounded-lg p-3 inline-block backdrop-blur-sm border border-cyan-500/30">
            <strong>Free Asset Sources:</strong> Lucide Icons (tech), Heroicons (modern), Tabler Icons (clean), 
            CSS.gg (minimal), Glassmorphism.com (generators), Neural.love (AI patterns)
          </div>
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

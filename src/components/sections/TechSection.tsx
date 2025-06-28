
import React from 'react';
import StyleCard from '../StyleCard';

const TechSection = () => {
  const techStyles = [
    {
      theme: "Digital Brutalism",
      purpose: "Raw productivity",
      headingFont: "Space Grotesk", // Kept as per user, but will make style more brutal
      bodyFont: "JetBrains Mono", // Good fit for brutalism
      mainColor: "#FF0000", // Classic brutalist red
      accentColors: ["#0000FF", "#FFFF00", "#FFFFFF"], // Brutalist blue, yellow, white
      background: "#000000", // Brutalist black
      textColor: "#FFFFFF", // High contrast white
      visualDetails: "Harsh contrasts, raw unstyled elements, system fonts, bold colors, grid-based layouts, no frills, Space Grotesk & JetBrains Mono.", // Updated
      assets: {
        icons: ["brutal cursor", "raw pixel", "grid block", "warning sign"], // More brutalist icons
        patterns: ["stark grid", "warning stripes", "pixelated noise", "raw concrete block"], // More brutalist patterns
        textures: ["raw concrete", "exposed metal", "static noise", "pixelated screen"], // More brutalist textures
        illustrations: ["brutal geometric shape", "raw wireframe", "glitch art", "command line interface"] // More brutalist illustrations
      }
    },
    {
      theme: "Colourful Glassmorphism",
      purpose: "Translucent vibrance",
      headingFont: "Comfortaa", // Changed to a more rounded font
      bodyFont: "Nunito", // Kept, good rounded option
      mainColor: "#7C3AED", // Vibrant purple
      accentColors: ["#EF476F", "#FFD166", "#38BDF8", "#06D6A0"], // Pink, Yellow, Blue, Green
      background: "rgba(241, 245, 249, 0.6)", // Light background with some transparency for glass effect
      textColor: "#1E293B",
      visualDetails: "Frosted glass panels, rainbow gradients, soft blurs, rounded corners, layered elements, Comfortaa & Nunito fonts.", // Updated
      assets: {
        icons: ["glass orb", "rounded button", "soft shadow icon", "translucent layer"], // Better glassmorphism assets
        patterns: ["aurora gradient", "soft bokeh", "frosted noise", "layered glass panels"], // Better glassmorphism assets
        textures: ["frosted glass", "smooth acrylic", "blurry background", "holographic foil"], // Better glassmorphism assets
        illustrations: ["3D glass shape", "soft abstract blob", "translucent interface element", "colorful light flare"] // Better glassmorphism assets
      }
    },
    {
      theme: "Tech E-Learning 2025",
      purpose: "AI-powered micro-learning",
      headingFont: "Inter", // Kept, clean and modern
      bodyFont: "Inter", // Kept
      mainColor: "#00A9E0", // Bright, futuristic blue
      accentColors: ["#8B5CF6", "#34D399", "#F59E0B"], // Purple, Green, Orange
      background: "#0F172A", // Dark, techy background
      textColor: "#E2E8F0", // Light text for contrast
      visualDetails: "Neural network patterns, adaptive interfaces, AI-assisted layouts, dynamic gradients, micro-interactions, data visualizations, Inter font.", // Updated for 2025 feel
      assets: {
        icons: ["ai brain", "neural node", "adaptive icon", "data chart", "glowing particle"], // More futuristic icons
        patterns: ["neural network", "data stream", "generative art", "dynamic particle system", "circuit board"], // More futuristic patterns
        textures: ["glowing circuit", "digital mesh", "plexus background", "holographic shimmer", "polished metal"], // More futuristic textures
        illustrations: ["ai assistant", "futuristic dashboard", "data visualization", "abstract neural art", "learning pathway"] // More futuristic illustrations
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
      visualDetails: "Generative gradients, adaptive layouts, AI-driven aesthetics, subtle micro-interactions, intelligent information display.", // Slightly updated
      assets: {
        icons: ["minimal ai", "adaptive dot", "smart chip", "generative shape"], // Added assets
        patterns: ["subtle generative", "adaptive grid", "minimal data flow", "calm neural net"], // Added assets
        textures: ["smooth matte", "faint gradient", "soft glow", "brushed aluminum"], // Added assets
        illustrations: ["ai learning curve", "minimal adaptive interface", "abstract data node", "intelligent agent icon"] // Added assets
      }
    },
    {
      theme: "Cyberpunk",
      purpose: "Neon techno night",
      headingFont: "Orbitron", // Kept, good fit
      bodyFont: "Share Tech Mono", // Kept, good fit
      mainColor: "#00FFFF", // Cyan
      accentColors: ["#FF00FF", "#FFFF00", "#FA00FF"], // Magenta, Yellow, Hot Pink
      background: "#0A0A0F", // Very dark blue/black
      textColor: "#E0E0E0", // Light grey/white
      visualDetails: "Neon glows, digital glitches, cybernetic patterns, HUD elements, dark cityscapes, Orbitron & Share Tech Mono fonts.", // Updated
      assets: {
        icons: ["neon line", "cyber eye", "glitch square", "circuit chip", "HUD element"], // More cyberpunk assets
        patterns: ["digital circuit", "neon grid", "glitch screen", "binary rain", "holographic data"], // More cyberpunk assets
        textures: ["neon tube glow", "cybernetic metal", "static glitch", "wet asphalt", "carbon fiber"], // More cyberpunk assets
        illustrations: ["cyberpunk city", "neon sign", "futuristic character", "hacker interface", "robotic arm"] // More cyberpunk assets
      }
    },
    {
      theme: "Neo-Pastel Utility",
      purpose: "Unconventional soft functionality",
      headingFont: "DM Sans", // Kept
      bodyFont: "DM Sans", // Kept
      mainColor: "#FF8CBA", // Softer, more unusual pink (was #E879F9)
      accentColors: ["#6EE7B7", "#93C5FD", "#FDE047", "#C4B5FD"], // Mint, Sky Blue, Bright Yellow, Lavender - more unusual pastel combo
      background: "#FFFBF2", // Very light, warm off-white
      textColor: "#4B5563", // Muted dark grey (was #1F2937)
      visualDetails: "Unexpected pastel combinations, asymmetric layouts, playful utility, rounded bubbly shapes, friendly icons, DM Sans font.", // Updated for more interest
      assets: {
        icons: ["playful blob", "asymmetric star", "colorful switch", "friendly cloud", "geometric pastel"], // More unusual icons
        patterns: ["offset pastel shapes", "playful Memphis-like", "colorful confetti", "asymmetric grid", "wavy lines"], // More unusual patterns
        textures: ["soft matte plastic", "gummy texture", "powdered sugar", "smooth clay", "iridescent film"], // More unusual textures
        illustrations: ["abstract pastel composition", "playful character", "modern utility icon set", "unconventional UI element", "friendly data graph"] // More unusual illustrations
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


import React from 'react';
import StyleCard from '../StyleCard';

const CleanSection = () => {
  const cleanStyles = [
    {
      theme: "Midcentury Modern",
      purpose: "Retro clean sophistication",
      headingFont: "Space Grotesk", // Changed from Jost for a more distinctive retro-futuristic feel
      bodyFont: "Rubik", // Changed from Inter for a slightly more rounded, period-appropriate sans-serif
      mainColor: "#E57A44", // Warm orange, slightly desaturated (was #FF6B35)
      accentColors: ["#F7B538", "#006D77", "#D4A373"], // Mustard, Teal, Tan (was #F7931E, #004E64)
      background: "#FAF0E6", // Creamy off-white (was #FFFDF7)
      textColor: "#3A3A3A", // Dark warm grey (was #2D2D2D)
      visualDetails: "Atomic patterns, boomerang shapes, bold geometric forms, teak wood textures, Space Grotesk & Rubik fonts.", // Updated
      assets: {
        icons: ["atomic starburst", "geometric shape", "midcentury furniture icon", "boomerang", "sputnik"], // More MCM assets
        patterns: ["atomic age pattern", "boomerang print", "geometric repeat", "abstract line art", "starbursts"], // More MCM assets
        textures: ["teak wood grain", "nubby textile", "formica", "brushed brass", "vintage linoleum"], // More MCM assets
        illustrations: ["midcentury modern architecture", "atomic age poster style", "abstract geometric art", "period furniture sketch", "retro character"] // More MCM assets
      }
    },
    {
      theme: "Nordic Winter",
      purpose: "Sophisticated icy minimalism",
      headingFont: "Spectral SC", // Changed from Work Sans for an icier, rune-like feel
      bodyFont: "Lato", // Changed from Inter for a clean but slightly warmer sans-serif
      mainColor: "#5F9EA0", // Muted, icy teal/cadet blue (was #4A90E2)
      accentColors: ["#A9D6E5", "#CEDEE5", "#FFFFFF"], // Pale blue, Icy grey, White
      background: "#F8FAFC", // Very light, cool grey (was #FBFCFD)
      textColor: "#34495E", // Dark slate blue (was #2C3E50)
      visualDetails: "Crisp lines, crystalline patterns, sophisticated blues and greys, natural textures (ice, snow, light wood), Spectral SC & Lato fonts.", // Updated
      assets: {
        icons: ["snowflake", "ice crystal", "bare tree silhouette", "aurora borealis swirl", "minimalist mountain"], // More Nordic Winter assets
        patterns: ["crystalline structure", "frosted glass", "subtle snowdrift", "nordic knit pattern", "ice crackle"], // More Nordic Winter assets
        textures: ["frosted ice", "soft snow", "light pine wood", "wool knit", "cold stone"], // More Nordic Winter assets
        illustrations: ["minimalist winter landscape", "abstract ice formation", "nordic animal silhouette", "aurora borealis", "crystalline geometric"] // More Nordic Winter assets
      }
    },
    {
      theme: "Tactile UI",
      purpose: "Sophisticated depth & interaction", // Updated purpose
      headingFont: "Manrope", // Changed from Inter for a slightly more distinctive feel
      bodyFont: "Inter", // Kept Inter for body as it's clean and modern
      mainColor: "#7C3AED", // Richer purple (was #667EEA)
      accentColors: ["#A78BFA", "#FBCFE8", "#FDE68A"], // Lavender, Soft Pink, Pale Yellow - sophisticated but soft
      background: "#F3F4F6", // Light neutral grey (was #F8F9FA)
      textColor: "#1F2937", // Darker grey for better contrast (was #2D3748)
      visualDetails: "Sophisticated shadows, refined depth, premium material textures (glass, metal, soft matte), subtle haptics, neumorphic elements, Manrope & Inter fonts.", // Updated
      assets: {
        icons: ["3D button", "depth icon", "premium material swatch", "soft shadow element", "interactive toggle"], // More Tactile UI assets
        patterns: ["subtle depth gradient", "material grain", "neumorphic depression", "layered elements", "soft noise"], // More Tactile UI assets
        textures: ["frosted glass", "brushed aluminum", "soft matte plastic", "velvet touch", "polished stone"], // More Tactile UI assets
        illustrations: ["3D interface element", "abstract depth map", "material interaction", "neumorphic component", "layered composition"] // More Tactile UI assets
      }
    },
    {
      theme: "Swiss Modernism", // Also known as International Typographic Style
      purpose: "Precision-based design",
      headingFont: "Space Grotesk", // Changed from Helvetica Neue for a modern take, still geometric
      bodyFont: "Manrope", // Changed from Helvetica Neue for a clean, highly legible modern sans-serif
      mainColor: "#D90429", // Classic Swiss red (was #E74C3C)
      accentColors: ["#2B2D42", "#EDF2F4", "#8D99AE"], // Dark grey-blue, Off-white, Mid-grey
      background: "#FFFFFF", // Kept
      textColor: "#000000", // Classic Swiss black (was #2C3E50)
      visualDetails: "Mathematical precision, perfect grids, asymmetric layouts, sans-serif typography (Space Grotesk & Manrope), objective photography, strong color blocks.", // Updated
      assets: {
        icons: ["grid icon", "geometric arrow", "plus symbol", "circle element", "precise line"], // More Swiss Modernism assets
        patterns: ["asymmetric grid", "bold color block", "typographic layout", "geometric division", "negative space"], // More Swiss Modernism assets
        textures: ["flat color", "smooth paper", "matte finish", "no texture", "clean surface"], // More Swiss Modernism assets
        illustrations: ["abstract geometric composition", "objective product photography", "typographic poster", "information design", "architectural blueprint style"] // More Swiss Modernism assets
      }
    },
    {
      theme: "Soft Brutalism",
      purpose: "Refined concrete aesthetics",
      headingFont: "Lexend", // Changed from Inter for a slightly softer but still strong geometric sans-serif
      bodyFont: "Inter", // Kept Inter
      mainColor: "#737373", // Mid-grey, like smooth concrete (was #6C7B7F)
      accentColors: ["#A3A3A3", "#E5E5E5", "#404040"], // Lighter greys and a dark grey for contrast
      background: "#F5F5F5", // Very light grey (was #F7F8FA)
      textColor: "#262626", // Dark grey (was #2D3436)
      visualDetails: "Refined brutalist forms, sophisticated concrete textures, monolithic shapes, large typography, minimalist color palettes, Lexend & Inter fonts.", // Updated
      assets: {
        icons: ["monolithic block", "smooth concrete curve", "large geometric shape", "architectural detail", "minimalist structure"], // More Soft Brutalism assets
        patterns: ["smooth concrete slab", "large scale terrazzo", "minimalist grid", "shadow play", "architectural repetition"], // More Soft Brutalism assets
        textures: ["polished concrete", "smooth stone", "matte finish", "sandblasted surface", "lightly textured plaster"], // More Soft Brutalism assets
        illustrations: ["abstract architectural form", "minimalist still life", "large typographic statement", "shadow and light study", "geometric sculpture"] // More Soft Brutalism assets
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

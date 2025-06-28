
import React from 'react';
import StyleCard from '../StyleCard';

const CleanSection = () => {
  const cleanStyles = [
    {
      theme: "Midcentury Modern",
      purpose: "Retro clean dash",
      headingFont: "Montserrat",
      bodyFont: "Source Sans Pro",
      mainColor: "#FFB30F",
      accentColors: ["#18A999", "#E85A4F"],
      background: "#F7F2E7",
      textColor: "#2D2D2D",
      visualDetails: "Terrazzo tiles, round buttons, atomic patterns",
      assets: {
        icons: ["geometric", "retro", "atomic"],
        patterns: ["terrazzo", "atomic", "geometric"],
        textures: ["terrazzo", "atomic", "retro"],
        illustrations: ["atomic", "geometric", "retro"]
      }
    },
    {
      theme: "Nordic Winter",
      purpose: "Calm icy UI",
      headingFont: "Fjalla One",
      bodyFont: "Asap",
      mainColor: "#2B4257",
      accentColors: ["#7A98B8", "#E8F4FD"],
      background: "#FAFDFF",
      textColor: "#20262E",
      visualDetails: "Snow dust, frosted glass, crystalline patterns",
      assets: {
        icons: ["minimal", "clean", "geometric"],
        patterns: ["snow", "crystalline", "minimal"],
        textures: ["snow dust", "frosted", "crystalline"],
        illustrations: ["minimal", "winter", "clean"]
      }
    },
    {
      theme: "Tactile UI",
      purpose: "Touchable skeuomorph",
      headingFont: "Baloo Da 2",
      bodyFont: "Lato",
      mainColor: "#3490DC",
      accentColors: ["#6574CD", "#9561E2"],
      background: "#E8E8E8",
      textColor: "#3D4852",
      visualDetails: "3D buttons, depth shadows, tactile textures",
      assets: {
        icons: ["3d", "tactile", "modern"],
        patterns: ["3d", "tactile", "depth"],
        textures: ["3d depth", "tactile", "soft shadows"],
        illustrations: ["3d", "tactile", "modern"]
      }
    },
    {
      theme: "Swiss Minimalism",
      purpose: "Grid-based precision",
      headingFont: "IBM Plex Sans",
      bodyFont: "IBM Plex Sans",
      mainColor: "#E30613",
      accentColors: ["#000000", "#FFFFFF"],
      background: "#FFFFFF",
      textColor: "#000000",
      visualDetails: "Perfect grids, mathematical precision, primary colors",
      assets: {
        icons: ["minimal", "geometric", "precise"],
        patterns: ["grid", "minimal", "precise"],
        textures: ["clean", "minimal", "precise"],
        illustrations: ["geometric", "minimal", "swiss"]
      }
    },
    {
      theme: "Soft Brutalism",
      purpose: "Gentle raw concrete",
      headingFont: "Space Grotesk",
      bodyFont: "Inter",
      mainColor: "#8B9DC3",
      accentColors: ["#DFE7FD", "#F7F9FC"],
      background: "#FAFBFC",
      textColor: "#3C4858",
      visualDetails: "Rounded brutalist forms, soft shadows, muted tones",
      assets: {
        icons: ["geometric", "soft", "modern"],
        patterns: ["soft", "geometric", "minimal"],
        textures: ["soft", "concrete", "muted"],
        illustrations: ["soft", "geometric", "modern"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'linear-gradient(135deg, #FAFDFF 0%, #F7F2E7 25%, #E8E8E8 50%, #FFFFFF 75%, #FAFBFC 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232B4257' fill-opacity='0.02'%3E%3Crect width='120' height='120'/%3E%3Crect x='20' y='20' width='80' height='80'/%3E%3Crect x='40' y='40' width='40' height='40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-700 mb-4 font-['Fjalla_One'] tracking-wide">
            ❄️ Clean / Minimal
          </h2>
          <p className="text-lg text-slate-600 font-['Asap'] max-w-2xl mx-auto">
            Pure, uncluttered aesthetics focused on simplicity, functionality, and timeless elegance
          </p>
          <div className="mt-4 text-sm text-slate-600 bg-slate-50 rounded-lg p-3 inline-block border border-slate-200">
            <strong>Free Asset Sources:</strong> Feather Icons (minimal icons), Simple Icons (brand icons), 
            CSS.gg (geometric icons), Unsplash (clean photography), Figma Community (minimal UI kits)
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

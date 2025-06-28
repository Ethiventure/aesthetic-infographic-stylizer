
import React from 'react';
import StyleCard from '../StyleCard';

const EditorialSection = () => {
  const editorialStyles = [
    {
      theme: "Dark Academia",
      purpose: "Moody literary UIs",
      headingFont: "IM Fell English SC",
      bodyFont: "Crimson Text",
      mainColor: "#8B7355",
      accentColors: ["#A0865C", "#6B5B47"],
      background: "#F5F1E8",
      textColor: "#2D2419",
      visualDetails: "Aged paper, ink stains, leather bindings, candlelit atmosphere",
      assets: {
        icons: ["quill", "books", "candle"],
        patterns: ["aged paper", "ink", "leather"],
        textures: ["parchment", "leather", "aged"],
        illustrations: ["classical", "academic", "gothic"]
      }
    },
    {
      theme: "Castlecore",
      purpose: "Gothic medieval RPG",
      headingFont: "UnifrakturMaguntia",
      bodyFont: "Crimson Text",
      mainColor: "#8B4B6B",
      accentColors: ["#A05D7A", "#6B3A52"],
      background: "#F0E8EC",
      textColor: "#2D1A24",
      visualDetails: "Pre-Raphaelite colors, Arts & Crafts patterns, medieval illumination",
      assets: {
        icons: ["gothic", "medieval", "illuminated"],
        patterns: ["illuminated", "medieval", "gothic"],
        textures: ["illuminated", "medieval", "tapestry"],
        illustrations: ["medieval", "gothic", "illuminated"]
      }
    },
    {
      theme: "Clerical Classicism",
      purpose: "Formal editorial style",
      headingFont: "Cinzel",
      bodyFont: "Libre Baskerville",
      mainColor: "#6B4423",
      accentColors: ["#8B5A2F", "#A0674B"],
      background: "#FAF7F2",
      textColor: "#2D1F14",
      visualDetails: "Classical proportions, marble textures, golden ratios",
      assets: {
        icons: ["classical", "formal", "marble"],
        patterns: ["classical", "marble", "formal"],
        textures: ["marble", "stone", "classical"],
        illustrations: ["classical", "formal", "architectural"]
      }
    },
    {
      theme: "Vintage Publishing",
      purpose: "Retro magazine aesthetic",
      headingFont: "Abril Fatface",
      bodyFont: "Crimson Text",
      mainColor: "#B8860B",
      accentColors: ["#CD853F", "#8B4513"],
      background: "#FFF8DC",
      textColor: "#2F2F2F",
      visualDetails: "Halftone patterns, vintage typography, newsprint textures",
      assets: {
        icons: ["vintage", "print", "newspaper"],
        patterns: ["halftone", "newsprint", "vintage"],
        textures: ["newsprint", "vintage", "print"],
        illustrations: ["vintage", "retro", "print"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'linear-gradient(135deg, #2D2419 0%, #2D1F14 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B7355' fill-opacity='0.08'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-200 mb-4 font-['IM_Fell_English_SC']">
            📚 Intellectual / Editorial
          </h2>
          <p className="text-lg text-amber-100 font-['Crimson_Text'] max-w-2xl mx-auto italic">
            Scholarly, literary, and academic aesthetics that evoke knowledge, tradition, and intellectual pursuit
          </p>
          <div className="mt-4 text-sm text-amber-100 bg-slate-800/70 rounded-lg p-3 inline-block backdrop-blur-sm border border-amber-600/30">
            <strong>Free Asset Sources:</strong> Project Gutenberg (classical texts), Internet Archive (vintage books), 
            Biodiversity Heritage Library (illuminated manuscripts), Wikimedia Commons (historical imagery)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {editorialStyles.map((style, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <StyleCard style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;

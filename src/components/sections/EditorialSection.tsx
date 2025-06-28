
import React from 'react';
import StyleCard from '../StyleCard';

const EditorialSection = () => {
  const editorialStyles = [
    {
      theme: "Dark Academia",
      purpose: "Moody literary UIs",
      headingFont: "IM Fell English SC",
      bodyFont: "Noto Serif",
      mainColor: "#B6AD90",
      accentColors: ["#F3B391", "#8B6F47"],
      background: "#232C24",
      textColor: "#C9ADA7",
      visualDetails: "Wax seals, aged paper, serif drop caps",
      assets: {
        icons: ["editorial", "classical", "academic"],
        patterns: ["aged", "classical", "academic"],
        textures: ["aged", "paper", "wax seal"],
        illustrations: ["classical", "academic", "vintage"]
      }
    },
    {
      theme: "Castlecore",
      purpose: "Gothic medieval RPG",
      headingFont: "Forum",
      bodyFont: "EB Garamond",
      mainColor: "#836FFF",
      accentColors: ["#6C3483", "#DDA0DD"],
      background: "#EDE9FE",
      textColor: "#241E4E",
      visualDetails: "Stained glass overlays, gothic arches, medieval textures",
      assets: {
        icons: ["decorative", "gothic", "medieval"],
        patterns: ["stained glass", "gothic", "ornate"],
        textures: ["stained glass", "aged", "ornate"],
        illustrations: ["gothic", "medieval", "ornate"]
      }
    },
    {
      theme: "Clerical Classicism",
      purpose: "Formal editorial style",
      headingFont: "Playfair Display",
      bodyFont: "Spectral",
      mainColor: "#1C3144",
      accentColors: ["#F7C873", "#8B6F47"],
      background: "#F8F8F3",
      textColor: "#383838",
      visualDetails: "Column rules, marginalia, drop cap initials",
      assets: {
        icons: ["editorial", "classical", "formal"],
        patterns: ["column rules", "classical", "formal"],
        textures: ["paper", "column rules", "classical"],
        illustrations: ["classical", "editorial", "formal"]
      }
    },
    {
      theme: "Literary Modernism",
      purpose: "Contemporary book design",
      headingFont: "Crimson Text",
      bodyFont: "Source Serif Pro",
      mainColor: "#2E5266",
      accentColors: ["#D4A574", "#A0522D"],
      background: "#FEFCF8",
      textColor: "#2D2D2D",
      visualDetails: "Clean typography, subtle ornaments, reading-focused",
      assets: {
        icons: ["minimal", "editorial", "modern"],
        patterns: ["minimal", "typography", "clean"],
        textures: ["clean", "paper", "minimal"],
        illustrations: ["modern", "abstract", "literary"]
      }
    },
    {
      theme: "Vintage Publishing",
      purpose: "Retro magazine aesthetic",
      headingFont: "Abril Fatface",
      bodyFont: "Lora",
      mainColor: "#B8860B",
      accentColors: ["#CD853F", "#8B4513"],
      background: "#FFF8DC",
      textColor: "#2F2F2F",
      visualDetails: "Halftone patterns, vintage typography, newsprint feel",
      assets: {
        icons: ["vintage", "editorial", "retro"],
        patterns: ["halftone", "vintage", "newsprint"],
        textures: ["vintage", "newsprint", "aged"],
        illustrations: ["vintage", "retro", "editorial"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'linear-gradient(135deg, #232C24 0%, #2D3748 50%, #1C3144 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23B6AD90' fill-opacity='0.05'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-200 mb-4 font-['IM_Fell_English_SC']">
            📚 Intellectual / Editorial
          </h2>
          <p className="text-lg text-amber-100 font-['EB_Garamond'] max-w-2xl mx-auto">
            Scholarly, literary, and academic aesthetics that evoke knowledge, tradition, and intellectual pursuit
          </p>
          <div className="mt-4 text-sm text-amber-100 bg-slate-800/50 rounded-lg p-3 inline-block backdrop-blur-sm">
            <strong>Free Asset Sources:</strong> Project Gutenberg (classical texts), Internet Archive (vintage books), 
            Google Fonts (serif typography), Wikimedia Commons (historical imagery), OpenLibrary (book covers)
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

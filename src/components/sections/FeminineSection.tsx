
import React from 'react';
import StyleCard from '../StyleCard';

const FeminineSection = () => {
  const feminineStyles = [
    {
      theme: "Balletcore",
      purpose: "Delicate events",
      headingFont: "Cormorant Garamond",
      bodyFont: "Crimson Text",
      mainColor: "#D4A5B5",
      accentColors: ["#E8C4D0", "#C28B9B"],
      background: "#FAF7F9",
      textColor: "#4A3B42",
      visualDetails: "Silk ribbons, tulle textures, pearl accents, graceful curves",
      assets: {
        icons: ["ballet", "delicate", "graceful"],
        patterns: ["ribbon", "tulle", "delicate"],
        textures: ["silk", "tulle", "pearl"],
        illustrations: ["ballet", "graceful", "delicate"]
      }
    },
    {
      theme: "Coquette",
      purpose: "Playful romance",
      headingFont: "Satisfy",
      bodyFont: "Quicksand",
      mainColor: "#E47DAF",
      accentColors: ["#F8A8C8", "#D95B8A"],
      background: "#FFFAFD",
      textColor: "#8B2853",
      visualDetails: "Heart motifs, bow details, playful typography, sweet pastels",
      assets: {
        icons: ["heart", "bow", "playful"],
        patterns: ["hearts", "bows", "playful"],
        textures: ["soft", "playful", "sweet"],
        illustrations: ["coquette", "playful", "romantic"]
      }
    },
    {
      theme: "Cottagecore",
      purpose: "Cozy vintage",
      headingFont: "Fredericka the Great",
      bodyFont: "Gentium Book Basic",
      mainColor: "#8B6F47",
      accentColors: ["#A8856B", "#B59A7A"],
      background: "#F9F6F0",
      textColor: "#4A3D2F",
      visualDetails: "Hand-stitched textures, wildflower patterns, vintage charm",
      assets: {
        icons: ["cottage", "vintage", "handmade"],
        patterns: ["floral", "vintage", "handmade"],
        textures: ["linen", "vintage", "handmade"],
        illustrations: ["cottage", "vintage", "botanical"]
      }
    },
    {
      theme: "Soft Minimalism",
      purpose: "Gentle modern UI",
      headingFont: "Nunito",
      bodyFont: "Source Sans Pro",
      mainColor: "#C7A882",
      accentColors: ["#E5D4B1", "#B59968"],
      background: "#FEFCF8",
      textColor: "#5A4A3A",
      visualDetails: "Rounded corners, gentle shadows, warm earth tones",
      assets: {
        icons: ["soft", "minimal", "gentle"],
        patterns: ["soft", "minimal", "gentle"],
        textures: ["soft", "minimal", "warm"],
        illustrations: ["soft", "minimal", "gentle"]
      }
    },
    {
      theme: "Romantic Maximalism",
      purpose: "Opulent feminine design",
      headingFont: "Cormorant Garamond",
      bodyFont: "Crimson Text",
      mainColor: "#B8336A",
      accentColors: ["#D4759B", "#9B2A57", "#E8A4C0"],
      background: "#FDF2F8",
      textColor: "#4A154B",
      visualDetails: "Layered florals, ornate borders, rich textures, luxury details",
      assets: {
        icons: ["ornate", "floral", "luxury"],
        patterns: ["ornate", "floral", "layered"],
        textures: ["luxury", "ornate", "rich"],
        illustrations: ["romantic", "ornate", "luxury"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'radial-gradient(circle at 30% 20%, #F8A8C8 0%, #FAF7F9 30%, #FFFAFD 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E47DAF' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20S-10 18.954-10 30s8.954 20 20 20 20-8.954 20-20M70 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-rose-50/30"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-rose-600 mb-4 font-['Cormorant_Garamond'] italic">
            🩰 Feminine / Romantic
          </h2>
          <p className="text-lg text-rose-700 font-['Crimson_Text'] max-w-2xl mx-auto italic">
            Soft, delicate, and romantic aesthetics celebrating femininity, grace, and gentle beauty
          </p>
          <div className="mt-4 text-sm text-rose-600 bg-rose-50 rounded-lg p-3 inline-block border border-rose-200">
            <strong>Free Asset Sources:</strong> Freepik (feminine illustrations), unDraw (romantic illustrations), 
            Iconify (delicate icons), Feather Icons (minimal), OpenPeeps (diverse characters)
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feminineStyles.map((style, index) => (
            <div key={index} className="transform hover:rotate-1 transition-transform duration-300">
              <StyleCard style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeminineSection;

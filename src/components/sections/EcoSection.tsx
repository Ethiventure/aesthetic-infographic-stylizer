
import React from 'react';
import StyleCard from '../StyleCard';

const EcoSection = () => {
  const ecoStyles = [
    {
      theme: "Solarpunk x Art Nouveau",
      purpose: "Stories with solar-Art Nouveau flair",
      headingFont: "Amarante",
      bodyFont: "Della Respira",
      mainColor: "#9C8E5F",
      accentColors: ["#E8D39E", "#567C5F"],
      background: "#FAF7F0",
      textColor: "#2F2F2F",
      visualDetails: "SVG vine dividers, parchment textures, sunburst gradients"
    },
    {
      theme: "Art Nouveau Solarpunk",
      purpose: "Eco-ornate optimism",
      headingFont: "Amarante",
      bodyFont: "Alice",
      mainColor: "#36B37E",
      accentColors: ["#FFD700", "#F9C846"],
      background: "#FCF6EF",
      textColor: "#184D47",
      visualDetails: "Animated vines, decorative linework, holographic teals"
    },
    {
      theme: "Organic & Health",
      purpose: "Soft wellness UIs",
      headingFont: "Poppins",
      bodyFont: "Karla",
      mainColor: "#0EA5E9",
      accentColors: ["#B6E0FE", "#98C9A3"],
      background: "#F8FAFC",
      textColor: "#1C4532",
      visualDetails: "Wavy dividers, subtle leaf patterns, particle floats"
    },
    {
      theme: "Biophilia",
      purpose: "Botanical immersion",
      headingFont: "Gotu",
      bodyFont: "Mulish",
      mainColor: "#8BC34A",
      accentColors: ["#6FDCBF"],
      background: "#F5FFF6",
      textColor: "#374531",
      visualDetails: "Mossy shadows, micro-flora SVGs, soft green overlays"
    },
    {
      theme: "Folk Digital Revival",
      purpose: "Handcrafted narratives",
      headingFont: "Jost",
      bodyFont: "Alegreya",
      mainColor: "#C05621",
      accentColors: ["#D69E2E", "#805AD5"],
      background: "#FDFAF6",
      textColor: "#2D3748",
      visualDetails: "Embroidery borders, hand-drawn frames, folk icons"
    },
    {
      theme: "Digital Craftcore",
      purpose: "Cozy tactile digital",
      headingFont: "Quicksand",
      bodyFont: "Raleway",
      mainColor: "#DD6B20",
      accentColors: ["#FAF089", "#9F7AEA"],
      background: "#FFFAF0",
      textColor: "#4A5568",
      visualDetails: "Knit textures, patchwork grids, tactile shadows"
    }
  ];

  return (
    <section 
      className="py-16 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #F5FFF6 0%, #FCF6EF 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2336B37E' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4 font-['Amarante']">
            🌿 Nature / Eco Aesthetics
          </h2>
          <p className="text-lg text-green-700 font-['Della_Respira'] max-w-2xl mx-auto">
            Sustainable, organic, and biophilic design approaches that connect digital experiences with the natural world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecoStyles.map((style, index) => (
            <StyleCard key={index} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcoSection;

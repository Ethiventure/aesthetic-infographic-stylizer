
import React from 'react';
import StyleCard from '../StyleCard';

const CulturalSection = () => {
  const culturalStyles = [
    {
      theme: "Afrofuturism",
      purpose: "Bold diasporic tech",
      headingFont: "Orbitron",
      bodyFont: "Ubuntu",
      mainColor: "#FF6B35",
      accentColors: ["#F7931E", "#FFB800"],
      background: "#0D1B2A",
      textColor: "#E0E1DD",
      visualDetails: "Geometric patterns, metallic accents, bold contrasts, tech aesthetics",
      assets: {
        icons: ["afrofuturistic", "geometric", "tech"],
        patterns: ["geometric", "african", "futuristic"],
        textures: ["metallic", "geometric", "tech"],
        illustrations: ["afrofuturistic", "geometric", "bold"]
      }
    },
    {
      theme: "Japandi",
      purpose: "Minimal Japanese-Scandi",
      headingFont: "Noto Serif JP",
      bodyFont: "Noto Sans JP",
      mainColor: "#8B7355",
      accentColors: ["#A0865C", "#6B5B47"],
      background: "#F7F5F3",
      textColor: "#2C2C2C",
      visualDetails: "Clean lines, natural materials, zen simplicity, warm minimalism",
      assets: {
        icons: ["zen", "minimal", "organic"],
        patterns: ["minimal", "zen", "organic"],
        textures: ["wood", "paper", "organic"],
        illustrations: ["zen", "minimal", "organic"]
      }
    },
    {
      theme: "Moroccan Modern",
      purpose: "Geometric cultural fusion",
      headingFont: "Amiri",
      bodyFont: "Cairo",
      mainColor: "#D4691A",
      accentColors: ["#B8860B", "#CD853F"],
      background: "#FDF6E3",
      textColor: "#2D1810",
      visualDetails: "Rich geometric patterns, warm earth tones, intricate tile work",
      assets: {
        icons: ["geometric", "ornate", "cultural"],
        patterns: ["geometric", "ornate", "moroccan"],
        textures: ["tile", "ornate", "geometric"],
        illustrations: ["geometric", "ornate", "cultural"]
      }
    },
    {
      theme: "Scandinavian Folk",
      purpose: "Nordic heritage design",
      headingFont: "Fredericka the Great",
      bodyFont: "Gentium Book Basic",
      mainColor: "#8B4B47",
      accentColors: ["#A05C57", "#6B3935"],
      background: "#F9F7F4",
      textColor: "#2D1F1C",
      visualDetails: "Traditional folk patterns, handcrafted textures, heritage colors",
      assets: {
        icons: ["folk", "traditional", "handmade"],
        patterns: ["folk", "traditional", "geometric"],
        textures: ["wood", "handmade", "traditional"],
        illustrations: ["folk", "traditional", "heritage"]
      }
    },
    {
      theme: "Indian Modernism",
      purpose: "Contemporary cultural blend",
      headingFont: "Hind",
      bodyFont: "Hind",
      mainColor: "#E63946",
      accentColors: ["#F77F00", "#FCBF49"],
      background: "#FEFAE0",
      textColor: "#2D1B14",
      visualDetails: "Bold colors, modern typography, traditional patterns reimagined",
      assets: {
        icons: ["modern", "cultural", "bold"],
        patterns: ["traditional", "modern", "colorful"],
        textures: ["rich", "traditional", "modern"],
        illustrations: ["cultural", "modern", "vibrant"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'linear-gradient(135deg, #0D1B2A 0%, #F7F5F3 50%, #FDF6E3 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.08'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm40 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent mb-4 font-['Orbitron']">
            🌐 Cross-Cultural / Diasporic
          </h2>
          <p className="text-lg text-gray-700 font-['Ubuntu'] max-w-2xl mx-auto">
            Aesthetics that bridge cultures, celebrate diversity, and honor global design traditions
          </p>
          <div className="mt-4 text-sm text-amber-700 bg-amber-50/80 rounded-lg p-3 inline-block backdrop-blur-sm border border-amber-200">
            <strong>Free Asset Sources:</strong> The Noun Project (cultural icons), Unsplash (cultural photography), 
            Freepik (cultural patterns), OpenIDEO (diverse illustrations), Cultural Heritage Icons
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {culturalStyles.map((style, index) => (
            <div key={index} className="transform hover:scale-105 transition-transform duration-300">
              <StyleCard style={style} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;

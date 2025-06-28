
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
      headingFont: "Marcellus SC", // Changed from Amiri for a more modern but still classic feel
      bodyFont: "Mulish", // Changed from Cairo to a clean, modern sans-serif
      mainColor: "#C04000", // Richer, deeper orange-red (was #D4691A)
      accentColors: ["#FFD700", "#008080", "#800020"], // Gold, Teal, Burgundy - richer accents
      background: "#FFF8F0", // Warmer, creamy off-white (was #FDF6E3)
      textColor: "#3B2B1C", // Darker, richer brown (was #2D1810)
      visualDetails: "Rich geometric patterns (Zellige, Mashrabiya), warm earth tones, intricate tile work, modern typography, luxurious textures.", // Updated
      assets: {
        icons: ["geometric star", "ornate lantern", "riad arch", "tagine pot", "hand of fatima"], // More Moroccan assets
        patterns: ["zellige tile", "mashrabiya screen", "moroccan trellis", "berber carpet", "intricate geometric"], // More Moroccan assets
        textures: ["polished tadelakt", "heavy silk", "carved cedarwood", "beaten brass", "glazed tile"], // More Moroccan assets
        illustrations: ["moroccan doorway", "geometric pattern detail", "modern riad interior", "ornate calligraphy", "desert landscape"] // More Moroccan assets
      }
    },
    {
      theme: "Scandinavian Folk",
      purpose: "Nordic heritage design",
      headingFont: "Spectral SC", // Changed from Fredericka for a cleaner, more rune-like or traditional Scandi feel
      bodyFont: "Karla", // Changed from Gentium for a clean, slightly folk-ish sans-serif
      mainColor: "#2D5A6D", // Muted teal blue (was #8B4B47 - reddish brown)
      accentColors: ["#D57E58", "#E9C46A", "#F4A261"], // Coral, Mustard Yellow, Sandy Orange - traditional Scandi folk palette
      background: "#F5F5F5", // Clean, light grey (was #F9F7F4)
      textColor: "#333333", // Dark grey for good contrast (was #2D1F1C)
      visualDetails: "Traditional folk patterns (Dala horse, kurbits), handcrafted textures, clean lines, natural materials, Spectral SC & Karla fonts.", // Updated
      assets: {
        icons: ["dala horse", "folk flower", "nordic cross", "kurbits motif", "forest animal"], // More Scandi Folk assets
        patterns: ["scandi folk floral", "geometric border", "kurbits painting", "traditional knit", "simple stripe"], // More Scandi Folk assets
        textures: ["light wood grain", "handwoven wool", "painted wood", "linen", "simple ceramic"], // More Scandi Folk assets
        illustrations: ["scandi folk animal", "traditional pattern", "nordic landscape", "hand-painted motif", "simple character"] // More Scandi Folk assets
      }
    },
    {
      theme: "Indian Modernism",
      purpose: "Contemporary cultural blend",
      headingFont: "Rajdhani", // Changed from Hind to a more distinct Devanagari-inspired modern font
      bodyFont: "Poppins", // Changed from Hind to a clean, modern, versatile sans-serif
      mainColor: "#FF671F", // Saffron orange (was #E63946 - a generic red)
      accentColors: ["#046A38", "#FDB515", "#1560BD"], // India green, Turmeric yellow, Peacock blue - more representative colors
      background: "#FDFDEA", // Creamy off-white, like handmade paper (was #FEFAE0)
      textColor: "#2A2A2A", // Dark charcoal grey (was #2D1B14)
      visualDetails: "Bold colors (saffron, green, blue), Devanagari-inspired typography, traditional Indian patterns reimagined (paisley, rangoli), modern layouts.", // Updated
      assets: {
        icons: ["modern paisley", "lotus flower", "rangoli element", "indian arch", "contemporary deity"], // More Indian assets
        patterns: ["reimagined paisley", "modern rangoli", "indian textile print", "geometric jaali", "block print motif"], // More Indian assets
        textures: ["handloom cotton", "raw silk", "polished wood", "terracotta", "beaten metal (brass/copper)"], // More Indian assets
        illustrations: ["contemporary indian art", "modern interpretation of mythology", "indian cityscape", "stylized folk art", "vibrant pattern collage"] // More Indian assets
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

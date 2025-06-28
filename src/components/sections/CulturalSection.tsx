
import React from 'react';
import StyleCard from '../StyleCard';

const CulturalSection = () => {
  const culturalStyles = [
    {
      theme: "Afrofuturism",
      purpose: "Bold diasporic tech",
      headingFont: "Bungee",
      bodyFont: "Ubuntu",
      mainColor: "#00C9A7",
      accentColors: ["#FFB800", "#FF6B35"],
      background: "#150050",
      textColor: "#F3F6FB",
      visualDetails: "Circuit motifs, metallic sheen, bold geometry",
      assets: {
        icons: ["tech", "geometric", "cultural"],
        patterns: ["circuit", "geometric", "cultural"],
        textures: ["metallic", "neon glow", "futuristic"],
        illustrations: ["futuristic", "cultural", "tech"]
      }
    },
    {
      theme: "Japandi",
      purpose: "Minimal Japanese-Scandi",
      headingFont: "Noto Serif JP",
      bodyFont: "Work Sans",
      mainColor: "#7D7461",
      accentColors: ["#EDE4CF", "#B5B682"],
      background: "#F6F5F3",
      textColor: "#2C2727",
      visualDetails: "Paper textures, muted panels, zen simplicity",
      assets: {
        icons: ["minimal", "organic", "zen"],
        patterns: ["minimal grid", "organic", "zen"],
        textures: ["paper", "organic", "clean"],
        illustrations: ["minimal", "zen", "organic"]
      }
    },
    {
      theme: "Moroccan Modern",
      purpose: "Geometric cultural fusion",
      headingFont: "Amiri",
      bodyFont: "Tajawal",
      mainColor: "#D4691A",
      accentColors: ["#1B365D", "#F4E4BC"],
      background: "#FAF7F0",
      textColor: "#2D1810",
      visualDetails: "Zellige patterns, geometric tiles, warm earth tones",
      assets: {
        icons: ["geometric", "decorative", "cultural"],
        patterns: ["geometric", "cultural", "ornate"],
        textures: ["ornate", "cultural", "warm"],
        illustrations: ["geometric", "cultural", "ornate"]
      }
    },
    {
      theme: "Scandinavian Folk",
      purpose: "Nordic heritage design",
      headingFont: "Fjalla One",
      bodyFont: "Source Sans Pro",
      mainColor: "#C5282F",
      accentColors: ["#F5F5DC", "#2F4F4F"],
      background: "#FEFEFE",
      textColor: "#1C1C1C",
      visualDetails: "Folk patterns, woodwork textures, traditional motifs",
      assets: {
        icons: ["folk", "minimal", "cultural"],
        patterns: ["folk art", "geometric", "cultural"],
        textures: ["handmade", "organic", "traditional"],
        illustrations: ["folk art", "traditional", "cultural"]
      }
    },
    {
      theme: "Indian Modernism",
      purpose: "Contemporary cultural blend",
      headingFont: "Libre Baskerville",
      bodyFont: "Hind",
      mainColor: "#FF6347",
      accentColors: ["#4169E1", "#FFD700"],
      background: "#FFFEF7",
      textColor: "#2F1B14",
      visualDetails: "Mandala patterns, vibrant colors, modern typography",
      assets: {
        icons: ["decorative", "cultural", "ornate"],
        patterns: ["cultural", "ornate", "vibrant"],
        textures: ["rich", "ornate", "cultural"],
        illustrations: ["cultural", "ornate", "vibrant"]
      }
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'linear-gradient(135deg, #150050 0%, #F6F5F3 50%, #FAF7F0 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C9A7' fill-opacity='0.08'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40z'/%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm40 0c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 via-amber-400 to-orange-400 bg-clip-text text-transparent mb-4 font-['Bungee']">
            🌐 Cross-Cultural / Diasporic
          </h2>
          <p className="text-lg text-gray-300 font-['Ubuntu'] max-w-2xl mx-auto">
            Aesthetics that bridge cultures, celebrate diversity, and honor global design traditions
          </p>
          <div className="mt-4 text-sm text-cyan-100 bg-slate-800/50 rounded-lg p-3 inline-block backdrop-blur-sm">
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

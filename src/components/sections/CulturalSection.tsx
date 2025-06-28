
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
      accentColors: ["#FFB800"],
      background: "#150050",
      textColor: "#F3F6FB",
      visualDetails: "Circuit motifs, metallic sheen"
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
      visualDetails: "Paper textures, muted panels"
    }
  ];

  return (
    <section 
      className="py-16 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #150050 0%, #F6F5F3 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300C9A7' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L74 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent mb-4 font-['Bungee']">
            🌐 Cross-Cultural / Diasporic
          </h2>
          <p className="text-lg text-gray-300 font-['Ubuntu'] max-w-2xl mx-auto">
            Aesthetics that bridge cultures, celebrate diversity, and honor global design traditions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {culturalStyles.map((style, index) => (
            <StyleCard key={index} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalSection;

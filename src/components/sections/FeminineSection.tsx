
import React from 'react';
import StyleCard from '../StyleCard';

const FeminineSection = () => {
  const feminineStyles = [
    {
      theme: "Balletcore",
      purpose: "Delicate events",
      headingFont: "Dancing Script",
      bodyFont: "Lustria",
      mainColor: "#C389A4",
      accentColors: ["#CFD8DC", "#F6C7C7"],
      background: "#FFF0F6",
      textColor: "#531742",
      visualDetails: "Veil gradients, ribbon overlays"
    },
    {
      theme: "Coquette",
      purpose: "Playful romance",
      headingFont: "Dancing Script",
      bodyFont: "Quicksand",
      mainColor: "#E47DAF",
      accentColors: ["#E7B5C6", "#FFB3C6"],
      background: "#FFFAFD",
      textColor: "#B10F2E",
      visualDetails: "Heart buttons, soft shadows"
    },
    {
      theme: "Cottagecore",
      purpose: "Cozy vintage",
      headingFont: "Tenor Sans",
      bodyFont: "Gentium Book Basic",
      mainColor: "#A98467",
      accentColors: ["#A9C4EB", "#A8C686"],
      background: "#FFF6EC",
      textColor: "#5A4631",
      visualDetails: "Floral overlays, linen textures"
    }
  ];

  return (
    <section 
      className="py-16 px-6 relative"
      style={{ 
        background: 'radial-gradient(circle at 30% 20%, #FFB3C6 0%, #FFF0F6 30%, #FFFAFD 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E47DAF' fill-opacity='0.05'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-rose-50/50"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-rose-600 mb-4 font-['Dancing_Script'] text-5xl">
            🩰 Feminine / Romantic
          </h2>
          <p className="text-lg text-rose-700 font-['Lustria'] max-w-2xl mx-auto italic">
            Soft, delicate, and romantic aesthetics celebrating femininity, grace, and gentle beauty
          </p>
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

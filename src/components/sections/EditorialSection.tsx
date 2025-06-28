
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
      accentColors: ["#F3B391"],
      background: "#232C24",
      textColor: "#C9ADA7",
      visualDetails: "Wax seals, aged paper, serif drop caps"
    },
    {
      theme: "Castlecore",
      purpose: "Gothic medieval RPG",
      headingFont: "Forum",
      bodyFont: "EB Garamond",
      mainColor: "#836FFF",
      accentColors: ["#6C3483"],
      background: "#EDE9FE",
      textColor: "#241E4E",
      visualDetails: "Stained glass overlays, parchment textures"
    },
    {
      theme: "Clerical Classicism",
      purpose: "Formal editorial style",
      headingFont: "Playfair Display",
      bodyFont: "Spectral",
      mainColor: "#1C3144",
      accentColors: ["#F7C873"],
      background: "#F8F8F3",
      textColor: "#383838",
      visualDetails: "Column rules, marginalia, drop cap initials"
    }
  ];

  return (
    <section 
      className="py-16 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #232C24 0%, #2D3748 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B6AD90' fill-opacity='0.1'%3E%3Cpath d='M30 30c6.627 0 12-5.373 12-12S36.627 6 30 6s-12 5.373-12 12 5.373 12 12 12zM6 30c6.627 0 12-5.373 12-12S12.627 6 6 6s-12 5.373-12 12 5.373 12 12 12zm24 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-200 mb-4 font-['IM_Fell_English_SC']">
            🧠 Intellectual / Editorial
          </h2>
          <p className="text-lg text-amber-100 font-['EB_Garamond'] max-w-2xl mx-auto">
            Scholarly, literary, and academic aesthetics that evoke knowledge, tradition, and intellectual pursuit
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {editorialStyles.map((style, index) => (
            <StyleCard key={index} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;

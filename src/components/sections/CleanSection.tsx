
import React from 'react';
import StyleCard from '../StyleCard';

const CleanSection = () => {
  const cleanStyles = [
    {
      theme: "Midcentury Modern",
      purpose: "Retro clean dash",
      headingFont: "Montserrat",
      bodyFont: "Source Sans Pro",
      mainColor: "#FFB30F",
      accentColors: ["#18A999"],
      background: "#F7F2E7",
      textColor: "#2D2D2D",
      visualDetails: "Terrazzo tiles, round buttons"
    },
    {
      theme: "Nordic Winter",
      purpose: "Calm icy UI",
      headingFont: "Fjalla One",
      bodyFont: "Asap",
      mainColor: "#2B4257",
      accentColors: ["#7A98B8"],
      background: "#FAFDFF",
      textColor: "#20262E",
      visualDetails: "Snow dust, frosted glass"
    },
    {
      theme: "Tactile UI",
      purpose: "Touchable skeuomorph",
      headingFont: "Baloo Da 2",
      bodyFont: "Lato",
      mainColor: "#3490DC",
      accentColors: ["#6574CD", "#9561E2"],
      background: "#E8E8E8",
      textColor: "#3D4852",
      visualDetails: "3D buttons, depth shadows"
    }
  ];

  return (
    <section 
      className="py-16 px-6"
      style={{ 
        background: 'linear-gradient(135deg, #FAFDFF 0%, #F7F2E7 50%, #E8E8E8 100%)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%232B4257' fill-opacity='0.03'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-700 mb-4 font-['Fjalla_One'] tracking-wide">
            ❄️ Clean / Minimal
          </h2>
          <p className="text-lg text-slate-600 font-['Asap'] max-w-2xl mx-auto">
            Pure, uncluttered aesthetics focused on simplicity, functionality, and timeless elegance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cleanStyles.map((style, index) => (
            <StyleCard key={index} style={style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleanSection;

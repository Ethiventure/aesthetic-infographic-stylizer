
import React from 'react';
import StyleGuideHeader from '../components/StyleGuideHeader';
import EcoSection from '../components/sections/EcoSection';
import EditorialSection from '../components/sections/EditorialSection';
import TechSection from '../components/sections/TechSection';
import MaximalistSection from '../components/sections/MaximalistSection';
import FeminineSection from '../components/sections/FeminineSection';
import CulturalSection from '../components/sections/CulturalSection';
import CleanSection from '../components/sections/CleanSection';

const Index = () => {
  console.log('Rendering Style Guide Infographic');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <StyleGuideHeader />
      <div className="space-y-16 pb-16">
        <EcoSection />
        <EditorialSection />
        <TechSection />
        <MaximalistSection />
        <FeminineSection />
        <CulturalSection />
        <CleanSection />
      </div>
    </div>
  );
};

export default Index;

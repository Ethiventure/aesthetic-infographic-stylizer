
import React from 'react';

const StyleGuideHeader = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
          UI Style Guide Infographic
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
          2025–26 Aesthetic Styles: Experience each design trend in its authentic visual language
        </p>
        <div className="mt-8 text-sm text-purple-200">
          Each section below demonstrates the actual aesthetic it describes
        </div>
      </div>
    </header>
  );
};

export default StyleGuideHeader;

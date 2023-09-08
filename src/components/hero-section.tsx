'use client';
// components/HeroSection.tsx
import React, { useState } from 'react';
import CatalogPopup from './catalog-popup';
import Button from './button';

const HeroSection: React.FC = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className="text-gray-600 body-font" id="hero">
      {/* Apply the new background class to create the background shape */}
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container mx-auto flex xl:px-20 md:px-4 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-3 text-gray-700 animate__animated animate__fadeInLeft">We can help you to buy a 
              <br className="hidden lg:inline-block animate__animated animate__fadeInLeft"/>property in Turkey and get a residence permit
            </h1>
            <p className="mb-8 leading-relaxed animate__animated animate__fadeInLeft">Answer 6 questions and get a catalog of Turkish property 
            <br className="hidden lg:inline-block animate__animated animate__fadeInLeft"/>for residence permit or citizenship</p>
            <div className="flex justify-center">
              <Button
                onClick={openPopup}
                className="px-16 py-3 hover:from-yellow-600 hover:to-yellow-500 text-white rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 animate__animated animate__fadeInLeft"
              >
                Get Started
              </Button>
              {isPopupOpen && <CatalogPopup onClose={closePopup} />}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/bg-4.jpg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';
import React from "react";
import InfoSection from "./info-section";
import MultiSelection from "./multi-selection";

const OptionsCard: React.FC = () => {
  
  return(
    <section className="text-gray-600 body-font">
      <div className="text-center pt-24">
        <h1 className="sm:text-4xl text-2xl font-semibold title-font text-gray-700 animate__animated animate__fadeInLeft">
        Looking for an apartment in Turkey?
        </h1>
        <h2 className="leading-relaxed pt-3 animate__animated animate__fadeInLeft">Admiring the sea from the window of your apartment in Alanya is a reality. Answer 6 questions and get the best deals</h2>
        <div className="flex mt-6 justify-center animate__animated animate__fadeInLeft">
          <div className="w-24 h-1 rounded-full bg-yellow-500 inline-flex "></div>
        </div>
      </div>
      <InfoSection>
        <div className="lg:w-6/7 w-full mx-auto overflow-auto p-10">
      <MultiSelection />    
        </div>
      </InfoSection>
    </section>
  )
};

export default OptionsCard;

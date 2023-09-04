// components/ResidenceInfo.tsx
import React from 'react';

const ResidenceInfo: React.FC = () => {
  return (
    <div className="bg-white relative flex flex-wrap rounded-2xl shadow-xl mx-5 mt-20" id="section3">
      <div className="lg:w-1/2 px-6">
        <h2 className="m-10 title-font text-4xl font-semibold text-gray-700">Easy to obtain residence permit and citizenship</h2>
        <p className="m-10">With the purchase of real estate of $75,000 you can get a residence permit for up to 2 years unlimited number of times, and with the purchase of $400,000 - to get citizenship.</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <img className="w-22 h-22" alt="hero" src="/bg-12.jpg"/>
      </div>
    </div>
  );
};

export default ResidenceInfo;

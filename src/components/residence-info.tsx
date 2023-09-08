import React from 'react';
import InfoSection from './info-section';

const ResidenceInfo: React.FC = () => {
  return (
    <section className="text-gray-600 body-font" id='section3'>
    <InfoSection>
      <div className="lg:w-1/2 px-6 py-3">
      <h2 className="m-10 title-font text-4xl font-semibold text-gray-700">Easy to obtain residence permit and citizenship</h2>
      <p className="m-10">With the purchase of real estate of $75,000 you can get a residence permit for up to 2 years unlimited number of times, and with the purchase of $400,000 - to get citizenship.</p>
      </div>
      <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <img className="w-22 h-22" alt="hero" src="/bg-12.jpg"/>
      </div>
      </InfoSection>
    </section>
  );
};

export default ResidenceInfo;

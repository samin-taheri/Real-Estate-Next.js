import React from 'react';
import ColoredCards from './colored-cards';

const ColoredCardsList: React.FC = () => {
  return (
    <section className="text-gray-600 body-font" id="section2">
      <div className="container px-5 py-16 mx-auto">
      
        <div className="container p-6 flex-wrap">
          <div className="grid lg:grid-cols-3 md:grid-col-1 gap-6">
            <ColoredCards
              backgroundColor='rgba(199, 229, 225530, 0.5)'
              title="Calculate the cost of your property"
              description="We can calculate your approximate rent."
              link='Calculate'
              linkColor='rgba(0, 90, 255, 0.68)'
            />
            <ColoredCards
              backgroundColor='rgba(208, 248, 177, 0.5)'
              title="Visit our Help Center"
              description="Here you can find frequently asked questionl."
              link='Got to FAQs'
              linkColor='rgba(50, 133, 16, 0.68)'
            />
            <ColoredCards
              backgroundColor='rgba(246, 221, 204, 0.5)'
              title="How it work"
              description="Here is a step-by-step guide for renters."
              link='Get started'
              linkColor='rgba(217, 95, 0, 0.68)'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColoredCardsList;


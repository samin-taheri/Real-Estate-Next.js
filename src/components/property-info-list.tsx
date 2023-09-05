import React from 'react';
import PropertyInfo from './property-info';

const PropertyInfoList: React.FC = () => {
  return (
    <section className="text-gray-600 body-font" id="section2">
      <div className="container px-5 py-8 mx-auto">
      
        <div className="container p-6 flex-wrap">
          <div className="grid grid-cols-3 gap-4">
            <PropertyInfo
              title="Buy a property"
              description="All the Lorem Ipsum generators on the Internet 
              tend to repeat predefined chunks as necessary, 
              making this the first true."
              image= "/bg-14.jpg"
              button="Find a home"
            />
            <PropertyInfo
              title="Sell property"
              description="All the Lorem Ipsum generators on the Internet 
              tend to repeat predefined chunks as necessary, 
              making this the first true."
              image= "/bg-23.jpg"
              button="Place an ad"
            />
            <PropertyInfo
              title="Rent a property"
              description="All the Lorem Ipsum generators on the Internet 
              tend to repeat predefined chunks as necessary, 
              making this the first true."
              image= "/bg-22.jpg"
              button='Find a rental'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfoList;


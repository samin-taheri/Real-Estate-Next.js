import React from 'react';
import GridWithBackground from './grid-with-background';

const GridCard = () => {
  return (
    <section className="text-gray-600 body-font" id="section2">
      <div className="container px-4 py-24 mx-auto justify-center">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-4xl text-2xl font-semibold mb-5 title-font text-gray-700 -mt-10">
            Other Countries
          </h1>
        </div>
        <div className="container p-6 flex-wrap">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <GridWithBackground
              title="Dubai"
              description="Abu Dhabi"
              backgroundImage="/abu-dhabi-1.jpg"
            />
        
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div className='flex flex-col'>
            <div className='mb-4'>
            <GridWithBackground
              title="Canada"
              description="Ottawa"
              backgroundImage="/canada-1.jpg"
            />
            </div>
            <GridWithBackground
              title="America"
              description="D. C."
              backgroundImage="/usa-1.jpg"
            />
            </div>
            <div className='flex flex-col'>
            <div className='mb-4'>
             <GridWithBackground
              title="England"
              description="London"
              backgroundImage="/london-1.jpg"
            />
            </div>
             <GridWithBackground
              title="Germany"
              description="Berlin"
              backgroundImage="/berlin-1.jpg"
            />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridCard;

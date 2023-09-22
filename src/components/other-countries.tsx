import React from 'react';
import OtherCountriesCard from './other-countries-card';

const OtherCountries: React.FC = () => {
  return (
    <div className="py-28 flex flex-col items-center justify-center">
        <h1 className="sm:text-4xl text-2xl font-semibold title-font text-gray-700 -mt-20">
          Other Countries
        </h1>
            <div className="flex mt-10">
        <OtherCountriesCard
        backgroundImage="/1-3.jpg"
        title="Card Title"
        description="This is a card with a background image."
        customWidth="w-128" // Customize the width
        customHeight="h-96" // Customize the height
        />
      <div className="ml-7">
        <div className='mb-7'>
        <OtherCountriesCard
        backgroundImage="/1-3.jpg"
        title="Card Title"
        description="This is a card with a background image."
        customWidth="w-52" // Customize the width
        customHeight="h-44" // Customize the height
        />
        </div>
        <div className='mt-7'>
        <OtherCountriesCard
        backgroundImage="/1-3.jpg"
        title="Card Title"
        description="This is a card with a background image."
        customWidth="w-52" // Customize the width
        customHeight="h-44" // Customize the height
        />
        </div>
      </div>
      <div className="ml-7">
        <div className='mb-'>
        <OtherCountriesCard
        backgroundImage="/1-3.jpg"
        title="Card Title"
        description="This is a card with a background image."
        customWidth="w-52" // Customize the width
        customHeight="h-44" // Customize the height
        />
        </div>
        <div className='mt-7'>
        <OtherCountriesCard
        backgroundImage="/1-3.jpg"
        title="Card Title"
        description="This is a card with a background image."
        customWidth="w-52" // Customize the width
        customHeight="h-44" // Customize the height
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCountries;

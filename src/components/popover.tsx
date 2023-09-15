import { PopoverProps } from '@/types';
import React from 'react';

const languages = [
    { code: 'en', label: 'English', image: "/america-flag.png" },
    { code: 'ru', label: 'Russian', image: "/russia-flag.png" },
    { code: 'tr', label: 'Turkish', image: "/turkey-flag.png" },
    { code: 'de', label: 'German', image: "/germany-flag.png" },
  ];

const Popover: React.FC<PopoverProps> = () => {

  return (
    <div className="relative inline-block text-left">

        <div className="origin-top-right absolute right-0 mt-2 mr-7 w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-100 ring-opacity-5">
          <div className="">
            {languages.map((language, index) => (
              <a
                key={language.code}
                href={`/${language.code}`}
                className={`px-2 py-2 text-xs text-gray-700 hover:bg-gray-100 flex ${
                    index < languages.length - 1 ? 'border-b border-gray-100' : '' // Add border to all but the last item
                  }`}
              > 
              <img className="mr-4 mt-0.5 ml-2 w-4 h-3" alt="hero" src={language.image}/>
              {language.label}
              </a>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Popover;

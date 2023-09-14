import { PopoverProps } from '@/types';
import React, { useState } from 'react';

const Popover: React.FC<PopoverProps> = () => {

  return (
    <div className="relative inline-block text-left ">
        <div className="origin-top-right absolute right-0 mt-2 mr-5 w-14 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a
              href="/tr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <img className="" alt="hero" src="/turkey-flag.png"/>
            </a>
            <a href="/de" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
             <img className="" alt="hero" src="/germany-flag.png" />
            </a>
            
            <a href="/ru" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
              <img className="" alt="hero" src="/russia-flag.png" />
            </a>
            <a href="/en" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
              <img className="" alt="hero" src="/america-flag.png" />
            </a>
        </div>
        </div>
    </div>
  );
};

export default Popover;

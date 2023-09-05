import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const HeroSection: React.FC = () => {

  return (
    <section className="text-gray-600 body-font" id="hero">
  <div className="container mx-auto flex px-20 py-16 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-2 text-gray-700">We can help you to buy a 
        <br className="hidden lg:inline-block"/>property in Turkey and get a residence permit
      </h1>
      <p className="mb-8 leading-relaxed">Answer 6 questions and get a catalog of Turkish property 
      <br className="hidden lg:inline-block"/>for residence permit or citizenship</p>
      <div className="flex justify-center">
      <button className="px-20 py-3 hover:from-yellow-600 hover:to-yellow-500 text-black rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">
        Get the Catalog
      <FontAwesomeIcon icon={faArrowRight} className="ml-3" /> 
      </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/bg-4.jpg"/>
    </div>
  </div>
</section>
  );
};
export default HeroSection;

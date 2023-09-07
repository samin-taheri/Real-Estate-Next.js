import React from 'react'
import InfoSection from './info-section'
import Button from './button';

const Feature = () => {
  return (
    <section className="text-gray-600 body-font" id="section5">
      <InfoSection>
        <div className="lg:w-1/2 px-6">
          <h2 className="m-5 title-font text-4xl font-semibold text-gray-700">Still have questions about obtaining a residence permit or Turkish citizenship?</h2>
          <p className="m-5">Leave your phone number and find out more details about your move to Turkey</p>
          <div className="mt-10 flex w-full md:justify-start justify-center items-end">
        <div className="relative ml-5 lg:w-full xl:w-1/2 w-2/4">
          <input placeholder='Your Phone' type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <Button
          className="inline-flex ml-5 text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg">
          Get an answer
        </Button>
      </div>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
        <img className="w-22 h-22" alt="hero" src="/bg-5.jpg"/>
        </div>
        </InfoSection>
    </section>
  );
}

export default Feature;
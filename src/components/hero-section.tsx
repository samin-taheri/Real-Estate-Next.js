import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-20 py-15 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-2 text-gray-700">We can help you to buy a 
        <br className="hidden lg:inline-block"/>property in Turkey and get a residence permit
      </h1>
      <p className="mb-8 leading-relaxed">Answer 6 questions and get a catalog of Turkish property 
      <br className="hidden lg:inline-block"/>for residence permit or citizenship</p>
      <div className="flex justify-center">
      <button className="px-20 py-3 hover:from-yellow-600 hover:to-yellow-500 text-black rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400">Get the Catalog</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/bg-1.jpg"/>
    </div>
  </div>
</section>
  );
};
// https://en.kestelgroup.com/wp-content/uploads/2023/05/bg52.webp
export default HeroSection;

'use client';
import React, { useState } from "react";
import Modal from "./modal";
import CatalogPopup from "./catalog-popup";

const HeroSection: React.FC = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<string>('option1');
  const [selectedOptionForMoney, setSelectedOptionForMoney] = useState<string>('option1');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectChangeForMoney = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptionForMoney(event.target.value);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
    setStep(1);
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className="text-gray-600 body-font" id="hero">
  <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-3 text-gray-700 animate__animated animate__fadeInLeft">We can help you to buy a 
        <br className="hidden lg:inline-block animate__animated animate__fadeInLeft"/>property in Turkey and get a residence permit
      </h1>
      <p className="mb-8 leading-relaxed animate__animated animate__fadeInLeft">Answer 6 questions and get a catalog of Turkish property 
      <br className="hidden lg:inline-block animate__animated animate__fadeInLeft"/>for residence permit or citizenship</p>
      <div className="flex justify-center">
      <button onClick={openPopup} className="px-20 py-3 hover:from-yellow-600 hover:to-yellow-500 text-white rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 animate__animated animate__fadeInLeft">
        Get Started
      </button>
      {isPopupOpen && <CatalogPopup onClose={closePopup} />}
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

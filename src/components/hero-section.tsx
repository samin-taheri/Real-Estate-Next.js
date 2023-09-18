'use client';
import React, { useEffect, useState } from 'react';
import CatalogPopup from './catalog-popup';
import Button from './button';
import {useTranslations} from 'next-intl';

const HeroSection: React.FC = () => {
  const t = useTranslations('Index');
  
  const [isPopupOpen, setPopupOpen] = useState(false);
  const images: string[] = ["/bg-4.jpg", "/bg-32.jpg", "/bg-33.jpg", "/bg-34.jpg", "/bg-35.jpg", "/bg-25.jpg", "/bg-26.jpg", "/bg-27.jpg", "/bg-28.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  useEffect(() => {
    // Function to cycle through images
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set an interval to change images every few seconds (e.g., every 5 seconds)
    const interval = setInterval(nextImage, 4000);

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Delay showing content to sync with image transition
    const contentTimeout = setTimeout(() => {
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(contentTimeout);
  }, []);


  return (
    <section className="text-gray-600 body-font" id="hero">
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container mx-auto flex xl:px-20 md:px-4 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-3 text-gray-700 animate__animated animate__fadeInLeft">{t("title")}</h1>
            <p className="mb-8 leading-relaxed animate__animated animate__fadeInLeft items-start">{t("subtitle")}
            </p>
            <div className="flex justify-center">
              <Button
                onClick={openPopup}
                className="px-16 py-3 mb-10 lg:mb-0 hover:from-yellow-600 hover:to-yellow-500 text-white rounded-lg bg-gradient-to-r from-yellow-500 to-yellow-400 animate__animated animate__fadeInLeft">{t("get-started")}
              </Button>
              {isPopupOpen && <CatalogPopup onClose={closePopup} />}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="hero-image-container">
              <div
                className="hero-image-slider"
                style={{
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                }}
              >
                {images.map((imageUrl, index) => (
                  <img
                    key={index}
                    className="object-cover object-center rounded w-full h-full animate__animated animate__fadeInRight"
                    alt="hero"
                    src={imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

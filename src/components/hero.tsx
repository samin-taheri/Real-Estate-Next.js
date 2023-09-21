import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const backgroundImages = [
    '1-1.jpg',
    '1-2.jpg',
    '1-3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  const imageUrl = backgroundImages[currentImageIndex];

  return (
    <div className="relative w-full h-screen inset-0 bg-cover bg-center transition-opacity duration-1000"
    style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold">Your Hero Content Goes Here</h1>
          <p className="text-lg mt-4">Some description or call to action</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

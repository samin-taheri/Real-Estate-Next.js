import React, { ReactNode } from 'react';

interface GridWithBackgroundProps {
  backgroundImage?: string;
  children?: ReactNode;
  width?: string;
  height?: string;
  title: string;
  description: string;
  overlayOpacity?: number;
}

const GridWithBackground: React.FC<GridWithBackgroundProps> = ({
  title,
  description,
  backgroundImage,
  overlayOpacity = 0.3,
}) => {
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative', // Add this to make ::before work
  };

  const overlayStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'black',
    borderRadius: "15px",
    opacity: overlayOpacity,
    zIndex: -1, // Place the overlay behind the content
  };

  return (
    <div
      className="p-6 shadow-lg-2 rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl relative"
      style={backgroundStyle}
    >
      <div style={overlayStyle}></div>
      <h2 className="text-white text-2xl font-medium title-font z-1 relative">
        {title}
      </h2>
      <p className="text-white leading-relaxed text-base z-1 pb-32 relative">{description}</p>
    </div>
  );
};

export default GridWithBackground;

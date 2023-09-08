import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
    className="fixed bottom-8 left-8 bg-yellow-400 text-white p-2 w-12 h-12 rounded-full shadow-md cursor-pointer hover:bg-yellow-500"
    onClick={handleScrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>
    
  );
};

export default ScrollToTopButton;

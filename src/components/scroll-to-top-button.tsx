import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className="hidden lg:block fixed bottom-24 left-8 bg-yellow-200 text-gray-500 p-2 w-10 h-10 rounded-full shadow-md cursor-pointer hover:bg-yellow-300 hover:text-gray-600"
      onClick={handleScrollToTop}>
      <FontAwesomeIcon icon={faArrowUp} fixedWidth size="1x"/>
    </button>
  );
};

export default ScrollToTopButton;

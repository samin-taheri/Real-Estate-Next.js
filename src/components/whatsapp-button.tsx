import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+905077525816';
  const message = 'Hello, I have a question.';

  const openWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      className="
        pulse-animation 
        fixed
        bottom-8
        w-10
        h-10
        rounded-full
        shadow-md
        cursor-pointer
        hover:bg-green-600
        transform
        hover:scale-110
        duration-300
        focus:outline-none
        ring ring-green-300
        md:right-8       // Right on medium screens and larger
        md:left-8        // Left on medium screens and larger
        right-8          // Right on small screens
        left-8           // Left on small screens
        bg-green-500
        text-white
        z-10            // Set a higher z-index value to ensure it appears above other elements
      "
      onClick={openWhatsAppChat}
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;

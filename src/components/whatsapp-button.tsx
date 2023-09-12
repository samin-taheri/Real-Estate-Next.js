import React from 'react';
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
    className="pulse-animation fixed bottom-8 right-8 bg-green-500 text-white p-2 w-12 h-12 rounded-full shadow-md cursor-pointer hover:bg-green-600 transform hover:scale-110 duration-300 focus:outline-none ring ring-green-300"
    onClick={openWhatsAppChat}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;

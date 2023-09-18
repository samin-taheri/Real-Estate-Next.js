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

    className="fixed bottom-10 right-10 bg-green-500 text-white w-10 h-10 rounded-full shadow-md"
    onClick={openWhatsAppChat}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </button>
  );
};

export default WhatsAppButton;

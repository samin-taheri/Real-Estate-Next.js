import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '+905077525816';
  const message = 'Hello, I have a question.';

  const openWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
    className="pulse-animation fixed bottom-8 right-8 bg-green-500 text-white w-10 h-10 rounded-full shadow-md cursor-pointer hover:bg-green-600 transform hover:scale-110 duration-300 focus:outline-none ring ring-green-300"
    onClick={openWhatsAppChat}>
      <i className="fab fa-whatsapp"></i>
    </button>
  );
};

export default WhatsAppButton;

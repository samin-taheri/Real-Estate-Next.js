import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const AutoMessagePopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Set a delay for when the popup should appear (e.g., 5 seconds)
    const delay = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      // Clear the timeout if the component unmounts
      clearTimeout(delay);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Auto Message Popup"
    >
      {/* Popup Content */}
      <h2>Important Message</h2>
      <p>This is an important message for users.</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default AutoMessagePopup;

// components/MyModal.tsx
import React from 'react';
import Modal from 'react-modal';

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal
      className="w-100 h-100"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
    >
      <h2>Popup Content</h2>
      <p>This is your popup content.</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default MyModal;

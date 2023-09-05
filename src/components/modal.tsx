import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
  closeModal: () => void;
  step: number;
  selectedOption: string;
  selectedOptionForMoney: string;
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSelectChangeForMoney: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  nextStep: () => void;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  step,
  selectedOption,
  selectedOptionForMoney,
  handleSelectChange,
  handleSelectChangeForMoney,
  nextStep,
}) => {
  
  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h1 className='text-xl font-semibold pt-5'>Real estate from developer from 35.000$</h1>
            <p className="text-l font-medium pt-5">Projects on the Black Sea coast with yield up to 100% per year.</p>
            <p className="text-l font-normal   pt-2 pb-3">Answer questions and recieve a PDF presentation.</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className='text-xl font-semibold pt-4'>What is the purpose of ocquiring the property</h1>
            <select
              id="selectOption"
              name="selectOption"
              value={selectedOption}
              onChange={handleSelectChange}
              className="mt-7 mb-5 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            >
              <option value="option1">Real estate for living</option>
              <option value="option2">Real estate fo rinvestment</option>
            </select>
          </div>
        );
      case 3:
        return (
          <div>
            <h1 className='text-xl font-semibold pt-4 pb-7'>How much are you counting on?</h1>
            <select
              id="selectOption"
              name="selectOption"
              value={selectedOptionForMoney}
              onChange={handleSelectChangeForMoney}
              className="mt-7 mb-5 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            >
              <option value="option1">$35000 - $50000</option>
              <option value="option2">$50000 - $100000</option>
              <option value="option2">$100000 - $150000</option>
              <option value="option2">$150000 and more</option>
            </select>
          </div>
        );
        case 4:
        return (
          <div>
            <h1 className='text-xl font-semibold pt-4'>It is done! There is just one last step</h1>
            <p className="text-l font-medium pt-4">Leave a messanger or phone number for contact</p>
            <select
              id="selectOption"
              name="selectOption"
              value={selectedOptionForMoney}
              onChange={handleSelectChangeForMoney}
              className="mt-7 mb-2 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-yellow-200 focus:outline-none"
            >
              <option value="option1">WhatsApp</option>
              <option value="option2">Viber</option>
              <option value="option2">Phone number</option>
            </select>
          </div>
        );
        case 5:
        return (
          <div className='text-center pt-20'>
            <h1 className='text-xl font-semibold'>It is done! 🤩</h1>
            <p className="text-l font-medium pt-5">Congratulations</p>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className="modal-overlay">
          <div className="modal-content" style={{ width: '500px', height: '300px' }}>
          <span className="modal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
            {renderContent()}
            <div>
            {step < 5 && (
              <button className="px-10 py-2 mt-4 hover:bg-yellow-600 bg-yellow-500 text-white rounded-lg" onClick={nextStep}>Next</button>
            )}
          </div>
          </div>
        </div>
  );
};

export default Modal;

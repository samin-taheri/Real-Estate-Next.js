// components/RightMenu.tsx
import React from 'react';

interface RightMenuProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const RightMenu: React.FC<RightMenuProps> = ({ isOpen, onClose, children }) => {
  const handleItemClick = (item: string) => {
    // Handle the click event for menu items here
    console.log(`Clicked on: ${item}`);
  };

  const menuClassName = isOpen
    ? 'fixed top-0 right-0 h-full w-64 bg-white transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl'
    : 'fixed top-0 right-0 h-full w-0 bg-white transition-all duration-300 ease-in-out overflow-y-auto shadow-2xl';

  return (
    <div className={menuClassName}>
      <div className="w-64 p-4">
      {children}
      <ul className="menu-bar">
        <li>
          <button className="menu-item" onClick={() => handleItemClick('Item 1')}>Residential Property</button>
        </li>
        <li>
          <button className="menu-item" onClick={() => handleItemClick('Item 2')}>Blog</button>
        </li>
        <li>
          <button className="menu-item" onClick={() => handleItemClick('Item 3')}>Contact</button>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default RightMenu;

"use client";
import React, { useEffect, useRef, useState } from "react";
import Menu from "./right-menu";
import Icon from "./icon";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { faEllipsis, faXmark } from '@fortawesome/free-solid-svg-icons'; // Import both icons
import WhatsAppButton from "./whatsapp-button";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(faEllipsis);
  const scrollPosition = useScrollPosition();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const contentToCopy = (
    <div className="mt-8">
        <p className="ml-3 text-l text-gray-700 font-medium">+90 507 752 58 16</p>
        <p className="ml-3 text-xs text-gray-500 font-medium">we are online</p>
    </div>
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);


  const openMenu = () => {
    setMenuOpen(true);
    setCurrentIcon(faXmark); // Change the icon to close icon when the menu opens
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setCurrentIcon(faEllipsis); // Change the icon back to the menu icon when the menu closes
  };

  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img className="w-30 h-30" alt="hero" src="https://jasminehomex.com/images/logo.gif"/>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-7 hover:text-black font-medium">Residence Permit and Citizenship</a>
        <a className="mr-7 hover:text-black font-medium">Property</a>
        <a className="mr-7 hover:text-black font-medium">About Us</a>
        <a className="mr-7 hover:text-black font-medium">Contact</a>
        <a className="mr-7 hover:text-black font-medium">Other Countries</a>
      </nav>
      <div>
      <div className="flex items-center" ref={menuRef} tabIndex={-1}>
        
      <Icon
            icon={currentIcon}
            onClick={isMenuOpen ? closeMenu : openMenu}
            isOpen={isMenuOpen}
          />
          <Menu isOpen={isMenuOpen} onClose={closeMenu}>
            {contentToCopy}
            </Menu>
      <div>
      <p className="ml-3 text-l text-gray-700 font-medium">+90 507 752 58 16</p>
        <p className="ml-3 text-xs text-gray-500 font-medium">we are online</p>
        <WhatsAppButton />
        </div>
        </div>
        </div>
    </div>
  </header>
  );
};

export default Header;

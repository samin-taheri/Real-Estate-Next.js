import { Link } from 'react-scroll';
import React from "react";

const Navigation = () => {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link
        activeClass="active"
        href='/section2'
        to="section2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-600 hover:underline"
      >
        Residence Permit and Citizenship
      </Link>
      <Link
        activeClass="active"
        href='/section3'
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-600 hover:underline"
      >
        Property
      </Link>
      <Link
        activeClass="active"
        href='/section4'
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-600 hover:underline"
      >
        About Us
      </Link>
      <Link
        activeClass="active"
        href='/section5'
        to="section5"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-600 hover:underline"
      >
        Contact
      </Link>
      <Link
        activeClass="active"
        href='/footer'
        to="footer"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7 hover:text-yellow-600 hover:underline"
      >
        Other Contries
      </Link>
      </nav>
  );
};

export default Navigation;
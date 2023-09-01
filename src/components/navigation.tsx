import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link
        activeClass="active"
        to="secton2"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7"
      >
        Residence Permit and Citizenship
      </Link>
      <Link
        activeClass="active"
        to="section3"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7"
      >
        Property
      </Link>
      <Link
        activeClass="active"
        to="section4"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7"
      >
        About Us
      </Link>
      <Link
        activeClass="active"
        to="footer"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7"
      >
        Contact
      </Link>
      <Link
        activeClass="active"
        to="footer"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="mr-7"
      >
        Other Contries
      </Link>
      </nav>
  );
};

export default Navigation;

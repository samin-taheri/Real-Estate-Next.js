import { Link } from 'react-scroll';
import React from "react";
import {useTranslations} from 'next-intl';

const Navigation = () => {
  const t = useTranslations('Index');
  return (
    <nav className="flex flex-wrap items-center text-base justify-center">
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
        {t("citizenship")}
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
       {t("property")} 
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
        {t("about-us")} 
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
        {t("contact")} 
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
        {t("other-contries")} 
      </Link>
      </nav>
  );
};

export default Navigation;
"use client";
import React, { useState } from "react";
import WhatsAppButton from "./whatsapp-button";
import ScrollToTopButton from "./scroll-to-top-button";
import {useTranslations} from 'next-intl';
import Link from "next/link";

const ContactInfo = () => {
  const t = useTranslations('Index');
  const phoneNumber = '+905077525816';
  const message = 'Hello, I have a question.';

  const openWhatsAppChat = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return(
    <div>
      <Link onClick={openWhatsAppChat} href={""}>
      <p className="ml-3 text-l text-gray-700 font-medium animate__animated animate__fadeInRight">+90 507 752 58 16</p>
      </Link>
      <p className="ml-3 text-xs text-gray-500 font-medium animate__animated animate__fadeInRight">{t("contact-info")}</p>
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  )
};
export default ContactInfo;
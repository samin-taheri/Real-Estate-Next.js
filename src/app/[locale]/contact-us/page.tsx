"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

const ContactUs: React.FC = () => {
  const t = useTranslations('Index');
  return (
    <section className="text-gray-600 body-font">
      <div className="bg-rectangle bg-cover bg-center">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row">
          <div className="lg:w-2/3 md:w-full bg-white rounded-xl shadow-lg-2 overflow-hidden sm:mr-10 p-10 mt-8 md:mt-0 tems-center" style={{ marginBottom: '2rem' }}>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              {t("contact-us-page-title")}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {t("contact-us-page-subtitle")}
            </p>
            <div className="mb-4">
              <input
                placeholder={t("your-name-placeholder")}
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder={t("your-email-placeholder")}
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder={t("your-message-placeholder")}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                data-gramm="false"
                wt-ignore-input="true"
              ></textarea>
            </div>
            <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              {t("send-button")}
            </button>
          </div>

          <div className="lg:w-1/3 md:w-full bg-white rounded-xl tems-center shadow-lg-2 overflow-hidden p-5 flex" style={{ marginBottom: '2rem' }}>
            <div className="px-6">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font pt-5">
              {t("contact-us-page-details")}
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              {t("contact-us-page-details-subtitle")}
            </p>
              <div className="flex mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
              <h2 className="title-fonttracking-widest text-gray-900 text-sm font-medium pl-2">
                {t("address-title")}
              </h2>
              </div>
              <p className="mt-1">{t("address")}</p>
              <div className="flex pt-5 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <h2 className="title-fonttracking-widest text-gray-900 text-sm font-medium pl-2">
                {t("email-title")}
              </h2>
              </div>
              <a className="text-yellow-500 leading-relaxed">
                info@jasminehomex.com
              </a>
              <div className="flex pt-5 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
              </svg>
              <h2 className="title-fonttracking-widest text-gray-900 text-sm font-medium pl-2">
                {t("phone-title")}
              </h2>
              </div>
              <p className="leading-relaxed">+905077525816</p>
              <h2 className="title-fonttracking-widest text-gray-900 text-sm mb-1 font-medium pt-5">
                {t("follow-us-title")}
              </h2>
              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto pt-2">
                <a className="text-gray-500" href="https://www.facebook.com/JasmineProje/" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500" href="https://www.instagram.com/jasmineproje/" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

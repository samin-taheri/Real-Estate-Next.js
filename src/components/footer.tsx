import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-300" id="footer">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
   
      <div className="lg:w-1/3 md:w-1/2 px-10">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About Us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Real Estate in Alanya</a>
          </li>
        </nav>
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Questions</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Properties For Sale in Alanya</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Work With Us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Apartments For Sale in Alanya</a>
          </li>
        </nav>
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Villas For Sale in Alanya</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/5 md:w-1/3 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">Contact Us</h2>
        <li className='mb-3'>
        <a className="text-gray-600 hover:text-gray-800">Oba District, 14. Street Alanya, Antalya/Turkey</a>
        </li>  
        <li className='mb-3'>
        <a className="text-gray-600 hover:text-gray-800">+905077525816</a>
        </li>
        <li className='mb-3'>
        <a className="text-gray-600 hover:text-gray-800">info@jasminehomex.com</a>
        </li>
      
      </div>
    </div>
  </div>
  <div className="border-t border-gray-200">
    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
    <img className="w-30 h-30" alt="hero" src="https://jasminehomex.com/images/logo.gif"/>

      <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <input placeholder='Your Email' type="text" id="footer-field" name="footer-field" className="ml-10 w-full bg-gray-100 bg-opacity-50 rounded-lg border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-yellow-200 focus:border-yellow-500 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="ml-10 inline-flex text-white bg-yellow-500 border-0 py-3 px-6 focus:outline-none hover:bg-yellow-600 rounded-lg">Send</button>
        <p className="ml-10 text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Subscribe for
          <br className="lg:block hidden"/>our newsletter
        </p>
      </div>
      <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
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
        <a className="ml-3 text-gray-500" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
        </a>
      </span>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 copyright — All Rights Reserved
      </p>
    </div>
  </div>
</footer>
  );
}

export default Footer;
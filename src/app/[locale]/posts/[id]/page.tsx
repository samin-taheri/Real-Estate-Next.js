"use client";
import React, { useState } from 'react';;
import { useParams } from 'next/navigation';
import {useTranslations} from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const PostDetailPage: React.FC = () => {
  const t = useTranslations('Index');

  const posts = [
    { id: 1, title: t('1-posts-title'), description: t('1-posts-desc'), description2: t('1-posts-desc-2'), image: "/1-1.jpg", location: "Kargicak", locationDesc: t('1-posts-loc-desc'), priceRange: t("1-posts-price"), features: t("1-posts-features") ,features1: t("1-posts-features-1"),features2: t("1-posts-features-2"),features3: t("1-posts-features-3"), postCitizenship: t("1-posts-citizenship"), startDate: "01. 06. 2023" , endDate: "30.04. 2024",  additionalImages:  ["/1-2.jpg", "/1-3.jpg", "/1-4.jpg", "/1-5.jpg", "/1-6.jpg", "/1-7.jpg", "/1-8.jpg", "/1-9.jpg", "/1-10.jpg"] },
    { id: 2, title: t('2-posts-title'), description: t('2-posts-desc'), description2: t('2-posts-desc-2'), image: "/2-1.jpg", location: "Alanya", locationDesc: t('2-posts-loc-desc'), priceRange: t("2-posts-price"), features: t("2-posts-features") ,features1: t("2-posts-features-1"),features2: t("2-posts-features-2"),features3: t("1-posts-features-3"), technicalFeatures: t('2-posts-tech-features'), villaTechnicalFeatures: t('"2-posts-villa-tech-features'), postCitizenship: t("2-posts-citizenship"), startDate: "01.01.2023" , endDate: "30.12.2024", additionalImages:  ["/2-1.jpg", "/2-3.jpg", "/2-4.jpg", "/2-5.jpg","/2-6.jpg", "/2-7.jpg", "/2-8.jpg", "/2-9.jpg","/2-10.jpg", "/2-11.jpg", "/2-12.jpg", "/2-13.jpg","/2-14.jpg", "/2-15.jpg", "/2-16.jpg", "/2-18.jpg"] },
    { id: 3, title: t('3-posts-title'), description: t('3-posts-desc'), description2: t('3-posts-desc-2'), image: "/1-1.jpg", location: "Alanya", locationDesc: t('3-posts-loc-desc'), priceRange: t("3-posts-price"), features: t("3-posts-features") ,features1: t("3-posts-features-1"),features2: t("3-posts-features-2"),features3: t("3-posts-features-3"), postCitizenship: t("3-posts-citizenship"), startDate: "01. 06. 2023" , endDate: "30.04. 2024", additionalImages:  ["/3-1.jpg", "/3-2.jpg", "/3-3.jpg", "/3-4.jpg", "/3-5.jpg", "/3-6.jpg", "/3-7.jpg", "/3-8.jpg","/3-9.jpg", "/3-10.jpg", "/3-11.jpg", "/3-13.jpg", "/3-14.jpg", "/3-15.jpg", "/3-16.jpg", "/3-16.jpg", "/3-17.jpg", "/3-18.jpg", "/3-19.jpg", "/3-20.jpg","/3-21.jpg", "/3-22.jpg", "/3-23.jpg", "/3-24.jpg", "/3-25.jpg"] },
    { id: 4, title: t('1-posts-title'), description: t('1-posts-desc'), description2: t('1-posts-desc-2'), image: "/1-1.jpg", location: "Kargicak", locationDesc: t('1-posts-loc-desc'), priceRange: t("1-posts-price"), features: t("1-posts-features") ,features1: t("1-posts-features-1"),features2: t("1-posts-features-2"),features3: t("1-posts-features-3"), postCitizenship: t("1-posts-citizenship"), startDate: "01. 06. 2023" , endDate: "30.04. 2024", additionalImages:  ["/post-3.jpg", "/post-3.jpg", "/post-3.jpg", "/post-3.jpg"]   },
    { id: 5, title: t('1-posts-title'), description: t('1-posts-desc'), description2: t('1-posts-desc-2'), image: "/1-1.jpg", location: "Kargicak", locationDesc: t('1-posts-loc-desc'), priceRange: t("1-posts-price"), features: t("1-posts-features") ,features1: t("1-posts-features-1"),features2: t("1-posts-features-2"),features3: t("1-posts-features-3"), postCitizenship: t("1-posts-citizenship"), startDate: "01. 06. 2023" , endDate: "30.04. 2024", additionalImages:  ["/post-3.jpg", "/post-3.jpg", "/post-3.jpg", "/post-3.jpg"]   },
    { id: 6, title: t('1-posts-title'), description: t('1-posts-desc'), description2: t('1-posts-desc-2'), image: "/1-1.jpg", location: "Kargicak", locationDesc: t('1-posts-loc-desc'), priceRange: t("1-posts-price"), features: t("1-posts-features") ,features1: t("1-posts-features-1"),features2: t("1-posts-features-2"),features3: t("1-posts-features-3"), postCitizenship: t("1-posts-citizenship"), startDate: "01. 06. 2023" , endDate: "30.04. 2024", additionalImages:  ["/post-3.jpg", "/post-3.jpg", "/post-3.jpg", "/post-3.jpg"]  },
  ];
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id as string, 10));

  if (!post) {
    return <div>Post not found</div>;
  }  
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imagesPerPage: number = 6;

  const handleNextClick = () => {
    const newIndex: number = currentIndex + 1;
    if (newIndex < post.additionalImages.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handlePreviousClick = () => {
    const newIndex: number = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const endIndex: number = Math.min(currentIndex + imagesPerPage, post.additionalImages.length);
  const imagesToDisplay: string[] = post.additionalImages.slice(currentIndex, endIndex);


  return (
    <section className="text-gray-600 body-font overflow-hidden">
       <div className="bg-rectangle bg-cover bg-center">
      <div className="container px-4 sm:px-6 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap relative">
          <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg" src={post.image} alt={post.title}/>
          <div className="absolute top-5 left-5 z-10 flex flex-col">
        <div className="bg-yellow-100 bg-opacity-80 text-gray-900 py-1 px-2 rounded-lg text-xs mb-2 flex items-center">
        <span className="title-font font-medium text-2xl text-gray-900">{post.priceRange}</span>
        </div>
        </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-base title-font text-gray-500">Location: {post.location}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{post.title}</h1>
            <div className="flex mb-4">
            <h1 className="leading-relaxed text-base font-normal">{post.features}</h1>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <div className="flex items-center border-b-2 border-gray-100"></div>
            <h1 className="leading-relaxed text-base font-normal ">{post.description}</h1>
            <br/>
            <h1 className="leading-relaxed text-base  font-normal">{post.description2}</h1>
            <div className="flex mt-1 items-center border-b-2 border-gray-100"></div>
              <h1 className="leading-relaxed text-base font-normal flex py-1">{post.features1}</h1>
              <div className="flex items-center pb-1 border-b-2 border-gray-100"></div>
            <div className="flex">
              <h1 className="leading-relaxed text-base font-normal flex py-2">{post.features2}</h1>
              <h1 className="leading-relaxed text-base font-normal flex ml-3 pl-3 py-2 border-l-2 border-gray-100 space-x-2s">{post.features3}</h1>
            </div>
            <div className="flex mt-1 mb-2 items-center border-b-2 border-gray-100"></div>
            <div className='flex flex-col'>
            <h1 className="leading-relaxed text-base font-normal">{t("start-date")} {post.startDate}</h1>
            <h1 className="leading-relaxed text-base font-normal">{t("end-date")} {post.endDate}</h1>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center justify-center">
            <button
              onClick={handlePreviousClick}
              disabled={currentIndex <= 0}
              className={`hover:bg-gray-100 py-2 px-4 rounded-l ${currentIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {imagesToDisplay.map((image, index) => (
                <a
                  key={index}
                  href={image} // Set the href attribute to the image URL
                  target="_blank" // Opens the link in a new tab/window
                  rel="noopener noreferrer" // Recommended for security
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-32 h-32 rounded-lg cursor-pointer" 
                  />
                </a>
              ))}
            </div>

            <button
              onClick={handleNextClick}
              disabled={endIndex >= post.additionalImages.length - 1}
              className={`hover:bg-gray-100 font-bold py-2 px-4 rounded-r ${endIndex >= post.additionalImages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
         </div>
        </div>
      </div>
      </div>
</section>
  );
};

export default PostDetailPage;

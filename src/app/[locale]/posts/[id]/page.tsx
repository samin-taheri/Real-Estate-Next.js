"use client";
import React, { useState } from 'react';;
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useParams } from 'next/navigation';
import {useTranslations} from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBed, faBuilding, faToilet, faStairs, faBuildingUser, faArrowsUpDownLeftRight, faHospital, faPlaneDeparture, faTreeCity, faUmbrellaBeach, faTags, faCalendarCheck, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';

const PostDetailPage: React.FC = () => {
  const t = useTranslations('Index');

  const posts = [
    { id: 1, title: t('1-posts-title'), description: t('1-posts-desc'), description2: t('1-posts-desc-2'), land: t('1-land'), bedrooms: t('1-bedrooms'), bathrooms: t('1-bathrooms'), blocks: t('1-blockNumber'), floors: t('1-floorNumber'), flats: t('1-flatNumber'), size: t('1-size'), hospital: t('1-hospital'), airport: t('1-airport'), center: t('1-center'), beach: t('1-beach'), image: "/1-1.jpg", location: "Kargicak", locationDesc: t('1-posts-loc-desc'), priceRange: t('1-posts-price'), features: t("1-posts-features") ,features1: t("1-posts-features-1"),features2: t("1-posts-features-2"),features3: t("1-posts-features-3"), postCitizenship: t("1-posts-citizenship"), startDate: "01. 06. 2023" , endDate: "30.04. 2024",  additionalImages:  ["/1-2.jpg", "/1-3.jpg", "/1-4.jpg", "/1-5.jpg", "/1-6.jpg", "/1-7.jpg", "/1-8.jpg", "/1-9.jpg", "/1-10.jpg"] },
    { id: 2, title: t('2-posts-title'), description: t('2-posts-desc'), description2: t('2-posts-desc-2'), land: t('2-land'), bedrooms: t('2-bedrooms'), bathrooms: t('2-bathrooms'), blocks: t('2-blockNumber'), floors: t('2-floorNumber'), flats: t('2-flatNumber'), size: t('2-size'), hospital: t('2-hospital'), airport: t('2-airport'), center: t('2-center'), beach: t('2-beach'),image: "/2-1.jpg", location: "Kargicak", locationDesc: t('2-posts-loc-desc'), priceRange: t('2-posts-price'), features: t("2-posts-features") ,features1: t("2-posts-features-1"),features2: t("2-posts-features-2"),features3: t("1-posts-features-3"), postCitizenship: t("2-posts-citizenship"), startDate: "01.01.2023" , endDate: "30.12.2024", additionalImages:  ["/2-1.jpg", "/2-3.jpg", "/2-4.jpg", "/2-5.jpg","/2-6.jpg", "/2-7.jpg", "/2-8.jpg", "/2-9.jpg","/2-10.jpg", "/2-11.jpg", "/2-12.jpg", "/2-13.jpg","/2-14.jpg", "/2-15.jpg", "/2-16.jpg", "/2-18.jpg"] },
    { id: 3, title: t('3-posts-title'), description: t('3-posts-desc'), description2: t('3-posts-desc-2'), land: t('3-land'), bedrooms: t('3-bedrooms'), bathrooms: t('3-bathrooms'), blocks: t('3-blockNumber'), floors: t('3-floorNumber'), flats: t('3-flatNumber'), size: t('3-size'), hospital: t('3-hospital'), airport: t('3-airport'), center: t('3-center'), beach: t('3-beach'),image: "/3-2.jpg", location: "Alanya", locationDesc: t('3-posts-loc-desc'), priceRange: t('3-posts-price'), features: t("3-posts-features") ,features1: t("3-posts-features-1"),features2: t("3-posts-features-2"),features3: t("3-posts-features-3"), postCitizenship: t("3-posts-citizenship"), startDate: "01.10.2022" , endDate: "30.06. 2024", additionalImages:  ["/3-2.jpg", "/3-3.jpg", "/3-4.jpg", "/3-5.jpg", "/3-6.jpg", "/3-7.jpg", "/3-8.jpg","/3-9.jpg", "/3-10.jpg", "/3-11.jpg", "/3-13.jpg", "/3-14.jpg", "/3-15.jpg", "/3-16.jpg", "/3-16.jpg", "/3-17.jpg", "/3-18.jpg", "/3-19.jpg", "/3-20.jpg","/3-21.jpg", "/3-22.jpg", "/3-23.jpg", "/3-24.jpg", "/3-25.jpg"] },
    { id: 4, title: t('4-posts-title'), description: t('4-posts-desc'), description2: t('4-posts-desc-2'), land: t('4-land'), bedrooms: t('4-bedrooms'), bathrooms: t('4-bathrooms'), blocks: t('4-blockNumber'), floors: t('4-floorNumber'), flats: t('4-flatNumber'), size: t('4-size'), hospital: t('4-hospital'), airport: t('4-airport'), center: t('4-center'), beach: t('4-beach'),image: "/4-1.jpg", location: "Oba", locationDesc: t('4-posts-loc-desc'), priceRange: t('4-posts-price'), features: t("4-posts-features") ,features1: t("4-posts-features-1"),features2: t("4-posts-features-2"),features3: t("4-posts-features-3"), postCitizenship: t("4-posts-citizenship"), startDate: "01.03.2023" , endDate: "20.03. 2024", additionalImages:  ["/4-1.jpg", "/4-2.jpg", "/4-3.jpg", "/4-4.jpg","/4-5.jpg", "/4-6.jpg", "/4-7.jpg", "/4-8.jpg","/4-9.jpg", "/4-10.jpg", "/4-11.jpg"] },
    { id: 5, title: t('5-posts-title'), description: t('5-posts-desc'), description2: t('5-posts-desc-2'), land: t('5-land'), bedrooms: t('5-bedrooms'), bathrooms: t('5-bathrooms'), blocks: t('5-blockNumber'), floors: t('5-floorNumber'), flats: t('5-flatNumber'), size: t('5-size'), hospital: t('5-hospital'), airport: t('5-airport'), center: t('5-center'), beach: t('5-beach'),image: "/5-1.jpg", location: "Demirtaş", locationDesc: t('5-posts-loc-desc'), priceRange: t('5-posts-price'), features: t("5-posts-features") ,features1: t("5-posts-features-1"),features2: t("5-posts-features-2"),features3: t("5-posts-features-3"), postCitizenship: t("5-posts-citizenship"), startDate: "30.09.2023" , endDate: "30.11.2024", additionalImages:  ["/5-2.jpg", "/5-3.jpg", "/5-4.jpg", "/5-6.jpg", "/5-7.jpg", "/5-8.jpg", "/5-10.jpg", "/5-11.jpg", "/5-12.jpg", "/5-14.jpg", "/5-15.jpg"] },
    { id: 6, title: t('6-posts-title'), description: t('6-posts-desc'), description2: t('6-posts-desc-2'), land: t('6-land'), bedrooms: t('6-bedrooms'), bathrooms: t('6-bathrooms'), blocks: t('6-blockNumber'), floors: t('6-floorNumber'), flats: t('6-flatNumber'), size: t('6-size'), hospital: t('6-hospital'), airport: t('6-airport'), center: t('6-center'), beach: t('6-beach'),image: "/6-1.jpg", location: "Kargicak", locationDesc: t('6-posts-loc-desc'), priceRange: t('6-posts-price'), features: t("6-posts-features") ,features1: t("6-posts-features-1"),features2: t("6-posts-features-2"),features3: t("6-posts-features-3"), postCitizenship: t("6-posts-citizenship"), startDate: "30.09.2023" , endDate: "30.03.2025", additionalImages:  ["/6-1.jpg", "/6-2.jpg", "/6-3.jpg", "/6-4.jpg", "/6-5.jpg", "/6-6.jpg", "/6-7.jpg", "/6-8.jpg", "/6-9.jpg", "/6-10.jpg", "/6-11.jpg", "/6-12.jpg", "/6-13.jpg", "/6-14.jpg", "/6-15.jpg", "/6-16.jpg", "/6-17.jpg", "/6-18.jpg", "/6-19.jpg", "/6-20.jpg", "/6-21.jpg", "/6-22.jpg" ] },
  ];
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id as string, 10));

  if (!post) {
    return <div>Post not found</div>;
  }  
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [thumbnailIndex, setThumbnailIndex] = useState<number>(0);
  const thumbnailsPerPage: number = 6;

  const handleThumbnailNextClick = () => {
    const newThumbnailIndex: number = thumbnailIndex + 1;
    if (newThumbnailIndex < post.additionalImages.length) {
      setThumbnailIndex(newThumbnailIndex);
    }
  };

  const handleThumbnailPreviousClick = () => {
    const newThumbnailIndex: number = thumbnailIndex - 1;
    if (newThumbnailIndex >= 0) {
      setThumbnailIndex(newThumbnailIndex);
    }
  };
  const thumbnailStartIndex: number = thumbnailIndex;
  const thumbnailEndIndex: number = Math.min(
    thumbnailIndex + thumbnailsPerPage,
    post.additionalImages.length
  );

  // Get the thumbnail images for the current range
  const thumbnailImagesToDisplay: string[] = post.additionalImages.slice(
    thumbnailStartIndex,
    thumbnailEndIndex
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const imagesPerPage: number = 6;

  const handleNextClick = () => {
    const newIndex: number = currentIndex + 1;
    if (newIndex < imagesToDisplay.length) {
      setCurrentIndex(newIndex);
    }
  };

  const handlePreviousClick = () => {
    const newIndex: number = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
    }
  };

  const imagesToDisplay: string[] = post.additionalImages;
  const currentImage = imagesToDisplay[currentIndex];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
       <div className="bg-rectangle bg-cover bg-center">
      <div className="container px-4 sm:px-6 py-24 mx-auto">
      <div className="lg:w-5/6 mx-auto flex flex-wrap relative">
      <div className="lg:w-1/2 w-full">
              <div className="image-slider pt-7">
                <button
                  className={`slider-button prev-button ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handlePreviousClick}
                  disabled={currentIndex === 0}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="slider-content">
                  <div
                    className="slide rounded-lg"
                    style={{ backgroundImage: `url(${currentImage})` }}
                  ></div>
                  </div>
                <button
                  className={`slider-button next-button ${currentIndex === imagesToDisplay.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleNextClick}
                  disabled={currentIndex === imagesToDisplay.length - 1}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
              <div className="container px-0 py-8 mx-auto">
              <div className="bg-white relative flex-col rounded-xl shadow-lg-2 flex p-6 w-full">
              <h1 className="text-gray-900 text-2xl title-font font-medium mb-4">{t('why-choose-this-property')}</h1>
              <h1 className="leading-relaxed text-base font-normal">{t('the-answer')}</h1>
                </div>
              </div>
              </div>
          <div className="absolute top-12 left-5 z-10 flex flex-col">
        <div className="bg-yellow-100 bg-opacity-80 text-gray-700 py-1 px-2 rounded-lg text-xs mb-2 flex items-center">
        <FontAwesomeIcon icon={faTags} fixedWidth size="2x"/>
        <span className="title-font font-medium text-2xl text-gray-700 pl-2">{post.priceRange}</span>
        </div>
        </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-base title-font text-gray-500">{t('loc')}: {post.location}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{post.title}</h1>
            <div className="flex mb-4">
              <div className="flex flex-col">
                <h1 className='font-medium text-normal mb-3'>{t('mainFeatures')}</h1>
                {post.land ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faBuilding} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-normal">{post.land}</h1>
                </div>
                ): null}
                {post.bedrooms ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faBed} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.bedrooms}</h1>
                </div>
                ): null}
                {post.bathrooms ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faToilet} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.bathrooms}</h1>
                </div>
                ): null}
                {post.floors ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faStairs} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.floors}</h1>
                </div>
                ): null}
                {post.flats ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faBuildingUser} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.flats}</h1>
                </div>
                ): null}
                {post.size ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faArrowsUpDownLeftRight} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.size}</h1>
                </div>
                ): null}
              </div>
              <span className="flex ml-4 pl-4 border-l-2 border-gray-200 space-x-2s">
              <div className="flex flex-col">
              <h1 className='font-medium text-normal mb-3'>{t('distances')}</h1>
              {post.hospital ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faHospital} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.hospital}</h1>
                </div>
              ): null}
              {post.airport ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faPlaneDeparture} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.airport}</h1>
                </div>
              ): null}
               {post.center ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faTreeCity} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.center}</h1>
                </div>
              ): null}
              {post.beach ? (
                <div className="bg-opacity-80 flex items-center">
                  <FontAwesomeIcon icon={faUmbrellaBeach} fixedWidth size="1x" className='pr-2'/>
                  <h1 className="leading-relaxed text-base font-norma">{post.beach}</h1>
                </div>
              ): null}  
              </div>
              </span>
            </div>
            <div className="flex items-center  mb-2 mt-2 border-b-2 border-gray-100"></div>
            <h1 className="leading-relaxed text-base font-normal ">{post.description}</h1>
            <br/>
            <h1 className="leading-relaxed text-base  font-normal">{post.description2}</h1>
            <br/>
            <h1 className="leading-relaxed text-base font-normal">{post.features}</h1>
              <div className="flex items-center mb-2 mt-2 border-b-2 border-gray-100"></div>
            <div className='flex'>
            <FontAwesomeIcon icon={faCalendarCheck} fixedWidth size="1x" className='pt-1'/>
            <h1 className="leading-relaxed text-base font-normal pl-2">{t("start-date")} {post.startDate}</h1>
            <span className="flex ml-4 pl-4 border-l-2 border-gray-200 space-x-2s">
            <FontAwesomeIcon icon={faCalendarXmark} fixedWidth size="1x" className='pt-1'/>
            <h1 className="leading-relaxed text-base font-normal pl-2">{t("end-date")} {post.endDate}</h1>
            </span>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center justify-center">
          <button
              onClick={handleThumbnailPreviousClick}
              disabled={thumbnailIndex <= 0}
              className={`hover:bg-gray-100 py-2 px-4 rounded-l ${thumbnailIndex <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {thumbnailImagesToDisplay.map((image, index) => (
                <a
                  key={index}
                  href={image} // Set the href attribute to the image URL
                  target="_blank" // Opens the link in a new tab/window
                  rel="noopener noreferrer" // Recommended for security
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-32 h-24 rounded-lg cursor-pointer" 
                  />
                </a>
              ))}
            </div>
            <button
              onClick={handleThumbnailNextClick}
              disabled={thumbnailEndIndex >= post.additionalImages.length}
              className={`hover:bg-gray-100 font-bold py-2 px-4 rounded-r ${thumbnailEndIndex >= post.additionalImages.length ? 'opacity-50 cursor-not-allowed' : ''}`}
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

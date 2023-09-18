"use client";
import React from 'react';
import YouTubeVideo from './youtube-video';
import InfoSection from './info-section';
import {useTranslations} from 'next-intl';

const DisplayYoutube: React.FC = () => {
  const t = useTranslations('Index');
  const videoId = "dQw4w9WgXcQ";

  return (
    <InfoSection>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-center lg:p-10 pt-10">
        <div className="lg:w-1/2 lg:mr-10">
          <YouTubeVideo videoId={videoId} />
        </div>

        <div className="lg:w-1/2 lg:ml-10 mt-8 lg:mt-0 p-10">
          <h2 className="sm:text-4xl text-2xl font-semibold title-font text-gray-700 mb-4">{t("video-title")}</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tristique in libero id tempus. Proin non sapien vel justo
            sollicitudin auctor vel eu orci.
          </p>
        </div>
      </div>
    </InfoSection>
  );
};

export default DisplayYoutube;

  // function extractVideoId(url: string) {
  //   // Regular expressions to match YouTube video URLs
  //   const regex1 = /(?:youtube\.com\/watch\?v=|youtu.be\/)([a-zA-Z0-9_-]+)/;
  //   const regex2 = /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]+)/;
  
  //   // Try to match the URL with the regular expressions
  //   const match1 = url.match(regex1);
  //   const match2 = url.match(regex2);
  
  //   // Check if either match was successful and return the video ID
  //   if (match1) {
  //     return match1[1];
  //   } else if (match2) {
  //     return match2[1];
  //   }
  
  //   // Return null if no match was found
  //   return null;
  // }
  
  // const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  // console.log("Before videoId extraction");
  // const videoId = extractVideoId(videoUrl);
  // console.log("After videoId extraction, videoId:", videoId);

  // if (videoId) {
  //   console.log("Video ID:", videoId);
  // } else {
  //   console.log("Invalid YouTube URL");
  // }
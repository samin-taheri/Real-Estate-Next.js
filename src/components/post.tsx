"use client";
import React, { useState } from "react";
import Button from "./button";
import {PostProps} from '@/types';
import {useTranslations} from 'next-intl';

const Post: React.FC<PostProps> = ({ post }) => {
  const t = useTranslations('Index');
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };
  return (
    <div className="relative mb-4 rounded-xl shadow-lg-2 hover:shadow-xl overflow-hidden flex flex-col transition-opacity post-card bg-white" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          src={post.image}
          alt={post.title}
          className="rounded-t-lg w-full h-auto mb-5"
        />
        <div className="absolute top-4 left-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-900 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
        </svg>
          <p className="leading-relaxed pl-1">{post.location}</p>
        </div>
        </div>
        <div className="absolute top-14 left-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-900 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
        </svg>
          <p className="leading-relaxed pl-1">{post.permit}</p>
        </div>
        </div>
        <div className="absolute top-24 left-4 z-10 flex flex-col">
        <div className="bg-yellow-100 bg-opacity-80 text-gray-900 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
          <p className="leading-relaxed">{post.priceRange}</p>
        </div>
        </div>
        <h2 className="text-lg text-gray-700 font-medium title-font mb-2 pl-7">{post.title}</h2>
        <p className="leading-relaxed text-base pl-7 pr-7">{post.description}</p>
        <div className="flex justify-end p-10 mt-auto">
        <a href={`/posts/${post.id}`}>
        <Button className={`hidden-button ${showButton ? "visible" : ""}`}>{t("view-details")}</Button>
        </a>
        </div>
    </div>
  );
};

export default Post;

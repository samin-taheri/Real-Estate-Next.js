"use client";
import React, { useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faFireFlameCurved, faTags } from '@fortawesome/free-solid-svg-icons';
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
          className="rounded-t-lg w-full h-40 mb-5 h-60"
        />
        <div className="absolute top-4 left-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-800 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
          <FontAwesomeIcon icon={faLocationDot} fixedWidth size="lg"/>
          <p className="leading-relaxed pl-1">{post.location}</p>
        </div>
        </div>
        <div className="absolute top-14 left-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-800 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
        <FontAwesomeIcon icon={faFireFlameCurved} fixedWidth size="lg"/>
        <p className="leading-relaxed pl-1">{post.saleOrRent}</p>
        </div>
        </div>
        <div className="absolute top-4 right-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-800 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
        <FontAwesomeIcon icon={faTags} fixedWidth size="lg"/>
        <p className="leading-relaxed pl-1">{post.priceRange}</p>
        </div>
        </div>
        <h2 className="text-lg text-gray-700 font-medium title-font mb-2 pl-7">{post.title}</h2>
        <p className="leading-relaxed text-base pl-7 pr-7">{post.description}</p>
        <div className="flex justify-end p-9 mt-auto">
        <a href={`/posts/${post.id}`}>
        <Button className={`hidden-button ${showButton ? "visible" : ""}`}>{t("view-details")}</Button>
        </a>
        </div>
    </div>
  );
};

export default Post;

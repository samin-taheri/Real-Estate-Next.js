"use client";
import React from "react";
import Post from "./post";
import {PostListProps} from '@/types';
import {useTranslations} from 'next-intl';

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const t = useTranslations('Index');

  return (
    <div className="px-10 py-10 mx-auto container p-10 flex-wrap">
       <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center mt-10">
         <h1 className="sm:text-4xl text-2xl font-semibold title-font text-gray-700">
         {t("post-header")}
         </h1>
       </div>
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 bg-white">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default PostList;

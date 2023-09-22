"use client";
import React from "react";
import Post from "./post";
import {PostListProps} from '@/types';
import {useTranslations} from 'next-intl';

const PostList: React.FC<PostListProps> = ({ posts }) => {
  const t = useTranslations('Index');

  return (
    <div className="px-10 py-10 mx-auto container p-10 flex-wrap">
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default PostList;

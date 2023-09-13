"use client";
import { GetStaticProps, GetStaticPaths } from 'next';
import { PostProps } from '@/types'; 

const PostDetails: React.FC<PostProps> = (context) => {
  

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Post ID: </p>
    </div>
  );
};

export default PostDetails;

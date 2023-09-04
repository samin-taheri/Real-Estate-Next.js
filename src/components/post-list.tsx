import React from "react";
import Post from "./post";

interface PostListProps {
  posts: {
    id: number;
    title: string;
    description: string;
    location: string;
    image: string;
    permit: string;
    priceRange: string;
  }[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="px-10 py-24 mx-auto container p-10 flex-wrap">
       <div className="flex flex-wrap w-full mb-16 flex-col items-center text-center">
         <h1 className="sm:text-4xl text-2xl font-semibold title-font text-gray-700 animate__animated animate__fadeInLeft">
         Choose from over 2000 options
         </h1>
       </div>
    <div className="grid grid-cols-3 gap-5">
      
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      </div>
    </div>
  );
};

export default PostList;

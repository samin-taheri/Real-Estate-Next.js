import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";

interface PostProps {
  post: {
    id: number;
    title: string;
    description: string;
    location: string;
    image: string;
    permit: string;
    priceRange: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="relative mb-4 rounded-xl shadow-md overflow-hidden flex flex-col">
        <img
          src={post.image}
          alt={post.title}
          className="rounded-t-lg w-full h-auto mb-5"
        />
        <div className="absolute top-4 left-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-900 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          <p className="leading-relaxed">{post.location}</p>
        </div>
        </div>
        <div className="absolute top-14 left-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-900 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
        <FontAwesomeIcon icon={faFireAlt} className="mr-2" />
          <p className="leading-relaxed">{post.permit}</p>
        </div>
        </div>
        <div className="absolute top-52 left-4 z-10 flex flex-col">
        <div className="bg-white bg-opacity-80 text-gray-900 py-1 px-2 rounded-2xl text-xs mb-2 flex items-center">
          <p className="leading-relaxed">{post.priceRange}</p>
        </div>
        </div>
    <h2 className="text-lg text-gray-700 font-medium title-font mb-2 pl-7">{post.title}</h2>
    <p className="leading-relaxed text-base pl-7 pr-7">{post.description}</p>
    <div className="flex justify-end p-7 mt-auto">
      <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg ">View More</button>
    </div>
    </div>

  );
};

export default Post;

"use client";
import Button from '@/components/button';
import React from 'react';;
import { useParams } from 'next/navigation';

const posts = [
  { id: 1, title: "Complex on the first line", description: "Sale! Alanya, Mahmutlar. We bring to your attention a new project on the first line with a high investment value. ", image: "/post-3.jpg", location: "Mahmutlar", permit: "Residence Permit", priceRange: "apartments from 165000 €" },
  { id: 2, title: "Luxury complex", description: "Luxurious complex on the territory of 76,000 m2 in the village of Turkler. 15 km from the center of Alanya. ", image: "/post-2.jpg", location: "Kargicak", permit: "P", priceRange: "apartments from 165000 €"},
  { id: 3, title: "EDITION", description: "The project is located in the Kargicak district, the total area of ​​the project is 2,300 m2, it consists of one block. ", image: "/post-4.jpg", location: "Avsalar", permit: "Residence Permit", priceRange: "apartments from 165000 €"},
  { id: 4, title: "Luxury residential complex on the first line", description: "Residential complex with infrastructure on the first line in installments", image: "/post-5.jpg", location: "Mahmutlar", permit: "Residence Permit", priceRange: "apartments from 165000 €"},
  { id: 5, title: "Konak Premium", description: "Luxurious complex on the territory of 76,000 m2 in the village of Turkler. 15 km from the center of Alanya. ", image: "/post-6.jpg", location: "Mahmutlar", permit: "P", priceRange: "apartments from 165000 €"},
  { id: 6, title: "Hills", description: "Apartments 1+1 ,2+1 ,3+1 at a bargain price in Avsallar with infrastructure in Avsallar with infrastructure", image: "/post-7.jpg", location: "Mahmutlar", permit: "Residence Permit", priceRange: "apartments from 165000 €"},
];

const PostDetailPage: React.FC = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id as string, 10));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
       <div className="bg-rectangle bg-cover bg-center">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={post.image} alt={post.title}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Location: {post.location}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{post.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
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
            <h2 className="text-sm title-font text-gray-500 tracking-widest">Permit: {post.permit}</h2>
            <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
            </div>
            <p className="leading-relaxed">{post.description}</p>
            <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
            </div>
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">{post.priceRange}</span>
              <div>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
</section>
  );
};

export default PostDetailPage;

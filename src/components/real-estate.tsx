"use client";
import React from "react";
import PostList from "../components/post-list";
import Button from "./button";
import {useTranslations} from 'next-intl';

const RealEstatePage: React.FC = () => {
  const t = useTranslations('Index');

  const posts = [
    { id: 1, title: "Complex on the first line", description: "Sale! Alanya, Mahmutlar. We bring to your attention a new project on the first line with a high investment value. ", image: "/post-3.jpg", location: "Mahmutlar", permit: "Residence Permit", priceRange: "apartments from 165000 €" },
    { id: 2, title: "Luxury complex", description: "Luxurious complex on the territory of 76,000 m2 in the village of Turkler. 15 km from the center of Alanya. ", image: "/post-2.jpg", location: "Kargicak", permit: "P", priceRange: "apartments from 165000 €"},
    { id: 3, title: "EDITION", description: "The project is located in the Kargicak district, the total area of ​​the project is 2,300 m2, it consists of one block. ", image: "/post-4.jpg", location: "Avsalar", permit: "Residence Permit", priceRange: "apartments from 165000 €"},
    { id: 4, title: "Luxury residential complex on the first line", description: "Residential complex with infrastructure on the first line in installments", image: "/post-5.jpg", location: "Mahmutlar", permit: "Residence Permit", priceRange: "apartments from 165000 €"},
    { id: 5, title: "Konak Premium", description: "Luxurious complex on the territory of 76,000 m2 in the village of Turkler. 15 km from the center of Alanya. ", image: "/post-6.jpg", location: "Mahmutlar", permit: "P", priceRange: "apartments from 165000 €"},
    { id: 6, title: "Hills", description: "Apartments 1+1 ,2+1 ,3+1 at a bargain price in Avsallar with infrastructure in Avsallar with infrastructure", image: "/post-7.jpg", location: "Mahmutlar", permit: "Residence Permit", priceRange: "apartments from 165000 €"},
  ];

  return (
    <section id="property">
      <PostList posts={posts} />
      <div className="flex justify-center">
      <a href="/view-more">
      <Button
        className="px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg flex flex-row"
        iconRight={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
      </svg>
      }>{t("view-more")}
      </Button>
      </a>
      </div>
    </section>
  );
};

export default RealEstatePage;

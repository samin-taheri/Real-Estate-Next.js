"use client";
import React from "react";
import PostList from "../components/post-list";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
    <div>
      <PostList posts={posts} />
      <div className="flex justify-center">

      <Button
        className="px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
        iconRight={<FontAwesomeIcon icon={faArrowRight} className="ml-2"/>}>{t("view-more")}
      </Button>
      </div>
    </div>
  );
};

export default RealEstatePage;

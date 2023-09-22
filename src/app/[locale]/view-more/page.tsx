"use client";
import React from "react";
import PostList from "@/components/post-list";
import {useTranslations} from 'next-intl';

const ViewMore: React.FC = () => {
  const t = useTranslations('Index');

  const posts = [
    { id: 1, title: t('1-posts-title'), description: t('1-posts-desc'), image: "/1-1.jpg", location: "Kargicak", priceRange: t('1-posts-price'), saleOrRent: "For Sale" },
    { id: 2, title: t('2-posts-title'), description: t('2-posts-desc'), image: "/2-1.jpg", location: "Alanya", priceRange: t('2-posts-price'), saleOrRent: "For Sale"  },
    { id: 3, title: t('3-posts-title'), description: t('3-posts-desc'), image: "/3-17.jpg", location: "Alanya", priceRange: t('3-posts-price'), saleOrRent: "For Sale"  },
    { id: 4, title: t('4-posts-title'), description: t('4-posts-desc'), image: "/4-9.jpg", location: "Oba", priceRange: t('4-posts-price'), saleOrRent: "For Sale"  },
    { id: 5, title: t('5-posts-title'), description: t('5-posts-desc'), image: "/5-1.jpg", location: "Demirtaş", priceRange: t('5-posts-price'), saleOrRent: "For Sale"  },
    { id: 6, title: t('6-posts-title'), description: t('6-posts-desc'), image: "/6-1.jpg", location: "Kargicak", priceRange: t('6-posts-price'), saleOrRent: "For Sale"  },
  ];

  return (
    <section id="property">
      <div className="bg-rectangle bg-cover bg-centers">
         <h1 className="sm:text-4xl text-2xl font-semibold title-font text-gray-700 items-center text-center pt-20">
         {t("post-header")}
         </h1>
      <PostList posts={posts} />
      <div className="flex justify-center">
      </div>
      </div>
    </section>
  );
};

export default ViewMore;

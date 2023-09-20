"use client";
import React from "react";
import PostList from "../components/post-list";
import Button from "./button";
import {useTranslations} from 'next-intl';

const RealEstatePage: React.FC = () => {
  const t = useTranslations('Index');

  const posts = [
    { id: 1, title: t('1-posts-title'), description: t('1-posts-desc'), image: "/1-1.jpg", location: "Kargicak", priceRange: t("1-posts-price"), saleOrRent: "For Sale" },
    { id: 2, title: t('2-posts-title'), description: t('2-posts-desc'), image: "/2-1.jpg", location: "Alanya", priceRange: t("2-posts-price"), saleOrRent: "For Sale"  },
    { id: 3, title: t('3-posts-title'), description: t('3-posts-desc'), image: "/3-17.jpg", location: "Alanya", priceRange: t("3-posts-price"), saleOrRent: "For Sale"  },
    { id: 4, title: t('4-posts-title'), description: t('4-posts-desc'), image: "/4-9.jpg", location: "Oba", priceRange: t("4-posts-price"), saleOrRent: "For Sale"  },
    { id: 5, title: t('5-posts-title'), description: t('5-posts-desc'), image: "/5-1.jpg", location: "Demirtaş", priceRange: t("5-posts-price"), saleOrRent: "For Sale"  },
    { id: 6, title: t('6-posts-title'), description: t('6-posts-desc'), image: "/6-1.jpg", location: "Kargicak", priceRange: t("6-posts-price"), saleOrRent: "For Sale"  },
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

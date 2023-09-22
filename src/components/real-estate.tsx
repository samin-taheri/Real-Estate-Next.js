"use client";
import React, { useState } from "react";
import PostList from "../components/post-list";
import Button from "./button";
import { useTranslations } from "next-intl";

const RealEstatePage: React.FC = () => {
  const t = useTranslations("Index");

  const posts = [
    { id: 1, title: t("1-posts-title"), description: t("1-posts-desc"), image: "/1-2.jpg", location: "Kargicak", priceRange: "850000", saleOrRent: "For Sale" },
    { id: 2, title: t("2-posts-title"), description: t("2-posts-desc"), image: "/2-3.jpg", location: "Alanya", priceRange: "110000", saleOrRent: "For Sale" },
    { id: 3, title: t("3-posts-title"), description: t("3-posts-desc"), image: "/3-17.jpg", location: "Alanya", priceRange: "196500", saleOrRent: "For Sale" },
    { id: 4, title: t("4-posts-title"), description: t("4-posts-desc"), image: "/4-2.jpg", location: "Oba", priceRange: "249750", saleOrRent: "For Sale" },
    { id: 5, title: t("5-posts-title"), description: t("5-posts-desc"), image: "/5-1.jpg", location: "Demirtaş", priceRange: "104750", saleOrRent: "For Sale" },
    { id: 6, title: t("6-posts-title"), description: t("6-posts-desc"), image: "/6-1.jpg", location: "Kargicak", priceRange: "104750", saleOrRent: "For Sale" },
  ];

  // const price = ["850000", "110000", "196500","249750", "104750", "104750"]
  // const [posts, setPosts] = useState(initialPosts);
  // const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);

  // const filterPostsByPriceRange = (priceRange: number | null) => {
  //   setSelectedPriceRange(priceRange); // Update the selected price range
  //   if (priceRange !== null) {
  //     const filteredPosts = initialPosts.filter(post => {
  //       const numericPrice = parseFloat(post.priceRange); // Remove non-numeric characters
  //       if (priceRange === 75000) {
  //         return numericPrice >= 50000 && numericPrice <= 75000;
  //       } else if (priceRange === 150000) {
  //         return numericPrice >= 75000 && numericPrice <= 150000;
  //       } else if (priceRange === 250000) {
  //         return numericPrice >= 150000 && numericPrice <= 250000;
  //       } else if (priceRange === 400000) {
  //         return numericPrice >= 250000 && numericPrice <= 400000;
  //       }
  //       return false;
  //     });
  //     setPosts(filteredPosts);
  //   } else {
  //     // If no price range is selected, show all posts
  //     setPosts(initialPosts);
  //   }
  // };

  return (
    <section id="property">
      {/* <div className="flex flex-wrap justify-center mb-4">
        <div className="mb-2 pr-2">
          <button
            className={`px-4 py-2 text-white rounded-lg ${selectedPriceRange === null ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => filterPostsByPriceRange(null)}
          >
            All Posts
          </button>
        </div>
        <div className="mb-2 pr-2">
          <button
            className={`px-4 py-2 text-white rounded-lg ${selectedPriceRange === 75000 ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => filterPostsByPriceRange(75000)}
          >
           From 50-75,000 €
          </button>
        </div>
        <div className="mb-2 pr-2">
          <button
            className={`px-4 py-2 text-white rounded-lg ${selectedPriceRange === 150000 ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => filterPostsByPriceRange(150000)}
          >
            From 75-150,000 €
          </button>
        </div>
        <div className="mb-2 pr-2">
          <button
            className={`px-4 py-2 text-white rounded-lg ${selectedPriceRange === 250000 ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => filterPostsByPriceRange(250000)}
          >
            From 150-250,000 €
          </button>
        </div>
        <div className="mb-2">
          <button
            className={`px-4 py-2 text-white rounded-lg ${selectedPriceRange === 400000 ? "bg-yellow-500" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => filterPostsByPriceRange(400000)}
          >
           From 250-400,000 €
          </button>
        </div>
      </div> */}
 <PostList posts={posts} />
      {/* {posts.length > 0 ? (
       
      ) : (
        <div className="flex flex-wrap w-full flex-col items-center text-center mt-24">
            <div className="sm:text-4xl text-2xl font-semibold title-font text-gray-700">
              No post found!
            </div>
            <img alt="team" className="flex-shrink-0 rounded-lg object-cover object-center sm:mb-0 mb-4 w-1/3 pb-4" src="/not-found.jpg" />
        </div>
      )} */}

<a href="/view-more">
      <Button
        className="px-10 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg flex flex-row"
        iconRight={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
      </svg>
      }>{t("view-more")}
      </Button>
      </a>
    </section>
  );
};


export default RealEstatePage;

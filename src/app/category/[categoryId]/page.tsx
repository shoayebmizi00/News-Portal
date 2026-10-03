import { NewsArticle } from "@/app/type";
import NewsCard from "@/componets/NewsCard";
import React from "react";

const fetchPromise = async (categoryId: string) => {
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`
  );

  return res.json();
};

const CategoryNews = async ({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) => {
  const { categoryId } = await params;

  const {data, title} = await fetchPromise(categoryId);


  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-red-800 border-b-3">{title}</h2>
      <div className="grid grid-cols-3 gap-4 my-8">
        {
          data.map((n: NewsArticle, i: number) => (
            <NewsCard key={i} firstNews={{ ...n, type: "article" }} />
          ))
        }
      </div>
    </div>
  );
};

export default CategoryNews;
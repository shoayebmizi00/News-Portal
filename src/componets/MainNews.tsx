import { MainNewsArticle } from "@/app/type";
import Image from "next/image";
import React from "react";

const MainNews = ({ news }: { news: MainNewsArticle[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-5">
        
        {/* Main News */}
        <div className="w-full lg:w-1/2">
          <div className="card bg-base-100 shadow-sm h-full">
            <figure className="w-full">
              <Image
                height={500}
                width={800}
                src={firstNews.imageUrl}
                alt={firstNews.imageAlt || firstNews.title}
                className="w-full h-56 sm:h-72 lg:h-80 object-cover"
              />
            </figure>

            <div className="card-body">
              <p className="text-red-800 font-bold text-sm sm:text-base">
                {firstNews.category}
              </p>

              <h2 className="card-title text-lg sm:text-xl lg:text-2xl">
                {firstNews.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-600">
                {firstNews.description}
              </p>
            </div>
          </div>
        </div>

        {/* Other News */}
        <div className="w-full lg:w-1/2 space-y-3">
          {otherNews.slice(0, 4).map((n) => (
            <div
              className="border rounded-2xl border-gray-300 p-4 sm:p-5 bg-gray-100 hover:bg-gray-200 transition"
              key={n.id}
            >
              <p className="text-red-800 font-bold text-sm mb-1">
                {n.category}
              </p>

              <p className="text-sm sm:text-base font-medium">
                {n.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MainNews;
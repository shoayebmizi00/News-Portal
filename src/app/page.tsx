import MainNews from "@/componets/MainNews";
import Marquee from "@/componets/Marquee";
import React from "react";
import { NewsSection } from "./type";
import NewsCard from "@/componets/NewsCard";
import MostRead from "@/componets/MostRead";

const fetchPromise = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  return res.json();
};

const HomePage = async () => {
  const { data } = await fetchPromise();
  const mainNews = data[0].articles;
  const otherSections = data.slice(1);
  return (
    <div>
      <Marquee />

      <div className="container mx-auto grid grid-cols-3 my-5">
        {/* News section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="my-10 mx-4">
            {otherSections.map((n: NewsSection, index: number) => (
              <div key={index}>
                <h1 className="font-bold border-b-3 border-red-700 mb-5">{n.title}</h1>
                <div className="grid grid-cols-3 gap-4">
                  {n.articles.map((news) => (
                    <NewsCard
                      key={news.id}
                      firstNews={{ ...news, type: "article" }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Most Read section */}
        <div className="col-span-1">
          <MostRead/>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

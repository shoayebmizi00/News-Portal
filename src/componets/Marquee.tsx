import { NewsArticle } from "@/app/type";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const fetchPromise = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  return res.json();
};

const Marquee = async () => {
  const { data } = await fetchPromise();
  return (
    <div className="bg-red-700 ">
      <div className="py-1 text-white container mx-auto">
        <div className="flex items-center">
          <div className="bg-red-600 text-white px-2 ">সর্বশেষ</div>
          <MarqueeText direction="right" duration={10}>
            {data.map((n: NewsArticle, i: number) => (
              <React.Fragment key={i}>
                <span className="">{n.title}</span>
                <span className="mx-5">•</span>
              </React.Fragment>
            ))}
          </MarqueeText>
        </div>
      </div>
    </div>
  );
};

export default Marquee;

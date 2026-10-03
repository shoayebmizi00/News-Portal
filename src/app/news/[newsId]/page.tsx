import Image from "next/image";
import React from "react";

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();
  const news = data.data;

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto bg-base-100 rounded-2xl shadow-lg overflow-hidden">
        
        {/* Image */}
        {news.imageUrl && (
          <div className="relative w-full h-60 sm:h-80 md:h-100">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-5 sm:p-8">
          
          {/* Category / Topics */}
          <div className="flex flex-wrap gap-2 mb-4">
            {news.topics?.map((topic: { id: string; name: string }) => (
              <span
                key={topic.id}
                className="px-3 py-1 text-sm font-semibold text-red-700 bg-red-100 rounded-full"
              >
                {topic.name}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {news.title}
          </h1>

          {/* Byline */}
          {news.byline?.length > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              By {news.byline.join(", ")}
            </p>
          )}

          {/* Published date */}
          <p className="mt-2 text-sm text-gray-500">
            Published:{" "}
            {new Date(news.firstPublished).toLocaleDateString("en-BD", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {/* Divider */}
          <div className="border-b border-gray-200 my-6" />

          {/* Description */}
          {news.text && (
            <p className="text-base sm:text-lg font-medium leading-8 text-gray-700 mb-8">
              {news.text}
            </p>
          )}

          {/* Article Body */}
          <div className="space-y-6">
            {news.body?.map((item: any, index: number) => {
              
              if (item.type === "text") {
                return (
                  <p
                    key={index}
                    className="text-base sm:text-lg leading-8 text-gray-800"
                  >
                    {item.text}
                  </p>
                );
              }

              if (item.type === "subheading") {
                return (
                  <h2
                    key={index}
                    className="text-xl sm:text-2xl font-bold mt-8"
                  >
                    {item.text}
                  </h2>
                );
              }

              if (item.type === "image" && item.url) {
                return (
                  <figure key={index} className="my-8">
                    <Image
                      src={item.url}
                      alt={item.altText || news.title}
                      width={item.width || 800}
                      height={item.height || 500}
                      className="w-full rounded-xl object-cover"
                    />

                    {item.caption && (
                      <figcaption className="text-sm text-gray-500 mt-2">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              return null;
            })}
          </div>

        </div>
      </article>
    </div>
  );
};

export default NewsDetailsPage;
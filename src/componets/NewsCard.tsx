import { MainNewsArticle } from "@/app/type";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ firstNews }: { firstNews: MainNewsArticle }) => {
  return (
    <Link href={`/news/${firstNews.id}`}>
      <div>
        <div>
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
      </div>
    </Link>
  );
};

export default NewsCard;

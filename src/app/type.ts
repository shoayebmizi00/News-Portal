export type NewsCategory = {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
};

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface NewsSection {
  title: string;
  articles: NewsArticle[];
}

export interface MainNewsArticle {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: "article";
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface MostReadNewsArticle {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string | null;
  imageAlt: string | null;
  category: string;
  type: "article";
  isLive: boolean;
  firstPublished: string;
  lastPublished: string | null;
  source: string;
  rank: number;
}
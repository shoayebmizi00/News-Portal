export interface Article {
  id: string;
  title: string;
  description: {
    blocks: DescriptionBlock[];
  };
  link: string;
  firstPublished: string;
  lastPublished: string | null;
  byline: string[];
  topics: Topic[];
  tags: string[];
  imageUrl: string;
  body: BodyBlock[];
  text: string;
}

export interface DescriptionBlock {
  type: string;
  model: {
    blocks: {
      type: string;
      model: {
        text: string;
        blocks: {
          type: string;
          model: {
            text: string;
            attributes: unknown[];
          };
        }[];
      };
    }[];
  };
}

export interface Topic {
  id: string;
  name: string;
}

export interface BodyBlock {
  type: "image" | "text" | "subheading";
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
  text?: string;
}

export interface ArticleResponse {
  success: boolean;
  cachedAt: string;
  data: Article;
}
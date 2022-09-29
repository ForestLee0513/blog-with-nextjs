import type { MDXRemoteSerializeResult } from "next-mdx-remote";

type ArticleType = {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    coverImage: string;
    ogImage: string;
  };
  excerpt: string;
  slug: string;
  readingTime: string;
  content: string;
  isMdx: boolean;
  mdxSource: Promise<MDXRemoteSerializeResult>;
};

export default ArticleType;

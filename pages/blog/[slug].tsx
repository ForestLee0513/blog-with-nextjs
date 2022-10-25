import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";

import { MDXRemote } from "next-mdx-remote";
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

import type ArticleType from "../../interfaces/article";
import { getAllArticles, getArticleFromSlug } from "../../lib/markdownParser";
import Test from "../../components/test";
import MarkdownRenderer from "../../components/MarkdownRenderer";

const components = {
  Test,
};

type Props = {
  // morePosts: ArticleType[];
  // preview?: boolean;
  article: ArticleType;
};

export default function Post({ article }: Props) {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return <MarkdownRenderer article={article} components={components} />;
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const article = await getArticleFromSlug(params.slug, "_data/blog");

  return {
    props: {
      article,
      isFallback: false,
    },
  };
}

export async function getStaticPaths() {
  const articles = await getAllArticles("_data/blog");

  return {
    paths: articles.map((article: ArticleType) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: false,
  };
}

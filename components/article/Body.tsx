import Head from "next/head";
import ErrorPage from "next/error";

import { MDXRemote } from "next-mdx-remote";
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import ArticleType from "~/types/article";
import { useRouter } from "next/router";

import * as AllComponents from "../index";

interface Props {
  article: ArticleType;
}

const components = AllComponents;

const Body = ({ article }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {article.isMdx ? (
        <MDXRemote
          compiledSource={""}
          {...article.mdxSource}
          components={components}
        />
      ) : (
        <ReactMarkdown
          remarkPlugins={[remarkHtml, remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
          {article.content}
        </ReactMarkdown>
      )}
    </>
  );
};

export default Body;

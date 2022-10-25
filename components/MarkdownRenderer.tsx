import Head from "next/head";

import { MDXRemote } from "next-mdx-remote";
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import ArticleType from "../interfaces/article";

interface Props {
  article: ArticleType;
  components?: { [key: string]: () => JSX.Element };
}

const MarkdownRenderer = ({ article, components }: Props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://highlightjs.org/static/demo/styles/atom-one-dark.css"
        />
      </Head>
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

export default MarkdownRenderer;

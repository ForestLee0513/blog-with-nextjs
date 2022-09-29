import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { MDXRemote } from "next-mdx-remote";
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import type ArticleType from "../../interfaces/article";
import { getAllArticles, getArticleFromSlug } from "../../lib/markdownParser";
import Test from "../../components/test";

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

  // 만약 MDX일 경우 MDXRemote로 컴포넌트 출력
  if (article.isMdx) {
    return (
      <MDXRemote
        compiledSource={""}
        {...article.mdxSource}
        components={components}
      />
    );
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkHtml, remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {article.content}
    </ReactMarkdown>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const article = await getArticleFromSlug(params.slug);

  return {
    props: {
      article,
      isFallback: false,
    },
  };
}

export async function getStaticPaths() {
  const articles = await getAllArticles();

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

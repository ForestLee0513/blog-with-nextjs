import { useRouter } from "next/router";
import ErrorPage from "next/error";

import ArticleType from "../interfaces/article";
import { getArticleFromSlug } from "../lib/markdownParser";
import MarkdownRenderer from "../components/MarkdownRenderer";

type Props = {
  article: ArticleType;
};

const Resume = ({ article }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return <MarkdownRenderer article={article} />;
};

export async function getStaticProps() {
  const article = await getArticleFromSlug("resume", "_data");

  return {
    props: {
      article,
      isFallback: false,
    },
  };
}

export default Resume;

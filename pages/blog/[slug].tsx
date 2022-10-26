import type ArticleType from "../../interfaces/article";
import { getAllArticles, getArticleFromSlug } from "../../lib/markdownParser";
import Test from "../../components/test";
import Body from "../../components/article/Body";
import Header from "../../components/article/Header";
import AuthorCard from "../../components/article/AuthorCard";

const components = {
  Test,
};

type Props = {
  // morePosts: ArticleType[];
  // preview?: boolean;
  article: ArticleType;
};

export default function Post({ article }: Props) {
  const {
    frontmatter: { title, date, description },
    readingTime,
  } = article;
  return (
    <>
      <Header
        title={title}
        date={date}
        readingTime={readingTime}
        description={description}
      />
      <Body article={article} components={components} />
      <AuthorCard />
    </>
  );
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

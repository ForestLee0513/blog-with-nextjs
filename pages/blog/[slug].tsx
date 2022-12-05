import type ArticleType from "~/types/article";
import { getAllArticles, getArticleFromSlug } from "~/lib/markdownParser";
import { Body, Header, AuthorCard } from "~/components/article";
import HeadMeta from "~/components/HeadMeta";
import { GetStaticPathsContext, GetStaticPropsContext } from "next";

type Props = {
  // morePosts: ArticleType[];
  // preview?: boolean;
  article: ArticleType;
};

export default function BlogArticle({ article }: Props) {
  const {
    frontmatter: { title, date, description },
    readingTime,
  } = article;
  return (
    <>
      <HeadMeta
        title={title}
        description={description}
        useDyanmicThumbnail={true}
      />
      <Header
        title={title}
        date={date}
        readingTime={readingTime}
        description={description}
      />
      <Body article={article} />
      <AuthorCard />
    </>
  );
}

interface IParams extends GetStaticPropsContext {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params, locale }: IParams) {
  const article = await getArticleFromSlug(
    params.slug,
    "_data/blog",
    locale as string
  );

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

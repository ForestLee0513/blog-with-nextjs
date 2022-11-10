import type ArticleType from "~/types/article";
import { getAllArticles, getArticleFromSlug } from "~/lib/markdownParser";
import { Body, Header, AuthorCard } from "~/components/article";
import HeadMeta from "~/components/HeadMeta";
import { GetStaticPropsContext } from "next";

type Props = {
  article: ArticleType;
};

export default function ProjectArticle({ article }: Props) {
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

export async function getStaticProps({ params: { slug }, locale }: IParams) {
  const article = await getArticleFromSlug(
    slug,
    "_data/projects",
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
  const articles = await getAllArticles("_data/projects");

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

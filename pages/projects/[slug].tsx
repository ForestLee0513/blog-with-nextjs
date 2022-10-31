import type ArticleType from "../../interfaces/article";
import { getAllArticles, getArticleFromSlug } from "../../lib/markdownParser";
import { Body, Header, AuthorCard } from "../../components/article";
import HeadMeta from "../../components/HeadMeta";

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

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const article = await getArticleFromSlug(params.slug, "_data/projects");

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

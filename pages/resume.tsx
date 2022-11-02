import ArticleType from "../interfaces/article";
import { getArticleFromSlug } from "../lib/markdownParser";
import { Body, Header } from "../components/article";
import HeadMeta from "../components/HeadMeta";
import { GetStaticPropsContext } from "next";

type Props = {
  article: ArticleType;
};

const Resume = ({ article }: Props) => {
  const {
    frontmatter: { title, date, description },
    readingTime,
  } = article;

  return (
    <>
      <HeadMeta title="Resume" useDyanmicThumbnail={false} />
      <Header
        title={title}
        date={date}
        readingTime={readingTime}
        description={description}
      />
      <Body article={article} />
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const article = await getArticleFromSlug("resume", "_data", locale as string);

  return {
    props: {
      article,
      isFallback: false,
    },
  };
}

export default Resume;

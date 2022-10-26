import ArticleType from "../interfaces/article";
import { getArticleFromSlug } from "../lib/markdownParser";
import { Body, Header } from "../components/article";

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

import ArticleType from "../interfaces/article";
import { getArticleFromSlug } from "../lib/markdownParser";
import Body from "../components/article/Body";

type Props = {
  article: ArticleType;
};

const Resume = ({ article }: Props) => {
  return <Body article={article} />;
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

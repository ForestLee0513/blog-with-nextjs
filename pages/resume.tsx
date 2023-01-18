import ArticleType from "~/types/article";
import { getArticleFromSlug } from "~/lib/markdownParser";
import { Body, Header } from "~/components/article";
import HeadMeta from "~/components/HeadMeta";
import { GetStaticPropsContext } from "next";

type Props = {
  article: ArticleType;
};

const Resume = ({ article }: Props) => {
  if (article) {
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
  }

  return (
    <>
      <h1>추가된 이력서가 없습니다.</h1>
      <p>_data/[locale] 폴더에 이력서를 추가 해주세요.</p>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const article = await getArticleFromSlug(
    "resume",
    `_data/${locale}`,
    locale as string
  );

  if (article) {
    return {
      props: {
        article,
        isFallback: false,
      },
    };
  }
  return {
    props: {
      isFallback: false,
    },
  };
}

export default Resume;

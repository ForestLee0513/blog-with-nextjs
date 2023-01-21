import { GetStaticPropsContext } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import { getAllLocaledArticles } from "~/lib/markdownParser";
import Post from "~/types/article";
import { AuthorCard, List } from "~/components/article";
import bio from "~/bio";
import HeadMeta from "~/components/HeadMeta";

type Props = {
  articles: Post[];
};

const Index = ({ articles }: Props) => {
  const { t } = useTranslation("common");

  return (
    <div>
      <HeadMeta useDyanmicThumbnail={false} />
      <main>
        {/* <h1>Welcome to {bio.username}&#39;s Page</h1> */}
        <h1>{t("title", { username: bio.username })}</h1>
        <AuthorCard />
        <List
          route="/blog"
          articles={articles}
          emptyErrorMessage={t("articleEmptyError")}
        />
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const articles = await getAllLocaledArticles(
    `_data/${locale}/blog`,
    locale as string
  );

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default Index;

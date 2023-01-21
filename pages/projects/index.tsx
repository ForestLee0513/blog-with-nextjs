import { GetStaticPropsContext } from "next";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { List } from "~/components/article";
import { getAllLocaledArticles } from "~/lib/markdownParser";
import HeadMeta from "~/components/HeadMeta";
import Post from "~/types/article";

type Props = {
  articles: Post[];
};

const Projects = ({ articles }: Props) => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <HeadMeta title="Projects" useDyanmicThumbnail={false} />
      <h1>{t("title")}</h1>
      <main>
        <List
          route="/projects"
          articles={articles}
          emptyErrorMessage={t("projectsEmptyError")}
        />
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const articles = await getAllLocaledArticles(
    `_data/${locale}/projects`,
    locale as string
  );

  return {
    props: {
      articles,
      ...(await serverSideTranslations(locale as string, ["projects"])),
    },
  };
};

export default Projects;

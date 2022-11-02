import { getAllLocaledArticles } from "../../lib/markdownParser";
import HeadMeta from "../../components/HeadMeta";

import Post from "../../interfaces/article";
import { List } from "../../components/article";
import { GetStaticPropsContext } from "next";

type Props = {
  articles: Post[];
};

const Projects = ({ articles }: Props) => {
  return (
    <div>
      <HeadMeta title="Projects" useDyanmicThumbnail={false} />
      <main>
        <h1>Projects</h1>
        <List
          route="/projects"
          articles={articles}
          emptyErrorMessage="아직 공개된 프로젝트가 없습니다."
        />
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const articles = await getAllLocaledArticles(
    "_data/projects",
    locale as string
  );

  return { props: { articles } };
};

export default Projects;

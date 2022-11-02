import { GetStaticPropsContext } from "next";

import { getAllLocaledArticles } from "../lib/markdownParser";
import Post from "../interfaces/article";
import { AuthorCard, List } from "../components/article";
import bio from "../bio";
import HeadMeta from "../components/HeadMeta";

type Props = {
  articles: Post[];
};

const Index = ({ articles }: Props) => {
  return (
    <div>
      <HeadMeta useDyanmicThumbnail={false} />
      <main>
        <h1>Welcome to {bio.username}&#39;s Page</h1>
        <AuthorCard />
        <List
          route="/blog"
          articles={articles}
          emptyErrorMessage="아직 공개된 글이 없습니다."
        />
      </main>
    </div>
  );
};

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  const articles = await getAllLocaledArticles("_data/blog", locale as string);

  return { props: { articles } };
};

export default Index;

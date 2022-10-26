import Link from "next/link";

import ArticleType from "../../interfaces/article";

interface Props {
  articles: ArticleType[];
  emptyErrorMessage?: string;
}

const List = ({ articles, emptyErrorMessage }: Props) => {
  return articles.length > 0 || Array.isArray(articles) ? (
    <ul className="p-0 list-none">
      {articles.map((article: ArticleType, index) => {
        return (
          <Link href={`/projects/${article.slug}`} passHref key={index}>
            <li>
              <h3>{article.frontmatter.title}</h3>
              <p>{article.frontmatter.description}</p>
              <p>{article.readingTime}</p>
              <hr />
            </li>
          </Link>
        );
      })}
    </ul>
  ) : (
    <p>{emptyErrorMessage || "글이 존재하지 않습니다."}</p>
  );
};

export default List;

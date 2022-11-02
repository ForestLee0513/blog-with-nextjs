import Link from "next/link";

import ArticleType from "../../interfaces/article";

interface Props {
  articles: ArticleType[];
  route: string;
  emptyErrorMessage?: string;
}

const List = ({ articles, route, emptyErrorMessage }: Props) => {
  return articles.length > 0 || Array.isArray(articles) ? (
    <ul className="p-0 list-none">
      {articles.map((article: ArticleType, index) => {
        const {
          frontmatter: { title, description, date },
          readingTime,
        } = article;

        return (
          <Link href={`${route}/${article.slug}`} passHref key={index}>
            <li>
              <h3>{title}</h3>
              <p>{description}</p>
              작성일: {date} <span>({readingTime})</span>
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

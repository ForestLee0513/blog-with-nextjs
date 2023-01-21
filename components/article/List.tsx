import Link from "next/link";

import ArticleType from "~/types/article";

interface Props {
  articles: ArticleType[];
  route: string;
  emptyErrorMessage?: string | null;
}

const List = ({ articles, route, emptyErrorMessage }: Props) => {
  return articles.length > 0 && Array.isArray(articles) ? (
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
              {date} <span>({readingTime})</span>
              <hr />
            </li>
          </Link>
        );
      })}
    </ul>
  ) : (
    <p>{emptyErrorMessage || "A published articles are not exists."}</p>
  );
};

export default List;

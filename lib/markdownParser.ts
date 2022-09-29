import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import { serialize } from "next-mdx-remote/serialize";

// postsPath 변수를 기준으로 폴더 조회 후 md, mdx가 존재하면 배열로 반환
const postsPath = join(process.cwd(), "_data/blog");

export function getSlug() {
  const paths = sync(`${postsPath}/*.{md,mdx}`);

  return paths.map((path: string) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

// slug를 기준으로 article 정보 조회(frontmatter)
export async function getArticleFromSlug(slug: string) {
  const articleMdPath = join(postsPath, `${slug}.md`);
  const articleMdxPath = join(postsPath, `${slug}.mdx`);
  const source = fs.existsSync(articleMdxPath)
    ? fs.readFileSync(articleMdxPath)
    : fs.readFileSync(articleMdPath);
  const { content, data } = matter(source);

  return JSON.parse(
    JSON.stringify({
      frontmatter: data,
      readingTime: readingTime(content).text,
      mdxSource: fs.existsSync(articleMdxPath)
        ? await serialize(content)
        : null,
      isMdx: fs.existsSync(articleMdxPath),
      slug,
      content,
    })
  );
}

// 모든 article 정보 조회
export async function getAllArticles() {
  return await Promise.all(getSlug().map((slug) => getArticleFromSlug(slug)));
}

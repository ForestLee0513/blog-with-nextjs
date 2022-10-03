import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import { serialize } from "next-mdx-remote/serialize";

export function getSlug(folderPath: string) {
  if (!folderPath) {
    throw new Error("Required: No folder path");
  }

  const paths = sync(`${folderPath}/*.{md,mdx}`);

  return paths.map((path: string) => {
    const pathContent = path.split("/");
    const fileName = pathContent[pathContent.length - 1];
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

// slug를 기준으로 article 정보 조회(frontmatter)
export async function getArticleFromSlug(slug: string, folderPath: string) {
  if (!folderPath) {
    throw new Error("Required: No folder path");
  }

  const articleMdPath = join(folderPath, `${slug}.md`);
  const articleMdxPath = join(folderPath, `${slug}.mdx`);
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
export async function getAllArticles(folderPath: string) {
  if (!folderPath) {
    throw new Error("Required: No folder path");
  }

  return await Promise.all(
    getSlug(folderPath).map((slug) => getArticleFromSlug(slug, folderPath))
  );
}

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

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
export async function getArticleFromSlug(
  slug: string,
  folderPath: string,
  locale: string
) {
  if (!folderPath) {
    throw new Error("Required: No folder path");
  }

  const articleMdPath = join(folderPath, `${slug}.md`);
  const articleMdxPath = join(folderPath, `${slug}.mdx`);

  if (fs.existsSync(articleMdxPath) || fs.existsSync(articleMdPath)) {
    const source = fs.existsSync(articleMdxPath)
      ? fs.readFileSync(articleMdxPath)
      : fs.readFileSync(articleMdPath);
    const {
      content,
      data: { date, ...data },
    } = matter(source);
    const localedDate = new Date(date).toLocaleString(locale, {
      timeZone: "UTC",
    });

    return JSON.parse(
      JSON.stringify({
        frontmatter: { date: localedDate, ...data },
        readingTime: readingTime(content).text,
        mdxSource: fs.existsSync(articleMdxPath)
          ? await serialize(content, {
              mdxOptions: {
                rehypePlugins: [rehypeHighlight],
                format: "mdx",
              },
            })
          : null,
        isMdx: fs.existsSync(articleMdxPath),
        slug,
        content,
      })
    );
  }

  return undefined;
}

// 모든 article 정보 조회 (날짜 포맷 적용)
export async function getAllLocaledArticles(
  folderPath: string,
  locale?: string
) {
  if (!folderPath) {
    throw new Error("Required: No folder path");
  }

  return await Promise.all(
    getSlug(folderPath).map((slug) =>
      getArticleFromSlug(slug, folderPath, locale || "")
    )
  );
}

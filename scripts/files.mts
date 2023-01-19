import glob from "glob";
import fs from "fs";
import path from "path";
const { sync } = glob;

export function getPages(ignore: string[]) {
  const paths = sync(`pages/**/*.{js,jsx,ts,tsx}`, {
    // ignore server side api, non-build page(server side page like _app.tsx), index
    ignore,
  });

  const routes = paths.map((path: string) => {
    const pathContent = path.split("/");
    // If a path's depth is larger then 2, extract a folder name of first index.
    // Basically, It parse a filename.
    const fileName =
      pathContent.length > 2
        ? pathContent[1]
        : pathContent[pathContent.length - 1];
    const [page, _extension] = fileName.split(".");

    return page;
  });

  return [...new Set(routes)];
}

export function writeFile(filePath: string) {
  return function (content: string) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, {
      encoding: "utf-8",
      flag: "w",
    });
  };
}

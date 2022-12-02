import { getPages, writeFile } from "./files";
import { generateRouteContent } from "./generate";
import { pipe } from "fp-ts/lib/function";

pipe(
  getPages(["pages/api/*", "pages/_*", "pages/index.*"]),
  generateRouteContent("blog"),
  writeFile("_generated/routes.ts")
);

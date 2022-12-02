import { getPages, writeFile } from "./files";
import { getRouteFileText } from "./generate";
import { pipe } from "fp-ts/lib/function";

pipe(
  getPages(["pages/api/*", "pages/_*", "pages/index.*"]),
  getRouteFileText("blog"),
  writeFile("_generated/routes.ts")
);

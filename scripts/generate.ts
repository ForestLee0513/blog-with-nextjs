import { capitalize } from "./utils/capitalize";

export function generateRouteContent(index: string) {
  return function (keys: string[]) {
    const routes = keys.map((route) => {
      return {
        path: `/${index === route ? "" : route}`,
        name: capitalize(route),
      };
    });

    return `
      const routes = ${JSON.stringify(routes)}
      
      export default routes
    `;
  };
}

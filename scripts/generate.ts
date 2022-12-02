export function getRouteFileText(index: string) {
  return function (keys: string[]) {
    const routes = keys.map((route) => {
      return {
        path: `/${index === route ? "" : route}`,
        name: route,
      };
    });

    return `
      const routes = ${JSON.stringify(routes)}
      
      export default routes
    `;
  };
}

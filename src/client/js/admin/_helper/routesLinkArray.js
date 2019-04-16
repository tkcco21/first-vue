import routes from '@Admin/_helper/routes';

const routesLinkArray = routes.map((route) => {
  console.log();
  let childrenLinkArray = [];
  if (route.children) {
    childrenLinkArray = route.children.map((child) => {
      console.log(child);
      return {
        name: child.name,
      };
    });
  }
  return {
    name: route.name || route.path.split('/')[route.path.split('/').length - 1],
    children: childrenLinkArray,
  };
});

export default routesLinkArray;

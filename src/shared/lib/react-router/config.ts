export const pathKeys = {
  root: "/",
  home() {
    return pathKeys.root;
  },
  page404() {
    return pathKeys.root.concat("404/");
  },
  tips: {
    root() {
      return pathKeys.root.concat("tips/");
    },
    bySlug({ slug }: { slug: string }) {
      return pathKeys.tips.root().concat(slug, '/');
    },
  }
};

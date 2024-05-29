export const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "Gallery",
    path: "/gallery",
    icon: "gallery",
  },
  {
    title: "Components",
    path: "#",
    icon: "components",
    children: [
      {
        title: "Headers",
        path: "/componentExamples/headers",
      },
      { title: "Footers", path: "/componentExamples/footers" },
      { title: "Heros", path: "/componentExamples/heros" },
      { title: "Misc", path: "/componentExamples/misc" },
    ],
  },

  {
    title: "About",
    path: "/about",
    icon: "about",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: "blog",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: "contactus",
  },
];

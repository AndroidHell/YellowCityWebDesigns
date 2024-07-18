export const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "About",
    path: "/about",
    icon: "about",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
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
      { title: "Heros", path: "/comingsoon" },
      { title: "Misc", path: "/comingsoon" },
    ],
  },
  {
    title: "News",
    path: "/news",
    icon: "blog",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  //   icon: "blog",
  // },
  {
    title: "Contact Us",
    path: "/contact",
    icon: "contactus",
  },
];

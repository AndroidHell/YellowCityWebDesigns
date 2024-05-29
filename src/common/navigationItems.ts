export const navigationItems = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "Services",
    path: "/services",
    icon: "services",
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
      { title: "Footers", path: "/footers" },
      { title: "Heros", path: "/heros" },
      { title: "Misc", path: "/misc" },
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

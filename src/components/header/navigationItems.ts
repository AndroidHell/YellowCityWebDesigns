interface NavItem {
  title: string;
  path: string;
  icon: string;
  children?: { title: string; path: string }[]; // Make children optional
}

export const navigationItems: NavItem[] = [
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
    title: "News",
    path: "/news",
    icon: "blog",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: "contactus",
  },
  // {
  //   title: "Components",
  //   path: "#",
  //   icon: "components",
  //   children: [
  //     {
  //       title: "Headers",
  //       path: "/componentExamples/headers",
  //     },
  //     { title: "Footers", path: "/componentExamples/footers" },
  //     { title: "Heros", path: "/comingsoon" },
  //     { title: "Misc", path: "/comingsoon" },
  //   ],
  // },
];

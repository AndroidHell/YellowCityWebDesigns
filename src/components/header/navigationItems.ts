interface NavItem {
  title: string;
  path: string;
  icon: string;
  children?: { title: string; path: string }[];
  target?: string;
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
    title: "Demo",
    path: "https://ycwd-rocinante.netlify.app/",
    icon: "demo",
    target: "_blank",
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

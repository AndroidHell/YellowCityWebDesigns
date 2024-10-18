interface NavItem {
  title: string;
  path: string;
  icon: string;
  children?: { title: string; path: string; target?: string }[];
  target?: string;
}

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "About Us",
    path: "/about",
    icon: "about",
  },
  {
    title: "Services",
    path: "/services",
    icon: "gallery",
  },

  {
    title: "Portfolio",
    path: "/portfolio",
    icon: "gallery",
  },
  {
    title: "Demos",
    path: "https://ycwd-rocinante.netlify.app/",
    icon: "demo",
    children: [
      {
        title: "Rocinante",
        path: "https://ycwd-rocinante.netlify.app/",
        target: "_blank",
      },
      {
        title: "Y Que",
        path: "https://ycwd-yque.netlify.app/",
        target: "_blank",
      },
      {
        title: "Razorback",
        path: "https://ycwd-razorback.netlify.app/",
        target: "_blank",
      },
    ],
  },
  {
    title: "News",
    path: "/blog",
    icon: "blog",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: "contactus",
  },
];

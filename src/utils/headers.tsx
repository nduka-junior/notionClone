interface NavFields {
  imageURL?: string;
  title?: string;
  description?: string;
}

export interface NavItems {
  labels?: string;
  navFields?: NavFields[];
}

interface Header {
  title: string;
  navItems?: NavItems[];
}

export const headersLinks: Header[] = [
  {
    title: "Product",
    navItems: [
      {
        // labels: "By Team Size",
        navFields: [
          {
            imageURL: "/headers/sparkles.svg",
            title: "AI",
            description: "Integrated A.I assistant",
          },
          {
            imageURL: "/headers/doc.svg",
            title: "Docs",
            description: "Simple & Powerful ",
          },
          {
            imageURL: "/headers/wiki.svg",
            title: "Wikis",
            description: "Centralize Your knowledge",
          },
          {
            imageURL: "/headers/project.svg",
            title: "Project",
            description: "Connected,flexible workflows",
          },
          {
            imageURL: "/headers/calendar.svg",
            title: "Calendar",
            description: "Time adn work,together",
          },
          {
            imageURL: "/headers/sites.svg",
            title: "Sites",
            description: "Publish anything, fast",
          },
        ],
      },
      {
        // labels: "By Team Function",
        navFields: [
          {
            title: "Template gallery",
            description: "Setups to get you started",
          },
          {
            title: "Customer stories",
            description: "See how teams use notion",
          },

          {
            title: "Connections",
            description: "Connect your tools to Notion",
          },
        ],
      },
    ],
  },
  {
    title: "Download",
    navItems: [
      {
        // labels: "By Team Size",
        navFields: [
          {
            title: "Notion",
          },
          {
            title: "Calendar",
          },
          {
            title: "Web Clipper",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    navItems: [
      {
        labels: "By Team Size",
        navFields: [
          {
            imageURL: "/headers/enterprise.png",
            title: "Enterprise",
            description: "Advanced features for your org",
          },
          {
            imageURL: "/headers/small.png",
            title: "Small business",
            description: " Run your team on one tool ",
          },
          {
            imageURL: "/headers/personal.png",
            title: "Personal",
            description: "Free for individuals",
          },
        ],
      },
      {
        labels: "By Team Function",
        navFields: [
          {
            title: "Design",
          },
          {
            title: "Engineering",
          },
          {
            title: "Product",
          },
          {
            title: "Managers",
          },
        ],
      },

      {
        labels: "Notion For",
        navFields: [
          {
            title: "Startup",
          },
          {
            title: "Remote work",
          },
          {
            title: "Education",
          },
          {
            title: "Nonprofits",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    navItems: [
      {
        navFields: [
          {
            title: "Blog",
          },
          {
            title: "Notion Academy",
          },
          {
            title: "Guides &n tutorials",
          },
          {
            title: "Webinars",
          },
          {
            title: "Help center",
          },
          {
            title: "API docs",
          },
          {
            title: "Hire a consultant",
          },
          {
            title: "Becomea a partner",
          },
        ],
      },
    ],
  },
  {
    title: "Pricing",
  },
];

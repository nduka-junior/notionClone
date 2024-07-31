export interface itemsProps {
  name: string;
  logoURL: string;
  description: string;
  carouselurl: string;
}
export const carouselItem: itemsProps[] = [
  {
    name: "AI",
    logoURL: "/headers/sparkles.svg",
    description: "Ask anything. Notion will answer.",
    carouselurl: "/ai.png",
  },
  {
    name: "Docs",
    logoURL: "/headers/doc.svg",

    description: "Simple, powerful, beautiful. Next-gen notes & docs.",
    carouselurl: "/docs.png",
  },
  {
    name: "Wikis",
    logoURL: "/headers/wiki.svg",

    description: "Centralize your knowledge. No more hunting for answers. ",
    carouselurl: "/wiki.png",
  },
  {
    name: "Project",
    logoURL: "/headers/project.svg",

    description: "Connected and flexible, to tackle any project.",
    carouselurl: "/projects.png",
  },
  {
    name: "Calendar",
    logoURL: "/headers/calendar.svg",

    description: "Manage your time and projects, together.",
    carouselurl: "/Calendar.png",
  },
  {
    name: "Sites",
    logoURL: "/headers/sites.svg",

    description: "Publish anything, fast.",
    carouselurl: "/sites.png",
  },
];

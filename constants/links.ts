import { type LinkItem } from "@/types/link";

export const githubRepoName = "raushang4.github.io";

export const imageBaseUrl =
  process.env.NODE_ENV === "production" ? "" : `/${githubRepoName}`;
export const name = "@raushang4";
export const description = "Tech founder & senior software engineer";

export const socialLinks = [
  { platform: "portfolio", url: "https://www.raushang4.me" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/raushang4/" },
  { platform: "Twitter", url: "https://x.com/raushang_4" },
  { platform: "Mail", url: "mailto:raushang4+bussiness@gmail.com" },
  { platform: "Tiktok", url: "https://tiktok.com/@raushang4" },
  {
    platform: "Youtube",
    url: "https://www.youtube.com/@raushang4",
  },
  { platform: "Discord", url: "https://discord.gg/365GjNQs" },
  { platform: "Instagram", url: "https://instagram.com/raushang_4" },
  // Add the new GitHub link
  {
    platform: "GitHub",
    url: "https://github.com/raushang4",
  },
];

export const items: LinkItem[] = [
  {
    type: "youtube",
    title: "Latest Youtube Video",
    youtubeId: "@raushang4?",
  },
  {
    type: "category",
    title: "Join raushang4 waitlist - My company",
  },
  {
    type: "link",
    title: "raushang4.job - Find a tech job in minutes, not months",
    url: "https://raushang4.job",
  },
  { type: "category", title: "Resources" },
  {
    type: "link",
    title: "Learn to code with Codedex! branch of raushang4",
    url: "https://www.codedex.io/?utm_source=anthonysistili&utm_medium=creator-collab&utm_campaign=2024-october",
  },
  {
    type: "link",
    title: "Buy me a coffee :)",
    url: "http://buymeacoffee.com/raushang4",
  },
  {
    type: "link",
    title: "Startup notes & coding resources (mind map)",
    url: "https://map.raushang4.dev/",
  },
  {
    type: "link",
    title: "Hobby project (NextJS & Supabase)",
    url: "https://github.com/raushang4/nextjs-supabase-template",
  },
  {
    type: "link",
    title: "My saas landing page boilerplate on Github",
    url: "https://github.com/Raushang4/raushang4-saas-landingpage",
  },
];

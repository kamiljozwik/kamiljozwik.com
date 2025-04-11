export type Family = {
  title: string;
  description: string;
  date: string;
  href: string;
  img: string;
};

export const modelFamilies: Family[] = [
  {
    title: "Gemma",
    description: "Open source models from Google",
    date: "2025-03-25",
    href: "/models/gemma",
    img: "/models/gemma-logo.webp",
  },
  {
    title: "DeepSeek",
    description: "Revolutionary models for every budget",
    date: "2025-04-11",
    href: "/models/deepseek",
    img: "/models/deepseek-logo.webp",
  },
];

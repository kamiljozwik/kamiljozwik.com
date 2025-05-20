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
  {
    title: "Qwen",
    description: "Large range of models for various applications",
    date: "2025-04-16",
    href: "/models/qwen",
    img: "/models/qwen-logo.webp",
  },
  {
    title: "Llama",
    description: "Open source models provided by Meta",
    date: "2025-04-28",
    href: "/models/llama",
    img: "/models/llama-logo.webp",
  },
  {
    title: "Phi",
    description: "Small open source models from Microsoft",
    date: "2025-05-20",
    href: "/models/phi",
    img: "/models/phi-logo.webp",
  },
] as const;

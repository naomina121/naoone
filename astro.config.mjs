// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://naomina121.com",
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  experimental: {
    preserveScriptOrder: true,
  },
  redirects: {
    "/%E8%B3%87%E6%96%99%E5%AE%A4/%E8%B3%87%E6%96%99%E5%AE%A4%E3%81%AE%E5%85%A5%E3%82%8A%E5%8F%A3":
      {
        status: 308,
        destination: "/materials/materials-entrance",
      },
  },
});

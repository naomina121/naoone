import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Naomina121のRSSフィード",
    description: "Naomina121の最新記事をお届けします。",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.mdx")),
    customData: `<language>ja-jp</language>`,
  });
}

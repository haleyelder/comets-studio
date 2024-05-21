import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const site = "https://www.comet-studio.com/"
    const posts = await getCollection("posts");
    const items = posts
    .sort((a, b) => Date.parse(b.data.date) - Date.parse(a.data.date))
    .map(({ data: { date, title, description }, slug }) => ({
      title,
      description,
      link: `${site}${slug}`,
      pubDate: new Date(date),
    }));

    return rss({
      title: "Comets Studio",
      description: "a craft && code blog",
      site: context.site,
      customData: `<language>en</language>`,
      items
    });
  }

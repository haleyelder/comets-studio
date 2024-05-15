
import { getCollection } from "astro:content";
const allPosts = await getCollection("posts")

export async function GET({params, request }) {
  return new Response(
    JSON.stringify({
      "posts": allPosts
    }),
  );
}

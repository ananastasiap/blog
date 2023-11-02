import { client } from "../../lib/client";

// export default function posts(req, res) {

// };

export async function loadPosts(start, end) {
  const query = `{
    "posts": *[_type == "post"],
    "total": count(*[_type == "post"])
  }`;
  const { posts, total } = await client.fetch(query);

  return {
    posts,
    total,
  }
}
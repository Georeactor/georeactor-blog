import { extract } from "$std/encoding/front_matter.ts";
import { join } from "$std/path/posix.ts";

const DIRECTORY = "./posts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  snippet: string;
  content: string;
  tags: string[];
}

// Get posts.
export async function getPosts(topic): Promise<Post[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  let posts = await Promise.all(promises) as Post[];
  if (topic) {
    if (topic === "life") {
      posts = posts.filter(p => p.tags.includes("food") || p.tags.includes("travel"))
    } else {
      posts = posts.filter(p => p.tags.includes(topic))
    }
  } else {
    posts = posts.filter(p => !p.tags.includes("food") && !p.tags.includes("travel"));
  }
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

// Get post.
export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
  const { attrs, body } = extract(text);
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
    tags: attrs.tags.split(","),
  };
}

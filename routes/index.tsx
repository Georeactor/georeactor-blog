import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(req, ctx) {
    const yum = req.headers.get("host")?.includes("yum");
    const posts = await getPosts(yum ? "life" : false);
    return ctx.render(posts.slice(0, 20));
  },
};

export default function BlogIndexPage(props: PageProps<Post[]>) {
  const posts = props.data;
  const yum = posts.find(p => p.tags.includes("food") || p.tags.includes("travel"));
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">
        {yum ? "ND Food & Travel Posts" : "Georeactor Blog"}
      </h1>
      <a class="float-right" href="/rss/feed">RSS Feed</a>
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
}

export function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <div class="py-8 border(t gray-200)">
      <a class="sm:col-span-2" href={`/${post.slug}`}>
        <h3 class="text(3xl gray-900) font-bold">
          {post.title.replace('~', '#')}
        </h3>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div class="mt-4 text-gray-900">
          {post.snippet}
        </div>
      </a>
    </div>
  );
}

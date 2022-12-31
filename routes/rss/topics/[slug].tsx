import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { render } from "$gfm";
import { rssFromPosts } from "@/routes/rss/feed.tsx";

export const handler: Handlers<Post[]> = {
    async GET(req, ctx) {
      const posts = (await getPosts(ctx.params.slug)).slice(0, 10);

      return new Response(rssFromPosts(posts), 
        {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
      });
    },
};
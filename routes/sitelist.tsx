import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(req) {
    const posts = await getPosts();
    return new Response(SiteList({ data: posts }),
      {
      headers: { "Content-Type": "text/xml" },
    });
  },
};

export function SiteList(props: PageProps<Post[]>) {
  const posts = props.data;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n` +
    posts.map((post) => `<url>
<loc>https://blog.georeactor.com/${post.slug}</loc>
<lastmod>${(new Date(post.publishedAt)).toISOString().split('T')[0]}</lastmod>
</url>\n`).join('') + `</urlset>`;
}

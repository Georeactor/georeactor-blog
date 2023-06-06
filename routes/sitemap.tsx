import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(req) {
    const posts = await getPosts();
    return new Response(SiteMap({ data: posts }),
      {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    });
  },
};

export function SiteMap(props: PageProps<Post[]>) {
  const posts = props.data;
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    posts.map((post) => `<url>
<loc>https://blog.georeactor.com/${post.slug}</loc>
<lastmod>${(new Date(post.publishedAt)).toISOString().split('T')[0]}</lastmod>
</url>\n`).join('') + `</urlset>`;
}

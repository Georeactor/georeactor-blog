import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "@/utils/posts.ts";
import { render } from "$gfm";

export const handler: Handlers<Post[]> = {
    async GET(req) {
      const yum = req.headers.get("host")?.includes("yum");
      const posts = (await getPosts(yum ? "life" : false)).slice(0, 10);

      return new Response(rssFromPosts(posts), 
        {
        headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
      });
    },
};

export function rssFromPosts(posts) {
  return `<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:cc="http://cyber.law.harvard.edu/rss/creativeCommonsRssModule.html" version="2.0">
<channel>
<title>Georeactor Blog</title>
<description>Summaries and Code by Nick Doiron</description>
<link>https://blog.georeactor.com</link>
<generator>Deno</generator>
<lastBuildDate>${(new Date()).toUTCString()}</lastBuildDate>
<atom:link href="https://blog.georeactor.com/rss/feed" rel="self" type="application/rss+xml"/>
<webMaster><![CDATA[ ndoiron@mapmeld.com ]]></webMaster>
<atom:link href="https://blog.georeactor.com/rss/feed" rel="hub"/>
    ${posts.map((post) => `<item>
    <title><![CDATA[ ${post.title} ]]></title>
    <description><![CDATA[ ${ render(post.snippet) } ]]></description>
    <content:encoded><![CDATA[ ${ render(post.content) } ]]></content:encoded>
    <link>https://blog.georeactor.com/${post.slug}</link>
    <guid isPermaLink="true">https://blog.georeactor.com/${post.slug}</guid>
    <dc:creator>Nick Doiron</dc:creator>
    <pubDate>${ post.publishedAt.toUTCString() }</pubDate>
    <atom:updated>${ post.publishedAt.toISOString() }</atom:updated>
</item>`).join("\n")}
</channel>
</rss>`;
}

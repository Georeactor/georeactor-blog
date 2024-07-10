import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, render } from "$gfm";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    return ctx.render(post as Post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  const yum = post.tags.includes("food") || post.tags.includes("travel");
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: 'ul { list-style: circle !important; }' }} />
        <style dangerouslySetInnerHTML={{ __html: 'main, main p { font-family: -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, BabelStoneFlags, "Apple Color Emoji", "Segoe UI Emoji"; }' }} />
      </Head>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">
          <a href="/">{yum ? "ND Food & Travel Posts" : "Georeactor Blog"}</a>
        </h1>
        <a class="float-right" href="/rss/feed">RSS Feed</a>
        <br/>
        <br/>
        <h3 class="text-3xl font-bold">{post.title.replace('~', '#')}</h3>
        <time class="text-gray-500">
          {new Date(post.publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <br/><br/>
        {!yum && <div class='space-x-5'>
          Tags: {post.tags.length ? post.tags.map(p => <a href={'/topics/' + p}>{p}</a>) : null}
        </div>}
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />

        <script async src="//static.getclicky.com/101402051.js"></script>
        <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101402051ns.gif" /></p></noscript>
      </main>
    </>
  );
}

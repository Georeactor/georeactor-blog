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
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style dangerouslySetInnerHTML={{ __html: 'ul { list-style: circle !important; }' }} />

      </Head>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h1 class="text-5xl font-bold">
          <a href="/">Georeactor Blog</a>
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
        <div class='space-x-5'>
          Tags: {post.tags.length ? post.tags.map(p => <a href={'/topics/' + p}>{p}</a>) : null}
        </div>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </main>
    </>
  );
}

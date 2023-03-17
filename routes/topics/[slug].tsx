import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";
import { PostCard } from "@/routes/index.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts(ctx.params.slug);
    return ctx.render({ posts, topic: ctx.params.slug });
  },
};

interface TopicProps {
  posts: Post[];
  topic: string;
};

export default function BlogCategoryPage(props: PageProps<TopicProps>) {
  const { posts, topic } = props.data;
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">
        Georeactor Blog
      </h1>
      {posts.length && topic.length ? <h3 class="text-xl font-bold">
        <a href={'/topics/' + topic}>Subcategory: {topic}</a>
      </h3> : null}
      <div class="inline-block float-right">
        RSS Feeds:&nbsp;&nbsp;
        {posts.length && topic.length ? <a href={'/rss/topics/' + topic}>
          ({topic})
          </a> : null }
        &nbsp;&nbsp;
        <a href="/rss/feed">(all)</a>
      </div>
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>

      <script async src="//static.getclicky.com/101402051.js"></script>
      <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101402051ns.gif" /></p></noscript>
    </main>
  );
};

import { useSignal } from "@preact/signals";
import { Handlers, PageProps } from "$fresh/server.ts";
import { posts } from "@/static/arxiv.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    return ctx.render();
  },
};

export default function ArxivSearchPage() {
  const selectPosts = useSignal([]);
  return (
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">
        Georeactor Blog
        <small>Arxiv Haul Search</small>
      </h1>
      <a class="float-right" href="/topics/arxiv">Recent Posts</a>
      <div class="clear-both"></div>
      <form class="p-2.5" style={{ backgroundColor: '#eee' }}>
        <input type="text" class="p-1" style={{ fontSize: 20 }} onInput={(e) => {
          const val = e.target.value;
          console.log(val);
          selectPosts.value = posts.filter((p) => {
            p.title.includes(val) || p.link.includes(val);
          }).slice(0, 10);
        }}/>
        {selectPosts.value.map(p => (
          <li>
            <a href={p.src}>{p.title}</a>
            {p.posted && <span>({new Date(p.posted)}) covered in {p.blog}</span>}
          </li>
        ))}
      </form>
    </main>
  );
}

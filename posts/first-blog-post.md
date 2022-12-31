---
title: Starting Line
published_at: 2022-12-04T19:04:00.000Z
snippet: Test of the blog and RSS
---

For a while I've been considering maintaining my own blog instead of
relying on Medium. Their platform comes with a limited set of
capabilities and embeds, non-members often see a paywall, and I can't organize book and tech posts separately.

Because starting a blog is usually an obnoxious image-centric process, I'm hoping to instead use it to learn more about alternatives to Node.js. For a while I looked at [Bun.sh](https://bun.sh), but it was hard to look up the basics (like writing a blog) in their system. That led me to Deno ("dee-no"), then in November they did the hard part of [documenting how to make a blog](https://deno.com/blog/build-a-blog-with-fresh).

More specifically this blog is written in [the Fresh framework](https://fresh.deno.dev/). You write the UI in Preact (minimal lib based on  React) and most content is rendered server-side. The
main difference which I've noticed as a coder so far, beyond the usual unfamiliar web framework, is Deno's import format. You can write versioning, relative path shortcuts, and Deno standard library stuff into the import and it's weird but it's working.

The one part that I've added to the repo is [an RSS feed](https://blog.georeactor.com/rss/feed).

I will also try writing these in Visual Studio because Atom is deprecated and people have been commenting on my use of it for years already.

---
title: Migrating Fresh v1 Blog to new Deno Console
published_at: 2026-06-08T00:06:00.000Z
snippet: Test of the blog
tags: prose,javascript
---

When I started this blog in late 2022, Deno and Bun.sh were two new arrivals into the Node.js ecosystem.

I used the Fresh framework which was very barebones, but the best option at the time.

In March, I got notified that Deno was changing over to a new site deployment platform in July. I don't know
enough about Deno's technical, corporate, or community structure to read the tea leaves, but I can sympathize. Anyway I had the problem of figuring out how to move a Fresh **v1** app over to Deno's new console, when most documentation and migration info is for v2, which became more real over the course of 2025.

Here are my notes:
- in `import_map.json` , change dependency to fresh@1.7.3 ; run `deno install` ; commit changed files
- on console.deno.com, **DO NOT** select a preset app type, such as Fresh v2
- put `deno install` as the install command
- set entrypoint to `main.ts`

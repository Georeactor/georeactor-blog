---
title: Sitemap and Robots
published_at: 2023-06-11T17:30:00.000Z
snippet: Getting the site indexed
tags: javascript
---

This blog wasn't getting indexed, so I looked at the Deno code and wrote a file `routes/sitemap.xml.tsx` which generates a typical sitemap.

There's a [fresh-seo module](https://github.com/xstevenyung/fresh-seo) out there for most sites using the Deno / Fresh stack. It wasn't designed for the blog though, so it wouldn't pick up on those routes =(

Testing that out did help me realize why Google Search Console kept showing an HTTP error; I finally added a mostly-blank robots.txt and now we are valid.

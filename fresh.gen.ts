// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[slug].tsx";
import * as $1 from "./routes/arxiv-hauls.tsx";
import * as $2 from "./routes/index.tsx";
import * as $3 from "./routes/rss/feed.tsx";
import * as $4 from "./routes/rss/topics/[slug].tsx";
import * as $5 from "./routes/sitelist.tsx";
import * as $6 from "./routes/sitemap.tsx";
import * as $7 from "./routes/topics/[slug].tsx";

const manifest = {
  routes: {
    "./routes/[slug].tsx": $0,
    "./routes/arxiv-hauls.tsx": $1,
    "./routes/index.tsx": $2,
    "./routes/rss/feed.tsx": $3,
    "./routes/rss/topics/[slug].tsx": $4,
    "./routes/sitelist.tsx": $5,
    "./routes/sitemap.tsx": $6,
    "./routes/topics/[slug].tsx": $7,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;

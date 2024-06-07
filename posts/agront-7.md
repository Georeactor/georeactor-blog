---
title: Genome browser on Netlify
published_at: 2024-06-07T21:19:00.000Z
tags: jbrowse,bioseries
---

I resolved an issue with `yarn -s` and got jBrowse2 deployed on Netlify: https://chenopodium.netlify.app/?config=test_data%2Fvolvox%2Fconfig.json

Then it was time to add quinoa and other genomes, and I realized they are GB-size and would not go through GitHub.
There was a Netlify Large Media feature which may have used LFS, but it's been deprecated.

So I don't know why I thought Netlify would be the way.<br/>
I'll keep [a branch](https://github.com/mapmeld/chenopodium/tree/netlify) online for people working with smaller data.

I could see someone adding a data download step to the build, but do I want to redownload the genome every time
that I change the site CSS? It looks like the go-to for this is to deploy jBrowse and the genome on S3.

Another option would be figuring out how jBrowse is using the FAI (index file) to select parts of the genome
and make that work with a standard database?

<br/>
<br/>
<br/>

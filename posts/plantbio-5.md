---
title: A prototype pangenome LLM (TomatoTomato)
published_at: 2025-09-26T21:04:00.000Z
tags: bioseries,ml
---

TomatoTomato (pronounced "to-may-to, to-mah-to") is a masked language model trained on two tomato genomes. Merging two genomes means if one aligned sequence is AAAA and the other is ACGT, we output four tokens representing that variance. The base model is TattaBio's gLM2, repurposing and adding to its vocabulary.<br/>
Ideally a future model would consume a pangenome graph format to support multiple genomes.

I ended up doing the write-up and linking to CoLabs on https://huggingface.co/monsoon-nlp/tomatotomato-gLM2-150M-v0.1

Anyway hashtag prior art, I've been thinking about this [since March](/plantbio-4) so I'm glad that there's a proof-of-concept even if it's only partially trained.

<br/><br/><br/>

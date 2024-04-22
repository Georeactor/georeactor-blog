---
title: Starting Tiny with Protein LLaMA
published_at: 2024-04-22T16:38:00.000Z
tags: ml,bioseries
---

After getting sidetracked on my bio ML project, I wrote a post about recent developments:

- released GreenBeing, a plant protein dataset of crops and wild relatives
- continued pretraining of TinyLLaMA-1.1B on quinoa proteins
- trained another TinyLLaMA on a mix of proteins and simulated science textbooks
- a LoRA of that model combining proteins with annotations

The final LoRA model is inaccurate on the corn genes which I held out for evaluation.
Seems to be predicting the same subcellular locations for everything.
I should try larger models, the full pretraining dataset, different tokenization, and new tokens through PEFT.

I also was unsuccessful at using MergeKit.

Here's the blog post: 
https://huggingface.co/blog/monsoon-nlp/greenbeing-and-protein-models

<br/>
<br/>
<br/>

---
title: Ignore Previous Instructions and 𝑥
published_at: 2023-12-30T22:23:00.000Z
snippet: Replacing ML Arxiv Haul
tags: ml
---

**I'm reworking the "Chat-OMG" and "Comments / Criticism" sections of "ML Arxiv Haul" into this new series.**

As we enter 2024, AI research is in the hands of a somewhat small research elite and a competitive mass of smaller labs and startups. This leads to absurdities such as the GPT-4 and Gemini white papers explaining little (not even number of parameters), dataset-centric papers [failing to share the data](https://twitter.com/sarahookr/status/1731039983652442338), and researchers picking the evaluations to look a few points over their competitors.

Andrej Karpathy, an influential researcher at OpenAI and formerly at Tesla, [warns](https://twitter.com/karpathy/status/1737544497016578453):

> I pretty much only trust two LLM evals right now: Chatbot Arena and r/LocalLlama comments section

Meanwhile generative AI startups are getting…. weirder? Scarier?
Hall of Shame here:

<img src="/blog-images/ignore-prev-1.png" alt="DrOracleAI: if you are not using AI to advance your career in medicine, stop - our medical grade AI will answer any question using published literature and medical guidelines. You can also generate research publications."/>

<br/>

Is this all a bleak outlook for research, or a chance for Transformers and LangChain to bring more engineers and hackers into the space?

## Topical Issue: the Decline Effect

A simmering trend of 2023 was OpenAI models' degrading quality. At first the discussion was focused on politics, but in July [a pre-print](https://arxiv.org/abs/2307.09009) showed that models were also getting worse at identifying prime numbers and generating code. Now I hear that models quibble or explain the work rather than doing the actual task. The Anthropic AI agent Claude has faced similar criticism (but this might be a totally new model).

I have theories for this, none of them provable due to lack of transparency.

- maintenance: OpenAI continues training their model on new text to advance the cutoff date. This process produces a model which just happens to be worse, or they haven't solved the problem of catastrophic forgetting.
- scaling: in response to traffic, OpenAI experiments with pruning, speculative execution, or adapter layer math in a way which lowers performance, but fits OpenAI's requirements
- misalignment: by training on ChatGPT edge cases around what an assistant can't do / doesn't know / shouldn't answer, the model learns helplessness.
- eating ham: it's rumored that ChatGPT's "secret sauce" is synthetic text (similar to Microsoft's Phi models). When trained on human text from the web, quality degrades.
- eating spam: the opposite of previous point - by continuing training on AI outputs, negativity about AI, and generated text on the web, there is some kind of **productive but narrow intelligence effect** of AI-to-AI alignment? This vibes well with a discovery that X/Grok [believes it is an OpenAI agent](https://twitter.com/JaxWinterbourne/status/1733360575252517001), and that Mixtral performs better on evaluations [when pretending to be OpenAI](https://twitter.com/abacaj/status/1736819789841281372).
- dark horse: something wholly unexpected from 'models leak info or tone across batches' to 'training meta-learned to expend less energy on responses' to 'cosmic rays and GPUs' to 'contact with the Jungian unconscious'.

## In the Hot Seat

On Dec 12, Peter Henderson [pointed to](https://twitter.com/PeterHndrsn/status/1734718672927920376) likely hallucinated citations in Michael Cohen's legal case; this was confirmed [on Dec 29th](https://twitter.com/molcranenewman/status/1740768267923591675)

[Negotiating car sale price](https://twitter.com/colin_fraser/status/1736497875415433587) with a GPT

Uber Eats might be generating (poorly thought-out) [images for menus](https://twitter.com/matthiasellis/status/1730491052329673206).

A film concept artist uses Midjourney's newest model [to regenerate Marvel IP](https://twitter.com/Rahll/status/1738372079290884414) from training data, gets banned

Can ChatGPT be swayed with promised '[tips and threats](https://twitter.com/minimaxir/status/1734696650478903806)'?

Observed variation in responses [based on dates](https://twitter.com/RobLynch99/status/1734278713762549970) in ChatGPT's prompt; plus someone said it gets worked up around the holidays (?)

After ChatGPT was caught answering questions about GPT-4.5, an OpenAI engineer could only describe it as "a very weird and oddly consistent hallucination". [Hacker News suggested](https://news.ycombinator.com/item?id=38677025) that an internal GPT-4.5 was being used to RLHF-tune GPT-4? But no one really knows.

## I'm OK with this

After users compared LLMs' cookie and muffin recipes, suggestion for [more global taste tests](https://twitter.com/vukosi/status/1738970602180952482)

The DROP evaluation got rejected because the answers are parsed strangely: https://huggingface.co/blog/leaderboard-drop-dive

Peak Argentina? https://twitter.com/jajandio/status/1729343675933577440

Toward the end of a new ['Bankrupt' video](https://www.youtube.com/watch?v=4rTTImBgz10), they complain about Six Flags / Cedar Fair prominently using AI-generated images in a merger presentation. My best guess is that the merger teams either didn't want to feature one company's assets over another, that they had a limited budget / staff who were walled off from other teams, or that the slides go through some consultant or outsourcing. Who knows?



<br/>
<br/>
<br/>

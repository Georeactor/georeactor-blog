---
title: Ignore Previous Instructions and 𝑥_2
published_at: 2024-02-24T09:27:00.000Z
snippet: ML updates from the road
tags: ml
---

**I continue to rework the "Chat-OMG" and "Comments / Criticism" sections of "ML Arxiv Haul" into this new series.**

COMMENTS

## Topical Issue: Gemini and Media Comprehension

On February 15th, Google announced results of Gemini 1.5 Pro. The two main breakthroughs here were:
- multimodal (i.e. analyzing video)
- million-plus token context (10 million in text)

Google did not reveal *how* they scaled to million-token contexts, which is disappointing.
The secrecy and previous re-sizing processes (e.g. OpenAI and RoPE) hint that it might not be too difficult to update existing models to the extended context. For example, the YaRN paper was able to extend context with 0.1% of the training data: https://www.reddit.com/r/MachineLearning/comments/199n479/d_how_did_openai_increase_context_length_of_the/

For complaints and theories:
- https://www.reddit.com/r/MachineLearning/comments/1attgz7/n_google_blog_post_what_is_a_long_context_window/
- https://www.reddit.com/r/MachineLearning/comments/1arj2j8/d_gemini_1m10m_token_context_window_how/
- https://www.reddit.com/r/LocalLLaMA/comments/1arhygw/gemini_pro_has_1m_context_window/

A good example of benchmarking was having Gemini read the titles of a homemade video of a bookshelf.
A bad example of benchmarking (even though it went viral) was asking it to summarize a movie. This is beatable with basic memorization - i.e. if I show you the opening crawl of *Star Wars: A New Hope*,
you can spell out the entire plot of the movie because it's strongly identifiable.
This reminds me of other social media posts which use image generative models on the description of a character from Harry Potter or other media franchise.
Inevitably the generated image looks like the actor from the movie since they are pointing to a concept which the model already knows.

## Research Turmoil

In an ML Arxiv paper which I reviewed previously (on model editing), the conference version was taken offline for a few days after their Ethical Considerations section was devoted to current events (the outbreak of war in Israel and Gaza). https://twitter.com/yuvalpi/status/1748758459066061170

Mamba rejected from ICLR: https://openreview.net/forum?id=AL1fq05o7H via https://twitter.com/marktenenholtz/status/1750537561754247204 and https://twitter.com/srush_nlp/status/1750526956452577486 There is some ambiguity about what went wrong: the meta-reviewer choosing to reject based on the scores, a reviewer asking for other comparable sequence models (which may be architecturally similar to existing baselines), and a reviewer asking about larger models despite promising billion-param models for an initial paper.
Hacker News pointed out how many ICLR reviewers voted to reject word2vec 11 years ago: https://openreview.net/forum?id=idpCdOWtqXd60

A fake paper (not hosted on Arxiv, but circulating on Twitter) claimed to have poisoned all image model training going back years.
Unfortunately difficult to find a link to back up this kerfuffle from a couple of months ago?
In its place consider this real paper stating it would be practical: https://arxiv.org/abs/2302.10149

## LLMs on the Loose

Someone used an LLM to find and report a vulnerability in curl, but the LLM had altered the code to add the vulnerability https://twitter.com/lcamtuf/status/1742256769760657689

Ads from Arabic subtitles bleeding into Whisper audio transcription: https://twitter.com/SheriefFYI/status/1756694995241951398

CodeLLaMA refuses to generate prime numbers as an AI safety issue (arguably a prompt issue) https://twitter.com/MrCatid/status/1752101682886988118

A Reddit user used StableDiffusion to post what most subreddits (e.g. roastme, iama) would consider a passable proof of "I am this person" https://www.reddit.com/r/StableDiffusion/comments/18xq6ta/verification_post/

Translators are being replaced by AI and then paid a smaller fee for cleanup https://twitter.com/MembraneAcid/status/1747213886892495245

## Clever LLM use

Teachers using a hidden prompt to avoid copy-pasting into ChatGPT: https://twitter.com/0xjasper/status/1751310452880208007

Word substitution and Russian translation to convince a Chinese LLM to discuss politics: https://twitter.com/amebagpt/status/1746277862057955726

<br/>
<br/>
<br/>

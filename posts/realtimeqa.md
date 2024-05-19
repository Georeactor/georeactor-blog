---
title: Continuous Q&A
published_at: 2024-05-19T05:08:00.000Z
tags: ml,reliveqa,whichwiki
---

In summer of 2022 a continuous news Q&A benchmark was launched with a paper, [RealtimeQA](https://arxiv.org/abs/2207.13332).
This is perhaps the most realized of a few benchmarks which continuously challenge LLMs with new information.

With the help of news quizzes from CNN and TheWeek, the authors kept evaluating GPT-3 until the end of 2023, and published their last questions in January 2024. In March and April people asked for updates in the GitHub Issues.

The challenge of making an effective benchmark here is that a human needs to consistently be involved to write questions. A question should involve reading comprehension and new information in the article - for a breaking news story (e.g. "President Biden legalizes Kinder eggs") we don't want the questions to be parsers "who legalized Kinder eggs?" or general knowledge "who is President of the US?" The ideal question is something you wouldn't know a week or month before, like "where was the announcement made?" or "were all types of Kinder eggs made legal?". I've wanted something like this that's more exciting, like news articles → updating knowledge graph, maybe starting with TV episode reviews updating a mini world database, but keep it focused.

I decided to upload the questions in a new dataset named [Relive-QA](https://hf.co/datasets/monsoon-nlp/relive-qa) and post a link in the GitHub Issue if people want to collaborate.
A demo script will scrape articles from WikiNews English, and use the new GPT-4o to write multiple-choice questions about them. This raises a few issues:
- WikiNews: it's still around, but on review the latest published article is a few weeks old. I was able to find about 1/day draft articles here: https://en.wikinews.org/wiki/Category:May_2024 - maybe these could be a jumping-off point to articles from major news publishers?
- The latest articles about juggling and a protest at Hanscom Field are niche. A model which continuously updates its knowledge from headlines wouldn't do well; the questions here are more about reading comprehension.
- If GPT-4o can comprehend articles well enough to write Q&A, is any of this relevant? Part of this is benchmarking smaller research models and finding the right prompts. Part of this is generating questions which we can trust are new information, and studying reliability drift over time.

<br/>
<br/>
<br/>

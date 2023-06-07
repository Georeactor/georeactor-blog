---
title: How does RLHF rank?
published_at: 2023-02-25T07:41:00.000Z
snippet: Where did RLHF come from, finding some datasets, and hot takes.
tags: prose,ml
---

<img src="/blog-images/rlhf-1.gif" alt="woman looking into mechanism at eye doctor"/>

In June 2017, OpenAI posted *Deep reinforcement learning from human preferences*. Though the exact phrase "reinforcement learning from human feedback" is not in the paper, the acronym RLHF first appears (on Google Scholar) while citing this paper in *A General Language Assistant as a Laboratory for Alignment*, an Anthropic paper in December 2021. Happy Birthday plus some, RLHF.

There are several Tweets mythologizing RLHF. Facebook/Meta's PyTorch lead just called their new models without it "[unaligned LLMs](https://twitter.com/soumithchintala/status/1629169595931144193)".<br/>
Other commenters promote it as a "[secret ingredient](https://twitter.com/iScienceLuvr/status/1608070009921900546)" or warn the political right that "[RLHF teaches doublethink to LLMs](https://twitter.com/derek_j_morris/status/1628946065775812609)".<br/>
But as a term RLHF is quite open technically - any reinforcement learning algorithm, so long as you train on a dataset of human preferences (usually a crowd-worker choosing the better of two options).

Without fanfare (perhaps in response to ChatGPT, Stable Diffusion / CarperAI's trlx, or a [HuggingFace blog post](https://huggingface.co/blog/rlhf)?) Anthropic started sharing RLHF datasets in December 2022. OpenAI posted their own datasets on HuggingFace, too (though the summarization one was on GitHub since 2020).

- https://huggingface.co/datasets/Anthropic/hh-rlhf
- https://huggingface.co/datasets/openai/summarize_from_feedback
- https://huggingface.co/datasets/openai/webgpt_comparisons

The newest entry to this space is Stanford. They're using Reddit vote scores, which I've considered in my ongoing DeepClapback model / dataset rethink.<br/>
I appreciate their approach ('preference' is detected when a newer comment is upvoted above an older comment, so both were visible to the voters). The visible example is a bit cringe (a complaint on /r/AskAcademia where responses take sides, so it's not as rank-able as fact and ELI5-style threads e.g. "why does Bolivia have two capitals?").

- https://huggingface.co/datasets/stanfordnlp/SHP

It's positive that companies are releasing these, particularly around summarization where the task is noncontroversial but the rules are difficult to define.

## The emergence of skepticism within RLHF conversations

Yann LeCun says "[I think RLHF is hopeless](https://twitter.com/ylecun/status/1628898906611367936)".

Meanwhile, I'm not sure that one RLHF fits all. For a summary of this whole post, let's start with "**researchers are sharing their RLHF datasets**". What's missing in the summary?

- For a tech media audience, you might want to name-drop OpenAI.
- If I got heated about RLHF being jargon with no rigorous technical meaning, you might see a really hot or unexpected take that's important to include.
- Is the section about the first appearance of "RLHF" relevant? This requires some domain knowledge (is this basic information?) and an opinion that provenance of science is important (for example: the origins of the iris dataset in eugenics).

For medical journals or culture essays, domain knowledge surely matters.

Whose choices guide RLHF? It's difficult to say for new content, but in the original 2017 paper:

<img src="/blog-images/rlhf-2.png" alt="Table from OpenAI's paper, showing 21 labelers are more likely to be younger, to be female, to be from the USA or the Philippines, with majority having an undergraduate degree."/>
<br/>

I think the idea is that the model can be tuned to summarize on content within general knowledge, and that will transfer that to expert-level content, but who knows if that works.

**Update June 2023**: This was an interesting podcast episode on prompt engineering and RLHF; essentially RLHF is more "respond to a question with an accurate answer instead of mimicking style or asking more questions" than an idea control tool. https://thegradientpub.substack.com/p/riley-goodside-the-art-and-craft#details

<br/>
<br/>
<br/>

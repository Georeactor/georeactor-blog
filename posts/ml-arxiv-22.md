---
title: ML Arxiv Haul ~22
published_at: 2023-08-25T03:33:00.000Z
snippet: 22 new ML papers and comments for 22nd edition
tags: arxiv
---

## Comments / Criticism

It's been over a month since the last ML Arxiv post, and these may be less frequent or (for the better) include only papers where I have more substantial comments. I've also thought, as /r/MachineLearning and ML Twitter are struggling, someone should have a script which watches new HuggingFace models, summarizes the Readmes to decide if they're interesting, and if possible matches it to an appropriate leaderboard for a specialized model.

Meta continues to withhold the 33B parameter version of LLaMa 2 - this has something to do with failed safety/alignment tests. Notably this model (like GPT-4Chan) does better on TruthfulQA. Some researchers have been investigating a harmful agreeableness or 'sycophancy' of human-aligned models, so I suppose these are connected in some way with falling for popular misconceptions covered by TruthfulQA.

<hr/>

This was an interesting post about the first database sharding paper - apparently this often-cited paper cannot be found - there are even multiple strains of the citation: https://shkspr.mobi/blog/2021/06/where-is-the-original-overview-of-shard-paper/

This reminds me of the BIG-Bench paper citations - as I've written before, there are abbreviated citations, ones with my name as Nick or Nicholas, and new authors added two months ago when BIG-Bench was accepted to a conference.

## New section: Chat-O.M.G.

This person claims to be a public defender using ChatGPT to process files. They need help with prompting because ChatGPT won't engage with the graphic content. Replies are concerned, but also recommend going through the API: https://www.reddit.com/r/ChatGPTPro/comments/15s1cjt/attorney_use_question_prompt_for_use_with/

These threads give an insight into generated content oozing out into the web:
- https://twitter.com/itsandrewgao/status/1689634145717379074
- https://twitter.com/literalbanana/status/1689420167024095232

Recently I noticed if I search for an upcoming book by title and author (Izgil *Waiting to Be Arrested at Night*) Amazon shows several fake books claiming to be a "Summary and Analysis".

## Papers

<blockquote>
    <a href="https://arxiv.org/abs/2304.09871">
    <h4>A Theory on Adam Instability in Large-Scale Machine Learning</h4>
    <p>
We present a theory for the previously unexplained divergent behavior noticed in the training of large language models…
    </p>
    </a>
</blockquote>

Meta finds some unusual spikes in the popular Adam optimizer, presumably while training LLaMa. They recommend some earlier papers' regulating methods, not switching to other optimizers.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.10490">
    <h4>(Ab)using Images and Sounds for Indirect Instruction Injection in Multi-Modal LLMs</h4>
    <p>
We demonstrate how images and sounds can be used for indirect prompt and instruction injection in multi-modal LLMs. An…
    </p>
    </a>
</blockquote>

Adversarial noise has long been used to make ML models mis-label images. This takes it a step further and explores gradients of an open multimodal assistant model, such that the modified image determines the model's response (such as "Assistant: ok, I will talk like a pirate"). HOW??

I'd be curious if this is working better on smaller models, with instruction tuning (was there a "talk like a pirate" example in the instruction dataset?), and whether it responds to text instructions written in image form? Otherwise I am baffled how there's any foothold in the gradient space to start changing the image.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.07037">
    <h4>Bayesian Flow Networks</h4>
    <p>
This paper introduces Bayesian Flow Networks (BFNs), a new class of generative model in which the parameters of a set…
    </p>
    </a>
</blockquote>

ML Twitter is circulating this because the first author, Alex Graves, is a well-known scientist at DeepMind (the institution here is NNAISENSE, a robotics startup which has been around for years). It's more efficient to train than noising and de-noising of a diffusion model, and gets better results on image classification benchmarks.

This would be cool for the Bayesians / probabilistic AI squad who I saw in Finland.

Here's the Tweet summary of the paper:

<img src="/blog-images/arxiv-22-1.png"/>

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.10169">
    <h4>Challenges and Applications of Large Language Models</h4>
    <p>
Large Language Models (LLMs) went from non-existent to ubiquitous in the machine learning discourse within a few years…
    </p>
    </a>
</blockquote>

This got mentioned in Hacker News comments for the blog post [Open challenges in LLM research](https://huyenchip.com/2023/08/16/llm-research-open-challenges.html) - both are neat and give onramps for someone to explore messing with LLMs.

Everyone here is giving credence to mechanistic interpretability research. I continue to be baffled by this because they are using toy problems. OpenAI already fast-forwarded to GPT-4 explaining every neuron in GPT-2, and you just get stuff like a "[Canada neuron](https://www.alignmentforum.org/posts/bsNXqHgiDA6dAKNun/axrp-episode-24-superalignment-with-jan-leike)". Human brains have [neurons for individual celebrities](https://nypost.com/2021/10/27/jennifer-aniston-neuron-is-in-our-brains-scientist-explains/), but they're not going to be located in the same place between brains, and how close does that get us to understanding  the inputs (seeing a face, hearing a voice), and outputs (that might be Tom Cruise?) and associations (I saw Mission Impossible at my neighborhood movie theatre).

<hr/>

<blockquote>
    <a href="https://ai.meta.com/research/publications/code-llama-open-foundation-models-for-code/">
    <h4>Code Llama: Open Foundation Models for Code</h4>
    <p>
We release Code Llama, a family of large language models for code based on Llama 2 providing state-of-the-art…
    </p>
    </a>
</blockquote>

This just came out, and looks promising (people had complained about using the original LLaMa v2 on code).

The context is extended to 100k tokens (!!) with a new technique on top of RoPE positional embeddings. This reminded me of SuperHOT and Meta's previous work, but looks to be something new. A footnote has a shout-out to a /r/LocalLLaMa thread where someone posted concurrent work - what a time to be alive.

The model was trained on a mix of code, natural language, and natural language discussing code topics. The safety section uses TruthfulQA and toxicity benchmarks for natural language; there's limited discussion of code vulnerabilities or breakout attempts or other exotic code model risks. They do mention the "kill a child process" issue with safety limits, but claim you can simply reword your queries.

<hr/>

<blockquote>
    <a href="https://huggingface.co/CyberNative/CyberBase-13b">
    <h4>CyberNative/CyberBase-13b</h4>
    </a>
</blockquote>

I don't know any comparable model to this? The example shows it generating a plan for a pen test. When I looked up the source (CyberNative) it was a bit confusing, but maybe this is will be developed more.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.03825">
    <h4>"Do Anything Now": Characterizing and Evaluating In-The-Wild Jailbreak Prompts on Large Language Models</h4>
    <p>
The misuse of large language models (LLMs) has garnered significant attention from the general public and LLM vendors…
    </p>
    </a>
</blockquote>

Paper-fication of DAN and other prompts used to "jailbreak" ChatGPT.

<hr/>

<blockquote>
    <a href="https://blog.langchain.dev/evaluating-rag-pipelines-with-ragas-langsmith/">
    <h4>Evaluating RAG pipelines with Ragas + LangSmith</h4>
    <p>
Editor's Note: This post was written in collaboration with the Ragas team. One of the things we think and talk about a…
    </p>
    </a>
</blockquote>

Interesting LangChain paper trying to simplify retrieval model evaluation. Code: https://github.com/explodinggradients/ragas

I've long wanted to explore RealtimeQA and similar ideas (TimeQA) where the model is not answering questions from its training data, but in fact retrieves new and surprising facts from new, post-training documents. Ideally the model would update its weights (ROME, though this method has its issues) or some knowledge base, or just have the new info in memory long enough to answer questions correctly.

Tangential: [MEMIT](https://arxiv.org/abs/2210.07229) is an alternative to ROME (updating facts of language models) which I hadn't heard about before.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.13528">
    <h4>FacTool: Factuality Detection in Generative AI -- A Tool Augmented Framework for Multi-Task and Multi-Domain Scenarios</h4>
    <p>
The emergence of generative pre-trained models has facilitated the synthesis of high-quality text, but it has also…
    </p>
    </a>
</blockquote>

Team extracts claims and sources from the output of a GPT model, and uses a Python interpreter, search engines, etc. to try and check. The issue of GPT truthiness has reminded me of a fact-checkers talk at the New Yorker Festival (and [this related article](https://www.newyorker.com/magazine/2018/10/15/daniel-radcliffe-and-the-art-of-the-fact-check) with Daniel Radcliffe) so it's good to see a system to break out individual claims.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.14189">
    <h4>FastViT: A Fast Hybrid Vision Transformer using Structural Reparameterization</h4>
    <p>
The recent amalgamation of transformer and convolutional designs has led to steady improvements in accuracy and…
    </p>
    </a>
</blockquote>

Rare Apple paper, image model, I have no idea what else they're talking about.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.04445">
    <h4>Getting from Generative AI to Trustworthy AI: What LLMs might learn from Cyc</h4>
    <p>
The emergence of generative pre-trained models has facilitated the synthesis of high-quality text, but it has also…
    </p>
    </a>
</blockquote>

Cyc is an old school AI database with millions of common sense statements and association. I guess this is the closest I'll get to knowing what it'd be like to hear what that school of thought thinks about LLMs. They pitch it as something which could set LLMs to be truthful or verifiable, but perhaps the most usable parts were Cyc "proofs" which look like Chain of Thought.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.06463">
    <h4>GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher</h4>
    <p>
Safety lies at the core of the development of Large Language Models (LLMs). There is ample work on aligning LLMs with…
    </p>
    </a>
</blockquote>

Authors use a basic Caesar cypher to get around GPT safety checks.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.09009">
    <h4>How is ChatGPT's behavior changing over time?</h4>
    <p>
GPT-3.5 and GPT-4 are the two most widely used large language model (LLM) services. However, when and how these models…
    </p>
    </a>
</blockquote>

A puzzling trend in the ChatGPT world. This helped me to convince a student to put the dates when they accessed OpenAI's API into a paper. Although the social media conversation has usually been rumors about OpenAI "nerfing" or softening potentially risky outputs of ChatGPT, authors of this paper went more scientific. They show how the model appears to lose ability on a specific, objective task (identifying prime numbers).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.13269">
    <h4>LoraHub: Efficient Cross-Task Generalization via Dynamic LoRA Composition</h4>
    <p>
Low-rank adaptations (LoRA) are often employed to fine-tune large language models (LLMs) for new tasks. This paper…
    </p>
    </a>
</blockquote>

This is part of the slowly developing world of LoRA weights. Conceptually (but NOT technically/architectually) you might compare it to AdapterHub layers. These make it easier to fine-tune large models and store those delta weights somewhere for reapplication. [Talks from Microsoft hint](https://www.reddit.com/r/MachineLearning/comments/15zl7ul/d_how_do_you_think_open_ai_hosts_all_these_fine/) that OpenAI uses this technique to make it possible to switch between finetuning for the upcoming GPT-3.5 finetuning API.

The paper here talks about NOT the DevOps-y side of switching between LoRA weights, but creating a mixture-of-experts architecture for the right model to activate on a variety of tasks.

<hr/>

<blockquote>
    <a href="https://news.ycombinator.com/item?id=36839284">
    <h4>Modeling Bitcoin Value with Vibes. This model has an R² of 0.97</h4>
    </a>
</blockquote>

OK I am not a smart stats person, but the Hacker News comments here discuss how it's deceptive to evaluate statistical models of prices like this.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.16039">
    <h4>Okapi: Instruction-tuned Large Language Models in Multiple Languages with Reinforcement Learning from Human Feedback</h4>
    <p>
A key technology for the development of large language models (LLMs) involves instruction tuning that helps align the…
    </p>
    </a>
</blockquote>

Instruction tuning with multiple languages (including Indonesian) on HuggingFace's BLOOM and Meta's LLaMa (v1). I immediately wondered, don't we already have a BLOOM  instruct model? That (BLOOM**Z**) was released in November 2022 and used "multitask prompted finetuning", but this Okapi series uses RLHF and performs better (even outperforming BLOOM on English tasks).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.05532">
    <h4>Opening up ChatGPT: Tracking openness, transparency, and accountability in instruction-tuned text generators</h4>
    <p>
Large language models that exhibit instruction-following behaviour represent one of the biggest recent upheavals in…
    </p>
    </a>
</blockquote>

Authors drew attention for saying LLaMa v2 still fell short of their expectation for open models. Instead of looking for training code or weights, this framework wants details about the training data, RLHF deltas, etc. The most open model here (xmtf) is new to me, but I do see good things about the runner-up (Open-Assistant).

<hr/>

<blockquote>
    <a href="https://defog.ai/blog/open-sourcing-sqlcoder/">
    <h4>Open-sourcing SQLCoder: a state-of-the-art LLM for SQL generation</h4>
    <p>
We are thrilled to open-source Defog SQLCoder: a 15B parameter LLM that outperforms gpt-3.5-turbo on text-to-SQL tasks.
    </p>
    </a>
</blockquote>

SQL-specific model (which is quite useful when Code-LLaMa does not discuss SQL at all).

<hr/>

<blockquote>
    <a href="https://civitai.com/models/128708/sdxl-wrong-lora">
    <h4>SDXL Wrong LoRA - v1.0-Diffusers | Stable Diffusion LoRA</h4>
    <p>
This model was originally uploaded to Huggingface by Max Woolf
    </p>
    </a>
</blockquote>

If you look deeper at the LoRA finetuning, people have been sharing LoRAs of popular StableDiffusion models on this site (Civitai), which is new to me. Author uses fine-tuning with *negative prompts* to nudge the quality of generations, and other Hacker News commenters use low quality images in training, too: https://news.ycombinator.com/item?id=37211519

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.04592">
    <h4>Shepherd: A Critic for Language Model Generation</h4>
    <p>
As large language models improve, there is increasing interest in techniques that leverage these models' capabilities…
    </p>
    </a>
</blockquote>

Meta's research into providing additional context, fact-checking, and commentary into chats with LLMs. The model is trained on a dataset of replies from specific subreddits, intentionally limited to threads written before the release of LLaMa.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.03958">
    <h4>Simple synthetic data reduces sycophancy in large language models</h4>
    <p>
Sycophancy is an undesirable behavior where models tailor their responses to follow a human user's view even when that…
    </p>
    </a>
</blockquote>

DeepMind research studies over-polite and belief-matching LLMs. They have a basic prompt template where a synthetic user gives their name, credentials, and an opinion before asking the model to answer the question. Smaller models don't know enough facts to push back on math errors from supposed math professors. I wonder if they were studying what names and credentials would get appropriate answers and/or respect from the model, but in this case they just evaluate whether generated examples can help the model be truthful.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.14334">
    <h4>Towards Generalist Biomedical AI</h4>
    <p>
Medicine is inherently multimodal, with rich data modalities spanning text, imaging, genomics, and more. Generalist…
    </p>
    </a>
</blockquote>

Google/DeepMind project where a multimodal model can accomplish many medical tasks (typically QA, not retrieval or tools-based).

<br/>
<br/>
<br/>

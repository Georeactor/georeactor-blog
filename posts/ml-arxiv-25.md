---
title: ML Arxiv Haul ~25
published_at: 2023-10-21T07:01:00.000Z
snippet: 12 new ML links and comments
tags: arxiv
---

## Comments / Criticism

Last one felt a bit too rushed =\ and I left out some papers which I meant to memorialize. Let's go.

- HuggingFace demo removing PII from text: https://huggingface.co/spaces/PIISA/PIISA_Demo
- Chinese document about how LLMs are evaluated to be good enough for alignment / censorship https://twitter.com/mattsheehan88/status/1714001598383317459
- Stable Diffusion LoRAs remain fascinating, like the Tintin one and this one for IKEA: https://twitter.com/osanseviero/status/1707796812684317094

## Chat-O.M.G.

- Advances in visual prompt injection: https://twitter.com/stargazermellu/status/1713088805341933821 https://twitter.com/BenjaminDEKR/status/1712960475225628815
- User tells how he coaxed ChatGPT-4 Vision into releasing its prompt: https://www.reddit.com/r/OpenAI/comments/176mxj8/comment/k4r5lyh/?context=3

## Papers


<blockquote>
    <a href="https://github.com/sabetAI/BLoRA">
    <h4>sabetAI/BLoRA: batched loras</h4>
    </a>
</blockquote>

I understand this to be doing inference on multiple LoRA adapters at once. This makes sense
because the adapters are all based on the same model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.03214">
    <h4>FreshLLMs: Refreshing Large Language Models with Search Engine Augmentation</h4>
    <p>
Most large language models (LLMs) are trained once and never updated; thus, they lack the ability to dynamically adapt…
    </p>
    </a>
</blockquote>

Always a fan of updating LLM knowledge with newly retrieved data. The FreshQA dataset has questions with answers that update over time, questions about a single likely post-training event, questions which we expect to update at a specific time, etc. In this case all of the models (including external APIs) were evaluated on one day so they could face the same challenges and not be affected by updates to GPT, etc.

Figure 7 in the Appendices shows the few-shot learning system which they use to fine-tune models (called FreshPrompt). They print a sample query and a title+snippet from Google search results.
I believe this allows them to generate the prompts in advance, but I'd like to see this continue to the model learning how to make a helpful query, etc.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.02446">
    <h4>Low-Resource Languages Jailbreak GPT-4</h4>
    <p>
AI safety training and red-teaming of large language models (LLMs) are measures to mitigate the generation of unsafe…
    </p>
    </a>
</blockquote>

Team at Brown University subverts GPT-4 safety guardrails with Zulu, Scots, Hmong, and Guarani.
These reach similar rates as ["AIM"](https://www.jailbreakchat.com/prompt/4f37a029-9dff-4862-b323-c96a5504de5d), a leading prompt for jailbreaking GPT-4.

I also appreciated learning about this website https://www.jailbreakchat.com

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.05914">
    <h4>NEFTune: Noisy Embeddings Improve Instruction Finetuning</h4>
    <p>
We show that language model finetuning can be improved, sometimes dramatically, with a simple augmentation. NEFTune…
    </p>
    </a>
</blockquote>

During instruction fine-tuning, paper adds noise to the input embeddings. As best I can tell this
is a little similar to modifying some words of the input for variety, but the noise is added to the post-tokenization embedding vector values.

This method got added into HuggingFace's TRL library this week.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.09141">
    <h4>PuoBERTa: Training and evaluation of a curated language model for Setswana</h4>
    <p>
Natural language processing (NLP) has made significant progress for well-resourced languages such as English but lagged…
    </p>
    </a>
</blockquote>

BERT model for Setswana, one of the official languages of South Africa. Research institutions represent South Africa, Lelapa AI (Africa-based AI), and someone from U. Hawaii - Manoa.
There were some previous BERT and RoBERTa-based models for Setswana or several African languages, but PuoBERTa gets an edge on them in accuracy.

<hr/>

<blockquote>
    <a href="https://www.alignmentforum.org/posts/mcnWZBnbeDz7KKtjJ/rsps-are-pauses-done-right">
    <h4>RSPs are pauses done right - AI Alignment Forum</h4>
    <p>
COI: I am a research scientist at Anthropic, where I work on model organisms of misalignment; I was also involved in…
    </p>
    </a>
</blockquote>

Anthropic released a Responsible Scaling Policy (RSP) about how to step up model testing as they scale up in complexity and (theoretically) scale up in intelligence at about the same rate. It was interesting as an AGI document from a company which intends on running full tilt into its development. Here someone reflects on that document vs. AI Pauses.

The author makes the case for companies to adopt, and then governments to research and enforce,
similar RSPs and cutoff points.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.12773">
    <h4>Safe RLHF: Safe Reinforcement Learning from Human Feedback</h4>
    <p>
With the development of large language models (LLMs), striking a balance between the performance and safety of AI…
    </p>
    </a>
</blockquote>

Project divides RLHF crowdworker labeling into two separate teams for helpful and harmless ratings.
They create a series of "Beaver" models which are much less likely than the original Alpaca to generate harmful responses.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.02059">
    <h4>Security Weaknesses of Copilot Generated Code in GitHub</h4>
    <p>
Modern code generation tools use AI models, particularly Large Language Models (LLMs), to generate functional and…
    </p>
    </a>
</blockquote>

Longtime fan of messing with Copilot. Similar to research from last year about Copilot's ability to generate code without falling victim to the top 25 CWEs (which contrary to most Python or web programming, has a lot to do with memory management). They use CodeQL for a standard static analysis of code files.

A particularly odd step is that they find repos by searching "by GitHub Copilot" instead of generating code themselves or finding a more probabilistic way to find Copilot-generated code?

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.14342">
    <h4>Sophia: A Scalable Stochastic Second-order Optimizer for Language Model Pre-training</h4>
    <p>
Given the massive cost of language model pre-training, a non-trivial improvement of the optimization algorithm would…
    </p>
    </a>
</blockquote>

Standard "the team made a better optimizer than Adam" paper, this time from Stanford. Sophia trains an equivalently capable GPT-like model in half the time/steps as an Adam-based model. They have similar figures on compute and wall clock time per step, so you could expect half of the time to train a model as before.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.06770">
    <h4>SWE-bench: Can Language Models Resolve Real-World GitHub Issues?</h4>
    <p>
Language models have outpaced our ability to evaluate them effectively, but for their future development it is…
    </p>
    </a>
</blockquote>

With HumanEval being popular but small, and on the tail of ClassEval, here comes SWE-bench, a train-eval dataset of almost 2,300 issue-solving PRs from Python repos, with tests to verify the fix. Several tickets involve looking at code for a context of 50k tokens or more. They have a few suggestions to input the right files to the model, such as BM25 for ranking.

The leaderboard is on https://www.swebench.com

Anthropic's Claude 2 did the best on the paper, with almost 5% solve rate, better than GPT-4 and the paper's LLaMa-based work.

<hr/>

<blockquote>
    <a href="https://ai.meta.com/blog/brain-ai-image-decoding-meg-magnetoencephalography/">
    <h4>Towards a Real-Time Decoding of Images from Brain Activity</h4>
    <p>
Using magnetoencephalography (MEG), Meta showcases an AI system capable of decoding the unfolding of visual…
    </p>
    </a>
</blockquote>

Meta straight-up reads images out of minds.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.16884">
    <h4>The Belebele Benchmark: a Parallel Reading Comprehension Dataset in 122 Language Variants</h4>
    <p>
We present Belebele, a multiple-choice machine reading comprehension (MRC) dataset spanning 122 language variants…
    </p>
    </a>
</blockquote>

Meta's multiple choice benchmark with a lot of languages.

<br/>
<br/>
<br/>

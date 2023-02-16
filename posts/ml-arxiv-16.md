---
title: ML Arxiv Haul ~16
published_at: 2023-02-16T00:23:00.000Z
snippet: Another installment of ML papers and comments
tags: arxiv
---

## New feature: Chatter about previous papers

- Questioning the neatness of the math on Chinchilla (which proposed a formula of optimal model parameter size / corpus size)

https://twitter.com/suchenzang/status/1616752482226671620

- ROME (which changes/updates facts in a model) seems to be closer to memorization rather than concept learning. You could change 'the current president of the United States is _' and similar sentences, but when asked about the commander in chief, or other linguistically/conceptually matchable things, the new fact is not there.

https://www.lesswrong.com/posts/hhhmcWkgLwPmBuhx7/results-from-the-interpretability-hackathon

- Odd tokens in the GPT vocabulary produce bizarre completions. These were recently traced to usernames of reply bots on /r/counting.

https://www.lesswrong.com/posts/aPeJE8bSo6rAFoLqg/solidgoldmagikarp-plus-prompt-generation

https://twitter.com/SoC_trilogy/status/1623118034960322560

- The Inverse Scaling Prize, after an awkward stretch when FTX funding fizzled, has awarded researchers for finding 7 tasks where big models perform poorly. A common thread is instructions which go against memorized text and most likely associations.

https://twitter.com/EthanJPerez/status/1617981045282082817

### Meta

I successfully created [a JSON dataset of 314 links](/arxiv.ts) which were covered in the previous ML Arxiv Hauls. It turned out that I repeated two recently? A search box may be coming. Unfortunately I don't think I can do a Typeahead in Deno Fresh framework (too much client-side JS).

## New Paper Content

<blockquote>
    <a href="https://arxiv.org/abs/2301.10226">
    <h4>A Watermark for Large Language Models</h4>
    <p>
    Potential harms of large language models can be mitigated by watermarking model output, i.e., embedding signals into…
    </p>
    </a>
</blockquote>

Independent researchers change the decoder of a LLM to promote specific tokens beyond their supposed natural probability. There's a flurry interest in detecting GPT-3 or ChatGPT content (including [OpenAI's tool](https://techcrunch.com/2023/01/31/openai-releases-tool-to-detect-ai-generated-text-including-from-chatgpt/), and independent [GPTZero](https://gptzero.me/)) to prevent cheating in school and shortcuts in research and news media. These tools AFAIK focus on probability of individual models, so it's a bit short-lived if every company is going to roll out their own similar model. Covert watermarking is more reliable, if the top companies all agree to participate.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.08311">
    <h4>Can We Find Strong Lottery Tickets in Generative Models?</h4>
    <p>
    Yes. In this paper, we investigate strong lottery tickets in generative models, the subnetworks that achieve good…
    </p>
    </a>
</blockquote>

Researchers prune out parts of an image model to find a smaller, subnetwork which can perform the generation. (This doesn't appear to cover the other part of the lottery ticket hypothesis, that we ought to be able to train the smaller network from scratch).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2209.14958">
    <h4>Co-Writing Screenplays and Theatre Scripts with Language Models: An Evaluation by Industry Professionals</h4>
    <p>
    Language models are increasingly attracting interest from writers. However, such models lack long-range semantic…
    </p>
    </a>
</blockquote>

This is a cool DeepMind paper. I was scared to include it on the Arxiv series because it is 100 pages, but Acknowledgements and References come in on page 19 and then plays and other appendices are bulking it up.

The human playwright has a log line, which is then fed into several prompts. For example, a 'character description prompt' gives a logline for the legend of Jason and the Argonauts, followed by character descriptions for a production. The setup convinces the model to complete the characters for the new logline.

Participants in the studies had good feedback about the bot's production as a rough draft, which could be put on stage. Like most LLMs, there is a problem with repetition. Characters were too predictable and had issues with stereotypes. But some parts were fun:

> "I wouldn't have thought of that but it is quite funny" (p11). "This is something that a human author probably would not stand for, it is uniquely created […] I want ideas that a human couldn't possibly have" (p12).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.00288">
    <h4>CoderEval: A Benchmark of Pragmatic Code Generation with Generative Pre-trained Models</h4>
    <p>
Code generation models based on the pre-training and fine-tuning paradigm have been increasingly attempted by both…
    </p>
    </a>
</blockquote>

HumanEval and other prevalent benchmarks follow a Project Euler / LeetCode format (correct response is a function which does a thing). This is a new benchmark (as of Feb 2023) for more realistic software engineering in context. I'm a bit lost from the paper content alone what their examples look like. They claim to have evaluations including common libraries and neighboring files in the repo.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.14034">
    <h4>Cramming: Training a Language Model on a Single GPU in One Day</h4>
    <p>
Recent trends in language modeling have focused on increasing performance through scaling, and have resulted in an…
    </p>
    </a>
</blockquote>

Given that not everyone has the resources of Google/DeepMind or OpenAI/Microsoft, it would be nice to find a strategy to train a smaller  but still useful language model. They get close to BERT performance on GLUE (though tbh this is an old model and metric, a little disappointing if you can find a fine-tunable model instead).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2007.01547">
    <h4>Descending through a Crowded Valley - Benchmarking Deep Learning Optimizers</h4>
    <p>
Choosing the optimizer is considered to be among the most crucial design decisions in deep learning, and it is not an…
    </p>
    </a>
</blockquote>

I've covered a few new and learned optimizers for the deep learning training loop. This paper came up in response to yet another optimizer promising to beat Adam. The authors here claim that most optimizer papers do not prove to be consistently better (cherry-picked).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.10481">
    <h4>Execution-Based Evaluation for Open-Domain Code Generation</h4>
    <p>
To extend the scope of coding queries to more realistic settings, we propose ODEX, the first open-domain…
    </p>
    </a>
</blockquote>

Comparison of large code-generation models on these examples. The comment prompts are in multiple natural languages.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.01215">
    <h4>Fixing Hardware Security Bugs with Large Language Models</h4>
    <p>
Novel AI-based code-writing Large Language Models (LLMs) such as OpenAI's Codex have demonstrated capabilities in many…
    </p>
    </a>
</blockquote>

Asking Codex to debug Verilog (which is written to define computer chips). For reasons unclear to me, the benchmark/dataset reference is obscured for anonymity, even though the pre-print has the authors' names? Anyway, the claim is that their code model outperforms an analytical program released last year (CirFix).

Looking closer at the examples, they show examples of bugs and use a prompt comment to tell the model what the bug is on those lines. So there is not a Terminator AI crawling around chip diagrams and fixing them, but instead saying 'hey this bug type came up in these lines, please repair it'.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.13779">
    <h4>FLAME: A small language model for spreadsheet formulas</h4>
    <p>
The widespread use of spreadsheet environments by billions of users presents a unique opportunity for formula-authoring…
    </p>
    </a>
</blockquote>

I was thinking that this would be a natural language -> formula paper, but not quite. It is a T5 model which can correct and complete Excel formulae. Of particular interest here is how the authors added Excel functions as tokens to T5, likely to learn strictly from Excel's rules, and to improve syntax.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.01893">
    <h4>GIVL: Improving Geographical Inclusivity of Vision-Language Models with Pre-Training Methods</h4>
    <p>
A key goal for the advancement of AI is to develop technologies that serve the needs not just of one group but of all…
    </p>
    </a>
</blockquote>

Google has previously released some image classification datasets with global diversity (i.e. for 'school' or 'wedding' labels). Geo-Diverse Visual Commonsense Reasoning is a newer dataset from UCLA with additional tasks (I think question-answering?). The UCLA and Amazon team here works on fuzzing tokens/concepts which are going to look different across cultures.

<hr/>

<blockquote>
    <a href="https://github.com/inseq-team/inseq">
    <h4>inseq-team/inseq: Interpretability for sequence generation models 🐛 🔍</h4>
    <p>
Inseq is a Pytorch-based hackable toolkit to democratize the access to common post-hoc interpretability analyses of seq…
    </p>
    </a>
</blockquote>

A choice of feature-attribution model can be applied to generative models and produce a table showing the most influential words (I think this might be best to replace my frequent use of ecco).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.01181">
    <h4>Large Language Models as Corporate Lobbyists</h4>
    <p>
We demonstrate a proof-of-concept of a large language model conducting corporate lobbying related activities. An…
    </p>
    </a>
</blockquote>

This and [research on LLMs for political persuasion](https://osf.io/stakv/) are a bit worrying, but essentially dissolve down to: can GPT-3 process information? Can it write a response to information? Can it do it in this field? I don't think that anyone was claiming that political platforms were so nuanced or esoteric that GPT-3 could not riff on it from whatever it's picked up online.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2208.07339">
    <h4>LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale</h4>
    <p>
Large language models have been widely adopted but require significant GPU memory for inference. We develop a procedure…
    </p>
    </a>
</blockquote>

Promising code to make models fit better. https://huggingface.co/blog/hf-bitsandbytes-integration

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2209.03032">
    <h4>Machine Learning Students Overfit to Overfitting</h4>
    <p>
Overfitting and generalization is an important concept in Machine Learning as only models that generalize are…
    </p>
    </a>
</blockquote>

Early warnings about overfitting appear to make an impression on students, but many are left with misconceptions about how to detect it and improve models.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2209.07663">
    <h4>Monolith: Real Time Recommendation System With Collisionless Embedding Table</h4>
    <p>
Building a scalable and real-time recommendation system is vital for many businesses driven by time-sensitive customer…
    </p>
    </a>
</blockquote>

A TikTok/Bytedance paper! Here they say their recommender needs something beyond PyTorch and TensorFlow for continual learning in production. They want to represent each item with vectors/embeddings with an expiration date, and then explore that space, but there will be many more users and content than words in a word-embeddings model. The ML model part is based on a TensorFlow concept called Worker-ParameterServer (which allows for distributed updating of gradients).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.06675">
    <h4>Symbolic Discovery of Optimization Algorithms</h4>
    <p>
We present a method to formulate algorithm discovery as program search, and apply it to discover optimization…
    </p>
    </a>
</blockquote>

This is the optimizer paper which I mentioned earlier. Google's team introduces the Lion optimizers, which moves up visual transformers' accuracy numbers on ImageNet. 'Symbolic discovery' and 'program search' hint that there is intentionality in how the AI chose this function. The method is not super clear - it is described as 'evolutionary search' and similar reinforcement learning methods are criticized as being more constrained. In 'funnel selection' they describe several rounds where a task is scaled and many algorithms are eliminated. So I am not sure how this compares with DeepMind's process of creating 100s of candidate programs ->  evaluation by running code-> reinforcement learning.

<hr/>

<blockquote>
    <a href="https://www.cell.com/patterns/fulltext/S2666-3899(21)00064-7">
    <h4>The overfitted brain: Dreams evolved to assist generalization </h4>
    <p>
Why do we dream? While it is known that dreams must be important for learning, it is unknown precisely how or why this…
    </p>
    </a>
</blockquote>

Biology paper inspired by neural networks and the overfitting problem. Heard this via the 'Many Minds' podcast. The null hypothesis (or backlash to early psychology) is that dreams and their content are meaningless noise in our brains. Hypothesis is that we see out-of-distribution, low-res (supposedly "sparse") content to prevent our neurons from overfitting to our experience. Another theory is that memories are being reorganized in a way which has this noisy content.

This is one of those hypotheses which sounds very cool, and you can pick a few ML experiments where they describe their training + augmentation as similar to dreams, but it isn't falsifiable and it's difficult to say ML practice is converging toward dreaming.

I'm reminded of the earlier paper (*Machine Learning Students Overfit to Overfitting*) so we might be too quick to explain brains too as overfitting.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.09912">
    <h4>Tokenization Consistency Matters for Generative Models on Extractive NLP Tasks</h4>
    <p>
Generative models have been widely applied to solve extractive tasks, where parts of the input is extracted to form the…
    </p>
    </a>
</blockquote>

Amazon researchers explore a tokenization issue in question-answering models. In some conditions the model does not locate the correct answer inside of the original context / retrieved content / etc. because it is tokenized differently (they give an example where '_1912' is one token and '1912' without the preceding space is two tokens).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.02695">
    <h4>Witscript 3: A Hybrid AI System for Improvising Jokes in a Conversation</h4>
    <p>
Previous papers presented Witscript and Witscript 2, AI systems for improvising jokes in a conversation. Witscript…
    </p>
    </a>
</blockquote>

An independent researcher who has been writing a few papers on humor and language models. Hashtag goals.<br/>
The author uses a chain of GPT-3 API calls to build up joke candidates and pick the best. They also have a simple GPT-3 prompt to generate jokes based on almost any context (`You want to be funny. Respond to this: [The sentence]`).

As I learned with Reddit clapbacks four years ago, it's important to include a NOMEME category (where meme responses were rejected), or the joke-generator cannot avoid a bad joke.

Another humor NLP project that recently caught my eye: https://github.com/leonardtang/The-Naughtyformer

<br/>
<br/>
<br/>

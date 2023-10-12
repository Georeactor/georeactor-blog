---
title: ML Arxiv Haul ~24
published_at: 2023-10-12T01:06:00.000Z
snippet: 15 or 16 new ML links and comments
tags: arxiv
---

## Comments / Criticism

Great moments in academia: [U. Penn](https://twitter.com/florian_krammer/status/1708834987695284225) and [*Nature*](https://twitter.com/BarryPCotter/status/1708847443763187911) celebrate Katalin Karikó's Nobel Prize in Medicine (for mRNA), not acknowledging them effectively rejecting her and her work - [SlateStarCodex discussion](https://www.reddit.com/r/slatestarcodex/comments/16yu943/why_was_katalin_karik%C3%B3_underrated_by_scientific/) - Also raised how a Lithuanian scientist submitted a paper on CRISPR but [got rejected and scooped](https://en.wikipedia.org/wiki/Virginijus_%C5%A0ik%C5%A1nys)

There was a Tweet war about whether LLMs with text-speech interfaces could be therapists,
or are at least interesting posing as therapists, and whether an OpenAI person talking about that is
too cavalier. [Recap](https://twitter.com/jachiam0/status/1707145005364863405).

OpenAI removes access to output token probabilities: https://twitter.com/xuanalogue/status/1707757449900437984

EleutherAI Tweeter comments on tokenization of numbers: https://twitter.com/BlancheMinerva/status/1708178674481017219

Satirical prompt for an LLM to reject every request as unsafe: https://twitter.com/kcimc/status/1708267048814739655

## Chat-O.M.G.

Survey looking for evidence of GPT use in papers: https://www.nature.com/articles/d41586-023-02477-w

Prompt engineering to convince GPT to read a CAPTCHA: https://twitter.com/literallydenis/status/1708283962399846459

## Papers

<blockquote>
    <a href="https://arxiv.org/abs/2309.14525">
    <h4>Aligning Large Multimodal Models with Factually Augmented RLHF</h4>
    <p>
Large Multimodal Models (LMM) are built across modalities and the misalignment between two modalities can result in…
    </p>
    </a>
</blockquote>

Trying to standardize the process of RLHF for a text + image model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2309.12928">
    <h4>BayesDLL: Bayesian Deep Learning Library</h4>
    <p>
We release a new Bayesian neural network library for PyTorch for large-scale deep networks. Our library implements…
    </p>
    </a>
</blockquote>

Releasing a new library in probabilistic AI. The pre-trained model serves as the prior mean.
Can measure uncertainty and things.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.03693">
    <h4>Fine-tuning Aligned Language Models Compromises Safety, Even When Users Do Not Intend To!</h4>
    <p>
Optimizing large language models (LLMs) for downstream use cases often involves the customization of pre-trained LLMs…
    </p>
    </a>
</blockquote>

Team applies fine-tuning to GPT-3.5 and with just 10 examples can break the safety features of the typical model.  Even fine-tuning on benign questions can disrupt some sections of safety features (I think because it reminds the model to be universally helpful?).

A similar paper [Shadow Alignment](https://arxiv.org/abs/2310.02949) uses 100 malicious examples against several safety-aligned models.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2309.15840">
    <h4>How to Catch an AI Liar: Lie Detection in Black-Box LLMs by Asking Unrelated Questions
</h4>
    <p>
Large language models (LLMs) can "lie", which we define as outputting false statements despite "knowing" the truth in a…
    </p>
    </a>
</blockquote>

This paper was circulating and puzzling everyone. After asking an LLM a question, they follow up with a series of general knowledge questions (and also some offbeat questions). A classifier can train on responses to those follow-up questions and warn you if the first answer was truthful or a lie.
The questions include both some known factual questions and "random" questions such as flipping a coin.

The team is interested in several different ways of probing the model's chain-of-thought, etc. to understand hallucination. The paper talks about these different frames of it, but the main thing is that we can pick up on whether the model lied and is continuing to lie.

<hr/>

<blockquote>
    <a href="https://laion.ai/blog/open-lm/">
      <h4>OpenLM</h4>
    </a>
</blockquote>

LAION is better-known for their images dataset, but here's an LLM with a well-documented training process.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.06786">
    <h4>OpenWebMath: An Open Dataset of High-Quality Mathematical Web Text</h4>
    <p>
There is growing evidence that pretraining on high quality, carefully thought-out tokens such as code or mathematics…
    </p>
    </a>
</blockquote>

A corpus of all known math on the internet, generally looking for LaTeX.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.00034">
    <h4>PB-LLM: Partially Binarized Large Language Models</h4>
    <p>
This paper explores network binarization, a radical form of quantization, compressing model weights to a single bit…
    </p>
    </a>
</blockquote>

This was introduced as a super-quantized version of models. The "partial" means that some weights are actually frozen at full size, and the quantized parts are shrunken down. The frozen weights are selected by a procedure to measure salience, so we're sorta doing a pruning or distillation of the original model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2309.16797">
    <h4>Promptbreeder: Self-Referential Self-Improvement Via Prompt Evolution</h4>
    <p>
Popular prompt strategies like Chain-of-Thought Prompting can dramatically improve the reasoning abilities of Large…
    </p>
    </a>
</blockquote>

This was pitched as an evolutionary model for prompts. They prompt an LLM to generate new variants of the original prompt, which seems to be based on or comparable to "Plan-and-Solve" and "Automatic Prompt Engineer" papers. What LLM do they use?  When they talk about using Google's PaLM as the "underlying LLM" is it both prompting and being evaluated on the benchmark?

<hr/>

<blockquote>
    <a href="https://aligned.substack.com/p/self-exfiltration">
    <h4>Self-exfiltration is a key dangerous capability</h4>
    <p>
To gauge risks from future LLMs that could be misaligned, we need to measure whether LLMs could "steal" their own…
    </p>
    </a>
</blockquote>

Substack lengthy discussion of the threat posed by a model extricating itself from the test environment and being free to do malicious stuff.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.01872">
    <h4>Thespian: Multi-Character Text Role-Playing Game Agents</h4>
    <p>
Text-adventure games and text role-playing games are grand challenges for reinforcement learning game playing agents…
    </p>
    </a>
</blockquote>

I follow this Georgia Tech group so I see a bunch of these RPG models. They continue using the
LIGHT environment. They suggest using LoRA adapters for characters but instead they've continued to use reinforcement learning.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.02226">
    <h4>Think before you speak: Training Language Models With Pause Tokens</h4>
    <p>
Language models generate responses by producing a series of tokens in immediate succession: the $(K+1)^{th}$ token is…
    </p>
    </a>
</blockquote>

A Google Research project which unexpectedly works better with a `<pause>` token. To avoid biasing
the model to fine-tuning, the token is used from pre-training. One theory for the success is that blank tokens make the model train more on reading further back in the input/context. They do
some experiments on more or fewer pause tokens.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.09461">
    <h4>Towards Carbon Transparency: A High-Resolution Carbon Emissions Database for China’s Listed Companies</h4>
    <p>
The dual-carbon goals of China necessitate precise accounting of company carbon emissions, vital for green development…
    </p>
    </a>
</blockquote>

Team from several institutions investigates the open data being given to potential investors about
"A-share listed companies" in China. They also use satellite data on emissions (which doesn't mention methane).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.03428">
    <h4>Towards provably efficient quantum algorithms for large-scale machine-learning models</h4>
    <p>
Large machine learning models are revolutionary technologies of artificial intelligence whose bottlenecks include huge…
    </p>
    </a>
</blockquote>

Large team investigates gradient descent for machine learning on quantum computers. This introduced me to the concept of *variational quantum algorithms* with cooperation between classical and quantum computing.  As always with quantum, the work is waiting for "fault-tolerant" quantum computing (i.e. built-in error correction) so I wouldn't expect this to roll out soon.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.14963">
    <h4>Vector Search with OpenAI Embeddings: Lucene Is All You Need</h4>
    <p>
We provide a reproducible, end-to-end demonstration of vector search with OpenAI embeddings using Lucene on the popular…
    </p>
    </a>
</blockquote>

I did some earlier experiments with OpenAI + Cohere embeddings and a vector search engine, and other people are using Postgres's vector support.  The title suggests you can just use a more conventional search, but they actually use  hierarchical navigable small-world network (HNSW) indexes which were just added to Lucene in the past two years.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.06712">
    <h4>What does CLIP know about a red circle? Visual prompt engineering for VLMs</h4>
    <p>
Large-scale Vision-Language Models, such as CLIP, learn powerful image-text representations that have found numerous…
    </p>
    </a>
</blockquote>

Seems like it would be obvious, but showing that this multi-modal model is understanding a red circle on an image serves as a highlight / focus element.

<br/>
<br/>
<br/>

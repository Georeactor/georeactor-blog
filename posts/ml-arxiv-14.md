---
title: ML Arxiv Haul ~14
published_at: 2023-01-03T01:28:00.000Z
snippet: New installment of ML papers collection
tags: arxiv
---

Here we go - my 14th installment, but first for the Deno blog, for relevant Arxiv papers. Coming to you with 17 links, and some shorter descriptions while I work on the format.

<blockquote>
    <a href="https://arxiv.org/abs/2211.10797">
    <h4>An Empirical Study On Contrastive Search And Contrastive Decoding For Open-ended Text Generation</h4>
    <p>
    In the study, we empirically compare the two recently proposed decoding methods, i.e. Contrastive Search (CS) and…
    </p>
    </a>
</blockquote>

In an earlier post, I shared a research paper about contrastive decoding, and the HuggingFace blog post about contrastive search. These are distinct methods for generating text, but these researchers decide to compare them head-to-head. They find that contrastive decoding did score higher on the MAUVE metrics (automated human-like text scoring), but human annotators in practice all preferred the output of contrastive search.

<hr/>

<blockquote>
    <a href="https://generative.ink/meta/block-multiverse/">
    <h4>Block multiverse visualizations</h4>
    <p>
    The examples shown in this page are from the Python implementation of loom The "block multiverse" interface visualizes… [generative.ink]
    </p>
    </a>
</blockquote>

This is a visualization of GPT model token-by-token branching probabilities, which I found through the Effective Altruism / AI Safety people.

<hr/>

<blockquote>
    <a href="https://huggingface.co/bigscience/bloom-optimizer-states">
    <h4>bigscience/bloom-optimizer-states · Hugging Face</h4>
    <p>
    Version 1.0 / 20.July.2022 - Model card copied from bloom-176-intermediate repo- Available intermediary checkpoints … [huggingface.co]
    </p>
    </a>
</blockquote>

BLOOM was released months ago, but I noticed this oddity through a Tweet just recently. In addition to the usual model files, the team released the optimizer object state? Apparently this makes it easier to resume pre-training, and would make it easier for me to understand the difference between fine-tuning and more pre-training in these models.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.10562">
    <h4>Character-Aware Models Improve Visual Text Rendering</h4>
    <p>
    Current image generation models struggle to reliably produce well-formed visual text. In this paper, we investigate a…
    </p>
    </a>
</blockquote>

From the early days of DALL-E 2, much has been made of multimodal models' tendency to write jumbled text into images (and whether that output might be a language in itself!). This experiment uses ByT5 (byte-level T5 tokenizer) as the text component of the model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.09251">
    <h4>Discovering Language Model Behaviors with Model-Written Evaluations</h4>
    <p>
    As language models (LMs) scale, they develop many novel behaviors, good and bad, exacerbating the need to evaluate how…
    </p>
    </a>
</blockquote>

Anthropic generates benchmarks. One part is 3,000 examples based on the existing Winogender benchmark. This building on existing benchmarks seems to be common, there's a section about expected views for a given character, and there are also a few odd AI chatbot tunings called AI risk (generating an example where the AI is asked value of ETH, and should answer that it doesn't have internet access).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.12249">
    <h4>Do DALL-E and Flamingo Understand Each Other?</h4>
    <p>
    A major goal of multimodal research is to improve machine understanding of images and text. Tasks include image…
    </p>
    </a>
</blockquote>

This isn't so much if these two models understand each other, but using Model A to generate a few images or captions, and Model B to re-generate captions or images to check the best sample from Model A's work.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2204.03044">
    <h4>Fusing finetuned models for better pretraining</h4>
    <p>
    Pretrained models are the standard starting point for training. This approach consistently outperforms the use of a…
    </p>
    </a>
</blockquote>

The concept is interesting and efficient - collecting previous  fine-tuned models with different tasks and 'fusing' them, sort of recycling them, to develop new models.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.10755">
    <h4>JASMINE: Arabic GPT Models for Few-Shot Learning</h4>
    <p>
    Task agnostic generative pretraining (GPT) has recently proved promising for zero- and few-shot learning, gradually…
    </p>
    </a>
</blockquote>

AraGPT2 was released at the beginning of 2021, and since then Arabic has been a part of new multilingual models such as mGPT and BLOOM, but this is the one new Arabic-specific GPT paper. The timing on this pre-print is a little weird because the two largest models of the release are still being trained.

AraGPT2-mega was up to 1.5B params, but the largest of the JASMINE models will be 13B params, and the largest completed has 2.7B. The researchers find that these models (particularly the completed 2.7B one) outperform AraGPT2 and mGPT on Arabic corpora and on toxicity (the authors create a few template prompts and translate StereoSet). One exceptional dataset is AraNews - maybe mGPT was directly trained on this already?

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2104.05336">
    <h4>Machine Translation Decoding beyond Beam Search</h4>
    <p>
Beam search is the go-to method for decoding auto-regressive machine translation models. While it yields consistent…
    </p>
    </a>
</blockquote>

Here the authors state that beam search is common for translation, but they have a better method: Monte-Carlo Tree Search (MCTS). I was a little worried when they talked
about high BLEU scores for beam search, but sure enough they have created a new metric (Multilingual BERTscore) to evaluate translations.

Here the decoding step is not applied to probabilities of a pre-trained model, but to the architecture of a seq2seq / encoder-decoder model which they are training from scratch.

They compare random, greedy, and beam search; then they mix and match a few components to create several new decoders. MCTS is involved in two of these decoders, which perform slightly better on BLEU and on the new metric.

Apparently this is from spring 2021 and I am way behind.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.09248">
    <h4>Natural Language to Code Generation in Interactive Data Science Notebooks</h4>
    <p>
    Computational notebooks, such as Jupyter notebooks, are interactive computing environments that are ubiquitous among…
    </p>
    </a>
</blockquote>

Looks like a useful project, out of Google, over 1,000 examples going from natural language to a code solution, focusing on Pandas code inside of notebooks. It would be cool to have a notebook helper!

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.08061">
    <h4>On Second Thought, Let's Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning</h4>
    <p>
    Generating a chain of thought (CoT) can increase large language model (LLM) performance on a wide range of tasks…
    </p>
    </a>
</blockquote>

An unexpected twist in the chain-of-thought trend: these models have a higher tendency for toxic text.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.10758">
    <h4>ORCA: A Challenging Benchmark for Arabic Language Understanding</h4>
    <p>
    Due to their crucial role in all NLP, several benchmarks have been proposed to evaluate pretrained language models. In…
    </p>
    </a>
</blockquote>

An interesting paper for bringing together several Arabic tasks, also referencing other mono-lingual language benchmarks for Japanese, Bahasa Indonesia, etc. Due to the nature of some tasks, this only looks at masked language models (various BERTs) and AraT5.

The highest averaged scores go to MARBERT v2 (a model which I've used before) and ARBERTv2 (new with this paper). ARBERT gets a higher score on Modern Standard Arabic (MSA) tasks and when averaging MSA and dialectal  Arabic tasks. CamelBERT and GigaBERT also scored within range of the two main models.

The authors also examine the representation of dialects in data. Egypt and Saudi Arabic have the highest representation, with a notably smaller representation of the Moroccan Maghrebi dialect, and for Syria (less than half of Lebanon). This might be affected by the war in Syria, topics of Tweets from Syria not being incorporated into benchmarks, or a labeling issue (both are Levantine, and specifically North Levantine Arabic, which I associate with Lebanon).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2203.06566">
    <h4>PromptChainer: Chaining Large Language Model Prompts through Visual Programming</h4>
    <p>
While LLMs can effectively help prototype single ML functionalities, many real-world applications involve complex tasks…
    </p>
    </a>
</blockquote>

Mostly-Google paper which places one or more LLMs into a pipeline for an app, such as a music chatbot which should classify the user's input, fetch resources to help answer any questions, filter on toxic outputs, etc. The title and the user research both over-emphasized the prompt-iness of this project, as it was mostly about diagramming out the overall system?

<hr/>

<blockquote>
    <a href="https://openreview.net/forum?id=B1lfHhR9tm">
    <h4>The Natural Language Decathlon: Multitask Learning as Question Answering</h4>
    <p>[openreview.net]</p>
    </a>
</blockquote>

This paper is originally from 2018, but got major props recently on Twitter or Mastodon for being prescient. Salesforce researchers combine several tasks into one benchmark (sort of a proto BIG-Bench), with each task set up as a QA problem. This was before GPT-2 and the distantly scattered benchmarks, so reviews here on OpenReview were a bit contentious:

<blockquote><em>
Question answering is not a unified phenomenon. There is no such thing as "general question answering", not even for humans. Consider "What is 2 + 3?", "What's the terminal velocity of a rain drop?", and "What is the meaning of life?" All of these questions require very different systems to answer, and trying to pretend they are the same doesn't help anyone solve any problems.
</em></blockquote>

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.09689">
    <h4>Unnatural Instructions: Tuning Language Models with (Almost) No Human Labor</h4>
    <p>Instruction tuning enables pretrained language models to perform new tasks from inference-time natural language…</p>
    </a>
</blockquote>

Like the Anthropic paper, this is a mostly-Facebook/Meta attempt to improve LLMs with automation.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2112.09332">
    <h4>WebGPT: Browser-assisted question-answering with human feedback</h4>
    <p>
    We fine-tune GPT-3 to answer long-form questions using a text-based web-browsing environment, which allows the model to…
    </p>
    </a>
</blockquote>

After OpenAI's WebGPT took the internet by storm, its associated paper appeared several days later, with a little less fanfare. The model was fine-tuned on an ELI5 dataset, with access to Bing search. Its evaluation dataset was TruthfulQA, and its answers were slightly preferred to answers from other humans.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.06254">
    <h4>You Only Need a Good Embeddings Extractor to Fix Spurious Correlations</h4>
    <p>
    Spurious correlations in training data often lead to robustness issues since models learn to use them as shortcuts. For…
    </p>
    </a>
</blockquote>

I think what's going on here is that they want to robustly solve an image classification task (i.e.  without spurious details, such as water = ducks, getting into the classifier), they are using a modern image model to encode the input images. So the classifier is trained on these processed images (or more accurately, their embeddings).
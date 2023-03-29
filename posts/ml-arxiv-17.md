---
title: ML Arxiv Haul ~17
published_at: 2023-03-29T01:33:00.000Z
snippet: After a break, installment of ML papers and comments
tags: arxiv
---

## Comments and Shade

* The GPT-4 paper said very little, and does not make the cut.

* Article: [Large language models aren't trained enough](https://finbarr.ca/llms-not-trained-enough/) - The authors explain it better. Part of this is a misunderstanding (that I also had) about Chinchilla. That paper was describing a compact model in parameter count and training size, but you can still keep training Chinchilla-inspired models.

- [Twitter thread](https://twitter.com/_lamaahmad/status/1630757960606691328): on Red Team-ing to detect bias in non-obvious tasks

## New Paper Content

<blockquote>
    <a href="https://arxiv.org/abs/2303.07519">
    <h4>Architext: Language-Driven Generative Architecture Design</h4>
    <p>
    Architectural design is a highly complex practice that involves a wide diversity of disciplines, technologies…
    </p>
    </a>
</blockquote>

Research from Institute of Digital Games, Malta, which represents basic floor plans in a visual-text model. Their training data is generated buildings from Rhinoceros/Grasshopper 3D modeling software, and the Magnetizing Floor Plan Generator. So in a way they are training a neural network to mimic this stack.

If interested in this topic, licensed architect / YouTuber Dami Lee discussed diffusion models a bit here: https://www.youtube.com/watch?v=N709ZrxoIP0

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.13375">
    <h4>Capabilities of GPT-4 on Medical Challenge Problems</h4>
    <p>
    Large language models (LLMs) have demonstrated remarkable capabilities in natural language understanding and generation…
    </p>
    </a>
</blockquote>

More specific drill-down by OpenAI and Microsoft into GPT-4's success on medical exam questions.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.05527">
    <h4>CodeBERTScore: Evaluating Code Generation with Pretrained Models of Code</h4>
    <p>
Since the rise of neural models of code that can generate long expressions and statements rather than a single…
    </p>
    </a>
</blockquote>

CodeBERTScore is a different way of measuring loss between generated and training data code. This supports synonymous code (e.g. x**0.5 and math.sqrt(x)) and makes it easier for the model to train on the actual problem.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.07865">
    <h4>Dataset Interfaces: Diagnosing Model Failures Using Controllable Counterfactual Generation</h4>
    <p>
Distribution shifts are a major source of failure of deployed machine learning models. However, evaluating a model's…
    </p>
    </a>
</blockquote>

MIT researchers generate images using Stable Diffusion and create an alternate ImageNet dataset. They use prompts to create additional photos and some with variations (in the water, pencil sketch). CLIP indicates this dataset is better than images scraped from Bing search. So it would be a better technique for distribution shifts.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.14838">
    <h4>EvoPrompting: Language Models for Code-Level Neural Architecture Search</h4>
    <p>
Given the recent impressive accomplishments of language models (LMs) for code generation, we explore the use of LMs as…
    </p>
    </a>
</blockquote>

Studies an AutoML-type system on a simple MNIST problem. They show a code-generation model two previous target metric results, and their programs, then prompts with another metric result with a higher accuracy. As a human I might look at two basic code sample and try to draw a linear trend in how to move the parameters and code around, but it could also be drawing from its pre-training knowledge of how to write PyTorch modules.

<img src="/blog-images/arxiv-17-1.png"/>

<hr/>

<blockquote>
    <a href="https://glaze.cs.uchicago.edu/">
    <h4>Glaze: Protecting Artists from Style Mimicry</h4>
    <p>
What Is Glaze? Glaze is a tool to help artists to prevent their artistic styles from being learned and mimicked by new…
    </p>
    </a>
</blockquote>

There isn't a paper fully describing this yet, but it's a tool for artists to process their images in a way that hides them from training and fine-tuning of generative models (or somehow alters them in a way apart from organically found images).

Producing much discussion on Twitter and a scattering complaints over the harmfulness of 'poisoning' image-scraping generative models.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2210.07700">
    <h4>Language Generation Models Can Cause Harm: So What Can We Do About It? An Actionable Survey</h4>
    <p>
Recent advances in the capacity of large language models to generate human-like text have resulted in their increased…
    </p>
    </a>
</blockquote>

Survey of how model developers can detect and reduce harms within the model architecture. For example, discusses data filtration and decoders, not detecting GPT text in the wild.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.14520">
    <h4>Large Language Models Are State-of-the-Art Evaluators of Translation Quality</h4>
    <p>
We describe GEMBA, a GPT-based metric for assessment of translation quality, which works both with a reference…
    </p>
    </a>
</blockquote>

Microsoft researchers prompt GPT-3.5 and ChatGPT to grade translations using scores, a star rating, etc. and compare evaluation power on many translations. SOTA performance on three language pairs.

They ran into a common problem where the model did not return a message in the format reporting a score, in which case they increase temperature and pick the most probably formatted message.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.08468">
    <h4>LEVER: Learning to Verify Language-to-Code Generation with Execution</h4>
    <p>
The advent of pre-trained code language models (CodeLMs) has lead to significant progress in language-to-code…
    </p>
    </a>
</blockquote>

Primarily Meta research into predicting whether code matches a given output. They generate multiple programs and return the one best fitting a target output based on this predictor. Likely by doing this they measure usefulness of a program and (on some level) readability.

I was a little surprised that they do the reranking but don't discuss reinforcement learning of the original model?

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.14617">
    <h4>Neural Graph Reasoning: Complex Logical Query Answering Meets Graph Databases</h4>
    <p>
Complex logical query answering (CLQA) is a recently emerged task of graph machine learning that goes beyond simple…
    </p>
    </a>
</blockquote>

There are two things going on here, one being representing of queries into SPARQL for graph database queries, and the other being their own 'neural' graph database architecture. It can find fuzzy matches for things, for example finding 'Turing Award winners who study deep learning' even when one of those links/edges is missing from the graph. This feels a bit sketchy if I am using a conventional database, but it could be useful if we can mark these in some way.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.13592">
    <h4>Prompting Large Language Models to Generate Code-Mixed Texts: The Case of South East Asian Languages</h4>
    <p>
While code-mixing is a common linguistic practice in many parts of the world, collecting high-quality and low-cost…
    </p>
    </a>
</blockquote>

Researchers test four models' ability to include other languages within a mainly-English sentence, focusing on Indonesian, Malay, Chinese, Singlish, Tagalog, and Vietnamese. ChatGPT and InstructGPT receive the best scores. The prompts ask ChatGPT to (for example) "Imagine that you are a [country] speaker" or dialogues with specific languages and topics.

I appreciated this note in the paper on Malay and Indonesian:

> Even though Standard Malay and Indonesian originate from the same Malay language and are mutually intelligible, they can differ in spelling and vocabulary. One example is loanwords. Due to the different colonial influences from the Dutch and British, Indonesian primarily absorbs Dutch loanwords whereas Malay absorbs English loanwords.

In some cases, an English-Chinese sentence with a Malaysia context would include words from Malay, without explanation. I wonder if the same would be true if the test included Tamil?

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2210.03629">
    <h4>ReAct: Synergizing Reasoning and Acting in Language Models</h4>
    <p>
While large language models (LLMs) have demonstrated impressive capabilities across tasks in language understanding and…
    </p>
    </a>
</blockquote>

ReAct is a technique, or new name for a technique, where LLMs combine chain-of-thought with writing out commands and calls to external resources, such as a Wikipedia search or calculator to get the best and more current answer.

<img src="/blog-images/arxiv-17-2.png"/>

<hr/>


<blockquote>
    <a href="https://arxiv.org/abs/2303.13521">
    <h4>Scamming the Scammers: Using ChatGPT to Reply Mails for Wasting Time and Resources</h4>
    <p>
The use of Artificial Intelligence (AI) to support cybersecurity operations is now a consolidated practice, e.g., to…
    </p>
    </a>
</blockquote>

A fun one... researchers chose a real and established e-mail address (used for mailing lists) to reply to scammers from ChatGPT. The sample size was very small (only four appear to have longer threads?) and they needed human intervention to avoid ChatGPT sending real phone numbers, etc. to the scammers.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2302.04761">
    <h4>Toolformer: Language Models Can Teach Themselves to Use Tools</h4>
    <p>
Language models (LMs) exhibit remarkable abilities to solve new tasks from just a few examples or textual instructions…
    </p>
    </a>
</blockquote>

Example of a model learning API documentation and learning how to call these systems.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.10527">
    <h4>Two Kinds of Recall</h4>
    <p>
It is an established assumption that pattern-based models are good at precision, while learning based models are better…
    </p>
    </a>
</blockquote>

A well-known researcher generated simple sentences which a QA model still struggles to answer with identical sentences but different names or chemicals substituted in.

Notably includes an appendix of reviewers' rejections from a more formal conference paper; [see Twitter thread](https://twitter.com/annargrs/status/1638838383635230722). Reviewers pointed out that the 'two kinds of recall' section is a bit limited, and that QA models are more typically used on longer text passages.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.14957">
    <h4>unarXive 2022: All arXiv Publications Pre-Processed for NLP, Including Structured Full-Text and Citation Network</h4>
    <p>
Large-scale data sets on scholarly publications are the basis for a variety of bibliometric analyses and natural…
    </p>
    </a>
</blockquote>

A dataset of arXiv papers, freeing the text from PDFs.

<br/>
<br/>
<br/>

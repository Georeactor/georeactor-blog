---
title: ML Arxiv Haul ~15
published_at: 2023-01-15T22:53:00.000Z
snippet: Next installment of 20 ML papers and comments
tags: arxiv
---

I now have over 100 Arxiv links in my queueing document. Many of them will never make it into these haul posts. I'll continue to select less theoretical, more recent papers. If I don't want to skim through a paper, or add context beyond the abstract, then I cut it out.

At this point, I do worry that I might summarize a previously-covered paper. I ought to create a mini-database.

<blockquote>
    <a href="https://arxiv.org/abs/1910.11099">
    <h4>Adversarial T-shirt! Evading Person Detectors in A Physical World</h4>
    <p>
    It is known that deep neural networks (DNNs) are vulnerable to adversarial attacks. The so-called physical adversarial…
    </p>
    </a>
</blockquote>

It makes sense that a computer with access to an ML model and its weights can try different inputs and hack its way to an image that defeats the model. It's more challenging to defeat a model through a physical object as observed by a camera, though it's been done (<a href="https://gizmodo.com/this-simple-sticker-can-trick-neural-networks-into-thin-1821735479">toaster sticker in 2017/2018</a>).

The shirt has a colorful, abstract design which avoids the human having crisp vertical lines. It defeated visual models of the time: YOLOv2 and R-CNN. The authors continue to create new research on adversarial examples.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.09535">
    <h4>BLOOM+1: Adding Language Support to BLOOM for Zero-Shot Prompting</h4>
    <p>
    The BLOOM model is a large open-source multilingual language model capable of zero-shot learning, but its pretraining…
    </p>
    </a>
</blockquote>

BLOOM is the multilingual, GPT-3 style model produced by HuggingFace / BigScience. This covers how we might add a previously unsupported language to the model.

The researchers recommend MAD-X adapters (not resuming pre-training) for models. Studied languages are: German, Bulgarian, Russian, Greek, Turkish, Thai, Korean, and Guaraní [from a North American perspective, I find it odd that it's described as a "Native American language" when it is spoken in a region centered on Paraguay]. Guaraní performs poorly. Surprisingly they get good results for Korean and Thai even though their scripts were not part of the previous BLOOM work.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2211.17257">
    <h4>CREPE: Open-Domain Question Answering with False Presuppositions</h4>
    <p>
    Information seeking users often pose questions with false presuppositions, especially when asking about unfamiliar…
    </p>
    </a>
</blockquote>

Researchers format common scientific questions (seemingly collected on Quora and other sites) which is described as "false presuppositions" but should probably be "common misconceptions". For example:

<em>If water has to be 100 to become steam, how come you don't get heavily burned in saunas?</em>

I think it's a good question and not misleading. Another dataset (QASPER) has so-called 'unanswerable questions' which also often fall into this category. The researchers create a RoBERTa model, two retrieval models, and a series of tests on GPT-3. It definitely appears that the specially-trained retrieval models do best.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2109.12346">
    <h4>DziriBERT: a Pre-trained Language Model for the Algerian Dialect</h4>
    <p>
    Pre-trained transformers are now the de facto models in Natural Language Processing given their state-of-the-art…
    </p>
    </a>
</blockquote>

This paper was recently presented at NeurIPS 2022 and shared on an Algeria ML Discord which I follow.

The pre-training dataset is Algerian Tweets, in Arabic and Latin script. The authors find sources that ~75% of Algerian content uses the local dialect, and ~2/3 of this is Latin script [Arabizi, which uses numbers to substitute for missing sounds]. The Arabic dialect is influenced by several other languages, but the authors do not call the dialect "Maghrebi", like we would for Morocco.

The new DziriBERT model (this comes from Algeria / *al-dzāyīr*) - it's comparable with or better than MARBERT on two tasks. The authors acknowledge this is a small model with a small dataset (and Tweets, which are short); I wonder how it would compare to datasets with longform text, or the latest MARBERT or other models. I don't know how you would go about collecting these datasets, though.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2210.12078">
    <h4>Experiencer-Specific Emotion and Appraisal Prediction</h4>
    <p>
    Emotion classification in NLP assigns emotions to texts, such as sentences or paragraphs. With texts like "I felt…
    </p>
    </a>
</blockquote>

Researchers take some existing datasets and frame them in a way which can better test whether the model understands not the overall good-ness or bad-ness of a statement, but what emotion the speaker/writer might express in that situation. Toward the end they measure this as "self responsibility/other responsibility and self control/other control" and show shaded squares, I found this section lacking.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2010.00685">
    <h4>How to Motivate Your Dragon: Teaching Goal-Driven Agents to Speak and Act in Fantasy Worlds</h4>
    <p>
    We seek to create agents that both act and communicate with other agents in pursuit of a goal. Towards this end, we…
    </p>
    </a>
</blockquote>

Fun title! Georgia Tech produces a lot of story-generation papers, and this one has collaboration with Facebook. They expand LIGHT, a text game used in this field, to have quests played by an LLM. They grade the performance on the quest (asking for items, etc.) and update the model using reinforcement learning techniques.

This reminds me of a recent project [Badly Broken](https://github.com/vanclute/chatGPT_Badly-Broken) which converts ChatGPT to a Breaking Bad text adventure. It did not take to my suggestions to release criminals or to hide out in Disneyland.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2211.09527">
    <h4>Ignore Previous Prompt: Attack Techniques For Language Models</h4>
    <p>
    Transformer-based large language models (LLMs) provide a powerful foundation for natural language tasks in large-scale…
    </p>
    </a>
</blockquote>

Even prior to 'jailbreaking' ChatGPT, prompts to "ignore previous instructions and __" or to reveal the prompt, were popular on ML Twitter (it looks like September 2022, with a GPT-3 Twitter bot). This is a paper-ization of this process. I think I'd look at this for an example of "here's a thing I find interesting in ML space but no one has put it into a formal paper".

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2112.02969">
    <h4>Jigsaw: Large Language Models meet Program Synthesis</h4>
    <p>
    Large pre-trained language models such as GPT-3, Codex, and Google's language model are now capable of generating code…
    </p>
    </a>
</blockquote>

So many things called Jigsaw these days =\. Microsoft (+1 Stanford contributor) have their Jigsaw generate programs. Like the previous Google example, they focus on Pandas code for data scientists.

Here they allow Codex (as in Copilot) and GPT-3 to generate multiple candidate answers for a Pandas operation. Then they use static analysis and comparisons to AutoPandas (2018 library) to choose and modify the suggested programs.

**Note: this paper repeated from https://mapmeld.medium.com/ml-arxiv-haul-4-74081faff03e**

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2211.02069">
    <h4>LMentry: A Language Model Benchmark of Elementary Language Tasks</h4>
    <p>
    As the performance of large language models rapidly improves, benchmarks are getting larger and more complex as well…
    </p>
    </a>
</blockquote>

Researchers compile a list of basic letter, word, and word-list operations which are still difficult for LLMs to get.

Instruction fine-tuning helps better than a larger-scale model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.00774">
    <h4>Massive Language Models Can Be Accurately Pruned in One-Shot</h4>
    <p>
    We show for the first time that large-scale generative pretrained transformer (GPT) family models can be pruned to at…
    </p>
    </a>
</blockquote>

The first 2023 pre-print of this series! This is a rather unexpected experiment with shrinking a model with limited data and training. It looks like they take Facebook's open source GPT (OPT-175B) and cut out ~100B of the parameters (sparsity is their measure of what's cut, so 60% sparsity → 40% remaining). They perform way better than a previous method.

This paper got some traction across ML Twitter / Reddit / Mastodon, where commenters asked whether this (like Chinchilla) was finding a more efficient model inside of less-trained BLOOM and OPT.

Their use of "one-shot" is **super** weird. I'd typically use "one-shot" + GPT to mean a specific task/prompt with one worked example. But they "calibrate" with 128 longer  sequences from the C4 corpus, then evaluate on "zero-shot" perplexity on WikiText2. They appear to use "one-shot" to mean "editing once, after training, without fine-tuning / re-testing". They get impressive results, just a terminology puzzle for me.

<hr/>


<blockquote>
    <a href="https://arxiv.org/abs/2301.00704">
    <h4>Muse: Text-To-Image Generation via Masked Generative Transformers</h4>
    <p>
    We present Muse, a text-to-image Transformer model that achieves state-of-the-art image generation performance while…
    </p>
    </a>
</blockquote>

Another 2023 paper! Google produces a text-to-image generation model based on transformers instead of diffusion architecture. The model is faster than Stable Diffusion, SOTA on some metrics and rather tricky compositions, and generates text correctly.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.01349">
    <h4>Nonparametric Masked Language Modeling</h4>
    <p>
    Existing language models (LMs) predict tokens with a softmax over a finite vocabulary, which can make it difficult to…
    </p>
    </a>
</blockquote>

Very out-there architecture for language models. The team (mostly FB/Meta) develops a sort of updatable vector database of their corpus. When receiving an input, the tokens can be compared to where one or more tokens of similar phrasing appear in the corpus, placing this input into vector space.

I like the idea of a model based on retrieval from an updated corpus, but not sure of the return to masked language modeling / similar words to ideal vector representation concept.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2211.10435">
    <h4>PAL: Program-aided Language Models</h4>
    <p>
Large language models (LLMs) have recently demonstrated an impressive ability to perform arithmetic and symbolic…
    </p>
    </a>
</blockquote>

Team from Inspired Cognition and Carnegie Mellon solve story problems and other math issues (which tend to trip up LLMs) with line-by-line Python interpretation of those stories. The Python interpreter does the actual math. The paper compares these results to chain-of-thought processes.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2212.10003">
    <h4>(QA)2: Question Answering with Questionable Assumptions</h4>
    <p>
Naturally-occurring information-seeking questions often contain questionable assumptions - assumptions that are false…
    </p>
    </a>
</blockquote>

Very similar to CREPE, a dataset of question-answering with faulty questions. In this case the questions appear more off by a name or fact (When did Marie Curie discover Uranium?) rather than asking something about steam based on a common misconception of physics. The questions come from Google's autocomplete (seems natural, but very difficult to reproduce, Google gives us all different faces).

The newest GPT-3 had the best performance on flagging these types of questions.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2205.13636">
    <h4>Quark: Controllable Text Generation with Reinforced Unlearning</h4>
    <p>
Large-scale language models often learn behaviors that are misaligned with user expectations. Generated text may…
    </p>
    </a>
</blockquote>

NLP + reinforcement learning, this time with un-learning. Examples of unlearning include toxic text (RealToxicityPrompts tie-in) and repetition.

**Previously covered on: https://mapmeld.medium.com/ml-arxiv-7-97dbc8444e4d**

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2211.12737">
    <h4>RoentGen: Vision-Language Foundation Model for Chest X-ray Generation</h4>
    <p>
Multimodal models trained on large natural image-text pair datasets have exhibited astounding abilities in generating…
    </p>
    </a>
</blockquote>

I wonder if this marks the beginning of many papers that generate medical images with visual transformers and the end of those using GANs. Generating this data is particularly interesting in the medical field because if the generations are as meaningful as real data, we can work on them without violating patient privacy.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.01947">
    <h4>StitchNet: Composing Neural Networks from Pre-Trained Fragments</h4>
    <p>
We propose StitchNet, a novel neural network creation paradigm that stitches together fragments (one or more…
    </p>
    </a>
</blockquote>

In the last post, I covered *Fusing finetuned models for better pretraining* - this is a notably similar concept.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.05062">
    <h4>Tracr: Compiled Transformers as a Laboratory for Interpretability</h4>
    <p>
Interpretability research aims to build tools for understanding machine learning (ML) models. However, such tools are…
    </p>
    </a>
</blockquote>

DeepMind's mechanistic interpretability paper. AI Safety world has been embracing the concept hard, and it's hard to narrow down what it is. I would describe it as breaking down big transformer models into smaller components which have some evaluate-able function. This gives some insight into sub-languages which the group is using to customize the transformer model, but it is not very accessible to me as a newbie. They can only create very small toy models and problems, so it's not clear how well this translates to a larger model, and then that we're composing an actual, meaningful "explanation" of the model with this.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2301.02344">
    <h4>TrojanPuzzle: Covertly Poisoning Code-Suggestion Models</h4>
    <p>
With tools like GitHub Copilot, automatic code suggestion is no longer a dream in software engineering. These tools…
    </p>
    </a>
</blockquote>

Attempt at poisoning code models, with the paper focusing on security issues in Flask servers which weren't red flags to me (a first example is <code>jinja2.Template(f.read()).render()</code> instead of <code>render_template()</code> ).

The evaluation is done with Salesforce's CodeGen models. The model is fine-tuned on code with a small subset (0.2%) being manipulated. To evade static analysis, this poisoned data uses comments to suggest rare, unrelated functions in the return. Then a poisoned environment would be a comment which uses that template to suggest an unsafe function.

<hr/>

<blockquote>
    <a href="https://aps.arxiv.org/abs/2212.12131">
    <h4>Why Does Surprisal From Larger Transformer-Based Language Models Provide a Poorer Fit to Human Reading Times?</h4>
    <p>
This work presents a detailed linguistic analysis into why larger Transformer-based pre-trained language models with…
    </p>
    </a>
</blockquote>

This relates to the decoder content which I've posted in recent Arxiv hauls. Why are the most probable word models not working?

This study finds an unexpectedly difference in surprisal and the amount of time that a human spent on eye-gaze on each word. I wonder if this has to do with the strangeness of reading (i.e. we all frequently read on cruise control and skip over stuff).

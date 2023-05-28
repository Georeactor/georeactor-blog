---
title: ML Arxiv Haul ~19
published_at: 2023-05-28T00:04:00.000Z
snippet: Another 17 ML papers and comments
tags: arxiv
---

## Comments / Criticism

- Kinda wild that Meta had BlenderBot (an open chat LLM) and Galactica, they had to shut down Galactica, just as ChatGPT was emerging.

- Falcon-40B from TII UAE tops [this open LLM leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard) average. They haven't released a paper yet. Note that the model is several places behind "ausboss" and the Wizard-uncensored models on the notoriously weird TruthfulQA benchmark.

- Should I be creating this post in Spanish as a language-learning knowledge-transfer community-building thing?

## New Paper Content

<blockquote>
    <a href="https://crfm.stanford.edu/2023/05/22/alpaca-farm.html">
    <h4>AlpacaFarm</h4>
    <p>
AlpacaFarm replicates the RLHF process at a fraction of the time (<24h) and cost ($<200), enabling the research…
    </p>
    </a>
</blockquote>

The Stanford team which created the Alpaca family of models (LLaMa + RLHF) continues exploring new ways to build models. Here they're simulating what a human would answer (since it's not a human feedback anymore, it's Learning from Pairwise Feedback, LPF). They prefer the PPO reinforcement learning algorithm.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.15004">
    <h4>Are Emergent Abilities of Large Language Models a Mirage?</h4>
    <p>
Recent work claims that large language models display emergent abilities, abilities not present in smaller-scale models…
    </p>
    </a>
</blockquote>

Selective metrics may be a source of LLMs showing improvement. The central thesis is that 'emergent behavior' showing a big step up in test accuracy, could come from nonlinear metrics (i.e. if I have a 0 or 1 for accuracy, learning one class of problems looks like a big step up from randomness). Instead you could look at training/test loss or token-distance on models of varying scale.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.08596">
    <h4>DarkBERT: A Language Model for the Dark Side of the Internet</h4>
    <p>
Recent research has suggested that there are clear differences in the language used in the Dark Web compared to that of…
    </p>
    </a>
</blockquote>

A RoBERTa model trained on 6 million pages from the Dark Web / Tor (filtered down to English language). This seems a bit risky, but interesting nonetheless. An example of a useful task is finding a ransomware backend (where leaked files are distributed after ransom is unpaid).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.01393">
    <h4>Every Author as First Author</h4>
    <p>
We propose a new standard for writing author names on papers and in bibliographies, which places every author as a…
    </p>
    </a>
</blockquote>

A bit meta, possibly shitposting, but here it is. All authors' names get written on top of each other. The inline reference examples are absurd, and highlight the longest last name. One section lists a history of arbitrary competitions to determined author order; for example a paper from 1992 says in a footnote that the authors did a "brownie bake-off".

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.02819">
    <h4>GPT detectors are biased against non-native English writers</h4>
    <p>
The rapid adoption of generative language models has brought about substantial advancements in digital communication…
    </p>
    </a>
</blockquote>

👀

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.14325">
    <h4>Improving Factuality and Reasoning in Language Models through Multiagent Debate</h4>
    <p>
Large language models (LLMs) have demonstrated remarkable capabilities in language generation, understanding, and…
    </p>
    </a>
</blockquote>

Giving story problem math to two chat bots (ChatGPT and Bard) and asking each to comment on the other's answers. They converge on an answer in a few rounds, which improves results but is not always correct. This reminds me a lot of the ChatGPT responses to being corrected (to the point it seems like it should be asked if it's correct by default).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.15525">
    <h4>Large Language Models are Few-Shot Health Learners</h4>
    <p>
Large language models (LLMs) can capture rich representations of concepts that are useful for real-world tasks…
    </p>
    </a>
</blockquote>

Google paper on some basic health calculations and questions (heart rates, calories burned by certain activities).

<hr/>

<blockquote>
    <a href="https://github.com/facebookresearch/fairseq/tree/main/examples/mms">
    <h4>Massively Multilingual Speech (MMS) project</h4>
    <p>
The Massively Multilingual Speech (MMS) project expands speech technology from about 100 languages to over 1,000 by…
    </p>
    </a>
</blockquote>

Meta gets speech recognition up to 1,000 languages.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.15324">
    <h4>Model evaluation for extreme risks</h4>
    <p>
Current approaches to building general-purpose AI systems tend to produce systems with both beneficial and harmful…
    </p>
    </a>
</blockquote>

DeepMind showing up with a high-profile existential risk / AI ethics paper. I appreciate that they spell out things like "resists being shut down" instead of using EA lingo (I saw this described as 'corrigibility' but that appears to cover a broader list such as not deceiving, breaking out, or resisting reprogramming).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.14314">
    <h4>QLoRA: Efficient Finetuning of Quantized LLMs</h4>
    <p>
We present QLoRA, an efficient finetuning approach that reduces memory usage enough to finetune a 65B parameter model…
    </p>
    </a>
</blockquote>

I'm seeing a boom of quantized language models so people can run inference on big LLaMa models locally (but you're removing information!). This team at U. Washington is able to train / fine-tune / instruct models even after they've been quantized, which is pretty unexpected and cool. They release a 'Guanaco' chat model (wild llama) which humans prefer to ChatGPT responses. But I'd like to see their results re: the later paper in this post titled "The False Promise of Imitating Proprietary LLMs".

<hr/>

<blockquote>
    <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4441311">
    <h4>Re-Evaluating GPT-4's Bar Exam Performance</h4>
    <p>
Perhaps the most widely touted of GPT-4's at-launch, zero-shot…
    </p>
    </a>
</blockquote>

This was a good paper to forward to a friend studying law (incidentally they're getting an LLM degree = Master of Laws). The '90th percentile' claims from OpenAI include anyone who took the exam (a significant population fail the bar exam and teacher certification exams multiple times). Compared with those who passed the exam, GPT-4 was about the median, with essay scores actually being quite poor (15th percentile).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.13048">
    <h4>RWKV: Reinventing RNNs for the Transformer Era</h4>
    <p>
Transformers have revolutionized almost all natural language processing (NLP) tasks but suffer from memory and…
    </p>
    </a>
</blockquote>

Eleuther AI and Stability AI gather a variety of people and institutions in a Discord channel to make a new model. They've created a mostly-RNN architecture with some attention input like a transformer. I can't comment on this but it seems to work well on the tasks which they've evaluated.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.06161">
    <h4>StarCoder: may the source be with you!</h4>
    <p>
The BigCode community, an open-scientific collaboration working on the responsible development of Large Language Models…
    </p>
    </a>
</blockquote>

The HuggingFace / BigCode community project releases a competitive code-generation model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.15717">
    <h4>The False Promise of Imitating Proprietary LLMs</h4>
    <p>
An emerging method to cheaply improve a weaker language model is to finetune it on outputs from a stronger model, such…
    </p>
    </a>
</blockquote>

Berkeley researchers create smaller language models tuned to answer like ChatGPT. Human reviewers found the answers to be similar quality, but metrics showed that the smaller models lacked "factuality" when attempting to answer graded datasets such as Natural Questions.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.07759">
    <h4>TinyStories: How Small Can Language Models Be and Still Speak Coherent English?</h4>
    <p>
Language models (LMs) are powerful tools for natural language processing, but they often struggle to produce coherent…
    </p>
    </a>
</blockquote>

Microsoft Research project with a smaller (28M param) language model to create simple children's stories. It's a combination of pretraining on a simple stories dataset and grading of generated stories by GPT-4.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2006.05873">
    <h4>WasteNet: Waste Classification at the Edge for Smart Bins</h4>
    <p>
Smart Bins have become popular in smart cities and campuses around the world. These bins have a compaction mechanism…
    </p>
    </a>
</blockquote>

A computer vision model from 2020 which can tell waste materials apart. Ideally this would be run in a trash bin in the future, so the researchers develop a model to work on limited hardware, but the photos of sample garbage in a lab setting are so clear, I don't see how it can transfer to a real-world environment.

My biggest surprise was this wasn't co-authored by the MIT prof who had me 3D-scanning trash and free-cycle items for a thing.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.05928">
    <h4>WikiSQE: A Large-Scale Dataset for Sentence Quality Estimation in Wikipedia</h4>
    <p>
Wikipedia can be edited by anyone and thus contains various quality sentences. Therefore, Wikipedia includes some…
    </p>
    </a>
</blockquote>

Uses inline Wikipedia quality notes (e.g. "when?" "citation needed") to develop a dataset of sentences which need help. The paper compares accuracy of BERT models and GPT-2 which is kinda old school.

Would like to see this for other language wikis.

<br/>
<br/>
<br/>

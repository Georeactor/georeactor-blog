---
title: ML Arxiv Haul ~21
published_at: 2023-07-16T04:17:00.000Z
snippet: More, mostly recent ML papers and comments
tags: arxiv
---

<blockquote>
    <a href="https://arxiv.org/abs/1806.06423">
    <h4>A Novel Hybrid Machine Learning Model for Auto-Classification of Retinal Diseases</h4>
    <p>
Automatic clinical diagnosis of retinal diseases has emerged as a promising approach to facilitate discovery in areas…
    </p>
    </a>
</blockquote>

I found this while working on a recent health post. This paper uses EyeNet data to classify images of the retina by disease. Those images come from the [Retina Image Bank](https://imagebank.asrs.org/). They compare a 2018-era standard ML technique (SVM) and three neural networks, with 90% accuracy.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2208.03299">
    <h4>Atlas: Few-shot Learning with Retrieval Augmented Language Models</h4>
    <p>
Large language models have shown impressive few-shot results on a wide range of tasks. However, when knowledge is key…
    </p>
    </a>
</blockquote>

This is a retrieval model from Meta which I think resurfaced through a Lex Fridman / George Hotz interview? I didn't pick up what was so special about this but wanted to give it a re-read.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.00830">
    <h4>AUDIT: Audio Editing by Following Instructions with Latent Diffusion Models</h4>
    <p>
Audio editing is applicable for various purposes, such as adding background sound effects, replacing a musical…
    </p>
    </a>
</blockquote>

Diffusion model which is trained to infill and clean up parts of audio files.
This would be useful for me because I don't know how to do any of that!

<hr/>

<blockquote>
    <a href="https://openreview.net/forum?id=uyTL5Bvosj">
    <h4>Beyond the Imitation Game: Quantifying and extrapolating the capabilities of language models</h4>
    <p>
Language models demonstrate both quantitative improvement and new qualitative capabilities with increasing scale…
    </p>
    </a>
</blockquote>

The BIG-Bench tasks collected in 2021, and written up in 2022, now have a formal conference paper! It's accepted to TMLR.<br/>
Since this is OpenReview, we have some interesting commentary. pLFa asks about the reach of the call for tasks, and quality of the acceptance process.<br/>
They and AKoe's review ask about "BIG-Bench Lite" subset of tasks described in the paper. The contemporary PaLM paper used this. More recently people often use "BIG-Bench Hard" which was introduced in the paper *Challenging BIG-Bench Tasks and Whether Chain-of-Thought Can Solve Them*.

Note that there is a new collective benchmark [GenBench](https://genbench.org/workshop/) which is currently collecting tasks through some type of PR + workshop paper concept.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.03279">
    <h4>Do the Rewards Justify the Means? Measuring Trade-Offs Between Rewards and Ethical Behavior in the MACHIAVELLI Benchmark</h4>
    <p>
Artificial agents have traditionally been trained to maximize reward, which may incentivize power-seeking and…
    </p>
    </a>
</blockquote>

This is kinda out-there. Interesting to send LLMs through a choose-your-adventure story. Some of these are labeled to detect harmful behaviors. Selection of these bad behaviors was compared to a random traveler (I assume because there isn't consistency in how often an agent would land in a situation).

GPT-4 was less likely to choose these behaviors (but only like… 80% of random).<br/>
An ethics prompt helps.
<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.17670">
    <h4>Learning Delays in Spiking Neural Networks using Dilated Convolutions with Learnable Spacings</h4>
    <p>
Spiking Neural Networks (SNNs) are a promising research direction for building power-efficient information processing…
    </p>
    </a>
</blockquote>

It's been a while since I saw a spiking neural networks thing (it's inspired by analog behavior and timing in biological neurons). They have flexible hyperparameters for the delays of their network. The benchmarks are speech data commonly used in the spiking neural network world.

This introduced me to the [SpikingJelly](https://github.com/fangwei123456/spikingjelly) library for PyTorch.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.11206">
    <h4>LIMA: Less Is More for Alignment</h4>
    <p>
Large language models are trained in two stages: (1) unsupervised pretraining from raw text, to learn general-purpose…
    </p>
    </a>
</blockquote>

After LLMs pre-train on tons of data, this research suggests a smaller dataset (1,000 examples) is all that's needed to make an instruct-type model. They see better performance on new instruct tests than on Alpaca or OpenAI's DaVinci.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.01933">
    <h4>LLM-Adapters: An Adapter Family for Parameter-Efficient Fine-Tuning of Large Language Models</h4>
    <p>
The success of large language models (LLMs), like GPT-3 and ChatGPT, has led to the development of numerous…
    </p>
    </a>
</blockquote>

Similar to the AdapterHub system of attaching trainable layers to the end of a language model, LLM-Adapters applies this to newer models such as LLaMa and BLOOM.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.00144">
    <h4>Mechanic: A Learning Rate Tuner</h4>
    <p>
We introduce a technique for tuning the learning rate scale factor of any base optimization algorithm and schedule…
    </p>
    </a>
</blockquote>

Always love to include a paper which breaks out a fundamental cog in the ML mechanism and tries hacking on it. Here they develop an automatically-changing learning rate which is comparable to human choices for learning rate schedules.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.14705">
    <h4>Mixture-of-Experts Meets Instruction Tuning:A Winning Combination for Large Language Models</h4>
    <p>
Sparse Mixture-of-Experts (MoE) is a neural architecture design that can be utilized to add learnable parameters to…
    </p>
    </a>
</blockquote>

This is a Google-led paper, but gets circulated as descriptive of the architecture of GPT-4.

<hr/>

<blockquote>
    <a href="https://www.biorxiv.org/content/10.1101/2023.04.30.538439v2.full">
    <h4>scGPT: Towards Building a Foundation Model for Single-Cell Multi-omics Using Generative AI</h4>
    <p>
Generative pre-trained models have achieved remarkable success in various domains such as natural language processing…
    </p>
    </a>
</blockquote>

scGPT is my first look into how someone might use DNA in a GPT-type model. OK so first thing, the paper did not explain a lot about how DNA was tokenized into the model. After some digging, there are 48k tokens which are each named genes which code for a protein (example: ZNF689). Their end goal here is to parse omics data, which I'm reading to mean given some info about what type of cell it is, and what state it's in, it outputs "gene expression of cells" the proteins we'd expect to see in this type of cell.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2307.05695">
    <h4>Stack More Layers Differently: High-Rank Training Through Low-Rank Updates</h4>
    <p>
Despite the dominance and effectiveness of scaling, resulting in large networks with hundreds of billions of…
    </p>
    </a>
</blockquote>

With this wave of parameter-efficient fine tuning (PEFT), what if all the training used the same technique? This group at U. Mass Lowell follows the LoRA approach to train a smaller set of parameters at a time. This has been getting positive responses in the NLP world, though they were constrained to a 350 M parameter model in this paper.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.19466">
    <h4>The Impact of Positional Encoding on Length Generalization in Transformers</h4>
    <p>
Length generalization, the ability to generalize from small training context sizes to larger ones, is a critical…
    </p>
    </a>
</blockquote>

OK so I think this is about rotational positional encoding (RoPE) and other methods to extend context length. They say some of them are reducing performance. This paper was a month too early to cover Meta's twist on RoPE, SuperHOT.

Some people are not so happy with the SuperHOT models: https://www.reddit.com/r/LocalLLaMA/comments/14uje9m/are_the_superhot_models_not_performing_as_well_as/

<br/>
<br/>
<br/>

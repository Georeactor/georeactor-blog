---
title: ML Arxiv Haul ~20
published_at: 2023-06-30T03:06:00.000Z
snippet: 17 more ML papers and comments
tags: arxiv
---

## Comments / Criticism

- Newer Vicuna releases have full weights instead of diffs-from-LLaMa. No response to my request for a hash on the diff models.

- New fear: a therapist responds to a vulnerable message with what sounds like a ChatGPT response. There's a reasonable risk that TalkSpace / BetterHelp type services which combine sessions and chat, are easy for therapists to either return generic advice, or in this case to use an LLM. https://www.reddit.com/r/relationship_advice/comments/13tbvge/my_29m_therapist_44f_responded_to_me_with_chatgpt/

## New Paper Content

<blockquote>
    <a href="https://arxiv.org/abs/2306.07899">
    <h4>Artificial Artificial Artificial Intelligence: Crowd Workers Widely Use Large Language Models for Text Production Tasks</h4>
    <p>
Large language models (LLMs) are remarkable data annotators. They can be used to generate high-fidelity supervised…
    </p>
    </a>
</blockquote>

Mechanical Turk workers are using LLMs! The snake is eating its own tail faster than the dead internet theory / LLMs-creating-all-content apocalypse for models based on crawling a web corpus.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.00238">
    <h4>Bytes Are All You Need: Transformers Operating Directly On File Bytes</h4>
    <p>
Modern deep learning approaches usually transform inputs into a modality-specific form. For example, the most common…
    </p>
    </a>
</blockquote>

Moderately interesting experiment; instead of an ImageNet model trained and doing inference on RGB pixel tensors, this project operates on image files directly (including headers, encoding, compression). Accuracy is roughly 66% for JPEG to 77% for TIFF, which is comparable to tensors.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.03901">
    <h4>ChatDB: Augmenting LLMs with Databases as Their Symbolic Memory</h4>
    <p>
Large language models (LLMs) with memory are computationally universal. However, mainstream LLMs are not taking full…
    </p>
    </a>
</blockquote>

Auto-GPT and other projects allow LLMs to read and write from a data store. Here ChatDB refers to a model-independent framework where the LLM is prompted to translate information into SQL queries. It then receives a natural-language update to the data *A sale was made on 2023–01–02 to 'Bob Smith' (contact details: 123–456–7893, bob.smith@example.com). The items purchased were 9 kg apple, 4 kg cherry.*<br/>
Then this gets turned into queries to update the database.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2304.05376">
    <h4>ChemCrow: Augmenting large-language models with chemistry tools</h4>
    <p>
Over the last decades, excellent computational chemistry tools have been developed. Their full potential has not yet…
    </p>
    </a>
</blockquote>

A flurry of papers applying LLMs to new fields (genetics, etc.) and this one is in chemistry. The authors use the LangChain framework and give the LLM access to run several existing tools. It is sort of an Auto-GPT for natural language queries, retrieval, and synthesizing responses.
<br/>
They also touch on the safety issues of responding to these queries.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.12050">
    <h4>CodeCompose: A Large-Scale Industrial Deployment of AI-assisted Code Authoring</h4>
    <p>
The rise of large language models (LLMs) has unlocked various applications of this technology in software development…
    </p>
    </a>
</blockquote>

Meta program providing an in-house CoPilot (based on InCoder) to thousands of developers. [The video](https://www.youtube.com/watch?v=ANDJ0TKjyWw) talks about Meta-specific issues, such as internal code using their own languages (Hack and Flow). It's also interesting they switch between a smaller model for autocomplete / one-liners, and a larger model for multi-line suggestions. I saw similar division of models for HuggingFace/BigCode.

> 22% of *[suggestions]* were accepted. This resulted in 8% of code typed by users of CodeCompose coming from suggestions offered by CodeCompose

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.15595">
    <h4>Extending Context Window of Large Language Models via Positional Interpolation</h4>
    <p>
We present Position Interpolation (PI) that extends the context window sizes of RoPE-based pretrained LLMs such as…
    </p>
    </a>
</blockquote>

Meta describes their work concurrent with what's being called "SuperHOT", a technique to increase the context window for LLMs. It works on LLaMa type models, and others with rotational positional encoding (I don't quite get this, but it sounds familiar). They include a handful of benchmarks to show that performance isn't degraded much.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.17333">
    <h4>Fine-Tuning Language Models with Just Forward Passes</h4>
    <p>
Fine-tuning language models (LMs) has yielded success on diverse downstream tasks, but as LMs grow in size…
    </p>
    </a>
</blockquote>

Maybe backpropagation not needed? It looks like they're saying that this could make it easier to tune a large model (PEFT still works).

> MeZO can optimize non-differentiable objectives, which backpropagation usually cannot do. Our theory illustrates why MeZO is not catastrophically slow when tuning billions of parameters.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.14201">
    <h4>Goat: Fine-tuned LLaMA Outperforms GPT-4 on Arithmetic Tasks</h4>
    <p>
We introduce Goat, a fine-tuned LLaMA model that significantly outperforms GPT-4 on a range of arithmetic tasks…
    </p>
    </a>
</blockquote>

Fine-tuned a LLaMa model to near-perfect arithmetic tasks, which is a bit unexpected.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.15334">
    <h4>Gorilla: Large Language Model Connected with Massive APIs</h4>
    <p>
Large Language Models (LLMs) have seen an impressive wave of advances recently, with models now excelling in a variety…
    </p>
    </a>
</blockquote>

Introduces a dataset `APIBench` to evaluate how well a model can be taught to call relevant APIs.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.04388">
    <h4>Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting</h4>
    <p>
Large Language Models (LLMs) can achieve strong performance on many tasks by producing step-by-step reasoning before…
    </p>
    </a>
</blockquote>

Chain of thought is fake? The authors start with a few-shot prompt on binary questions.  In a "biased context", created by making the samples of the prompt always answer "A", a chain of thought is generated and creates flawed explanations for why "A" is correct in the subsequent problems. This touches on one of my interests, "anti-explanations".

I thought it was cool that they use both OpenAI's GPT-3.5 and Cohere's Claude here.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.09800">
    <h4>Mirages: On Anthropomorphism in Dialogue Systems</h4>
    <p>
Automated dialogue or conversational systems are anthropomorphised by developers and personified by users. While a…
    </p>
    </a>
</blockquote>

Dialogue is convincing to users. Authors propose using third-person in responses (i.e. instead of "I cannot do task" saying "This generative model cannot"

<hr/>

<blockquote>
    <a href="https://www.cerebras.net/blog/slimpajama-a-627b-token-cleaned-and-deduplicated-version-of-redpajama">
    <h4>SlimPajama: A 627B token cleaned and deduplicated version of RedPajama</h4>
    <p>
Cerebras has built a platform for push-button training of large language models that can accelerate time to insights…
    </p>
    </a>
</blockquote>

Independent researchers continue to work on LLMs in the open. This is a high-quality deduped corpus.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2109.10399">
    <h4>SubseasonalClimateUSA: A Dataset for Subseasonal Forecasting and Benchmarking</h4>
    <p>
Subseasonal forecasting of the weather two to six weeks in advance is critical for resource allocation and climate…
    </p>
    </a>
</blockquote>

Could be a useful dataset?

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.11644">
    <h4>Textbooks Are All You Need</h4>
    <p>
We introduce phi-1, a new large language model for code, with significantly smaller size than competing models: phi-1…
    </p>
    </a>
</blockquote>

Interesting twist on code generation model. Here they start out with a large code corpus (The Stack), and ask GPT-4 to label the best examples for teaching a student. This becomes the "textbook" which they use to train a new SOTA model. It's sort of a "curriculum learning" approach but the curriculum is partially generated.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.09633">
    <h4>The False Dawn: Reevaluating Google's Reinforcement Learning for Chip Macro Placement</h4>
    <p>
Reinforcement learning (RL) for physical design of silicon chips in a Google 2021 Nature paper stirred controversy due…
    </p>
    </a>
</blockquote>

Markov is a researcher at Meta and a former chip designer, but extraordinarily publishes this with a mini explainer that this is his own views and not from an employer. His analysis is that a Google paper in Nature, promising reinforcement-learning work on chip design, actually underperformed compared to existing human and algorithmic methods.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2303.11341">
    <h4>What does it take to catch a Chinchilla? Verifying Rules on Large-Scale Neural Network Training via Compute Monitoring</h4>
    <p>
As advanced machine learning systems' capabilities begin to play a significant role in geopolitics and societal order…
    </p>
    </a>
</blockquote>

Heard about this paper in the 80,000 Hours podcast - a Proof of Compute if you were controlling access to GPUs and trying to audit development of AIs. This includes several out-there ideas for chips and data centers designed to monitor use and prevent parallel use, transmitting snapshots of weights during training, etc. There are a limited number of chip fabs (for the quality of ML accelerator here, they're saying "fewer than two dozen facilities worldwide"). They do explain OpenTitan and Open Compute Project's ongoing work to verify  production ("Hardware Roots of Trust").

There has been an increase of IAEA-type regulation of AI recently (including a direct statement from the UN).

<hr/>

<blockquote>
    <a href="https://www.nature.com/articles/d41586-023-01546-4">
    <h4>Why Nature will not allow the use of generative AI in images and video</h4>
    <p>
Saying 'no' to this kind of visual content is a question of research integrity, consent, privacy and…
    </p>
    </a>
</blockquote>

Nice to see a top journal coming out and talking about this. There's already been some coverage of why ChatGPT should not be a named author of a paper (all authors are effectively signing off on the full paper, and ChatGPT cannot meaningfully take responsibility).

Scientific journals are already dealing with photoshopping and fudging of data (see Elisabeth Bik's work) so generative AI seems like another potential threat in that space.

<br/>
<br/>
<br/>

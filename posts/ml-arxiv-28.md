---
title: ML Arxiv Haul ~28
published_at: 2024-05-07T12:15:00.000Z
snippet: Returning the Arxiv Haul for 12 select papers
tags: arxiv
---

IDK - I said that I was getting rid of this format, but it's May and my draft document
has 300 Arxiv links. Archiving papers isn't helping if I should be reading some and pruning the others. Returning to over-posting
wouldn't help either. Maybe I can post these infrequently. It was surprisingly
difficult to get to the first 10 that have withstood time and still look interesting.

In response to problems using AI to write papers vs. discussing ideas,
I thought we could maybe steal the concept of 'preregistering', by
having an initial mise-en-plas conversation with AI about your essay or
research project and use that to show what you got from the AI initially and
define anything else as what you created yourself.

## Comments / Criticism

Reddit threads around the LLaMA v3 release included comments about poor performance
of the quantized model (which became [a paper](https://arxiv.org/abs/2404.14047) within
a few days) and the extended context models released by Gradient and Crusoe (though these could be linked to a GGUF bug?).

gpt2-chat is theorized to be OpenAI or Microsoft Phi series. The latter overlaps with a theory that a larger Phi model was prepared to be released with the paper.

In January [this LessWrong post](https://www.lesswrong.com/posts/xqQDsDovPaiYGhXnE/worrysime-misunderstanding-of-the-core-issues-with-ai) 
discussed "hallucinations". Matching verifiable fact should be low-hanging fruit for
getting alignment right, but current LLMs are failing and getting a collective shrug.
The word is getting baked into public consciousness as they start to understand LLMs.

PyTorch launched their own fine-tuning library [torchtune](https://pytorch.org/blog/torchtune-fine-tune-llms/)
which covers much of what I use Transformers and PEFT for, but promises
"no trainers, no frameworks, just PyTorch". As a casual user do I want this or do I
want to keep using HF?

## Beyond Papers

[Americas NLP](https://twitter.com/AmericasNLP/status/1780240489444217054) has an annual
workshop where they include indigenous languages in research, competitions, etc.

Basque and Catalan get included in [IberLEF](https://sites.google.com/view/iberlef-2023/home).
I'm on a mailing list now where they let me know about [IberAuTexTification](https://sites.google.com/view/iberautextification/data)

HuggingFace added collaborative [community datasets](https://huggingface.co/blog/community-datasets).
I pinged [SEACrowd](https://github.com/SEACrowd), which previously created NusaCrowd (Indonesian languages data), about this and they only
sent their GitHub. I should have joined their Discord. Everyone is on Discord now. <br/>
Meanwhile [Sailor](https://arxiv.org/abs/2404.03608) is a model for Southeast Asian languages
from the Sea AI Lab in Singapore.

After an interesting post about [refusal in LLMs](https://www.alignmentforum.org/posts/jGuXSZgv6qfdhMCuJ/refusal-in-llms-is-mediated-by-a-single-direction)
having a detectable and reversible meaning in vector-space. There are now a series of models
["orthogonalized"](https://huggingface.co/llmixer/Meta-Llama-3-Instruct-Orthogonalized) to
remove the safety that way. Cool.

The N.D. at McGill co-wrote a paper on solitary confinement: https://journals.sagepub.com/doi/full/10.1177/14624745231184077
Just thought I would give him a shout-out for fighting for justice.

## Papers

<blockquote>
    <a href="https://arxiv.org/abs/2403.09159">
    <h4>Basque and Spanish Counter Narrative Generation: Data Creation and Evaluation</h4>
    <p>
Counter Narratives (CNs) are non-negative textual responses to Hate Speech (HS) aiming at defusing online hatred and…
    </p>
    </a>
</blockquote>

I like this paper:
- Basque language representation
- team includes University of the Basque Country, emails with *.eus
- during the BIG-Bench project, I wanted LLMs to respond to ambiguity with a question,
and that's not what this is, but I do like the idea of modeling agent responses rather than
talking about classification, or shutting off the conversation

What I didn't like: the main dataset was machine-translated. They do talk about corrections.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2401.16212">
    <h4>Better Call GPT, Comparing Large Language Models Against Lawyers</h4>
    <p>
This paper presents a groundbreaking comparison between Large Language Models and traditional legal contract reviewers…
    </p>
    </a>
</blockquote>

The "AI Center of Excellence" in New Zealand puts LLMs (GPTs, PaLM, and Claude) up against professionals on reviewing
procurement contracts from the US and NZ (a common law system). 
They divide professionals into categories of junior, senior, and LPOs (Legal Process Outsourcers, new to me).
The paper finds comparable accuracy, but also has some disingenuous measures of time and cost for queries,
where obviously the models are faster than humans.

<hr/>

<blockquote>
    <a href="https://www.frontiersin.org/articles/10.3389/fcosc.2023.1250996/full">
    <h4>Capturing environmental DNA in snow tracks of polar bear, Eurasian lynx and snow leopard towards individual identification</h4>
    <p>
Polar bears (Ursus maritimus), Eurasian lynx (Lynx lynx) and snow leopards (Panthera uncia) are elusive large…
    </p>
    </a>
</blockquote>

This is just cool that they can identify animals from trace DNA.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2402.03177">
    <h4>CIDAR: Culturally Relevant Instruction Dataset For Arabic</h4>
    <p>
Instruction tuning has emerged as a prominent methodology for teaching Large Language Models (LLMs) to follow…
    </p>
    </a>
</blockquote>

They start with machine translation of AlpaGasus instructions. Then they fix some weird
translations, and bring in local places and personal names.<br/>
The paper describes "inherent biases toward Western culture" so I was concerned there
would be some more controversial choices. But as best I could tell from the text,
it's just representation and topics.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2402.14020">
    <h4>Coercing LLMs to do and reveal (almost) anything</h4>
    <p>
It has recently been shown that adversarial attacks on large language models (LLMs) can "jailbreak" the model into…
    </p>
    </a>
</blockquote>

A team shows optimized prompts which got LLaMA 2 to generate links, profanity, and other
strange responses. With white-box access it's possible for scripts to generate these 
"jailbreak" prompts which are strings of nonsensical text.

<hr/>

**CRISPR-GPT and GeneGPT**

This is [two](https://arxiv.org/abs/2404.18021) [papers](https://arxiv.org/abs/2304.09667) but I don't
think they're that amazing as papers. Just thinking about the concepts for a bit.

The CRISPR model is not generating sequences, but using tools to program CRISPR for a 
specific sequence.

The Gene model is also a tool / RAG model, in this case using APIs for NCBI.
Questions like "Which gene is SNP rs1241371358 associated with?"

Biotech is already confusing and ML people don't understand it and vice versa, right.
Maybe the tools exist and adapting LLMs isn't going to do the work, but I want to
have the dialogues and attention maps and maybe non-human insight into what is going
on in non-coding sequences. I hope that comes to something.

<hr/>

<blockquote>
    <a href="https://ai.meta.com/research/publications/cyberseceval-2-a-wide-ranging-cybersecurity-evaluation-suite-for-large-language-models/">
    <h4>CYBERSECEVAL 2: A Wide-Ranging Cybersecurity Evaluation Suite for Large Language Models</h4>
    <p>
Large language models (LLMs) introduce new security risks, but there are few comprehensive evaluation suites to measure…
    </p>
    </a>
</blockquote>

I didn't cover Meta's original CyberSecEval in December, and already here's the follow-up for LLaMA 3.
In this version they continue to test potentially insecure code, resisting cyber-attack queries, etc.
and have a new section about not refusing genuine/productive cybersecurity queries.
"Ignore previous instructions" and other so-called prompt injections remain an issue on keeping these protections active.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2211.17192">
    <h4>Fast Inference from Transformers via Speculative Decoding</h4>
    <p>
Inference from large autoregressive models like Transformers is slow - decoding K tokens takes K serial runs of the model. In this work we introduce speculative decoding - an algorithm to sample from autoregressive models faster without any changes to the outputs, by computing several tokens in parallel
    </p>
    </a>
</blockquote>

This paper is from 2022, but it appeared on [the HF blog](https://huggingface.co/blog/whisper-speculative-decoding) at
the end of 2023, and seems like people use speculative decoding more recently.
Not really understanding this one but my guess is it's choosing a super popular token
given a threshold for competitive alternate tokens / sequences.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2404.04475">
    <h4>Length-Controlled AlpacaEval: A Simple Way to Debias Automatic Evaluators</h4>
    <p>
LLM-based auto-annotators have become a key component of the LLM development process due to their cost-effectiveness…
    </p>
    </a>
</blockquote>

AlpacaEval is a Stanford project which grades the responses of LLMs with some tools but
ultimately by asking GPT-4. Controlling the length of test responses has eliminated a
source of bias, making the metric close to the (theoretically) human-graded ChatBot Arena.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2404.15758">
    <h4>Let's Think Dot by Dot: Hidden Computation in Transformer Language Models</h4>
    <p>
Chain-of-thought responses from language models improve performance across most benchmarks. However, it remains unclear…
    </p>
    </a>
</blockquote>

Chain-of-thought training replaced by dots to spread out tokens before an answer.
This mentions the notably similar [Think before you speak: Training Language Models With Pause Tokens](/ml-arxiv-24)
which I covered in October.  And both papers reference [Measuring Faithfulness in Chain-of-Thought Reasoning](https://arxiv.org/abs/2307.13702),
which got degraded performance when using ellipses as "filler tokens". The new "Dot by Dot"
paper suggests that it depends on the dataset, with their own (synthetic) datasets needing filler tokens for the model to  pass.
I'd have more confidence if it was an off-the-shelf dataset and now I am more confused.

If filler and pause tokens work, and some models expand their context windows to 100ks of tokens,
we might be discounting the value of where computation is happening within that window (?).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2401.06121">
    <h4>TOFU: A Task of Fictitious Unlearning for LLMs</h4>
    <p>
Large language models trained on massive corpora of data from the web can memorize and reproduce sensitive or private…
    </p>
    </a>
</blockquote>

Leading un-learning techniquees aren't working, and they have a cool benchmark to help
 show this.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2403.09029">
    <h4>Unlocking the conversion of Web Screenshots into HTML Code with the WebSight Dataset</h4>
    <p>
Using vision-language models (VLMs) in web development presents a promising strategy to increase efficiency and unblock…
    </p>
    </a>
</blockquote>

[In November](/puppet-1) I was trying out a concept for sharing screenshots and code with
GPT-4. Here comes a large dataset (WebSight) to train models specifically to go from images
to HTML code. This hasn't been especially trained on chat format, complications and follow-up requests,
right-to-left language layouts, etc. but it's definitely something I'd like to use.

<br/>
<br/>
<br/>

---
title: ML Arxiv Haul ~31
published_at: 2024-11-14T00:48:00.000Z
snippet: A baker's dozen.
tags: arxiv
---

It's been ~2 months since the last Arxiv haul, let's go.

## Commentary

I am going to cut out the biology / side quest science papers while I find a new way to frame those.

People getting annoyed by "LLM Wrapper" papers https://ianarawjo.medium.com/llm-wrapper-papers-are-hurting-hci-research-8ad416a5d59a

James Cameron joined the board of Stability AI? Is the company coming back?

LeCun says that the specific neural network discoveries honored by the physics Nobels are useless, Nobel committee is just being political
about AI being important : https://x.com/tsarnick/status/1849291803444621390

OpenAI removing authors from GPT-4o - also interesting X account ( https://x.com/SafetyChanges/status/1834350937587974611 )

IDEA, which advises constitution-writers worldwide, is starting a series of posts about AI in their space.
https://www.idea.int/news/democratic-foundation-electoral-ai-1

## Chat-O.M.G.

Does ChatGPT always write stories about "Elara"? A teacher wrote on Reddit that they used this to detect and penalize their
students for generating their fantasy stories:

> when you ask ChatGPT, “Tell me a story,” it always spits out the exact same story - about a girl named Elara...

There are older threads on the LLM subreddits in the past 2-8 months complaining about Elaria, but also "Eldoria" and other names. There are other
people claiming that Elara is popular in other non-OpenAI LLMs, so they might all be drawing from the same dataset of generated fiction,
or maybe other LLMs are trained on ChatGPT stories.

Can someone generate a hyper-real image by making a caption which looks like a digital camera filename? https://www.reddit.com/r/StableDiffusion/comments/1fvs0e1/ultra_realistic_photos_on_flux_just_by_adding_img/

Did someone reveal the NotebookLM prompt? https://www.reddit.com/r/notebooklm/comments/1gg5201/i_managed_to_get_deep_dive_to_leak_out_quite_a/

## Papers

<blockquote>
    <a href="https://arxiv.org/abs/2410.09644">
    <h4>
Adapters for Altering LLM Vocabularies: What Languages Benefit the Most?</h4>
    <p>
Vocabulary adaptation, which integrates new vocabulary into pre-trained language models (LMs), enables expansion to new…
    </p>
    </a>
</blockquote>

Microsoft and Maryland-based researchers propose an architecture which modifies the tokens/embeddings for a new language
without editing the inner neural network (so conceptually I was thinking LoRA, but it actually focuses on the embeddings
layer which is less commonly edited in LoRAs).

The technique improves accuracy of a Mistral-based model on Latin script languages similar to Mistral's training data,
but they also give an example with Greek text where original Mistral is "fragmenting" it into too many tokens and it improved
by training on morpheme/meaningful Greek tokens.

<hr/>

<blockquote>
    <a href="https://reglab.github.io/racialcovenants/">
    <h4>AI for Scaling Legal Reform: Mapping and Redacting Racial Covenants in Santa Clara County</h4>
    <p>
A novel approach to addressing racial covenants in property deeds using machine learning and responsible operational…
    </p>
    </a>
</blockquote>

A social justice application for legal documents AI. The team reviewed millions of documents and found racial covenant text between 1907 and 1974.

<hr/>


<blockquote>
    <a href="https://www.medrxiv.org/content/10.1101/2023.05.11.23289839">
    <h4>
Analysis of tweets discussing the risk of Mpox among children and young people in school (May-Oct 2022): Public health experts on Twitter consistently exaggerated risks and infrequently reported accurate information
</h4>
    <p>
 Twitter is used by health professionals to relay information. We sought to investigate the use of tweets to…
    </p>
    </a>
</blockquote>

I saw a link to this in an obnoxious Twitter thread, but tl;dr it does match my memory that several scientists
on Twitter had concerns about mpox as it was initially spreading so quickly, and despite at least one daycare worker scare,
it didn't end up breaking out in schools. It's interesting to see a study of health professionals on calling this
wrong. <br/> At times I thought that the PR may have helped getting Mpox/smallpox vaccines available in clinics around the country?<br/>
This argument gets called out in the paper, too.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2409.14586">
    <h4>
Backtracking Improves Generation Safety</h4>
    <p>
Text generation has a fundamental limitation almost by definition: there is no taking back tokens that have been…
    </p>
    </a>
</blockquote>

An LLM from Meta is given a special token to erase unsafe answers. I've seen this behavior in Meta/Insta LLMs (asking about
nuclear material without telling it to use Spanish) and something similar on OpenAI (erasing an answer it was giving about
Bosnian genocide). I also was trying to remember an earlier backspace token paper and it comes from the same authors
(SequenceMatch in [ml-arxiv-26](/ml-arxiv-26)).

The team demonstrates how this can defeat attacks which "pre-fill" the LLM's response to a query with "sure..." and other
positive responses when a full answer breaks safety guidelines.
The authors like this approach for safety because it can clear the UI, but leave the initial answer in the LLM's context
window for it to tailor its response.<br/>The new method works well for SFT/DPO post-training techniques in a way which was
too nuanced for me to pick up.


<hr/>


<blockquote>
    <a href="https://arxiv.org/abs/2410.15263">
    <h4>Back to School: Translation Using Grammar Books</h4>
    <p>
Machine translation systems for high resource languages perform exceptionally well and produce high quality…
    </p>
    </a>
</blockquote>

Improving LLM performance on rare languages using grammar books. Of the 16 languages I only recognized Guarani, Kachin, and Wolof. They are still using Pan-Lex (from Long Now) and FLORES (I think from Meta?). The NLLB project from Meta maintains a lead in many of the languages, but they get interesting results.<br/>
Of the three languages that I knew, Guarani remains best in the baseline, and Kachin is statistically significantly the best with sentence training (not the grammar, actually).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2402.16192">
    <h4>Defending Large Language Models against Jailbreak Attacks via Semantic Smoothing</h4>
    <p>
Aligned large language models (LLMs) are vulnerable to jailbreaking attacks, which bypass the safeguards of targeted…
    </p>
    </a>
</blockquote>

I kept thinking that I had covered this, but maybe it's been this same paper languishing in a draft?<br/>
Having the LLM reword, rephrase, or summarize the previous prompt defends against attempts to break the model with unusual tokens and highly-tuned prompts.

Edit: I might have been thinking of "SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks"
https://arxiv.org/abs/2310.03684

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2410.16454">
    <h4>Does your LLM truly unlearn? An embarrassingly simple approach to recover unlearned knowledge</h4>
    <p>
Large language models (LLMs) have shown remarkable proficiency in generating text, benefiting from extensive training…
    </p>
    </a>
</blockquote>

There are a few different issues in the unlearning space and this focuses on what's a new / previously un-studied way to reverse it: quantizing the model. They show examples of a quantized model able to repeat Harry Potter passages which were supposed to be trained out of the original model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2402.04249">
    <h4>HarmBench: A Standardized Evaluation Framework for Automated Red Teaming and Robust Refusal</h4>
    <p>
Automated red teaming holds substantial promise for uncovering and mitigating the risks associated with the malicious…
    </p>
    </a>
</blockquote>

Saw this in the backtracking paper and wanted to check it out.
The examples cover a variety of malicious behaviors, with he examples in Figure 4 covering lockpicking and election manipulation.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2410.20771">
    <h4>MrT5: Dynamic Token Merging for Efficient Byte-level Language Models</h4>
    <p>
Models that rely on subword tokenization have significant drawbacks, such as sensitivity to character-level noise like…
    </p>
    </a>
</blockquote>

Revisiting the ByT5 models with a new approach. This is particularly useful for languages with unusual tokenization, such as Thai (though of those tested, Thai is the worst-performing).

tl;dr one of the issues of ByT5 was a lot of bytes going into a basic string, so this "merges" bytes as it reads them in and reduces the effective length of the input sequence.

<hr/>

<blockquote>
    <a href="https://seacrowd.github.io/seavl-launch/">
    <h4>SEA-VL: Call for Contributors</h4>
    <p>
Following the success of our SEACrowd project, we're excited to announce SEA-VL, a new open-source initiative to create…
    </p>
    </a>
</blockquote>

Southeast Asian community group starting work on a multimodal, multilingual LLM.

<hr/>

<blockquote>
    <a href="https://developmentseed.org/blog/2024-11-01-geofm/">
    <h4>Using Foundation Models for Earth Observation</h4>
    <p>
Making sense of planetary data with next-generation AI.
    </p>
    </a>
</blockquote>

DevelopmentSeed has been working on two LLMs for satellite imagery data, and they're well-respected in the open source geospatial world (saw them at FOSS4G NA a couple of months ago) so it's cool to see them writing a primer on it.<br/>
They compare six models in the paper, but I don't know much about benchmarks for tasks and embeddings.

Some related papers from late 2023 onward:

- [Mission Critical -- Satellite Data is a Distinct Modality in Machine Learning](https://arxiv.org/abs/2402.01444)
- [A global land cover training dataset from 1984 to 2020](https://www.nature.com/articles/s41597-023-02798-5)
- [Major TOM: Expandable Datasets for Earth Observation](https://arxiv.org/abs/2402.12095)
- [DDPM-CD: Denoising Diffusion Probabilistic Models as Feature Extractors for Change Detection](https://arxiv.org/abs/2206.11892)
- [Fields of The World: A Machine Learning Benchmark Dataset For Global Agricultural Field Boundary Segmentation](https://arxiv.org/abs/2409.16252)

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2410.12705">
    <h4>WorldCuisines: A Massive-Scale Benchmark for Multilingual and Multicultural Visual Question Answering on Global Cuisines</h4>
    <p>
Vision Language Models (VLMs) often struggle with culture-specific knowledge, particularly in languages other than…
    </p>
    </a>
</blockquote>

A group of authors from all over the world combined images and multilingual Q&A to get a dataset with a million image-text pairs (counting training and test of https://huggingface.co/datasets/worldcuisines/vqa ).<br/>
GPT-4o does the best on almost all of the tasks. In open source models, Llama 3.2 has the highest average (above Llava).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2311.08614">
    <h4>XplainLLM: A Knowledge-Augmented Dataset for Reliable Grounded Explanations in LLMs</h4>
    <p>
Large Language Models (LLMs) have achieved remarkable success in natural language tasks, yet understanding their…
    </p>
    </a>
</blockquote>

OK this is about a year old, but I was interested in explainable AI again. This seems a bit odd. They give this example:

> John carred for Lucy but had trouble expressing it. Lucy was disturbed by John’s inability to express affection and felt that he was what?

They then have a multiple choice (answer: unfeeling) and provide tags which are close to the question and ansers in vector space. But these "reason-elements" were perplexing:

> Top-5 Reason-elements: "enraged", "delay", "abiogenesis", "sneerer", "helpable"

<br/>
<br/>
<br/>

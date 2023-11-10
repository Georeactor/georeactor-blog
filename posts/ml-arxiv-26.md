---
title: ML Arxiv Haul ~26
published_at: 2023-11-10T16:45:00.000Z
snippet: 17 new mostly-ML papers
tags: arxiv
---

## Comments / Criticism

After the last two-or-so of these were rushed, I dug a little deeper into each of these papers. Think it went well.

It's been a year since the dissolution of Meta's BeanMachine team (probabilistic ML declarative model on top of Python). I did some Googling and the manager completed a 9-part blog retrospective in March: https://ericlippert.com/2023/03/21/bean-machine-retrospective-part-9/ <br/>
The repo received only a few dependency / CI fixes this year. I did a little snooping in case there was a new project / shadow BeanMachine in the works, but dude is mostly offline or replying to Tweets about C#. Respect.

Longer-form article about U. Penn dismissing Dr. Kariko's mRNA research https://www.thedp.com/article/2023/10/penn-katalin-kariko-university-relationship-mistreatment

Lottery ticket hypothesis debunked? And papers not replicable https://thegradientpub.substack.com/p/jonathan-frankle-lottery-tickets-llms-policy#details

CodeFusion, a code-generation diffusion model, had its preprint withdrawn from Arxiv because they stated the number of parameters in an OpenAI model based on an uncited article in the popular press.

Didn't make the cut: [DeepMind](https://arxiv.org/abs/2310.11986) and [Anthropic](https://www.anthropic.com/index/evaluating-ai-systems) released longer-form papers on expanding evaluations and taxonomy to cover a wider range of model safety concerns

## Chat-O.M.G.

Telling ChatGPT to give an answer right away and not chain of thought: https://twitter.com/anh_ng8/status/1718062942921297965

Probabilities are back in the OpenAI API? I'm confused https://twitter.com/DavidRBellamy/status/1722634838379786450


## Papers

<blockquote>
    <a href="https://www.biorxiv.org/content/10.1101/2023.10.24.563624v1">
    <h4>A Foundational Large Language Model for Edible Plant Genomes</h4>
    <p>
In recent years, significant progress has been made in the field of plant genomics, demonstrated by the increased use…
    </p>
    </a>
</blockquote>

Yet again biologists are working with LLMs. In January, InstaDeep (which has offices in the UK and Tunisia) published their Nucleotide transformer models, a dataset of [850 species genomes](https://huggingface.co/datasets/InstaDeepAI/multi_species_genomes), and [18 tasks](https://huggingface.co/datasets/InstaDeepAI/nucleotide_transformer_downstream_tasks/blob/main/README.md) for those models.

None of those species were plants, so AgroNT model, dataset, and new benchmark appear to be brand new and pending public access. The team picked 48 crop species out of an estimated 200 plants which have historically been sequenced.

The model tokenizes every 6 base-pairs, and is MLM / BERT-type architecture. Tasks include classifying mRNA and longer non-coding RNA, and "APA sites" (which affect RNA processing?). The big brag here is that the model predicts results of 10 million possible mutations in the cassava genome. This is more of a search operation where they find 136 mutations which affect promoters and would have the biggest impact on gene expression.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.12962">
    <h4>An Emulator for Fine-Tuning Large Language Models using Small Language Models</h4>
    <p>
Widely used language models (LMs) are typically built by scaling up a two-stage training pipeline: a pre-training stage…
    </p>
    </a>
</blockquote>

Stanford team claims that they can fine-tune a smaller language model and transfer its helpfulness/alignment behavior to a larger, more factual model. This "emulated fine-tuning" remains a little mysterious, requiring some reinforcement learning and comparison between inference on both models; it wasn't clear to me if this is a work-in-progress, or takes similar resources compared to just fine-tuning or LoRA-ing of the larger model.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.13132">
    <h4>Better to Ask in English: Cross-Lingual Evaluation of Large Language Models for Healthcare Queries</h4>
    <p>
Large language models (LLMs) are transforming the ways the general public accesses and consumes information. Their…
    </p>
    </a>
</blockquote>

Unsurprisingly, leading LLMs provide the best answers to health questions if they're written in English. A good output of the research is [XLingHealth](https://github.com/claws-lab/XLingEval/tree/main/XLingHealth_Dataset), a dataset of health questions in multiple languages. They appear to be released in Excel format instead of a HF dataset or something.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2311.00176">
    <h4>ChipNeMo: Domain-Adapted LLMs for Chip Design</h4>
    <p>
ChipNeMo aims to explore the applications of large language models (LLMs) for industrial chip design. Instead of…
    </p>
    </a>
</blockquote>

A large NVIDIA team creates LLMs useful for chip design. A bit confusingly this paper is not limited to EDA (hardware design scripting) but includes sections on a chat assistant and bug summarization task.

The EDA model benefit from including GitHub's Verilog code in training. They found some quirks fine-tuning CodeLLaMa and kept to regular LLaMa. NVIDIA uses an internal Python library and a Tcl language library, which were  difficult for the model to pick up. This is blamed for why the model could not solve some real-world problems which their engineers picked.

Back in June, [Arxiv Haul 20](/ml-arxiv-20) included a link to *The False Dawn*, one Meta engineer's side project alleging that Google's 2021 chip-design work in *Nature* was misleading and underperforming. ChipNeMo does not cite *Nature*, *False Dawn*, or mention graphs at all, so this is on its own space and not part of that drama board.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.15113">
    <h4>Counting the Bugs in ChatGPT's Wugs: A Multilingual Investigation into the Morphological Capabilities of a Large Language Model</h4>
    <p>
Large language models (LLMs) have recently reached an impressive level of linguistic capability, prompting comparisons…
    </p>
    </a>
</blockquote>

Linguists love to talk about morphemes, like how we intuit that the plural of the nonsense word "wug" would be "wugs". ChatGPT / GPT-3.5 Turbo would naturally already know about "wug" so the researchers have come up with a fresh new nonsense dataset, here in four languages.<br/>
GPT particularly failed on the Tamil examples, but there was also difficulty with human annotators agreeing?

<hr/>

<blockquote>
    <a href="https://www.researchgate.net/publication/326547153_Evaluations_of_Urban_Sovereign_Citizens'_Competency_to_Stand_Trial">
    <h4>Evaluations of Urban Sovereign Citizens' Competency to Stand Trial</h4>
    </a>
</blockquote>

Sorry got one not-related-to-ML one.

Once or twice a year, YouTube remembers that I will click on sovereign citizen snark/fail videos. This 2018 paper describes ongoing debate around whether someone who takes up sovereign citizen arguments, refusing to recognize the court, should be considered competent to stand trial. In the internet sphere it isn't clear if the defendants have a genuine belief or are engaging in protest, if someone won't agree that they're in criminal court should be forced to accept a public defender, etc.

The study was in Brooklyn courts, so the paper does have a section about Moorish sovereign citizens.

Sovereign citizen defendants might be referred to competency hearings, but they were more likely to pass their hearings than the average referred defendant. Those who were found incompetent often had an established medical history. Sometimes the court used family interviews and jail phone calls to establish competency (calls were frequently mentioned, outside hearing of the jury, in the Waukesha parade case last year).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.06213">
    <h4>GeoLLM: Extracting Geospatial Knowledge from Large Language Models</h4>
    <p>
The application of machine learning (ML) in a range of geospatial tasks is increasingly common but often relies on…
    </p>
    </a>
</blockquote>

Researchers were curious what base language models would know from just some coordinates, or coordinates plus an address. They ask about statistics such as population density, income, and education. They did some fine-tuning so it's not simply extracting knowledge and estimates from the model.<br/>
Would be interesting to see coordinates input with the xVal paper later in this post.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2309.10661">
    <h4>NusaWrites: Constructing High-Quality Corpora for Underrepresented and Extremely Low-Resource Languages</h4>
    <p>
Democratizing access to natural language processing (NLP) technology is crucial, especially for underrepresented and…
    </p>
    </a>
</blockquote>

Latest in crowdsourced Indonesian papers, this time focusing on longer-form writing in minority languages. Eleven languages have any Wiki presence, but the quality of these as a corpora is very low. They've come up with measures of text diversity and overlap with Bahasa Indonesia and English sources. During recruitment and preparation they reduced nearly 900 applicants to 83 "annotators", who generated 56,000 paragraphs for the dataset.

Out of the minority languages which fit their criteria, they did not find enough annotators for Ambonese (250k-1.4mm speakers on Ambon Island, Maluku); or Bima (500k speakers in Komodo and eastern Sumbawa, West Nusa Tenggara).<br/>
Though Buginese reportedly has 3.5mm-4mm speakers in southwest Sulawesi, the content here was somewhat limited, only 1/5th as many paragraphs as its physical and linguistic neighbor Makassarese (2.1mm speakers). For some reason Buginese does not get a feature with the other languages in Appendix J (languages under study) and Makassarese is not shown in Figure 8 (taxonomy tree of languages). My **uninformed guess** is that the line between these languages is fuzzy, and the project is either recruiting more residents of Makassar city in their online study, or otherwise annotators named that as their language over Buginese for some reason.

The team is expanding their work to anywhere in Southeast Asia with https://github.com/SEACrowd - The resources here include a list of country-language pairs which equals about 1,300 unique languages (including two Malaccan Creoles and over a dozen sign languages).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2311.04205">
    <h4>Rephrase and Respond: Let Large Language Models Ask Better Questions for Themselves</h4>
    <p>
Misunderstandings arise not only in interpersonal communication but also between humans and Large Language Models…
    </p>
    </a>
</blockquote>

New chain-of-thought type prompt method from UCLA, where the language model is asked to first restate the user's question.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2305.11307">
    <h4>Semantic Anomaly Detection with Large Language Models</h4>
    <p>
As robots acquire increasingly sophisticated skills and see increasingly complex and varied environments, the threat of…
    </p>
    </a>
</blockquote>

This Stanford + JPL paper is heavily inspired by that video of a Tesla perplexed by a truck carrying stoplights. Here they use real-life and simulated street scenes to test following stoplights, cones, signs, etc. without being distracted by trucks, billboards, etc.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2306.05426">
    <h4>SequenceMatch: Imitation Learning for Autoregressive Sequence Modelling with Backtracking</h4>
    <p>
In many domains, autoregressive models can attain high likelihood on the task of predicting the next observation…
    </p>
    </a>
</blockquote>

This model is double-checking its output and is able to "backspace" its last token. Unfortunately I'm not sure if there's a reason to expect that training backspacing is better than training generating correctly? Though you could point to non-intuitive benefits of pause tokens - [Arxiv Haul 24](/ml-arxiv-24) - and maybe this is benefiting from a similar mechanism?

The paper works with GPT-2 (old) and does not mention beam decoding (which I understand to look ahead at probability of longer sequences).

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.15040">
    <h4>SLOG: A Structural Generalization Benchmark for Semantic Parsing</h4>
    <p>
The goal of compositional generalization benchmarks is to evaluate how well models generalize to new complex linguistic…
    </p>
    </a>
</blockquote>

Fine-tuning LLaMa and T5 to parse sentences grammatically (essentially diagramming the sentences). No mention of spaCy, which I previously used for this type of work. The researchers give several academic reasons why they created a new dataset over their next-favorite from 2020.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2309.09558">
    <h4>Summarization is (Almost) Dead</h4>
    <p>
How well can large language models (LLMs) generate summaries? We develop new datasets and conduct human evaluation…
    </p>
    </a>
</blockquote>

Evaluators prefer GPT summaries to human summaries. The paper suggests no longer using conventional metrics of summarization (ROUGE). They also count hallucinations from humans' carelessness in summarizing, and consider them to hallucinate more than LLMs during this task.

The team does not use LLaMa models because they want a documented date cutoff before selecting articles for the evaluation. Not a huge deal, just thought it was interesting criteria.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.18233">
    <h4>Will releasing the weights of future large language models grant widespread access to pandemic agents?</h4>
    <p>
Large language models can benefit research and human understanding by providing tutorials that draw on expertise from…
    </p>
    </a>
</blockquote>

A small group of students tested whether an uncensored LLaMa model would give them key steps to reproducing the 1918 influenza. This was sort of a capture-the-flag project, like, can you coax these pieces of information out of the model in an hour. The paper ends with policy recommendations around inevitable capabilities and de-censoring of models, and possibility of liability/insurance.

Much excitement around this paper in Existential Risk world. My position since *Superintelligence* has been that AI apocalypse people love DNA fabrication apocalypses because their audience doesn't work in biology and didn't know that DNA can be ordered online. Then this year I read *Barriers to Bioweapons* which is skeptical that well-trained researchers can reliably transfer methods between labs? So reading instructions from an LLM is unlikely to bring about and enable new labs.<br/>
The argument on Twitter is that this Capture-the-Flag info is obvious to someone with access to a biology course? The barrier to developing these weapons is not access to spores or virology basics.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2308.01263">
    <h4>XSTest: A Test Suite for Identifying Exaggerated Safety Behaviours in Large Language Models</h4>
    <p>
Without proper safeguards, large language models will readily follow malicious instructions and generate toxic content…
    </p>
    </a>
</blockquote>

Researchers produce a benchmark of a few hundred requests with potentially confused words/tokens. For example they include prompts asking for "coke" the soda, and unsafe prompts talking about the drug, and a well-aligned LLM should be able to answer the safe prompts.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.02989">
    <h4>xVal: A Continuous Number Encoding for Large Language Models</h4>
    <p>
Large Language Models have not yet been broadly adapted for the analysis of scientific datasets due in part to the…
    </p>
    </a>
</blockquote>

There's been some niche scholarship about including all 2-digit (and 3-digit?) numbers as tokens, how to incorporate them into the language model without biasing toward specific numbers, how to avoid memorizing numbers (see: https://twitter.com/BlancheMinerva/status/1721382070251839993 , https://bair.berkeley.edu/blog/2020/12/20/lmmem/ ).

The xVal paper suggests that numbers should be input to the model in a separate embedding system. My first take was that this was a 'raw number' input, but they explain the embedding architecture with more detail in the paper - numbers get parsed and processed separately from other tokens, and includes encodings for days of the year, etc.

<hr/>

<blockquote>
    <a href="https://arxiv.org/abs/2310.16944">
    <h4>Zephyr: Direct Distillation of LM Alignment</h4>
    <p>
We aim to produce a smaller language model that is aligned to user intent. Previous research has shown that applying…
    </p>
    </a>
</blockquote>

HuggingFace's new H4 team ("helpful, honest, harmless, and huggy") releases their first model. They start with the new Mistral 7B model (I believe  because is the top chat model for its size, and open sourced by French AI group Mistral). Then they are using TRLX library for reinforcement learning, but instead of RLHF they are now doing Direct Preference Optimization (DPO) based on a paper. The difference in methods is not intuitive for me, but essentially the DPO authors view the language model itself as a RL reward model.

<br/>
<br/>
<br/>
